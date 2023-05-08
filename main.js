// Objetivo: trocar a cor do fundo da tela.

// Capturar o container e suas propriedades 
const container = document.querySelector('.container')

// Capturar o input e suas propriedades
const input = document.querySelector('input')


// Definir uma cor padrão para o fundo da tela, caso nenhuma cor for selecionada.   
const corPadraoFundo = '#ffffff'

// Atribuir essa cor padrão ao fundo da tela. 
// Pegar o container, acessar a estilização e o fundo e atribuir a variável da cor padrão do fundo
container.style.background = `${corPadraoFundo}`

// Quando uma cor for selecionada uma função será chamada
// Função que fará a troca de cor do fundo, fazendo a atualização da cor de fundo 
function mudarCorFundo(){
    // quando a função for ativada será acessado o container, estilo e background. E então pegamos o valor do input.
    container.style.background = `${input.value}`
}

// Adicionar um evento para quando o input color tiver a sua cor trocada
input.addEventListener('change', mudarCorFundo)