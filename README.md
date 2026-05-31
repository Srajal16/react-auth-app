# React Auth App 🔐

A simple authentication system built with React using Context API, React Router, Protected Routes, and Local Storage.

---

## Features

- User Login
- User Logout
- Authentication State Management
- Protected Routes
- Token Storage in Local Storage
- Conditional Navbar Rendering
- Route Access Control

---

## Tech Stack

- React
- React Router DOM
- Context API
- Vite
- JavaScript (ES6+)

---

## Authentication Flow

### If User Is Not Logged In

- Login link is visible
- Dashboard route is blocked
- User is redirected to Login page

### If User Logs In

- Token is stored in Local Storage
- Authentication state becomes `true`
- Dashboard becomes accessible
- Logout button appears

### If User Logs Out

- Token is removed from Local Storage
- Authentication state becomes `false`
- Dashboard access is revoked
- Login link appears again

---

## What I Learned

- Managing global state using Context API
- Creating and consuming custom contexts
- Protecting routes using React Router
- Handling authentication state in React
- Using Local Storage for persistence
- Conditional rendering based on auth state
- Structuring a React project properly (components, pages, context)
- Building a complete authentication flow from scratch
