# Car Rental Reservation System

Our Car Rental Reservation System streamlines the entire vehicle booking and rental process, allowing customers to easily reserve cars tailored to their needs. With our intuitive and user-friendly interface, customers can book a vehicle without any hassle, ensuring a seamless experience from start to finish.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Technology](#technology)
-   [Installation](#installation)
-   [Features](#features)
-   [Usage](#usage)
-   [License](#license)
-   [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **[Node.js](https://nodejs.org/)** (version >= 20.11.1)
-   **[npm](https://www.npmjs.com/)** (version >= 9.8.0)
-   **[TypeScript](https://www.typescriptlang.org/)** (version >= 5.4.5)


## Technology

This project uses the following technologies:

-   **[reactjs]** : A frontend framework.
-   **[redux]** : For state management
-   **[tailwindcss]** : For style react component
-   **[aamarpay]** : payment service, for paying booking


## Installation

Instructions on how to install the project.

```sh
# Clone the repository
git clone https://github.com/MehediHaassan1/car-rental-frontend

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Start the project
npm run start:dev
```

# Features

1. **User Management**

    - Registration.
    - Login.

2. **Car Inventory**

    - Manage cars with detailed information.
    - Help users to find car as their own ability.

3. **Bookings**
    - Manage bookings.
    - Dynamic pricing based on car type and rental duration.

# Usage

### Authentication

#### 1. <u>Register a new user</u>

-   **Endpoint:** ( POST ) `/api/auth/signup`
-   **Description:** Register a new user. Role can be `user` or `admin`.
-   **Request Body:**

    ```json
    {
        "name": "Example Khan",
        "role": "user",
        "password": "user123",
        "phone": "1234567890",
        "email": "example.khan@gmail.com",
        "address": "123 Main St, City, Country"
    }
    ```

#### 2. <u>Login the new user</u>

-   **Endpoint:** ( POST ) `/api/auth/signin`
-   **Description:** Login the user with the provided credentials.
-   **Request Body:**

    ```json
    {
        "email": "example.khan@gmail.com",
        "password": "user123"
    }
    ```

### Manage Car

#### 3. <u>Create a Car (Only accessible to Admin)</u>

-   **Endpoint:** ( POST ) `/api/cars`
-   **Description:** Create a new car for rent.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

-   **Request Body:**

    ```json
    {
        "name": "Velocity Pulse",
        "description": "An electric supercar engineered for unmatched acceleration and performance.",
        "color": "Velocity Blue",
        "isElectric": true,
        "features": [
            "Launch Control",
            "Carbon Ceramic Brakes",
            "Active Aerodynamics"
        ],
        "pricePerHour": 700
    }
    ```

#### 4. <u>Get all cars</u>

-   **Endpoint:** ( GET ) `/api/cars`
-   **Description:** Get the all cars and see information.

#### 5. <u>Get a car</u>

-   **Endpoint:** ( GET ) `/api/cars/:id`
-   **Description:** Get a single car information.

#### 6. <u>Update A Car (Only Accessible to the Admin)</u>

-   **Endpoint:** ( PUT ) `/api/cars/:id`
-   **Description:** Get a single car information.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

-   **Request Body:**

    ```json
    {
        "name": "Update Velocity Pulse"
    }
    ```

#### 7. <u>Delete A Car (Only Accessible to the Admin)</u>

-   **Endpoint:** ( DELETE ) `/api/cars/:id`
-   **Description:** Delete a car.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

#### 8. <u>Book a Car (Only Accessible to the User)</u>

-   **Endpoint:** ( POST ) `/api/bookings`
-   **Description:** Book a car for rental reservation.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

-   **Request Body:**

    ```json
    {
        "carId": "60d9c4e4f3b4b544b8b8d1c7",
        "date": "2024-06-15",
        "startTime": "13:00"
    }
    ```

#### 9. <u>Get User's Bookings (Only Accessible To the User)</u>

-   **Endpoint:** ( GET ) `/api/bookings/my-bookings`
-   **Description:** Get user specific bookings.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

#### 10. <u>Get All Bookings (Accessible to the Admin)</u>

-   **Endpoint:** ( GET ) `/api/bookings`
-   **Description:** Get all users bookings.
-   **Query Parameters**
    -   carId: ID of the car for which availability needs to be checked.
    -   date: The specific date for which availability needs to be checked (format: YYYY-MM-DD).
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

-   **Example Request:** /api/bookings?carId=608a6d8d03a1b40012abcdef&date=2024-06-15

#### 11. <u>Return The Car (Only Accessible To Admin)</u>

-   **Endpoint:** ( PUT ) `/api/cars/return`
-   **Description:** Return the rental car.
-   **Request Headers:**

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    -   Include "Bearer" at the beginning of the token.

-   **Request Body:**

    ```json
    {
        "bookingId": "60d9c4e4f3b4b544b8b8d1c7",
        "endTime": "15:00"
    }
    ```

# License

[MIT](https://choosealicense.com/licenses/mit/)

# Contact

If you have any questions, feedback, or issues, feel free to contact us:

-   **Email:** mehedi.haassan1@gmail.com
