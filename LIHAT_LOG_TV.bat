@echo off
title LIVE MONITOR LOG HOTEL TV (SAMSUNG TIZEN)
color 0B
echo ========================================================
echo       LIVE MONITOR LOG SAMSUNG SIGNAGE SMART TV
echo ========================================================
echo Menampilkan log real-time dari C:\bionic-hotel-tv\tv.log
echo Tekan Ctrl+C untuk keluar.
echo ========================================================
powershell -NoProfile -Command "if (-not (Test-Path 'C:\bionic-hotel-tv\tv.log')) { New-Item -ItemType File -Path 'C:\bionic-hotel-tv\tv.log' -Force | Out-Null }; Get-Content -Path 'C:\bionic-hotel-tv\tv.log' -Wait -Tail 25"
