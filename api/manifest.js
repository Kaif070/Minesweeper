export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    "accountAssociation": {
      "header": "eyJmaWQiOjIzNDU2MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDRENzdBQTQxOUMwNTNkODI0ODBFM0MwM0M4ODI2QUI0ODA4NkY1YzYifQ",
      "payload": "eyJkb21haW4iOiJtaW5lc3dlZXBlci10d28tdGFuLnZlcmNlbC5hcHAifQ",
      "signature": "MHgwNzg4M2JkMzQ2YzA2YjUwZjBmODkwY2Y4OWQwNTdhZDc0NjRlMDU4NTU4YTgxNDkwNjA3NDkzNzA5NTQxYmY3N2IwOTY0ZjVmYTI0NGI0N2QzNjdlMjBhOWJlZWUxNTlmY2JkOTYzOWMxOWY3ODEyOWRjOWMzY2Q2N2QyYzFkYTFi"
    },
    "miniapp": {
      "version": "1",
      "name": "Minesweeper",
      "iconUrl": "https://minesweeper-two-tan.vercel.app/icon.png",
      "homeUrl": "https://minesweeper-two-tan.vercel.app/",
      "splashImageUrl": "https://minesweeper-two-tan.vercel.app/splash.png",
      "splashBackgroundColor": "#1a1a1a",
      "subtitle": "Classic puzzle game",
      "description": "Play Minesweeper. Choose a difficulty, flag mines, and race the timer with a clean mobile UI.",
      "primaryCategory": "games"
    }
  });
}
