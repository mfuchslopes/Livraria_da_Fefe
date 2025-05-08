const generos = [
    new Genero("Suspense", "Chegue mais perto do mistério! 👻", "img/suspense.jpg", "suspense"),
    new Genero("Romance", "Histórias pra aquecer o coração! 💖", "img/romance.jpg", "romance"),
    new Genero("Fantasia", "Voe com dragões e magos! 🧙‍♂️🐉", "img/fantasia.jpg", "fantasia"),
    new Genero("Drama", "Para quem ama fortes emoções! 🎭", "img/drama.jpg", "drama"),
    new Genero("Sci-fi", "Vem explorar outros mundos! 🚀", "img/scifi.jpg", "scifi"),
    new Genero("Biografias", "Histórias reais que inspiram! ✨", "img/biografias.jpg", "biografias"),
    new Genero("Autoajuda", "Para melhorar cada dia! 🌞", "img/autoajuda.jpg", "autoajuda"),
    new Genero("Clássicos", "As lendas da literatura! 📚", "img/classicos.jpg", "classicos"),
    new Genero("Técnicos", "Aprendizado hardcore! 🧠", "img/tecnicos.jpg", "tecnicos"),
    new Genero("Literatura Brasileira", "Nossa arte em palavras! 🇧🇷", "img/literatura-brasileira.jpg", "literatura-brasileira"),
  ];
  

  const livros = [
    new Livro("O Gambito da Rainha", 59.90, "A história de uma jovem prodígio do xadrez em uma luta interna.", "img/oGambitoDaRainha.jpg"),
    new Livro("Jane Eyre", 39.90, "A clássica história de uma mulher que desafia as convenções da sociedade.", "img/janeEyre.jpg"),
    new Livro("O Grande Jogo", 44.90, "Uma trama cheia de reviravoltas entre amor e desconfiança.", "img/oGrandeJogo.jpg"),
    new Livro("O Passageiro para Frankfurt", 49.90, "Uma história de mistério e suspense com toques de crítica social.", "img/oPassageiroParaFrankfurt.jpg"),
    new Livro("Melhor do que nos Filmes", 42.90, "Uma comédia romântica cheia de surpresas e reviravoltas.", "img/melhorDoQueNosFilmes.jpg"),
    new Livro("Não é Como nos Filmes", 45.00, "Uma história realista de um romance que quebra as expectativas.", "img/naoEhComoNosFilmes.jpg"),
    new Livro("Jack, o Estripador - Rastro de Sangue", 59.90, "Investigações sobre o maior mistério da história criminal de Londres.", "img/jackOEstripador.jpg"),
    new Livro("Príncipe Drácula - Rastro de Sangue", 55.00, "A história sombria de um príncipe que se tornou lenda.", "img/principeDracula.jpg"),
    new Livro("O Grande Houdini - Rastro de Sangue", 62.00, "Mistério e magia se encontram em uma investigação sobre Houdini.", "img/oGrandeHoudini.jpg"),
    new Livro("Holmes, o Maligno - Rastro de Sangue", 49.90, "Uma nova versão das aventuras de Sherlock Holmes, mais sombria e intensa.", "img/holmesOMaligno.jpg"),
    new Livro("A Noite das Bruxas", 44.90, "Mistérios e horrores de uma noite onde o terror se instala.", "img/aNoiteDasBruxas.jpg"),
    new Livro("Caraval", 49.90, "Uma fantasia repleta de magia, mistério e desafios.", "img/caraval.jpg"),
    new Livro("Lendário", 52.00, "A sequência de Caraval que traz mais magia e mais mistérios a serem resolvidos.", "img/lendario.jpg"),
    new Livro("Finale", 55.00, "O fim de uma saga onde as apostas são altas e o destino está em jogo.", "img/finale.jpg"),
    new Livro("Espetacular", 59.90, "A última parte da trilogia Caraval, onde a magia se mistura com o destino.", "img/espetacular.jpg"),
    new Livro("Emma", 39.90, "Uma jovem que manipula o destino dos outros, mas se vê em uma encruzilhada com seus próprios sentimentos.", "img/emma.jpg"),
    new Livro("Estilhaça-me", 49.90, "Em um mundo distópico, uma jovem com poderes perigosos luta por liberdade e amor.", "img/estilhacaMe.jpg"),
    new Livro("Liberta-me", 54.90, "A continuação de uma história cheia de desafios e escolhas difíceis.", "img/libertaMe.jpg"),
    new Livro("Unifica-me", 59.90, "O destino final de uma jovem que precisa unir forças para salvar o mundo.", "img/unificaMe.jpg"),
    new Livro("Incendeia-me", 44.90, "Uma jovem com poderes devastadores deve decidir entre amor e vingança.", "img/incendeiaMe.jpg"),
    new Livro("Restaura-me", 49.90, "Após os eventos traumáticos, a protagonista deve se reerguer e lutar pelo que é certo.", "img/restauraMe.jpg"),
    new Livro("Desafia-me", 47.50, "O enfrentamento dos maiores medos e desafios de uma jovem em um mundo em guerra.", "img/desafiaMe.jpg"),
    new Livro("Decifra-me", 49.90, "Em um jogo de enigmas e mistérios, a verdade é mais difícil de alcançar do que parece.", "img/decifraMe.jpg"),
    new Livro("Imagina-me", 42.90, "A imaginação como uma forma de escapar das dificuldades da vida, mas com consequências.", "img/imaginaMe.jpg"),
    new Livro("Aceita-me", 50.00, "O confronto entre orgulho e vulnerabilidade, amor e medo.", "img/aceitaMe.jpg"),
    new Livro("Academia dos Casos Arquivados", 39.90, "Um mistério a ser desvendado entre casos esquecidos e a verdade oculta.", "img/academiaDosCasosArquivados.jpg"),
    new Livro("Instinto Assassino", 59.90, "Em um thriller psicológico, os limites entre o certo e o errado começam a se desfazer.", "img/instintoAssassino.jpg"),
    new Livro("Tudo ou Nada", 55.00, "Uma história de risco, onde a vida de muitas pessoas está em jogo.", "img/tudoOuNada.jpg"),
    new Livro("Conflitos de Sangue", 57.90, "Em um mundo dividido por guerras e trações, apenas os mais fortes sobrevivem.", "img/conflitosDeSangue.jpg"),
    new Livro("Uma Vida Pequena", 69.90, "A difícil jornada de uma amizade que atravessa anos e muitos obstáculos.", "img/umaVidaPequena.jpg"),
    new Livro("Os Sertões", 29.90, "Histórias e personagens que marcam a literatura brasileira, trazendo vivências do sertão.", "img/osSertoes.jpg"),
    new Livro("Marília de Dirceu", 27.50, "A poesia de uma época e a saga de uma mulher forte e independente.", "img/mariliaDeDirceu.jpg"),
    new Livro("Memórias Póstumas de Brás Cubas", 32.00, "A visão irreverente de um morto sobre a sociedade e suas falhas.", "img/memoriasPostumasDeBrasCubas.jpg"),
    new Livro("Dom Casmurro", 35.90, "O clássico romance de ciúmes e incertezas que permeia a vida de Bentinho e Capitu.", "img/domCasmurro.jpg"),
    new Livro("Androides Sonham com Ovelhas Elétricas?", 65.00, "Reflexões sobre a natureza humana e as máquinas em um mundo pós-apocalíptico.", "img/androidesSonham.jpg"),
    new Livro("The Kiss of Deception - Crônicas de Amor e Ódio", 49.90, "A história de uma princesa em fuga e de dois príncipes com destinos entrelaçados.", "img/theKissOfDeception.jpg"),
    new Livro("The Heart of Betrayal - Crônicas de Amor e Ódio", 49.90, "Em um mundo dividido, o amor e a lealdade são testados a todo momento.", "img/theHeartOfBetrayal.jpg"),
    new Livro("The Beauty of Darkness - Crônicas de Amor e Ódio", 52.00, "A batalha final de uma guerra que pode destruir tudo o que é amado.", "img/theBeautyOfDarkness.jpg"),
    new Livro("A Hora da Estrela", 39.90, "A vida simples e tocante de uma jovem nordestina que chega ao Rio de Janeiro.", "img/aHoraDaEstrela.jpg"),
    new Livro("Mulherzinhas", 42.90, "A história de quatro irmãs que enfrentam os desafios da vida e da guerra.", "img/mulherzinhas.jpg"),
    new Livro("Duna", 59.90, "A luta pelo controle do planeta Arrakis e as complexas relações políticas e sociais.", "img/duna.jpg"),
    new Livro("1984", 39.90, "Uma distopia totalitária que explora os perigos de um governo opressor.", "img/1984.jpg"),
    new Livro("A Volta ao Mundo em 80 Dias", 29.90, "Uma emocionante jornada ao redor do mundo em um desafio de tempo e resistência.", "img/aVoltaAoMundoEm80Dias.jpg"),
    new Livro("O Poder do Agora", 49.90, "A busca pela paz interior e o significado do momento presente.", "img/oPoderDoAgora.jpg"),
    new Livro("O Homem Mais Rico da Babilônia", 39.90, "Lições sobre riqueza e prosperidade baseadas nos princípios da antiga Babilônia.", "img/oHomemMaisRicoDaBabilonia.jpg"),
    new Livro("Como Fazer Amigos e Influenciar Pessoas", 44.90, "Técnicas comprovadas para melhorar a comunicação e a interação social.", "img/comoFazerAmigos.png"),
    new Livro("O Poder do Hábito", 42.90, "Como os hábitos influenciam a nossa vida e como podemos mudá-los.", "img/oPoderDoHabito.png"),
    new Livro("A Coragem de Não Agradar", 48.90, "A importância de ser autêntico e viver sem se preocupar com a aprovação dos outros.", "img/aCoragemDeNaoAgradar.png"),
    new Livro("Comece Pelo Porquê", 49.90, "Entenda o 'porquê' por trás de suas ações para alcançar o sucesso.", "img/comecePeloPorque.png"),
    new Livro("A Morte é um Dia que Vale a Pena Viver", 39.90, "Reflexões sobre a vida e a morte que nos convidam a viver plenamente.", "img/aMorteEDiaQueVale.jpg"),
    new Livro("Código Limpo: Um Guia para Desenvolver Códigos Legíveis e Manuteníveis", 99.90, "Como escrever código de qualidade que seja fácil de manter e expandir.", "img/codigoLimpo.jpg"),
    new Livro("Use a Cabeça! Programação", 59.90, "Introdução à programação de forma divertida e didática.", "img/useACabecaProgramacao.jpg"),
    new Livro("A Arte da Programação", 99.90, "Conceitos e técnicas fundamentais para escrever código eficaz.", "img/arteDaProgramacao.png"),
    new Livro("Refactoring: Melhorando o Design de Código Existente", 89.90, "Como melhorar a estrutura do código sem alterar seu comportamento.", "img/refactoring.jpg"),
    new Livro("Clean Architecture: A Handbook for Software Structure and Design", 99.90, "Princípios para escrever código limpo e bem estruturado.", "img/cleanArchitecture.jpg"),
    new Livro("O Investidor Inteligente", 79.90, "Conceitos para investir com sabedoria e alcançar independência financeira.", "img/oInvestidorInteligente.png"),
    new Livro("A Economia Irracional", 69.90, "Entenda como as emoções influenciam as decisões econômicas e financeiras.", "img/aEconomiaIrracional.jpg"),
    new Livro("Steve Jobs", 54.80, "Entre na mente visionária por trás da Apple, explorando sua genialidade, falhas e impacto duradouro na tecnologia e no design.", "img/steveJobs.jpg")
];

  const livroGeneros = [
    new LivroGenero(livros[0], "drama"),
    new LivroGenero(livros[1], "romance"),
    new LivroGenero(livros[1], "drama"),
    new LivroGenero(livros[1], "classicos"),
    new LivroGenero(livros[2], "romance"),
    new LivroGenero(livros[2], "suspense"),
    new LivroGenero(livros[3], "suspense"),
    new LivroGenero(livros[3], "classicos"),
    new LivroGenero(livros[4], "romance"),
    new LivroGenero(livros[5], "romance"),
    new LivroGenero(livros[6], "suspense"),
    new LivroGenero(livros[6], "romance"),
    new LivroGenero(livros[7], "suspense"),
    new LivroGenero(livros[7], "romance"),
    new LivroGenero(livros[8], "suspense"),
    new LivroGenero(livros[8], "romance"),
    new LivroGenero(livros[9], "suspense"),
    new LivroGenero(livros[9], "romance"),
    new LivroGenero(livros[10], "suspense"),
    new LivroGenero(livros[10], "classicos"),
    new LivroGenero(livros[11], "fantasia"),
    new LivroGenero(livros[11], "romance"),
    new LivroGenero(livros[12], "fantasia"),
    new LivroGenero(livros[12], "romance"),
    new LivroGenero(livros[13], "fantasia"),
    new LivroGenero(livros[13], "romance"),
    new LivroGenero(livros[14], "fantasia"),
    new LivroGenero(livros[14], "romance"),
    new LivroGenero(livros[15], "romance"),
    new LivroGenero(livros[15], "classicos"),
    new LivroGenero(livros[16], "fantasia"),
    new LivroGenero(livros[16], "scifi"),
    new LivroGenero(livros[16], "romance"),
    new LivroGenero(livros[17], "fantasia"),
    new LivroGenero(livros[17], "scifi"),
    new LivroGenero(livros[17], "romance"),
    new LivroGenero(livros[18], "fantasia"),
    new LivroGenero(livros[18], "scifi"),
    new LivroGenero(livros[18], "romance"),
    new LivroGenero(livros[19], "fantasia"),
    new LivroGenero(livros[19], "scifi"),
    new LivroGenero(livros[19], "romance"),
    new LivroGenero(livros[20], "fantasia"),
    new LivroGenero(livros[20], "scifi"),
    new LivroGenero(livros[20], "romance"),
    new LivroGenero(livros[21], "fantasia"),
    new LivroGenero(livros[21], "scifi"),
    new LivroGenero(livros[21], "romance"),
    new LivroGenero(livros[22], "fantasia"),
    new LivroGenero(livros[22], "scifi"),
    new LivroGenero(livros[22], "romance"),
    new LivroGenero(livros[23], "fantasia"),
    new LivroGenero(livros[23], "scifi"),
    new LivroGenero(livros[23], "romance"),
    new LivroGenero(livros[24], "fantasia"),
    new LivroGenero(livros[24], "scifi"),
    new LivroGenero(livros[24], "romance"),
    new LivroGenero(livros[25], "suspense"),
    new LivroGenero(livros[25], "romance"),
    new LivroGenero(livros[26], "suspense"),
    new LivroGenero(livros[26], "romance"),
    new LivroGenero(livros[27], "suspense"),
    new LivroGenero(livros[27], "romance"),
    new LivroGenero(livros[28], "suspense"),
    new LivroGenero(livros[28], "romance"),
    new LivroGenero(livros[29], "drama"),
    new LivroGenero(livros[30], "literatura-brasileira"),
    new LivroGenero(livros[30], "classicos"),
    new LivroGenero(livros[31], "literatura-brasileira"),
    new LivroGenero(livros[32], "literatura-brasileira"),
    new LivroGenero(livros[32], "classicos"),
    new LivroGenero(livros[33], "literatura-brasileira"),
    new LivroGenero(livros[33], "classicos"),
    new LivroGenero(livros[34], "scifi"),
    new LivroGenero(livros[35], "fantasia"),
    new LivroGenero(livros[36], "fantasia"),
    new LivroGenero(livros[37], "fantasia"),
    new LivroGenero(livros[38], "literatura-brasileira"),
    new LivroGenero(livros[38], "classicos"),
    new LivroGenero(livros[39], "classicos"),
    new LivroGenero(livros[39], "drama"),
    new LivroGenero(livros[39], "romance"),
    new LivroGenero(livros[40], "scifi"),
    new LivroGenero(livros[40], "fantasia"),
    new LivroGenero(livros[41], "classicos"),
    new LivroGenero(livros[41], "scifi"),
    new LivroGenero(livros[42], "scifi"),
    new LivroGenero(livros[43], "autoajuda"),
    new LivroGenero(livros[44], "autoajuda"),
    new LivroGenero(livros[45], "autoajuda"),
    new LivroGenero(livros[47], "autoajuda"),
    new LivroGenero(livros[48], "autoajuda"),
    new LivroGenero(livros[49], "autoajuda"),
    new LivroGenero(livros[50], "tecnicos"),
    new LivroGenero(livros[51], "tecnicos"),
    new LivroGenero(livros[52], "tecnicos"),
    new LivroGenero(livros[53], "tecnicos"),
    new LivroGenero(livros[54], "tecnicos"),
    new LivroGenero(livros[55], "tecnicos"),
    new LivroGenero(livros[56], "tecnicos"),
    new LivroGenero(livros[57], "biografias")
  ];
  
  let cartItems = [];
  let total = 0;

  const savedCart = localStorage.getItem('cartItems');
  if(!document.body.classList.contains('payment-theme')){
    if (savedCart) {
      cartItems = JSON.parse(savedCart);
      updateCartUI(); // mostra os itens salvos no carrinho
    }
  }

  // Seleciona o container onde os gêneros serão inseridos
  const container = document.getElementById('genres-container');
  
  // Cria e insere os blocos de gênero dinamicamente
  if (container){
  generos.forEach(genero => {
    const div = document.createElement('div');
    div.classList.add('genre-line');
    div.setAttribute('data-genre', genero.slug);
    div.innerHTML = `
      <img src="${genero.imagem}" alt="${genero.nome}">
      <p>${genero.descricao}</p>
    `;
  
    // Adiciona o evento de clique para redirecionar para a página do gênero
    div.addEventListener('click', () => {
      window.location.href = `genres/${genero.slug}.html`;
    });
  
    container.appendChild(div);
  });
  }

