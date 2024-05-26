type MenuOptions = 
'' | 
'todos' |
'comedia' |
'cristao' |
'drama' |
'evolucao' |
'fantasia' |
'ficcao' |
'historia' |
'misterio' |
'romance' |
'suspense' |
'terror'

export const createMenuLivro = (activeMenu: MenuOptions)=>{

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

    }

    if (activeMenu!==''){
        returnObject[activeMenu] = true
    }

    return returnObject

}