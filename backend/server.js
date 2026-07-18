const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    });

    if (req.method === 'OPTIONS') {
      return res.end();
    }

    res.end(JSON.stringify({
        name: "AtlasStream API",
        version: "1.0.0",
        status: "running"
    }));
});

server.listen(PORT, () => {
    console.log(`AtlasStream API running on port ${PORT}`);
});
