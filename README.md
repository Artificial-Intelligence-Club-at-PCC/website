# PCC AI Club Website

A Next.js website for the Pasadena City College AI Club.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Export static files
pnpm run export
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Repository Settings**:
   - Make sure your repository is public (or you have GitHub Pro for private repos)
   - The main branch should be named `main`

3. **Automatic Deployment**:
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://[username].github.io/[repository-name]`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build and export the site
pnpm run export

# The static files will be in the `out` directory
# You can then upload these files to GitHub Pages manually
```

### Configuration

The project is configured with:
- Static export (`output: 'export'`)
- Base path for GitHub Pages (`/website`)
- Trailing slashes for better compatibility
- Unoptimized images for static hosting

### Notes

- This is a static export, so server-side features are not available
- All routes are pre-rendered at build time
- Images are served unoptimized for compatibility with static hosting 