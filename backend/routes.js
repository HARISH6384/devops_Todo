const express = require("express");
const route = express.Router();   // <--- YOU MISSED THIS
const Todo = require("./model");

// GET
route.get("/", async (req, res) => {
    try {
        const data = await Todo.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST
route.post("/", async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = await Todo.create({ title, description });
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports=route;
