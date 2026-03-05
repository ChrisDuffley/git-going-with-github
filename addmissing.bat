@echo off
REM Batch file to retry inviting rate-limited students as org members
REM Run this if any users still need invitations
REM Safe to run multiple times - script is idempotent

echo.
echo ============================================================
echo Retrying invitations for rate-limited students...
echo ============================================================
echo.

REM Change to script directory
cd /d "%~dp0"

REM Run the Python script
python scripts/invite_rate_limited_users.py

echo.
echo ============================================================
echo If you see "rate limit hit" errors, wait a few more minutes
echo and run this batch file again. It's safe to retry!
echo ============================================================
echo.

pause
