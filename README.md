# ItemsApp

ItemsApp is a simple full-stack web application built using Next.js (App Router) and Express.js.  
It demonstrates public and protected routes, mock authentication, and basic CRUD functionality.
Live Link - https://itemsapp.vercel.app/

---

## Project Features

- Landing page with multiple sections
- Public items list page
- Item details page
- Mock authentication using hardcoded credentials
- Cookie-based login and logout
- Protected "Add Item" page for authenticated users
- Toast notification on successful product creation
- Express.js REST API backend

---

## Technologies Used

- Next.js 16 (App Router)
- React
- Express.js
- MongoDB
- Tailwind CSS
- react-hot-toast

---

## Routes Summary

| Route | Description | Access |
|------|------------|--------|
| `/` | Landing page | Public |
| `/login` | Login page | Public |
| `/items` | Items list | Public |
| `/items/:id` | Item details | Public |
| `/add-item` | Add new item | Protected |

---

## Authentication

This project uses mock authentication with hardcoded credentials.

**Login Credentials:**
- Email: `admin@test.com`
- Password: `123456`

Credentials are stored securely in cookies.

---

## Setup & Installation

### Frontend Setup

```bash
npm install
npm run dev
