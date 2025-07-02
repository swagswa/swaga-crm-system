# Swaga CRM System

AI-Powered CRM System built with Next.js 15, React 19, and TypeScript.

## Features

- 📊 **Dashboard** - Overview of key metrics and activities
- 👥 **Contacts Management** - Manage customer contacts and relationships
- 📞 **Call Management** - Track and manage customer calls
- ✅ **Task Management** - Organize tasks with Kanban board
- 📅 **Calendar** - Schedule and manage appointments
- 🤖 **AI Receptionist** - Automated customer service
- ⚙️ **Settings** - Customize system preferences

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **State Management**: React Context API
- **Development**: ESLint, Turbopack

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
swaga/
├── app/                    # Next.js App Router pages
│   ├── ai-receptionist/   # AI Receptionist page
│   ├── calendar/          # Calendar page
│   ├── calls/             # Calls management page
│   ├── contacts/          # Contacts management page
│   ├── settings/          # Settings page
│   ├── tasks/             # Task management page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard page
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── contexts/              # React contexts
├── lib/                   # Utility functions
└── public/                # Static assets
```

## License

MIT License