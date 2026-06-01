@echo off
cd /d "%~dp0"

echo === Xoa lock files ===
del /f /q ".git\HEAD.lock" ".git\index.lock" ".git\refs\heads\main.lock" 2>nul

echo === Stage TAT CA thay doi ===
git add -A

echo.
echo === Kiem tra truoc khi commit ===
git status
echo.

git commit -m "ui: progress box chu mau vang, cau truc education/tu-tap-luyen"
echo.

echo === Push len GitHub ===
git push origin main
echo.

echo =============================================
echo  DONE! Vercel dang build...
echo  Sau ~2 phut kiem tra tai:
echo  https://bs-quyen-website.vercel.app/education/tu-tap-luyen/sau-bom-xi-mang-dot-song
echo =============================================
pause
