# Minesweeper Mini App for Farcaster

A production-ready Minesweeper game built as a Farcaster Mini App using Next.js, TypeScript, and the official Farcaster Mini App SDK.

## Features

- **Three difficulty modes**: Easy (9×9, 10 mines), Medium (16×16, 40 mines), Hard (30×16, 99 mines)
- **Smart first-click protection**: First click never hits a mine
- **Flood fill auto-reveal**: Automatically reveals adjacent empty cells
- **Flag system**: Long-press or toggle mode to flag suspected mines
- **Timer & counters**: Track your time and remaining mines
- **Local leaderboard**: Best times saved per mode
- **Mobile-optimized**: Responsive design with touch controls
- **Accessibility**: ARIA labels and keyboard support

## Prerequisites

- Node.js 22.11.0 or higher
- npm, yarn, or pnpm package manager

## Quick Start

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to test locally.

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default Next.js settings
4. Your app will be available at `https://your-app.vercel.app`

### Publishing as a Farcaster Mini App

1. **Deploy your app** to a stable domain (e.g., `minesweeper.yourdomain.com`)

2. **Generate account association** (for ownership verification):
   - Go to [Farcaster Mini App Manifest Tool](https://farcaster.xyz/~/developers/new)
   - Enter your domain
   - Copy the generated `accountAssociation` object

3. **Update manifest** at `/.well-known/farcaster.json`:
   - Add the `accountAssociation` from step 2
   - Ensure `homeUrl` matches your deployment URL
   - Update icon URLs to point to your domain

4. **Verify manifest**:
   - Visit `https://yourdomain.com/.well-known/farcaster.json`
   - Ensure it returns valid JSON with all required fields

5. **Test in Farcaster**:
   - Enable Developer Mode in Farcaster settings
   - Use the Mini App preview tool to test your app
   - Check that `sdk.actions.ready()` properly hides the splash screen

## Architecture

### Project Structure
```
/app                  # Next.js app directory
  /page.tsx          # Main game page
  /layout.tsx        # Root layout with SDK init
  /globals.css       # Global styles and Tailwind
/components          # React components
  /Board.tsx         # Game board component
  /Cell.tsx          # Individual cell component
  /HUD.tsx           # Game controls and info display
/lib                 # Core game logic
  /gameTypes.ts      # TypeScript type definitions
  /rng.ts            # Seedable random number generator
  /generateBoard.ts  # Board generation logic
  /floodFill.ts      # Auto-reveal algorithm
  /storage.ts        # Local storage for best times
/public              # Static assets
  /icon.png          # App icon (1024x1024)
  /splash.png        # Splash screen (200x200)
/.well-known         # Farcaster manifest
  /farcaster.json    # Mini App metadata
```

### SDK Integration

The app uses `@farcaster/miniapp-sdk` for:
- **Lifecycle management**: Calls `sdk.actions.ready()` after initial render to hide splash screen
- **Context access**: Retrieves user FID if available for personalized features
- **Capability detection**: Checks for available features like haptics

### Key Implementation Details

1. **First-click safety**: Board generation happens after first click, ensuring no mine at clicked position
2. **Flood fill**: Uses BFS queue approach to avoid stack overflow on large boards
3. **Touch controls**: 
   - Tap to reveal
   - Long-press (400ms) to flag
   - Flag mode toggle for accessibility
4. **State management**: React state with useReducer for game logic
5. **Performance**: RequestAnimationFrame for smooth timer updates
6. **Persistence**: LocalStorage with FID-keyed best times

## Testing Checklist

- [ ] App loads and calls `sdk.actions.ready()` to hide splash
- [ ] Mode selector switches between Easy/Medium/Hard
- [ ] First click never hits a mine
- [ ] Flood fill reveals empty areas correctly
- [ ] Flags increment/decrement mine counter
- [ ] Timer starts on first click, stops on win/lose
- [ ] Win condition: all non-mine cells revealed
- [ ] Lose condition: mine revealed with shake animation
- [ ] Best times persist across sessions
- [ ] Responsive on mobile devices
- [ ] Manifest accessible at `/.well-known/farcaster.json`

## Known Limitations

- Best times are stored locally (not synced across devices)
- No multiplayer or global leaderboard
- Haptics support depends on client capabilities
- Flag mode toggle required for devices without long-press

## Environment Variables

No environment variables required for basic functionality. For production:
- Ensure `NODE_ENV=production` for optimized builds
- Set appropriate domain in manifest URLs

## Scripts

```json
{
  "dev": "next dev",           // Development server
  "build": "next build",        // Production build
  "start": "next start",        // Production server
  "lint": "next lint",          // Linting
  "type-check": "tsc --noEmit" // TypeScript validation
}
```

## Support

For issues specific to Farcaster Mini Apps:
- [Mini Apps Documentation](https://miniapps.farcaster.xyz/docs)
- [Farcaster Developer Tools](https://farcaster.xyz/~/developers)

## License

MIT
