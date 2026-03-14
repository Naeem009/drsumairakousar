@echo off
REM ============================================================
REM 1. Create a new repo on GitHub: https://github.com/new
REM    (e.g. name: dr-sumaira-edu)
REM 2. Edit the two lines below with YOUR GitHub username and repo name:
REM ============================================================
set GITHUB_USER=YOUR_GITHUB_USERNAME
set REPO_NAME=dr-sumaira-edu

set GIT="C:\Program Files\Git\bin\git.exe"
cd /d "%~dp0"

echo Adding remote origin...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo Pushing to GitHub...
%GIT% branch -M main
%GIT% push -u origin main

if %ERRORLEVEL% equ 0 (
  echo.
  echo Success! Your code is on GitHub.
  echo https://github.com/%GITHUB_USER%/%REPO_NAME%
) else (
  echo.
  echo Push failed. Common fixes:
  echo - Replace YOUR_GITHUB_USERNAME and repo name at the top of this file
  echo - If GitHub asks for password, use a Personal Access Token: https://github.com/settings/tokens
  echo - Or set your Git identity: git config --global user.email "you@example.com" and user.name "Your Name"
)
pause
