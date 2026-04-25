# Smart Logistics

A full-stack application for intelligent route optimization and logistics management.

## Project Structure

```
smart-logistics/
│
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── RouteForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/      # API services
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── backend/               # Express backend application
│   ├── controllers/       # Request handlers
│   │   └── routeController.js
│   │
│   ├── routes/            # API routes
│   │   └── routeRoutes.js
│   │
│   ├── services/          # Business logic
│   │   └── predictionService.js
│   │
│   ├── app.js
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

## Features

- Route optimization
- Cost calculation
- Efficiency metrics
- Route history tracking

## API Endpoints

### POST `/api/routes/calculate`
Calculate optimal route based on origin, destination, and stops.

**Request Body:**
```json
{
  "origin": "Location A",
  "destination": "Location B",
  "stops": 2
}
```

**Response:**
```json
{
  "distance": 250,
  "time": 3.125,
  "cost": 125,
  "efficiency": 85,
  "optimizedRoute": ["Location A", "Stop 1", "Stop 2", "Location B"]
}
```

### GET `/api/routes/history`
Retrieve route calculation history.

## Development

For development with hot-reload:

**Backend:**
```bash
cd backend
npm run dev
```

This uses nodemon to automatically restart the server on file changes.

## License

MIT
