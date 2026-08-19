const fs = require("node:fs");
const path = require("node:path");

console.log("Versión de Node.js:", process.version);
console.log("Plataforma:", process.platform);

const nombre = process.argv[2] ?? "Estudiante";

const videojuego = {
titulo: "Call of Duty: Modern Warfare II",
estudio: "Infinity Ward",
anio: 2022,
plataformas: ["PC", "PlayStation", "Xbox"],
multijugador: true,
};

const platformATexto = videojuego.plataformas.join(", ");
const multijug = videojuego.multijugador ? "Si" : "No";

const ficha = `FICHA DE VIDEOJUEGO
=================
Título: ${videojuego.titulo}
Estudio Desarrollador: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${platformATexto}
Multijugador: ${multijug}
`;

const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);