// Mostrar ou ocultar carrinho
const cartButton = document.getElementById('cart-button');
const cartOverlay = document.getElementById('cart-overlay');
if(!document.body.classList.contains('payment-theme')){
  cartButton.addEventListener('click', () => {
      cartOverlay.classList.toggle('hidden');
  });
}

//  Detecta o gênero com base na URL
const url = window.location.pathname;
const generoAtual = url.split("/").pop().replace(".html", ""); // ex: romance

//  Filtra livros do gênero atual
const livrosDoGenero = livroGeneros
  .filter(lg => lg.genero === generoAtual)
  .map(lg => lg.livro);

//  Renderiza na tela se houver seção .book-list
const cont = document.querySelector(".book-list");
if (cont && livrosDoGenero.length > 0) {
  livrosDoGenero.forEach(livro => {
    const div = document.createElement("div");
    div.classList.add("book");

    div.innerHTML = `
      <div class="book-info">
        <strong>${livro.titulo}</strong> - <p class="preco"> R$${livro.preco.toFixed(2)}</p>
        <p>${livro.descricao}</p>
        <button class="add-to-cart" data-title="${livro.titulo}" data-price="${livro.preco}">
          Adicionar ao Carrinho
        </button>
        <button onclick="removerDoCarrinho('${livro.titulo}')">Remover do Carrinho</button>
      </div>
      <img src="../${livro.imagem}" alt="Capa de ${livro.titulo}" />
    `;
    cont.appendChild(div);
  });
}


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // impede o clique de subir para outros elementos

    const title = button.getAttribute('data-title');
    const price = parseFloat(button.getAttribute('data-price'));
    
    const existing = cartItems.find(item => item.title === title);
    if (existing) {
      existing.qty += 1;
    } else {
      cartItems.push({ title, price, qty: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
    
  });
});

