function removerMudarCorBotao(){
    var buttonClicado = document.querySelectorAll('.buttons_carrousel .button')
    buttonClicado.forEach(button =>{
        if(button.classList.contains('selected')){
            button.classList.remove('selected')
        }
    })
}

function adicionarCorBotao(id){
    var botao = 'btn' + id
    var procurandoBotao = document.getElementById(botao)
    procurandoBotao.classList.add('selected')
    
  
}

function removerImagem(){
    var carrouselImagens = document.querySelectorAll('.carousel .image')
    carrouselImagens.forEach(imagem =>{
        if(imagem.classList.contains('selected')){
            imagem.classList.remove('selected')
        }
    } )
}

function mudarImagem(id){
    removerImagem()
    removerMudarCorBotao()   
    var valorBotao = document.getElementById(id)
    var id = valorBotao.id
    var colocarImagem = document.getElementById(id)
    colocarImagem.classList.add('selected')
    adicionarCorBotao(id)
}
    

    
    
