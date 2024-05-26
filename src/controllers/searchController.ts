import { Request, Response } from 'express'

import { Livros } from '../models/livros'
import { createMenuLivro } from '../helpers/createMenuLivros'

export const search = (req: Request, res: Response)=>{

    let query: string = req.query.q as string

    if (!query){
        res.redirect("/")
        return
    }

    let lista = Livros.getFromName(query)

    res.render("pages/page", {

        menu: createMenuLivro(''),
        lista,
        query

    })

}