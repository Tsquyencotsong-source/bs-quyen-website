@echo off
cd /d "%~dp0"
del /f /q ".git\HEAD.lock" ".git\index.lock" 2>nul
git add -A
git commit -m "test: chu vang FFD700 de xac nhan deploy"
git push origin main
echo.
echo Done! Cho Vercel build ~2 phut, sau do Ctrl+Shift+R de xoa cache trinh duyet.
pause
