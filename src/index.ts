let notasAlumno: string[] = new Array(9);
notasAlumno[0] = 7; //Marzo
notasAlumno[1] = 6; //Abril
notasAlumno[2] = 9; //Mayo
notasAlumno[3] = 5; //Junio
notasAlumno[4] = 8; //Julio
notasAlumno[5] = 7; //Agosto
notasAlumno[6] = 10; //Septiembre
notasAlumno[7] = 4; //Octubre
notasAlumno[8] = 8; //Noviembre

let mesDesaprobado = function (notasAlumno: string[]) {
  for (let i = 0; i < 8; i++) {
    if (notasAlumno[i] < 6) {
      switch (i) {
        case 0: {
          console.log(
            "Desaprobó el mes de Marzo (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 1: {
          console.log(
            "Desaprobó el mes de Abril (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 2: {
          console.log(
            "Desaprobó el mes de Mayo (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 3: {
          console.log(
            "Desaprobó el mes de Junio (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 4: {
          console.log(
            "Desaprobó el mes de Julio (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 5: {
          console.log(
            "Desaprobó el mes de Agosto (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 6: {
          console.log(
            "Desaprobó el mes de Septiembre (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 7: {
          console.log(
            "Desaprobó el mes de Octubre (posición notasAlumno " + i + ")"
          );
          break;
        }
        case 8: {
          console.log(
            "Desaprobó el mes de Noviembre (posición notasAlumno " + i + ")"
          );
          break;
        }
      }
    }
  }
};
mesDesaprobado(notasAlumno);
