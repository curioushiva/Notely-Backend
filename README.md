# Notely

A REST API for managing notes, built with Express 5, Mongoose and MongoDB. Supports create, read, update and delete.

## Structure

The app lives one folder down.

```text
.
├── README.md
└── Notely-Backend/
    ├── server.js
    ├── .env.example
    └── src/
        ├── app.js          <- routes
        └── db/             <- connection + model
```

## Setup

Requires Node 18+ and a MongoDB database ([Atlas](https://www.mongodb.com/atlas) works, or a local instance).

```bash
git clone <your-repo-url>
cd Notely-Backend/Notely-Backend
npm install
cp .env.example .env
```

Add your connection string to `.env`:

```ini
PORT=3000
MONGODB_URI=mongodb+srv://user:password@cluster0.ab12c.mongodb.net/notely
```

In Atlas, get it from **Connect** (either the Compass or Drivers tab works), then add your password and database name. For a local database, use `mongodb://127.0.0.1:27017/notely`.

Then start it:

```bash
npm run dev
```

You should see `Server is running on port 3000` and `Connected to DB`.

## API

Base URL: `http://localhost:3000`

| Method   | Route        | Body                    | Returns                  |
| -------- | ------------ | ----------------------- | ------------------------ |
| `POST`   | `/notes`     | `title`, `description`  | `201` Note Created       |
| `GET`    | `/notes`     | —                       | `200` all notes          |
| `PATCH`  | `/notes/:id` | `description`           | `200` Note Updated       |
| `DELETE` | `/notes/:id` | —                       | `200` Note Deleted       |

`:id` is the note's MongoDB `_id`. Errors return `500` with a `message`.

Example:

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Study","description":"Finish the Express module"}'
```

## Model

Notes have a `title` and a `description`, both strings, stored in the `notes` collection.

## Troubleshooting

If the database is not connecting, check the `.env` file first. It should be in the same folder as `server.js`, and the URI should not have any placeholder left in it. If you are using Atlas, add your IP in Network Access.
