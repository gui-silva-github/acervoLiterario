"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuLivro = void 0;
const createMenuLivro = (activeMenu) => {
    let returnObject = {
        todos: false,
        comedia: false,
        cristao: false,
        drama: false,
        evolucao: false,
        fantasia: false,
        ficcao: false,
        historia: false,
        misterio: false,
        romance: false,
        suspense: false,
        terror: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuLivro = createMenuLivro;
