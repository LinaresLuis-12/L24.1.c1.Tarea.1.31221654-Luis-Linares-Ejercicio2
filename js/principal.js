const estudiantes = [
    { cedula: 13457856, sexo: 'M', notas: [15, 20, 25] },
    { cedula: 15432551, sexo: 'F', notas: [10, 10, 10] },
    { cedula: 32455678, sexo: 'M', notas: [18, 22, 20] },
    { cedula: 28678900, sexo: 'F', notas: [18, 25, 24] }
];

function obtenerNotaTotal(notas) {
    return notas.reduce((total, nota) => total + nota, 0);
}

// a) Nota total obtenida por cada estudiante
const notasTotales = estudiantes.map(estudiante => obtenerNotaTotal(estudiante.notas));

// b) Mayor nota obtenida
const mayorNota = Math.max(...notasTotales);

// c) Cantidad de estudiantes femeninas aprobadas
const estudiantesAprobadas = estudiantes.filter(estudiante => estudiante.sexo === 'F' && obtenerNotaTotal(estudiante.notas) >= 48);
const cantidadEstudiantesAprobadas = estudiantesAprobadas.length;

// d) Promedio de notas
const totalNotas = estudiantes.reduce((total, estudiante) => total + obtenerNotaTotal(estudiante.notas), 0);
const promedioNotas = totalNotas / estudiantes.length;

let salida = document.getElementById("salida");

salida.innerHTML = "Resultados:";

estudiantes.forEach((estudiante, index) => {
    salida.innerHTML += `<br>El estudiante con cedula ${estudiante.cedula} obtuvo una nota total de: ${notasTotales[index]}`;
});

salida.innerHTML += `<br><br>La mayor nota es: ${mayorNota}`;
salida.innerHTML += `<br>Estudiantes femeninas aprobadas: ${cantidadEstudiantesAprobadas}`;
salida.innerHTML += `<br>Promedio de notas: ${promedioNotas}`;