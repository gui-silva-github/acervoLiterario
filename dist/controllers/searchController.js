"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const livros_1 = require("../models/livros");
const createMenuLivros_1 = require("../helpers/createMenuLivros");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect("/");
        return;
    }
    let lista = livros_1.Livros.getFromName(query);
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)(''),
        lista,
        query
    });
};
exports.search = search;
