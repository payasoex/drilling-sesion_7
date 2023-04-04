function suma(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

function resta(numero1, numero2) {
  let resultado = numero1 - numero2;
  return resultado;
}

function multiplicacion(numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
}

function division(numero1, numero2) {
  let resultado = numero1 / numero2;
  return resultado;
}

function App() {
  let seleccion = parseInt(
    prompt(
      "Seleccione una de las siguientes opciones:\n1.- Calcular cual es mayor\n2.-Sumar\n3.- Restar\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar los numeros ingresados\n7.- Salir"
    )
  );

  if (seleccion >= 1 && seleccion <= 6) {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));

    switch (seleccion) {
      case 1:
        if (numero1 < numero2) {
          alert(`${numero1} es menor que ${numero2}`);
        } else if (numero1 > numero2) {
          alert(`${numero1} es mayor que ${numero2}`);
        } else {
          alert("Ambos numeros son iguales");
        }
        App();
        break;

      case 2:
        alert(
          `La suma de los numeros ${numero1} y ${numero2} es ${suma(
            numero1,
            numero2
          )}`
        );
        App();
        break;

      case 3:
        alert(
          `La resta de los numeros ${numero1} y ${numero2} es ${resta(
            numero1,
            numero2
          )}`
        );
        App();
        break;

      case 4:
        alert(
          `La multiplicacion de los numeros ${numero1} y ${numero2} es ${multiplicacion(
            numero1,
            numero2
          )}`
        );
        App();
        break;

      case 5:
        if (numero2 === 0) {
          numero2 = parseInt(prompt("Ingrese el segundo número"));
          alert(
            `La division de los numeros ${numero1} y ${numero2} es ${division(
              numero1,
              numero2
            )}`
          );
        } else {
          alert(
            `La division de los numeros ${numero1} y ${numero2} es ${division(
              numero1,
              numero2
            )}`
          );
        }
        App();
        break;

      case 6:
        alert(`Los numeros ingresados son  ${numero1} y ${numero2}`);
        App();
        break;
    }
  } else if (seleccion === 7) {
    alert("Gracias por participar");
  } else {
    alert("Por favor ingresar una opcion valdida");
    App();
  }
}

App();