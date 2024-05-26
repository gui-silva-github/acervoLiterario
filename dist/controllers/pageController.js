"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terror = exports.suspense = exports.romance = exports.misterio = exports.historia = exports.ficcao = exports.fantasia = exports.evolucao = exports.drama = exports.cristao = exports.comedia = exports.home = void 0;
const livros_1 = require("../models/livros");
const createMenuLivros_1 = require("../helpers/createMenuLivros");
const home = (req, res) => {
    let lista = livros_1.Livros.getAll();
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('todos'),
        banner: {
            title: 'Todos os livros',
            background: 'bannerTodos.jpeg'
        },
        lista
    });
};
exports.home = home;
const comedia = (req, res) => {
    let lista = livros_1.Livros.getFromType('comedia');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('comedia'),
        banner: {
            title: 'Livros de Comédia',
            background: 'bannerComedia.webp'
        },
        lista
    });
};
exports.comedia = comedia;
const cristao = (req, res) => {
    let lista = livros_1.Livros.getFromType('cristao');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('cristao'),
        banner: {
            title: 'Livros Cristãos',
            background: 'bannerCristao.jpeg'
        },
        lista
    });
};
exports.cristao = cristao;
const drama = (req, res) => {
    let lista = livros_1.Livros.getFromType('drama');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('drama'),
        banner: {
            title: 'Livros de Drama',
            background: 'bannerDrama.jpeg'
        },
        lista
    });
};
exports.drama = drama;
const evolucao = (req, res) => {
    let lista = livros_1.Livros.getFromType('evolucao');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('evolucao'),
        banner: {
            title: 'Livros de Evolução',
            background: 'bannerEvolucao.png'
        },
        lista
    });
};
exports.evolucao = evolucao;
const fantasia = (req, res) => {
    let lista = livros_1.Livros.getFromType('fantasia');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('fantasia'),
        banner: {
            title: 'Livros de Fantasia',
            background: 'bannerFantasia.jpg'
        },
        lista
    });
};
exports.fantasia = fantasia;
const ficcao = (req, res) => {
    let lista = livros_1.Livros.getFromType('ficcao');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('ficcao'),
        banner: {
            title: 'Livros de Ficção',
            background: 'bannerFiccao.jpg'
        },
        lista
    });
};
exports.ficcao = ficcao;
const historia = (req, res) => {
    let lista = livros_1.Livros.getFromType('historia');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('historia'),
        banner: {
            title: 'Livros de História',
            background: 'bannerHistoria.jpg'
        },
        lista
    });
};
exports.historia = historia;
const misterio = (req, res) => {
    let lista = livros_1.Livros.getFromType('misterio');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('misterio'),
        banner: {
            title: 'Livros de Mistério',
            background: 'bannerMisterio.webp'
        },
        lista
    });
};
exports.misterio = misterio;
const romance = (req, res) => {
    let lista = livros_1.Livros.getFromType('romance');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('romance'),
        banner: {
            title: 'Livros de Romance',
            background: 'bannerRomance.jpeg'
        },
        lista
    });
};
exports.romance = romance;
const suspense = (req, res) => {
    let lista = livros_1.Livros.getFromType('suspense');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('suspense'),
        banner: {
            title: 'Livros de Suspense',
            background: 'bannerSuspense.jpeg'
        },
        lista
    });
};
exports.suspense = suspense;
const terror = (req, res) => {
    let lista = livros_1.Livros.getFromType('terror');
    res.render("pages/page", {
        menu: (0, createMenuLivros_1.createMenuLivro)('terror'),
        banner: {
            title: 'Livros de Terror',
            background: 'bannerTerror.jpeg'
        },
        lista
    });
};
exports.terror = terror;
