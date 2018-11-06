function guardarDatos (){
    var nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre',nombre);
    var apellidos = document.getElementById('apellidos').value;
    localStorage.setItem('apellidos',apellidos);
    var telefono = document.getElementById('telefono').value;
    localStorage.setItem('telefono',telefono);
    var usuario = document.getElementById('usuario').value;
    localStorage.setItem('usuario',usuario);
    var password = document.getElementById('password').value;
    localStorage.setItem('password', password);
    var repeatpass = document.getElementById('repeatpass').value;
    localStorage.setItem('repeatpass', repeatpass);
}