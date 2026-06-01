@echo off
cd /d "%~dp0"
del /f /q ".git\HEAD.lock" ".git\index.lock" 2>nul
git add -A
git commit -m "ui: redesign KyphoRehabApp - contrast cao, chu ro hon"
git push origin main
echo.
echo Done! Vercel build ~2 phut.
echo URL: https://bs-quyen-website.vercel.app/education/tu-tap-luyen/sau-bom-xi-mang-dot-song
pause
