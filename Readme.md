# 📝 Notes App

Simple CRUD REST API — **Express + MongoDB (Docker) + Mongoose**, MVC pattern.

## Quick Start

```bash
# 1. Start MongoDB
docker-compose up -d

# 2. Install dependencies
npm install

# 3. Seed the database
npm run seed

# 4. Start the server
npm run dev
```

## API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/notes`     | Get all notes |
| GET    | `/api/notes/:id` | Get one note  |
| POST   | `/api/notes`     | Create a note |
| PUT    | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Note Shape

```json
{
  "_id": "664f1a2b3c4d5e6f7a8b9c0d",
  "note": "Buy groceries after work",
  "createdAt": "2024-05-23T10:00:00.000Z",
  "updatedAt": "2024-05-23T10:00:00.000Z"
}
```

## Example Requests

```bash
# Create
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"note": "Learn Mongoose"}'

# Get all
curl http://localhost:3000/api/notes

# Update
curl -X PUT http://localhost:3000/api/notes/<id> \
  -H "Content-Type: application/json" \
  -d '{"note": "Updated note text"}'

# Delete
curl -X DELETE http://localhost:3000/api/notes/<id>
```

## Mongo Express GUI

http://localhost:8081 — login: `admin` / `admin123`
