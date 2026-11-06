
const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // Route 1: Welcome API
    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Welcome to GitHub Practice Project!"
        }));

    }

    // Route 2: Existing message API
    else if (req.url === "/api/message" && req.method === "GET") {

        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Hello! Backend is working successfully."
        }));

    }

    // Route 3: New health check API
    else if (req.url === "/api/health" && req.method === "GET") {

        res.writeHead(200);

        res.end(JSON.stringify({
            status: "OK",
            message: "Backend is healthy!",
            port: 3111
        }));

    }

    // Route 4: Invalid route
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            message: "Route not found"
        }));

    }

});

server.listen(3111, () => {
    console.log("Backend running on port 3111");
});
