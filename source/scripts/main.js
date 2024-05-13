document.getElementById('formSorteio').addEventListener('submit', function(event) {
    event.preventDefault();
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo);

    let intervalId = setInterval(function(){
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
    
        document.getElementById('ganhador').innerText = numeroAleatorio;
        document.querySelector('#resultado').style.display = 'block';
    },100);

    setTimeout(function(){
        clearInterval(intervalId);
    },5000)
});
