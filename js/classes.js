class Livro {
    constructor(titulo, preco, descricao, imagem) {
      this.titulo = titulo;
      this.preco = preco;
      this.descricao = descricao;
      this.imagem = imagem;
    }
}

class Genero {
    constructor(nome, descricao, imagem, slug) {
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
      this.slug = slug;
    }
}

class LivroGenero {
    constructor(livro, genero) {
        this.livro = livro;
        this.genero = genero;
    }
}
