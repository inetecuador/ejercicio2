let nombreAlumno = prompt("ingrese el nombre del alumno");
let nombreMateria = prompt("ingrese el nombre de la materia");

let notas = [0, 0, 0];
for (let index = 0; index < notas.length; index++) {
    while (true) {
        let nota = Number(prompt("Ingrese la nota " + (index + 1) + ". Debe ser un valor entre 0 y 10."));

        if (nota >= 0 && nota <= 10) {
            notas[index] = nota;
            break;
        }
        else {
            alert("La nota que ingresó no es válida.");
        }
    }

}
let promedio = (notas[0] + notas[1] + notas[2]) / 3;
if (promedio >= 7)
    alert(nombreAlumno + ", ¡felicidades! Has aprobado con un promedio de " + promedio + ".");
else
    alert(nombreAlumno + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio + ".");