# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Phone Directory

A beginner-friendly full-stack app for creating, viewing, editing, and deleting contacts. The frontend is built with React and Vite, the backend uses Node.js and Express, and MongoDB stores the contacts.

## Features

- Add a contact with a name, phone number, and email address.
- View saved contacts.
- Edit an existing contact.
- Delete a contact.
- Use the responsive interface styled with Tailwind CSS.

## Technologies

- **React** builds the user interface from reusable components.
- **Vite** runs the frontend development server and builds the app.
- **Tailwind CSS** styles the interface with utility classes.
- **Node.js and Express** provide the backend and HTTP API.
- **MongoDB and Mongoose** store and work with contact documents.
- **Axios** sends requests from the frontend to the backend.

## Project structure

```text
Phone-Directory-FullStack/
├── Backend/
│   ├── config/
│   │   └── db                 # MongoDB connection
│   ├── contact.js             # Contact model
│   ├── package.json           # Backend dependencies
│   └── server.js              # Express server and API routes
├── Client/
│   └── Phone-directory/
│       ├── src/
│       │   ├── App.jsx        # App state and API calls
│       │   ├── Contactform.jsx
│       │   ├── ContactList.jsx
│       │   └── api.js         # Axios API configuration
│       └── package.json       # Frontend dependencies and scripts
└── README.md
```

The tree shows the files that are most useful when learning how the app works. The backend and frontend have separate `package.json` files, so install dependencies in each project folder.

## Prerequisites

Install:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community), running locally with its default port

The backend connects to `mongodb://127.0.0.1:27017/contact-manager`. Start MongoDB before starting the backend.

## Run the project locally

Open two terminals from the repository root.

### 1. Start the backend

```powershell
cd Backend
npm install
node server.js
```

The API listens on `http://localhost:7000`.

### 2. Start the frontend

In the second terminal:

```powershell
cd Client/Phone-directory
npm install
npm run dev
```

Open the local address printed by Vite in your browser.

## API overview

The API base URL is `http://localhost:7000/api/contacts`.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/contacts` | Get all contacts |
| `POST` | `/api/contacts` | Create a contact |
| `PUT` | `/api/contacts/:id` | Update a contact by ID |
| `DELETE` | `/api/contacts/:id` | Delete a contact by ID |

Each contact has a `name`, `phone`, and `email`. MongoDB assigns each saved contact an `_id`.

## Frontend checks

Run these commands from `Client/Phone-directory`:

```powershell
npm run lint
npm run build
```

`lint` checks the frontend code for common issues. `build` creates the production-ready frontend files.

## Learning the project

1. Start with `Backend/contact.js` to see the shape of a contact stored in MongoDB.
2. Read `Backend/server.js` to learn how Express maps HTTP requests to database operations.
3. Read `Client/Phone-directory/src/api.js` to see how the frontend connects to the API.
4. Read `App.jsx` to follow contact data and CRUD requests through the React app.
5. Read `Contactform.jsx` and `ContactList.jsx` to see how the form and contact rows are displayed.

## Learning to write documentation

A README usually answers these questions:

- **What is this?** Give a short project summary.
- **What can it do?** List user-facing features.
- **What does it use?** Name the main technologies.
- **How is it organized?** Show the important files and folders.
- **How can someone run it?** List prerequisites and copyable setup commands.
- **How does it work?** Document key APIs or workflows.
- **How can someone check it?** Include available lint, test, or build commands.

Keep instructions specific to the current project, use headings to make sections easy to scan, and update the README when setup steps or behavior change.
