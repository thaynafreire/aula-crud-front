'use strict'

import {
    getContatos,
    getContatosPorNome
} from "./contatos.js"


async function carregarCards(){
    const contatos = await getContatos()
    //teste
    //console.log(contatos)

    contatos.forEach(criarCard)

}

function criarCard(contato){
    const container = document.getElementById('container')
    //console.log(contato)
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
        <img src="${contato.foto}" alt="">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `

    container.appendChild(card)
}

async function carregarPesquisa (evento){
    const container = document.getElementById('container')
    if (evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren('')
        contatos.forEach(criarCard)

    }
    //console.log (evento)
}

carregarCards()

document.getElementById('nome-contato')
        .addEventListener('keydown', carregarPesquisa)