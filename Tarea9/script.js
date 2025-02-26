// Función para obtener un evento aleatorio
function obtenerEventoAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 3); // Número aleatorio entre 0 y 2
  if (numeroAleatorio === 0) {
    return "Maratón";
  } else if (numeroAleatorio === 1) {
    return "Triatlón";
  } else if (numeroAleatorio === 2) {
    return "Pentatlón";
  }
}

// Función para calcular los días de entrenamiento según el evento
function calcularDiasEntrenamiento(evento) {
  let dias;
  if (evento === "Maratón") {
    dias = 50;
  } else if (evento === "Triatlón") {
    dias = 100;
  } else if (evento === "Pentatlón") {
    dias = 200;
  }
  return dias;
}

// Función para mostrar el evento del atleta
function mostrarEvento(nombre, evento) {
  console.log(`${nombre} va a participar en: ${evento}`);
}

// Función para mostrar los días de entrenamiento
function mostrarDiasEntrenamiento(nombre, dias) {
  console.log(`${nombre} necesita entrenar por ${dias} días.`);
}

// Datos del primer atleta
const nombre1 = "Nala";
const evento1 = obtenerEventoAleatorio();
const dias1 = calcularDiasEntrenamiento(evento1);

// Mostrar resultados para el primer atleta
mostrarEvento(nombre1, evento1);
mostrarDiasEntrenamiento(nombre1, dias1);

// Datos del segundo atleta
const nombre2 = "Warren";
const evento2 = obtenerEventoAleatorio();
const dias2 = calcularDiasEntrenamiento(evento2);

// Mostrar resultados para el segundo atleta
mostrarEvento(nombre2, evento2);
mostrarDiasEntrenamiento(nombre2, dias2);