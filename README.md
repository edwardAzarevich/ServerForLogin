# ServerForLogin

To work with the server, you must have MongoDB NoSQL system installed.

## Getting Started

1. **Start the Server**
   - Run the following command in your terminal:
     ```bash
     node server.js
     ```
   - You should see a message indicating that the server has started:
     ```
     Start server on port 5000
     ```

2. **Testing the Server**
   - You can use Postman or any other tool to test user registration and login.

### User Registration

- **Endpoint:** `POST localhost:5000/auth/registration`
- **Response:** If everything is fine, you will receive:
  ```json
  {
    "message": "Mission complete"
  }
