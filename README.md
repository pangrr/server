# server
A minimum node express mongodb REST API server


# Usage
1. Start a mongodb instance at `localhost:27017`.
2. `npm install && npm run start`
3. Available REST APIs:
  - to get a document by username, use GET `http://localhost:3000/:username`
  - to update a document by username or add a document with username, use POST `http://localhost:3000` with body `{ username: ..., ... }`

# Modify
1. Start a mongodb instance at `localhost:27017`.
2. Use `npm run dev` to run a dev server. The dev server should automatically restart on code change.
3. Modify `app.js` which is simple.