function updateCartUI() {
    const ul = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    ul.innerHTML = '';
    total = 0;

    cartItems.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.innerText = `${item.title} ${item.qty} - R$ ${(item.price * item.qty).toFixed(2)}`;
        ul.appendChild(li);
    });

    totalEl.innerText = `Total: R$ ${total.toFixed(2)}`;
}

if(!document.body.classList.contains('payment-theme')){
  document.getElementById('checkout-button')?.addEventListener('click', () => {
    if (total === 0){
      Swal.fire({
        title: 'Carrinho vazio!',
        text: 'Você precisa adicionar pelo menos um livro antes de finalizar o pedido 📚',
        icon: 'info',
        confirmButtonText: 'Entendi',
        confirmButtonColor: 'mediumseagreen',
        background: 'lavenderblush',
        color: 'midnightblue'
      });
      return
    } 
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.location.href = '../checkout.html';
  });
}

if(!document.body.classList.contains('payment-theme')){
  document.getElementById('clear-cart-button').addEventListener('click', () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: 'Ops! Carrinho já está vazio!',
        text: 'Não há nada para remover por aqui 🧺',
        icon: 'info',
        confirmButtonText: 'Ok!',
        confirmButtonColor: 'mediumseagreen',
        background: 'lavenderblush',
        color: 'midnightblue'
      });
      return;
    }
    Swal.fire({
      title: 'Esvaziar carrinho?',
      text: 'Tem certeza que deseja remover todos os itens?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, esvaziar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'crimson',
      cancelButtonColor: 'mediumseagreen',
      background: 'lavenderblush',
      color: 'midnightblue'
    }).then((result) => {
      if (result.isConfirmed) {
        cartItems = []; // limpa o array
        localStorage.removeItem('cartItems'); // limpa o localStorage
        updateCartUI(); // atualiza o HTML
  
        // Alerta bonitinho de confirmação
        Swal.fire({
          title: 'Carrinho limpo!',
          text: 'Você removeu todos os itens do carrinho.',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'mediumseagreen',
          background: 'lavenderblush',
          color: 'midnightblue'
        });
      }
    });
  });
}

