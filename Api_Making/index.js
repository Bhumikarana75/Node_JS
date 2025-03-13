const express = require('express');

const app = express();

const port = 9000;

const cors = require('cors');
app.use(cors());

app.get('/users', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'You have successfully fetched users',
        users: [
            {
                "id": 1,
                "title": "The Future of Web Development",
                "content": "Web development is evolving rapidly with AI, Web3, and new frameworks...",
                "author": "John Doe",
                "createdAt": "2025-03-05T12:00:00Z",
                "tags": ["web development", "AI", "JavaScript"],
                "likes": 120,
                "comments": [
                    {
                        "user": "JaneSmith",
                        "comment": "Great insights! AI will definitely shape the future of coding.",
                        "createdAt": "2025-03-05T13:00:00Z"
                    }
                ]
            },
            {
                "id": 2,
                "title": "Understanding MongoDB for Beginners",
                "content": "MongoDB is a NoSQL database that provides flexibility and scalability...",
                "author": "Alice Brown",
                "createdAt": "2025-03-04T10:30:00Z",
                "tags": ["MongoDB", "NoSQL", "Database"],
                "likes": 85,
                "comments": [
                    {
                        "user": "JaneSmith",
                        "comment": "Great insights! AI will definitely shape the future of coding.",
                        "createdAt": "2025-03-05T13:00:00Z"
                    }
                ]
            }
        ]

    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(`Server is running on port: http://localhost:${port}`);
})