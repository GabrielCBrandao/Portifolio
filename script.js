
function enviarWhats(event) {
    console.log("entrei na função");
    event.preventDefault(); // Evita o envio do formulário
const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5521974089973';

const text = `Olá, meu nome é ${nome} e gostaria de entrar em contato. Minha mensagem é: ${mensagem}`;
const msgFormatada = encodeURIComponent(text); //formata a mensagem para ser enviada via URL
const url = `https://wa.me/${telefone}?text=${msgFormatada}`; 
console.log(url); //Exibe a URL formatada no console para verificação

window.open(url, '_blank'); //URL do WhatsApp com a mensagem formatada
}
