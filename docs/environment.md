# Environment Variables

## Backend (`/backend/.env`)

| Variable             | Required | Description                                 | Example                 |
| -------------------- | -------- | ------------------------------------------- | ----------------------- |
| `PORT`               | No       | Port for Express server (default: 5000)     | `5000`                  |
| `ALLOWED_ORIGIN`     | Yes      | Allowed CORS origin for Frontend requests   | `http://localhost:5173` |
| `ENABLE_COMPRESSION` | No       | Enable gzip compression (default: true)     | `true`                  |
| `CACHE_DURATION`     | No       | Cache duration for static assets in seconds | `2592000` (30 days)     |
| _Add more as needed_ |          |                                             |                         |

---

## Frontend (`/.env`)

| Variable        | Required | Description | Example |
| --------------- | -------- | ----------- | ------- |
| _Add as needed_ |          |             |         |

---

## Usage

- Copy `.env.example` to `.env` in both the root and `/backend` directories.
- Fill in the values as appropriate for your environment.
- **Never commit `.env` files with secrets to version control.**

---

## Notes

- Add new variables here as your project grows.
- For production, set these variables in your hosting provider's dashboard.

## Performance Optimizations

### Gzip Compression

Enable gzip compression to reduce file sizes:

```javascript
// In your Express server setup
const compression = require('compression')

// Check if compression is enabled (default: true)
if (process.env.ENABLE_COMPRESSION !== 'false') {
  app.use(compression())
}
```

### Cache Control / Expires Headers

Set proper cache headers for static assets:

```javascript
// In your Express static files middleware
app.use(
  express.static('public', {
    maxAge: process.env.CACHE_DURATION || 2592000000, // Default: 30 days in milliseconds
    setHeaders: (res, path) => {
      // Set Expires header
      const date = new Date()
      date.setSeconds(
        date.getSeconds() + (process.env.CACHE_DURATION || 2592000)
      )
      res.setHeader('Expires', date.toUTCString())
    }
  })
)
```
