//isso está na parte de imput e button. O primeiro, é para atribuir valor ao imput, 
//e o segundo é para adicionar algo no button "salvar"
//quando chmar a função ele vai pegar a variável, dentro do value(só funciona no imput) e jogar no console.

function salvar (){

    var imputdoov = document.getElementById("doov").value

 
 //document é usado para pegar partes do html 
    document.getElementById("mensagem").innerText = imputdoov
}


function noturno(){
 
var textos = document.getElementsByClassName("dark")
textos[0].style = 'color: #b20000';
}



function proximo(){

var imagem = document.getElementById("dov")
imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwcgCe4yMmwXinHshIx6XOv3VBz0HvrxCR9OehwjbhhLSSdlwyeFAzEGdnujSjXY1ki0&usqp=CAU"


}
