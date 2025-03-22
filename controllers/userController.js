const User = require("../models/userModel");

exports.getUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });
        res.json(results[0]);
    });
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    User.create(name, email, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, name, email });
    });
};

exports.updateUser = (req, res) => {
    const { name, email } = req.body;
    User.update(req.params.id, name, email, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Usuário atualizado" });
    });
};

exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Usuário removido" });
    });
};
