// Captura o botão do menu no HTML pelo id "botao-menu"
// Isso permite manipular o botão pelo JavaScript
const botaoMenu = document.getElementById('botao-menu');

// Captura o elemento do menu que será exibido ou ocultado
const menu = document.getElementById('menu');

// Adiciona um evento de clique no botão
// Sempre que o botão for clicado, essa função será executada
botaoMenu.addEventListener('click', () => {

    // Verifica se o menu já está visível (display block)
    if (menu.style.display === 'block') {

        // Se estiver visível, oculta o menu
        menu.style.display = 'none';

        // Interrompe a execução da função para não continuar
        return;
    }

    // Se o menu estiver oculto, torna ele visível
    menu.style.display = 'block';
});