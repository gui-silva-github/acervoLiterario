"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PageController = __importStar(require("../controllers/pageController"));
const SearchController = __importStar(require("../controllers/searchController"));
const router = (0, express_1.Router)();
router.get("/", PageController.home);
router.get("/comedia", PageController.comedia);
router.get("/cristao", PageController.cristao);
router.get("/drama", PageController.drama);
router.get("/evolucao", PageController.evolucao);
router.get("/fantasia", PageController.fantasia);
router.get("/ficcao", PageController.ficcao);
router.get("/historia", PageController.historia);
router.get("/misterio", PageController.misterio);
router.get("/romance", PageController.romance);
router.get("/suspense", PageController.suspense);
router.get("/terror", PageController.terror);
router.get("/search", SearchController.search);
exports.default = router;
