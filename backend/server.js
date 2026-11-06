
const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/api/message" && req.method === "GET") {

        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Hello! Backend is working successfully."
        }));

    } else {

        res.writeHead(404);

        res.end(JSON.stringify({
            message: "Route not found"
        }));

    }

});

server.listen(3111, () => {
    console.log("Backend running on port 3111");
});
