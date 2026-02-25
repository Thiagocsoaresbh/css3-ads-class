// aula4/script.js

// Captura o botão do menu pelo id
const botaoMenu = document.getElementById('botao-menu');

// Captura o menu que será exibido/ocultado
const menu = document.getElementById('menu');

// Adiciona evento de clique no botão
botaoMenu.addEventListener('click', () => {

    // Se o menu estiver visível (display = block), oculta
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        return; // encerra aqui para não executar o restante
    }

    // Se estiver oculto, exibe
    menu.style.display = 'block';
});

// Captura a lista de projetos (onde o Grid é aplicado)
const listaProjetos = document.getElementById('lista-projetos');

// Cria um elemento div apenas para checar suporte de propriedades CSS
const teste = document.createElement('div');

// Verifica se a propriedade "grid" existe no style do elemento
// Se não existir, o navegador não suporta CSS Grid (ou está muito antigo)
if (!('grid' in teste.style)) {

    // Adiciona uma classe que troca Grid por Flexbox (fallback)
    listaProjetos.classList.add('fallback-flex');

    // Opcional: informa no console que o fallback foi ativado
    console.log('CSS Grid não suportado. Fallback com Flexbox ativado.');
} else {

    // Opcional: confirma suporte no console
    console.log('CSS Grid suportado.');
}