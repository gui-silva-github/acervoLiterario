type LivroType =
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

type Livro = {

    type: LivroType,
    imagem: string,
    nome: string,
    autor: string,
    ano: number

}

const data: Livro[] = [

    {
        type: 'comedia',
        imagem: 'comedia1.jpeg',
        nome: "As aventuras de Pinóquio",
        autor: "Carlo Collodi",
        ano: 1883
    },

    {
        type: 'comedia',
        imagem: 'comedia2.jpg',
        nome: "Epaminondas - O gato explicador",
        autor: "Clóvis de Barros Filho",
        ano: 2022
    },

    {
        type: 'cristao',
        imagem: 'cristao1.jpeg',
        nome: "Bíblia Sagrada",
        autor: "Deus",
        ano: 1455
    },

    {
        type: 'cristao',
        imagem: 'cristao2.webp',
        nome: "O Mártir das Catacumbas",
        autor: "Autor Anônimo",
        ano: 2019
    },

    {
        type: 'drama',
        imagem: 'drama1.jpeg',
        nome: "O pequeno príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano: 1943
    },

    {
        type: 'drama',
        imagem: 'drama2.jpeg',
        nome: "A revolução dos bichos",
        autor: "George Orwell",
        ano: 1945
    },

    {
        type: 'drama',
        imagem: 'drama3.jpeg',
        nome: "O diário de Anne Frank",
        autor: "Anne Frank",
        ano: 1947
    },

    {
        type: 'evolucao',
        imagem: 'evolucao1.jpeg',
        nome: "Como fazer amigos e influenciar pessoas",
        autor: "Dale Carnegie",
        ano: 1936
    },

    {
        type: 'evolucao',
        imagem: 'evolucao2.jpeg',
        nome: "O homem mais rico da Babilônia",
        autor: "George S. Clason",
        ano: 1926
    },

    {
        type: 'fantasia',
        imagem: 'fantasia1.jpeg',
        nome: "Jogos Vorazes",
        autor: "Suzanne Collins",
        ano: 2008
    },

    {
        type: 'fantasia',
        imagem: 'fantasia2.jpg',
        nome: "Alice no país das maravilhas e através do espelho",
        autor: "Lewis Carroll",
        ano: 1871
    },

    {
        type: 'ficcao',
        imagem: 'ficcao1.png',
        nome: "Fahrenheit 451",
        autor: "Ray Bradbury",
        ano: 1953
    },

    {
        type: 'ficcao',
        imagem: 'ficcao2.jpeg',
        nome: "1984",
        autor: "George Orwell",
        ano: 1949
    },

    {
        type: 'historia',
        imagem: 'historia1.jpeg',
        nome: "A divina comédia",
        autor: "Dante Alighieri",
        ano: 1321
    },

    {
        type: 'historia',
        imagem: 'historia2.jpeg',
        nome: "Hamlet",
        autor: "William Shakespeare",
        ano: 1601
    },

    {
        type: 'misterio',
        imagem: 'misterio1.jpeg',
        nome: "Sherlock Holmes: Um estudo em vermelho",
        autor: "Arthur Doyle",
        ano: 1887
    },

    {
        type: 'misterio',
        imagem: 'misterio2.jpg',
        nome: "Um de nós está mentindo",
        autor: "Karen McManus",
        ano: 2021
    },

    {
        type: 'romance',
        imagem: 'romance1.jpg',
        nome: "Como eu era antes de você",
        autor: "Jojo Moyes",
        ano: 2012
    },

    {
        type: 'romance',
        imagem: 'romance2.jpeg',
        nome: "A culpa é das estrelas",
        autor: "John Green",
        ano: 2012
    },

    {
        type: 'suspense',
        imagem: 'suspense1.jpg',
        nome: "Ilha do Medo",
        autor: "Dennis Lehane",
        ano: 2010
    },

    {
        type: 'suspense',
        imagem: 'suspense2.jpeg',
        nome: "Caixa de passáros",
        autor: "Josh Malerman",
        ano: 2015
    },

    {
        type: 'terror',
        imagem: 'terror1.jpeg',
        nome: "O exorcista",
        autor: "William Blatty",
        ano: 1971
    },

    {
        type: 'terror',
        imagem: 'terror2.jpg',
        nome: "Histórias extraordinárias",
        autor: "Edgar Allan Poe",
        ano: 2017
    }

]

export const Livros = {

    getAll: (): Livro[] =>{
        return data
    },

    getFromType: (type: LivroType): Livro[] =>{
        return data.filter((livro) => livro.type === type)
    },

    getFromName: (name: string): Livro[] =>{
        return data.filter((livro) => livro.nome.toLowerCase().indexOf(name.toLowerCase()) > -1)
    }

}