// Se for a página de checkout...
if (document.body.classList.contains('checkout-theme')) {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const checkoutBooks = document.getElementById('checkout-books');
  const totalEl = document.getElementById('checkout-total');

  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.title} - R$ ${item.price} x ${item.qty}`;
    checkoutBooks.appendChild(div);
    total += item.price * item.qty;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;


   //  Redireciona para a página de pagamento
   const btn = document.getElementById('proceed-to-payment');
   if (btn) {
     btn.addEventListener('click', () => {
       window.location.href = 'pagamento.html';
     });
   }

}

// Se for a página de pagamento...
if (document.body.classList.contains('payment-theme')) {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const totalEl = document.getElementById('payment-total');

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;

  const btn = document.getElementById('pix');
  if (btn) {
    btn.addEventListener('click', async () => {
      confettiAnimation(); // Animação de confete
      await new Promise(resolve => setTimeout(resolve, 2000)); // Aguarda 2 segundos antes de mostrar o alerta
      await Swal.fire({
        title: 'Compra Finalizada!',
        text: 'Muito obrigada por comprar com a gente 💖',
        icon: 'success',
        confirmButtonText: 'Voltar pra livraria',
        confirmButtonColor: 'mediumseagreen', // Nome de cor CSS
        background: 'lavenderblush',          // Cor de fundo
        color: 'midnightblue'                 // Cor do texto
      });
      cartItems = []; // Limpa o array
      localStorage.removeItem('cartItems'); // Limpa o localStorage
      window.location.href = 'index.html'; // Redireciona para a página inicial
    });
  }
}


// Animação de confete (usando biblioteca externa)
function confettiAnimation() {
  const duration = 2000; // Duração da animação
  const end = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  const interval = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(interval); // Encerra a animação após o tempo
    confetti({
      particleCount: 50, // Número de partículas por vez
      origin: { x: Math.random(), y: Math.random() - 0.2 }, // Posição aleatória
      ...defaults
    });
  }, 200);
}


function removerDoCarrinho(titulo) {
  const index = cartItems.findIndex(item => item.title === titulo);
  if (index !== -1) {
    // Diminui a quantidade ou remove o item se for o último
    if (cartItems[index].qty > 1) {
      cartItems[index].qty -= 1;
    } else {
      cartItems.splice(index, 1);
    }

    // Atualiza o localStorage e a interface
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
  }
}



function pagarPIX() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
  });

  const valor = total.toFixed(2);
  const chavePix = '69563462904';
  const nomeRecebedor = 'Janaina Fuchs';
  const cidade = 'CAMPO MOURAO';

  // Função auxiliar para formatar campos
  function format(id, value) {
    return id + value.length.toString().padStart(2, '0') + value;
  }

  // Merchant Account Information (GUI, chave PIX)
  const merchantAccount = 
    format('00', 'BR.GOV.BCB.PIX') +
    format('01', chavePix);

  // Payload base
  const payload =
    format('00', '01') + // Payload Format Indicator
    format('26', merchantAccount) + // Merchant Account Info
    format('52', '0000') + // Merchant Category Code
    format('53', '986') + // BRL
    format('54', valor) + // Valor
    format('58', 'BR') + // País
    format('59', nomeRecebedor) + // Nome
    format('60', cidade) + // Cidade
    format('62', format('05', '***')) + // Txid
    '6304'; // Checksum CRC16

  // Cálculo CRC16-CCITT
  function crc16(str) {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc <<= 1;
        }
        crc &= 0xFFFF;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }

  const payloadFinal = payload + crc16(payload);
  console.log(payloadFinal); // Para teste

  const qrCodeDiv = document.getElementById('qrcode');
  qrCodeDiv.innerHTML = '';
  document.getElementById('pix-section').classList.remove('hidden');

  new QRCode(qrCodeDiv, {
    text: payloadFinal,
    width: 250,
    height: 250,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M // M = medium (melhor para compatibilidade)
  });

  const info = document.createElement('div');
  info.className = 'nome-valor';
  info.innerHTML = `
    <p><strong>Nome:</strong> ${nomeRecebedor}</p>
    <p><strong>CPF (PIX):</strong> ${chavePix}</p>
    <p><strong>Valor:</strong> R$ ${valor}</p>
  `;
  qrCodeDiv.appendChild(info);
}