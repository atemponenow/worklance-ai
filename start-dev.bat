@echo off
echo Starting Worklance.AI development server...
start "Worklance.AI Dev Server" npm run dev
timeout /t 5 /nobreak
start http://localhost:3000
echo.
echo Website is starting at: http://localhost:3000
echo Press Ctrl+C in the server window to stop the development server
pause
