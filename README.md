# Dev Stack Builder

A responsive web application to explore modern technologies and curate your custom software development stack.

## Description
Dev Stack Builder helps developers explore curated technologies across Frontend, Backend, Database, Styling, and DevOps categories. Users can add technologies to their personal stack, prevent duplicate entries, and manage selected items seamlessly.

## Technologies Used
- React.js (TypeScript)
- Tailwind CSS
- React-Toastify
- Vite

## Features
1. **Interactive Stack Management**: Dynamic addition and removal of technologies with duplicate prevention.
2. **Real-time Notifications**: Custom toast alerts for adding, duplicating, and removing stack items.
3. **Responsive UI**: Fully optimized sidebar and grid layout for mobile, tablet, and desktop views.

---

## Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript. It makes writing and understanding component structure much simpler compared to using `React.createElement`.

### 2. What is the difference between props and state?
- **Props**: Immutable data passed from a parent component to a child component.
- **State**: Mutable data managed locally within a component that can change over time based on user interactions.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook manages local reactive state in functional components. In this project, I used it to store the fetched technologies array, manage the user's selected stack, and handle mobile menu toggles.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in functional components. I used it to perform an asynchronous fetch call to load data from `technologies.json` once when the component initially mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on unique `key` props to keep track of elements in lists across re-renders. It optimizes DOM updates and prevents bugs when elements are added, removed, or reordered.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays components or UI elements based on specific conditions. In this project, I rendered an empty state message in the sidebar when `selectedStack.length === 0`.

### 7. How do you pass data from a parent to a child, and vice versa?
- **Parent to Child**: Data is passed down through `props`.
- **Child to Parent**: The parent passes a function as a prop to the child, which the child calls with the data it wants to send back.