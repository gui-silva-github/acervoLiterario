import { Request, Response } from 'express'
import { Livros } from '../models/livros'
import { createMenuLivro } from '../helpers/createMenuLivros'

export const home = (req: Request, res: Response)=>{

    let lista = Livros.getAll()

    res.render("pages/page", {

        menu: createMenuLivro('todos'),
        banner: {
            title: 'Todos os livros',
            background: 'bannerTodos.jpeg'
        },
        lista

    })

}

export const comedia = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('comedia')

    res.render("pages/page", {

         menu: createMenuLivro('comedia'),
         banner: {
            title: 'Livros de Comédia',
            background: 'bannerComedia.webp'
         },
         lista

    })

}

export const cristao = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('cristao')

    res.render("pages/page", {

        menu: createMenuLivro('cristao'),
        banner: {
            title: 'Livros Cristãos',
            background: 'bannerCristao.jpeg'
        },
        lista

    })

}

export const drama = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('drama')

    res.render("pages/page", {

        menu: createMenuLivro('drama'),
        banner: {
            title: 'Livros de Drama',
            background: 'bannerDrama.jpeg'
        },
        lista

    })

}

export const evolucao = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('evolucao')

    res.render("pages/page", {

        menu: createMenuLivro('evolucao'),
        banner: {
            title: 'Livros de Evolução',
            background: 'bannerEvolucao.png'
        },
        lista

    })

}

export const fantasia = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('fantasia')

    res.render("pages/page", {

        menu: createMenuLivro('fantasia'),
        banner: {
            title: 'Livros de Fantasia',
            background: 'bannerFantasia.jpg'
        },
        lista

    })

}

export const ficcao = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('ficcao')

    res.render("pages/page", {

        menu: createMenuLivro('ficcao'),
        banner: {
            title: 'Livros de Ficção',
            background: 'bannerFiccao.jpg'
        },
        lista

    })

}

export const historia = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('historia')

    res.render("pages/page", {

        menu: createMenuLivro('historia'),
        banner: {
            title: 'Livros de História',
            background: 'bannerHistoria.jpg'
        },
        lista

    })

}

export const misterio = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('misterio')

    res.render("pages/page", {

        menu: createMenuLivro('misterio'),
        banner: {
            title: 'Livros de Mistério',
            background: 'bannerMisterio.webp'
        },
        lista

    })

}

export const romance = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('romance')

    res.render("pages/page", {

        menu: createMenuLivro('romance'),
        banner: {
            title: 'Livros de Romance',
            background: 'bannerRomance.jpeg'
        },
        lista

    })

}

export const suspense = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('suspense')

    res.render("pages/page", {

        menu: createMenuLivro('suspense'),
        banner: {
            title: 'Livros de Suspense',
            background: 'bannerSuspense.jpeg'
        },
        lista

    })

}

export const terror = (req: Request, res: Response)=>{

    let lista = Livros.getFromType('terror')

    res.render("pages/page", {

        menu: createMenuLivro('terror'),
        banner: {
            title: 'Livros de Terror',
            background: 'bannerTerror.jpeg'
        },
        lista

    })

}
