@echo off
cd /d "%~dp0"
del /f /q ".git\HEAD.lock" ".git\index.lock" 2>nul

echo Xoa files...
git rm -f "src/components/KyphoRehabApp.tsx" 2>nul
git rm -f "src/app/kypho-rehab/page.tsx" 2>nul
git rm -rf "src/app/education/tu-tap-luyen/" 2>nul

git add -A
git commit -m "revert: xoa kypho-rehab app"
git push origin main
echo.
echo Done! Website da duoc khoi phuc.
pause
