function verificar(){
    var select = document.getElementById('med')
    var triste =   'Triste'
    var zangado = 'Zangado'
    var alegre = 'Alegre'

    if(select.value == triste){
        document.body.style.background = 'purple'
    }else if(select.value == zangado){
        document.body.style.background = 'red'
    }else if(select.value == alegre){
        document.body.style.background = 'yellow'
    }
}