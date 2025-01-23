
# CodeSphere - Online Code Editor

CodeSphere is a modern, intuitive online code editor designed for seamless collaboration and efficient coding. It provides a distraction-free environment with real-time compilation and preview capabilities.

## 🚀 Features

- **Multi-language Support**: Write and edit HTML, CSS, and JavaScript in separate tabs
- **Real-time Preview**: See your code changes instantly in the preview window
- **Dark/Light Theme**: Toggle between dark and light themes for comfortable coding
- **Code Persistence**: Save your code snippets with unique IDs for later access
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Built with shadcn/ui components for a clean, modern interface

## 🛠️ Tech Stack

- **Frontend**: 
  - Next.js 
  - React
  - TypeScript
  - Redux Toolkit (state management)
  - TailwindCSS (styling)
  - CodeMirror (code editor)

- **Backend**:
  - MongoDB (data storage)
  - Mongoose (ODM)

- **UI Components**:
  - Radix UI (accessible components)
  - shadcn/ui (component library)
  - Lucide Icons

## 🏗️ Architecture

The application follows a clean architecture pattern with:

- `/actions` - Server actions for CRUD operations
- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/lib` - Core utilities, database connection, and Redux store
- `/providers` - Theme and Store providers

## 💡 Key Components

- **Code Editor**: Built with CodeMirror, supporting syntax highlighting
- **Preview Panel**: Real-time rendering of HTML, CSS, and JavaScript
- **Header**: Navigation and theme toggle
- **Redux Store**: Manages code state across components

## 🔄 Data Flow

1. Code changes are captured in the CodeMirror editor
2. Redux manages the state of code across different language tabs
3. Changes are reflected instantly in the preview panel
4. Code can be saved to MongoDB for persistence
5. Unique compiler IDs enable sharing and retrieval of code snippets

## 🚀 Getting Started

[Add installation and setup instructions here]

## 📝 License

[Add license information here]

![online editor home](https://github.com/user-attachments/assets/ad6b5c65-3cb6-4a3f-8631-4ac8763fa01b)
![online editor html](https://github.com/user-attachments/assets/64af2d2b-c0b0-4f08-b1da-c8ab68454231)
![online editor css](https://github.com/user-attachments/assets/970e5b24-955a-403b-bf94-534238b226b0)
![online editor js](https://github.com/user-attachments/assets/2ae50155-4a71-46d3-8664-8594c88379b4)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
