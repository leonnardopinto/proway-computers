//Copiado o script da simulação de produtos

export interface IProduto { //Dados dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{ 
    /* Será as informações que vai pra dentro do carrinho, como está trabalhando com interface pode utilizar o "extends" para trabalhar com as 
        informações que tem dentro de Iproduto (Assim não precisa repetir). Assim só é preciso adicionar o que é novo, como por exemplo a qtd. */

    quantidade: number;
    
}

export const produtos: IProduto[] = [ //Lista vetor de produtos
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 8},
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 9 },
    { id: 4, descricao: "Fone Gamer", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 7},
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 4 },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 5 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg" , quantidadeEstoque: 6},
    { id: 8, descricao: "Placa de vídeo", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 12 },
    { id: 10, descricao: "Notebook Samsung", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 16},
    { id: 11, descricao: "Notebook ACCER", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 13},
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 14},
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 19},
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 22},
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 21},
]
//As imagens de simulação foram copiadas para pasta assets.

//Coloca o "." na frente do "/assets" para que o github possa identificar o caminho das imagens.
/*Para ser mais rapido seleciono um dos "/assets" e depois pressiono contrl+f para abrir o localizar, clico na setinha e escrevo "./assets" no campo abaixo 
  e clico no botão substituir tudo.*/