# StableFlow - Modern Next.js Starter Kit

A modern, feature-rich starter kit built with the latest web technologies.

## Features

- 🚀 **Next.js 14** - The latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe code
- 🔒 **Authentication** - Clerk integration with persistent authorization
- 🎭 **Shadcn/ui** - Beautiful and accessible components
- 💾 **Convex DB** - Real-time database with built-in file storage
- 🎯 **Vuesax Icons** - Beautiful icon set
- 🌓 **Dark Mode** - Built-in dark mode support
- 🔔 **Toast Notifications** - Beautiful toast notifications

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Clerk account for authentication
- Convex account for database

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stableflow.git
cd stableflow
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.template .env.local
```
Then fill in your environment variables in `.env.local`

4. Initialize Convex:
```bash
npx convex dev
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Project Structure

```
stableflow/
├── app/                    # Next.js app directory
├── components/            
│   ├── providers/         # Context providers
│   └── ui/               # UI components
├── convex/                # Convex schema and functions
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key
- `NEXT_PUBLIC_CONVEX_URL`: Convex deployment URL
- `CONVEX_DEPLOYMENT`: Convex deployment ID
- `CONVEX_ADMIN_KEY`: Convex admin key

## Features in Detail

### Authentication
- Clerk-based authentication
- Protected routes
- Persistent sessions
- Social login support

### Database
- Real-time data sync with Convex
- Built-in file storage
- Type-safe database queries
- Automatic cache management

### UI Components
- Shadcn/ui components
- Dark mode support
- Responsive design
- Toast notifications
- Loading states

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this starter kit for any project.