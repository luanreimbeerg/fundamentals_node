const express = require("express");

const app = express();

app.use(express.json());

app.get("/ignite", (request, response) => {
    return response.status(200).json({ message: "Hello world! teste" });
});

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.status(200).json(['curso1', 'curso2', 'curso3']);
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.status(200).json(['curso1', 'curso2', 'curso3', 'curso4']);
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.status(200).json(['curso1', 'curso2', 'cursos3', 'curso4']);
})

app.delete("/courses/:id", (request, response) => {
    return response.status(200).json(['curso1', 'curso2', 'curso3']);
})

app.patch("/courses/:id", (request, response) => {
    return response.status(200).json(['curso1', 'curso2', 'cursinhos']);
})

app.listen(3333);
