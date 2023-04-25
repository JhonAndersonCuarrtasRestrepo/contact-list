
let listaContacto = {
    id: "",
    nombres: " ",
    apellidos: " ",
    telefono: "",
    ubicaciones: {
        ciudad: "",
        direccion: "",
    }
};

// Lista antes de ser modificada

console.log(listaContacto);

function agregarContacto(valorId, valorNombres, valorApellidos, valorTelefonos, valorUbicaciones, valorCiudad, valorDireccion) {

    listaContacto.id = valorId;
    listaContacto.nombres = valorNombres;
    listaContacto.apellidos = valorApellidos;
    listaContacto.telefono = valorTelefonos;
    listaContacto.ubicaciones.ciudad = valorCiudad;
    listaContacto.ubicaciones.direccion = valorDireccion;

}

agregarContacto("1", "Jhon Anderson", "Cuartas Restrepo", "3024361805", "", "Medellín", "Calle 39 - 109 # 27");

// Lista con un nombre agregado

console.log(listaContacto);
 
function eliminarContacto() {

    delete listaContacto.id;
    delete listaContacto.nombres;
    delete listaContacto.apellidos;
    delete listaContacto.telefono;
    delete listaContacto.ubicaciones.ciudad;
    delete listaContacto.ubicaciones.direccion;

};

eliminarContacto("1","Jhon Anderson","Cuartas Restrepo", "3024361805","", "Medellín", "Calle 39 - 109 # 27");

// Lista eliminada

console.log("Contacto eliminado: " + listaContacto);

// Funcion para mostrar lista

function mostrarLista() {
    console.log("Lista en consola: " + listaContacto);
}

mostrarLista();