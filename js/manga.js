function alertar(){
    enquete = document.getElementsByName('Poll')
    for (var i = 0; i < enquete.length; i++) {
        if (enquete[i].checked){
            alert('Obrigado por votar! Você escolheu '.concat(enquete[i].value, '.'));
        }
    }
}