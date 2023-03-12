let array_alumnos = [
  { id: 1, nombre: "Alumno", apellido: "Uno" },
  { id: 2, nombre: "Alumno", apellido: "Dos" },
];
let array_calificaciones = [
  { id: 1, asignatura: "Matemáticas", calificación: 9.1 },
  { id: 1, asignatura: "Física", calificación: 7.7 },
  { id: 2, asignatura: "Inglés", calificación: 4.5 },
];

let array_res = [];
let id_alumno_aux = 1;
let suma_calificaciones_alumno = 0;
let numero_asignaturas_alumno = 0;

for (let i = 0; i < array_alumnos.length; i++) {
  if (array_alumnos[i].id == id_alumno_aux) {
    nombrecompleto = array_alumnos[i].nombre + " " + array_alumnos[i].apellido;
    for (let j = 0; j < array_calificaciones.length; j++) {
      if (array_calificaciones[j].id == id_alumno_aux) {
        suma_calificaciones_alumno += array_calificaciones[j].calificación;
        numero_asignaturas_alumno++;
      }
    }
    const alumno = new Object();
    alumno.id = id_alumno_aux;
    alumno.nombre = nombrecompleto;
    alumno.media = suma_calificaciones_alumno / numero_asignaturas_alumno;
    array_res.push(alumno);
  }
  id_alumno_aux++;
  suma_calificaciones_alumno = 0;
  numero_asignaturas_alumno = 0;
}

console.log(array_res);
