# ServerForLogin
To work with the server, you must have mongodb NoSQL-sistem.
1. Start server (node server.js) and you will see a message with "Start server on port 5000".
2. For testing, you can use postman or any view for user registration and user login.
  2.1 - For registration use address "localhost:5000/auth/registration".
  If everything is fine, you will receive an answer "message": "Mission complete" 
  2.2 - For login use address "localhost:5000/auth/login".
  If everything is fine, you will receive an answer `"token": "...". Use this token to get data from the server for a GET request.
  2.3 - To get the data, use GET the address "localhost:5000/auth/users" 
  and place the token in the format "Authorization" : "Bearer token" in headers Get request.
  In the response you will receive a list of users and their passwords in encrypted form.
