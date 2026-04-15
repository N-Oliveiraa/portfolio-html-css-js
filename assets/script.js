const menuBtn = document.querySelector("#menu-hamburguer");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    // Só funciona se a tela for menor que 768px
    if (window.innerWidth <= 768) {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");     
    }
});

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.querySelector('#btn-tema');
    const html = document.documentElement;

    const iconMoon = document.querySelector('#icon-moon');
    const iconSun = document.querySelector('#icon-sun');

    //  Aplicar tema ao carregar
    function aplicarTemaSalvo() {
        const temaSalvo = localStorage.getItem('tema');

        if (temaSalvo === 'dark') {
            html.classList.add('dark-theme');
            iconMoon.style.display = "none";
            iconSun.style.display = "inline";
        } else {
            html.classList.remove('dark-theme');
            iconMoon.style.display = "inline";
            iconSun.style.display = "none";
        }
    }

    //  Alternar tema
    function alternarTema() {
        html.classList.toggle('dark-theme');

        if (html.classList.contains('dark-theme')) {
            iconMoon.style.display = "none";
            iconSun.style.display = "inline";
            localStorage.setItem('tema', 'dark');
        } else {
            iconMoon.style.display = "inline";
            iconSun.style.display = "none";
            localStorage.setItem('tema', 'light');
        }
    }

    btnTema.addEventListener('click', alternarTema);

    //Executa ao iniciar
    aplicarTemaSalvo();
});

const meusProjetos = [
    {
        titulo: "Projeto 01 - Viagem pela vila",
        descricao: "Uma langpage feita com HTML, CSS e JavaScript.",   
        imagem: "assets/imagens/projeto1.png",
        link: "https://n-oliveiraa.github.io/viagens--landing-page/",
        github: "https://github.com/N-Oliveiraa/viagens--landing-page.git"
    },
    {
        titulo: "Projeto 02 - Contador de cliques",
        descricao: "Projeto feito com Vite + React.", 
        imagem: "assets/imagens/projeto2.png",
        link: "https://n-oliveiraa.github.io/contador-de-cliques/",
        github: "https://github.com/N-Oliveiraa/contador-de-cliques.git"
    },
    {
        titulo: "Projeto 03 - Lista de tarefas",
        descricao: "Projeto feito em React com Context API e localStorage.",   
        imagem: "assets/imagens/projeto3.png",
        link: "https://n-oliveiraa.github.io/aplicacao-de-tarefas/",
        github: "https://github.com/N-Oliveiraa/aplicacao-de-tarefas.git",
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <img src="${projeto.imagem}" alt="${projeto.titulo}">

                <div class="info-projetos">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>

                    <div class="botoes-projeto">
                        <a
                            href=${projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-ver-projeto"
                            >
                            Ver projeto
                        </a>

                        <a
                            href=${projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-github"
                            >
                            GitHub
                        </a>
                    </div>

                </div>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();

const btnTopo = document.querySelector("#btn-topo");

// mostrar botão ao rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 1300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

// voltar ao topo
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});