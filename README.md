# LibraNest — Online Book Borrowing Platform

Premium frontend UI for an online book borrowing platform built with Next.js.

## Tech Stack

- Next.js (App Router)
- JavaScript
- Tailwind CSS + DaisyUI
- React Icons
- SwiperJS
- Framer Motion
- Animate.css

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/all-books` | Catalog |
| `/books/[id]` | Book details |
| `/login` | Login (UI only) |
| `/register` | Register (UI only) |
| `/profile` | My Profile |
| `/profile/update` | Update Profile |

## Notes

- No authentication or backend — UI only
- Book data lives in `data/books.json`
- Borrow button shows a toast: "Borrow feature coming soon"
