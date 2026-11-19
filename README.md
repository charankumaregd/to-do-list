# To-Do List

A simple task management application built using React, JavaScript, and Tailwind CSS, with browser local storage for task persistence.

## Features

- **Add Tasks:** Create tasks through a simple input interface.
- **Task Completion:** Mark tasks as completed with visual strike-through styling.
- **Delete Tasks:** Remove tasks from the list.
- **Persistent Storage:** Automatically saves tasks in browser local storage.
- **Dynamic Task List:** Displays newly added tasks at the top.
- **Empty State:** Displays a placeholder when there are no tasks.

## Technologies Used

- React
- JavaScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/charankumaregd/to-do-list.git
   cd to-do-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Project Structure

```text
to-do-list/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

## Implementation Notes

- Tasks are managed using React's `useState` hook.
- Task data is stored in the browser's `localStorage`.
- The application runs entirely on the client side without a backend.