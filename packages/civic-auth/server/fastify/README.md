# Civic Auth Fastify Example

This is an example implementation of Civic Auth with a Fastify backend.

## Prerequisites

- Bun 1.0 or higher
- A Civic client ID from auth.civic.com

## Setup

1. Install dependencies:
```bash
bun install
```

2. Create a `.env` file in the root directory with:
```env
CLIENT_ID=your_client_id_here
NODE_ENV=development
COOKIE_SECRET=your-secret-here
```

3. Start the development server:
```bash
bun run dev
```

4. For production:
```bash
bun run build
bun start
```

## Project Structure

- `src/app.ts` - Main application file with Fastify setup and routes
- `dist/` - Compiled JavaScript output (after build)

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun start` - Start production server

## Environment Variables

- `CLIENT_ID` - Your Civic client ID (required)
- `NODE_ENV` - 'development' or 'production'
- `COOKIE_SECRET` - Secret for cookie encryption (required in production)
- `PORT` - Server port (defaults to 3000)

## Development Notes

This example uses Bun's built-in TypeScript support and hot reloading capabilities. The development server will automatically restart when you make changes to your source files.

## Security Notes

- In production, ensure you set a strong `COOKIE_SECRET`
- Set `NODE_ENV=production` in production environments
- Configure a proper hostname/domain in the redirectUrl when deploying