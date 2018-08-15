function iniciarSesion(){
    var email = document.getElementById('txtEmailInicio').value
    var contraseña = document.getElementById('txtContraseñaInicio').value

    if(email != '' && contraseña != ''){
        alert("El usuario " + email + " inicio sesion")
    }
}