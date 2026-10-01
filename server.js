const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 80;
const ROOT_DIR = path.resolve('C:/bionic-hotel-tv');
const LOG_FILE = path.join(ROOT_DIR, 'tv.log');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm',
  '.xml': 'application/xml; charset=utf-8',
  '.wgt': 'application/widget',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const clientIp = req.socket.remoteAddress.replace(/^.*:/, '');
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // TV Log endpoint
  if (pathname === '/tv_log') {
    const msg = parsedUrl.searchParams.get('msg') || '';
    const now = new Date().toLocaleTimeString();
    const formatted = `[${now}] [TV LOG from ${clientIp}] ${msg}`;
    console.log(`\x1b[36m${formatted}\x1b[0m`);
    try {
      fs.appendFileSync(LOG_FILE, formatted + '\n', 'utf8');
    } catch (e) {}
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle directory default to index.html or sssp_config.xml
  let filePath = path.join(ROOT_DIR, pathname);
  
  if (pathname === '/sssp' || pathname === '/sssp/') {
    filePath = path.join(ROOT_DIR, 'sssp', 'sssp_config.xml');
  } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const tryIndex = path.join(filePath, 'index.html');
    const trySssp = path.join(filePath, 'sssp_config.xml');
    if (fs.existsSync(tryIndex)) {
      filePath = tryIndex;
    } else if (fs.existsSync(trySssp)) {
      filePath = trySssp;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.log(`\x1b[31m[404]\x1b[0m ${clientIp} -> ${req.method} ${pathname}`);
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    };

    if (req.method === 'HEAD') {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    res.writeHead(200, headers);
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);

    console.log(`\x1b[32m[200 OK]\x1b[0m ${clientIp} -> ${req.method} ${pathname} (${(stats.size / 1024).toFixed(1)} KB)`);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('========================================================');
  console.log('   HOTEL TV LOCAL WEB SERVER FOR SAMSUNG TIZEN TV       ');
  console.log('========================================================');
  console.log('Web Content  : http://192.168.1.106/');
  console.log('SSSP Launcher: http://192.168.1.106/sssp/');
  console.log('Log File     : ' + LOG_FILE);
  console.log('Server Root  : ' + ROOT_DIR);
  console.log('Siap menerima koneksi dari Samsung TV! Tekan Ctrl+C untuk stop.');
  console.log('========================================================\n');
}).on('error', (err) => {
  console.error('Gagal menjalankan server di port 80:', err.message);
});
