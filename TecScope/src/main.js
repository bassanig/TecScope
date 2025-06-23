
const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-hamburguer');
const tela = document.querySelector('.js-tela')

function ativarMenu() {
    menuBtn.classList.remove('opacity-100');
    menuBtn.classList.add('opacity-0');

    menu.classList.toggle('active');

    tela.classList.toggle('hidden')
    tela.classList.toggle('active')
}

function desativarMenu(event) {
    console.log(event.currentTarget);
    
    if(event.currentTarget === menu || event.currentTarget === tela) {
        menu.classList.remove('active');
        menuBtn.classList.remove('opacity-0');
        menuBtn.classList.add('opacity-100');

        tela.classList.remove('active')
    }
}


document.body.addEventListener('click', desativarMenu)

menuBtn.addEventListener('click', ativarMenu)
tela.addEventListener('click', desativarMenu)
