@echo off
cd /d "%~dp0"
del /f /q ".git\HEAD.lock" ".git\index.lock" 2>nul
git add -A
git commit -m "ui: progress box chu trang, so % vang"
git push origin main
echo Done!
pause
