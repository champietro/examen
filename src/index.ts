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

let mesMenorNota = function (notasAlumno: string[]) {
  let menor: number;
  menor = mesMenorNota[0];
  mes = number;
  for (let i = 0; i < 8; i++) {
    if (menor > mesMenorNota[i]) {
      menor = Number(mesMenorNota[i]);
      mes = i;
    }
  }

  switch (i) {
    case 0: {
      console.log("Mes Marzo. Nota: " + menor);
      break;
    }
    case 1: {
      console.log("Mes Abril. Nota: " + menor);
      break;
    }
    case 2: {
      console.log("Mes Mayo. Nota: " + menor);
      break;
    }
    case 3: {
      console.log("Mes Junio. Nota: " + menor);
      break;
    }
    case 4: {
      console.log("Mes Julio. Nota: " + menor);
      break;
    }
    case 5: {
      console.log("Mes Agosto. Nota: " + menor);

      break;
    }
    case 6: {
      console.log("Mes Septiembre. Nota: " + menor);

      break;
    }
    case 7: {
      console.log("Mes Octubre. Nota: " + menor);

      break;
    }
    case 8: {
      console.log("Mes Noviembre. Nota: " + menor);

      break;
    }
  }
};

let mesMayorNota = function (notasAlumno: string[]) {
  let mayor: number;
  mayor = mesMenorNota[0];
  mes = number;
  for (let i = 0; i < 8; i++) {
    if (mayor < mesMenorNota[i]) {
      mayor = Number(mesMenorNota[i]);
      mes = i;
    }
  }

  switch (i) {
    case 0: {
      console.log("Mes Marzo. Nota: " + mayor);
      break;
    }
    case 1: {
      console.log("Mes Abril. Nota: " + mayor);
      break;
    }
    case 2: {
      console.log("Mes Mayo. Nota: " + mayor);
      break;
    }
    case 3: {
      console.log("Mes Junio. Nota: " + mayor);
      break;
    }
    case 4: {
      console.log("Mes Julio. Nota: " + mayor);
      break;
    }
    case 5: {
      console.log("Mes Agosto. Nota: " + mayor);

      break;
    }
    case 6: {
      console.log("Mes Septiembre. Nota: " + mayor);

      break;
    }
    case 7: {
      console.log("Mes Octubre. Nota: " + mayor);

      break;
    }
    case 8: {
      console.log("Mes Noviembre. Nota: " + mayor);

      break;
    }
  }
};

let promedio = function (notasAlumno: string[]) {
  let promedio: number;
  promedio = 0;
  for (let i = 0; i < 8; i++) {
    promedio = promedio + Number(notasAlumno[i]);
  }
  promedio = promedio / 9;
  console.log("Elpromedio es: " + promedio);
};

mesDesaprobado(notasAlumno);
mesMenorNota(notasAlumno);
mesMayorNota(notasAlumno);
promedio(notasAlumno);
