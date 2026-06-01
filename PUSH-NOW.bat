@echo off
echo ============================================
echo  PUSH LEN GITHUB - VERCEL TU DONG BUILD
echo ============================================
cd /d "%~dp0"
git push origin main
echo.
echo XONG! Vercel build trong 2-3 phut.
echo Kiem tra tai:
echo   https://bs-quyen-website.vercel.app/blog/tu-tap-luyen-xep-dot-song-loang-xuong
echo   https://bs-quyen-website.vercel.app/blog/phuc-hoi-sau-kyphoplasty-tap-luyen
echo.
pause
