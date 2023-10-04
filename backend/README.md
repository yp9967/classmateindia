# Backend Documentation

This documentation provides an overview of the backend of the Volunteer Registration Application. The backend is responsible for handling registration data, matching volunteers with classrooms, and providing allocation details to staff members.

## Table of Contents

- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Application Flow](#application-flow)

## Technologies Used

The backend of the Volunteer Registration Application is built using the following technologies:

- **Node.js:** The server-side application is built using Node.js to handle HTTP requests and logic.
- **Express.js:** Express.js is used as the web application framework for routing and handling HTTP requests.
- **Firebase:** Firebase is used as the backend-as-a-service (BaaS) for data storage and management.
- **Cloud Functions:** Firebase Cloud Functions are used for serverless backend logic and API endpoints.
- **MongoDB:** MongoDB is used as the primary database for storing volunteer and allocation data.

## API Endpoints

The backend provides the following API endpoints for the Volunteer Registration Application:

- `POST /api/register`: Register a volunteer.
- `GET /api/getAllUser`: Get all registered volunteers

## Database Schema

This section describes the database schema for the Volunteer Registration Application.

## UserDetails Schema

The `UserDetails` schema is used to store information about registered volunteers.

### Fields

- `name` (String): Full name of the volunteer.
- `phone` (Number): Contact number of the volunteer.
- `email` (String): Email address of the volunteer.
- `language` (Array of Strings): Spoken languages by the volunteer.
- `date` (Array of Strings): Availability dates of the volunteer.
- `location` (String): Location or city of the volunteer.

### Collection Name

- The schema is associated with the "UserInfo" collection in the database.

### Example Document

```json
{
  "name": "John Doe",
  "phone": 1234567890,
  "email": "johndoe@example.com",
  "language": ["English", "Hindi"],
  "date": ["Monday", "Tuesday"],
  "location": "New York"
}
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Firebase
