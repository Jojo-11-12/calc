# Modern Calculator Application

A sleek, fully-functional calculator web application built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

✨ **Modern UI**
- Dark gradient theme with smooth animations
- Responsive design that works on all screen sizes
- Polished buttons with hover and active states
- Clean, intuitive layout

🧮 **Full Calculator Functionality**
- Basic operations: addition, subtraction, multiplication, division
- Decimal number support
- Percentage calculations
- Sign toggle (+/-)
- Backspace function
- Clear button
- Real-time display updates

⌨️ **Keyboard Support**
- Number keys: 0-9
- Operations: `+`, `-`, `*` (×), `/` (÷)
- Decimal: `.`
- Equals: `Enter` or `=`
- Clear: `Esc`
- Backspace: `Backspace`

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React Client Component
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the calculator.

### Build

Create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── Calculator.tsx    # Main calculator component
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── ...
│   └── ...
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── package.json
└── README.md
```

## How to Use

1. **Number Input**: Click numbers or use keyboard
2. **Operations**: Click operation buttons or use keyboard shortcut
3. **Equals**: Click `=` button or press `Enter`
4. **Clear**: Click `C` button or press `Esc`
5. **Backspace**: Click `← Backspace` button or press `Backspace` key

## Features Explained

### Display
- Shows the current number being entered
- Displays the operation and previous value when calculating
- Handles long numbers with text wrapping

### Button Types
- **Number Buttons** (0-9): Gray background
- **Operations** (+, -, ×, ÷): Orange background
- **Function Buttons** (C, +/-, %): Dark gray background
- **Equals** (=): Green background

### Calculator Logic
- Supports chained operations
- Prevents division by zero
- Maintains calculation history in display
- Handles decimal precision appropriately

## Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Browser Support

Works on all modern browsers that support ES6 and CSS Grid:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- Optimized with Next.js App Router
- Client-side rendering for instant UI feedback
- Minimal JavaScript bundle size
- Tailwind CSS purges unused styles

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Enjoy calculating!** 🎉
