# Crafters

A mobile-first community and discovery app for exploring interest-based circles, browsing community posts, and creating new groups. The project is structured as a React + TypeScript front-end prototype with a social-media-inspired layout, route-based navigation, and reusable UI components.

## Overview

Crafters is designed around the idea of communities (“circles”) where users can:

- browse a home feed of community posts
- explore available circles and search by name
- view profile information
- create a new circle from a dedicated screen
- navigate on mobile using a bottom nav bar

The current codebase uses static/mock data rather than a backend service, so it behaves as a polished frontend prototype and UI concept.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Radix UI primitives
- Lucide React icons
- ESLint + TypeScript ESLint

## Project Structure

```text
Crafters/
├── public/                 Static assets
├── src/
│   ├── components/
│   │   ├── create/         Create-circle UI
│   │   ├── explore/        Search, helper controls, circle cards
│   │   ├── icons/          Reusable SVG/icon definitions
│   │   ├── menubars/       Nav and circles strip
│   │   ├── posts/          Feed post cards
│   │   └── ui/             Shared UI primitives
│   ├── layouts/            Route layout wrappers
│   ├── lib/                Utility helpers
│   ├── pages/              Home, Search, Profile, CreateCircle
│   ├── App.tsx             Route configuration
│   ├── main.tsx            App bootstrap and router setup
│   ├── index.css           Global styles and theme
│   └── App.css             Legacy app styling
├── components.json         shadcn/ui configuration
├── eslint.config.js       ESLint setup
├── index.html             App entry HTML
├── package.json           Scripts and dependencies
├── tsconfig*.json         TypeScript configuration
├── vite.config.ts         Vite config with aliases and Tailwind
├── .gitignore
├── README.md
├── package-lock.json
└── public/vite.svg
```

## App Flow

The app uses `BrowserRouter` in `src/main.tsx` and defines routes in `src/App.tsx`:

- `/` → Home feed
- `/search` → searchable community directory
- `/profile` → profile view
- `/circle/create` → create-circle flow

A shared `NavbarLayout` wraps all routes and renders a bottom navigation menu for mobile browsing.

## Features

### Home feed
The `HomePage` renders a horizontally scrollable circle bar and a vertical list of post cards using the `CirclePost` component.

### Search experience
The `SearchPage` uses a local search term to filter static circle data and presents results in a responsive grid.

### Circle creation UI
The `CreateCircle` route shows a hero/create screen with a settings panel, checkbox controls, and invited member cards.

### Shared design system
The app includes reusable UI primitives and styling utilities via Tailwind and `@radix-ui` components, with path alias support via `@` pointing to `src`.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts the Vite development server, typically at:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Scripts

From `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Notes

This repository is currently a frontend prototype rather than a full production application. It includes a visually complete social/community interface, but it does not yet connect to a backend API, database, authentication layer, or persistent data store.

## License

No license has been declared for this repository.
