# Mouts Code Test

This repository contains a full-stack application with a client and server setup. Follow the steps below to get the application up and running.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v22 or later)
- [pnpm](https://pnpm.io/) (v7 or later)
- [Docker](https://www.docker.com/) (for database setup)

## Project Structure

```
.
├── client/   # Frontend application (Next.js)
├── server/   # Backend application (NestJS)
```

## Setup Instructions

### 2. Start the Server

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the database using Docker:

   ```bash
   docker-compose up -d
   ```

   ```bash
   npx prisma generate && npx prisma db push
   ```

4. Run the server in development mode:

   ```bash
   pnpm run start:dev
   ```

   The server will be running at `http://localhost:3001`.

### 3. Start the Client

1. Navigate to the `client` directory:

   ```bash
   cd ../client
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the client in development mode:

   ```bash
   pnpm run dev
   ```

   The client will be running at `http://localhost:3000`.
