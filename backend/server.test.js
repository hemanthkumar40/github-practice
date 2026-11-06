
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("./server");

test("Backend API endpoints", async (t) => {

    const server = createServer();

    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
    });

    t.after(() => new Promise((resolve, reject) => {
        server.close(error => {
            if (error) reject(error);
            else resolve();
        });
    }));

    const port = server.address().port;
    const base = `http://127.0.0.1:${port}`;

    const welcome = await fetch(`${base}/`);
    assert.equal(welcome.status, 200);

    const message = await fetch(`${base}/api/message`);
    assert.equal(message.status, 200);

    const health = await fetch(`${base}/api/health`);
    assert.equal(health.status, 200);

    const healthData = await health.json();
    assert.equal(healthData.status, "OK");
    assert.equal(healthData.port, 3111);

    const invalid = await fetch(`${base}/unknown`);
    assert.equal(invalid.status, 404);

});
