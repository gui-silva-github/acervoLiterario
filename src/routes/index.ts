import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get("/", PageController.home)
router.get("/comedia", PageController.comedia)
router.get("/cristao", PageController.cristao)
router.get("/drama", PageController.drama)
router.get("/evolucao", PageController.evolucao)
router.get("/fantasia", PageController.fantasia)
router.get("/ficcao", PageController.ficcao)
router.get("/historia", PageController.historia)
router.get("/misterio", PageController.misterio)
router.get("/romance", PageController.romance)
router.get("/suspense", PageController.suspense)
router.get("/terror", PageController.terror)

router.get("/search", SearchController.search)

export default router