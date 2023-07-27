# express-mongo

## Environment Development

```bash
node version => 16.13.2
npm version => 8.4.0
mongoDB => mongoDB Atlas
```

## Installation

```bash
#   Run npm command to install package
npm i

#   Remove word "copy" in .env copy

#   Change DB_URI in .env to desire Database Configuration
DB_URI = "mongodb+srv://gregeld96:nVDpjKj9njJDUPp7@learning-dev.fusvcpc.mongodb.net/?retryWrites=true&w=majority"

#   Do seeding document to the database that been created
npm run seeder:refresh

#   To run the program
npm run start
```

## Routes

```bash
POST localhost:3000/api/auths/register (untuk register user)
POST localhost:3000/api/auths/login (untuk register login user)

POST localhost:3000/api/durations (untuk register durasi)
GET localhost:3000/api/durations (untuk list durasi)

POST localhost:3000/api/consultations (untuk register tipe konsultasi)
GET localhost:3000/api/consultations (untuk list consultation)

POST localhost:3000/api/schedules (untuk register schedule /jadwal ))
GET localhost:3000/api/schedules (untuk list schedule) => Query (?date_start&date_end=&limit=&page=1)
```

## Postman Environment

```bash
# Import Postman Collection located in postman folder
# Import Postman Environment Collection located in postman folder
```

```bash
# Depend on our setting on the server.js
url: http://localhost:3000
token:
prefix: api
```