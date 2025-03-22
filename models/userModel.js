const db = require("../data/db");

const User = {
    getAll: (callback) => {
        db.query("SELECT * FROM users", callback);
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM users WHERE id = ?", [id], callback);
    },

    create: (name, email, callback) => {
        db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], callback);
    },

    update: (id, name, email, callback) => {
        db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], callback);
    },

    delete: (id, callback) => {
        db.query("DELETE FROM users WHERE id = ?", [id], callback);
    }
};

module.exports = User;
