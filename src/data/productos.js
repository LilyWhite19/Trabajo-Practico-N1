const productos = [
 {
 id: 1,
 nombre: "The Last of Us",
 categoria: ["Accion", "Aventura", "Terror"],
 precio: 10999,
 imagen: "../the-last-of-us.png",
 descripcion: "Juego de Survival Horror, con accion y sigilo, entretenido y con una historia conmovedora",
 historia: "The Last of Us es un juego de acción y aventura desarrollado por Naughty Dog y publicado por Sony Computer Entertainment. La historia sigue a Joel, un hombre endurecido por la vida, y Ellie, una joven que podría ser la clave para salvar a la humanidad de una infección mortal. Juntos, deben atravesar un Estados Unidos post-apocalíptico lleno de peligros y enemigos, mientras desarrollan un vínculo profundo y emocional.",
 nota: 10,
 stock: true
 },
 {
 id: 2,
 nombre: "Mortal Kombat 11",
 categoria: ["Accion", "Lucha"],
 precio: 19999,
 imagen: "../mortal-kombat-11.png",
 descripcion: "Juego de lucha en línea con una gran variedad de personajes y modos de juego.",
 historia: "Mortal Kombat 11 es un juego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. La historia sigue a los luchadores del torneo Mortal Kombat mientras se enfrentan a una nueva amenaza que pone en peligro el universo. Los jugadores pueden elegir entre una amplia variedad de personajes, cada uno con sus propios movimientos y habilidades especiales, para luchar en intensos combates uno contra uno.",
 stock: true
 },
 {
 id: 3,
 nombre: "FC 27",
 categoria: ["Deportes", "Futbol"],
 precio: 29999,
 imagen: "../fc-27.png",
 descripcion: "Juego de fútbol con una gran variedad de equipos y modos de juego.",
 historia: "FC 27 es un juego de fútbol desarrollado por EA Sports y publicado por Electronic Arts. La historia sigue a los jugadores mientras compiten en ligas y torneos de fútbol, enfrentándose a equipos de todo el mundo. Los jugadores pueden personalizar sus equipos, mejorar sus habilidades y participar en emocionantes partidos en línea o fuera de línea.",
 stock: true
 },
 {
 id: 4,
 nombre: "Elder Ring",
 categoria: ["RPG", "Aventura"],
 precio: 32999,
 imagen: "../elden-ring.png",
 descripcion: "Juego de rol de aventura con una gran variedad de habilidades y modos de juego.",
 historia: "Elden Ring es un juego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. La historia se desarrolla en un mundo abierto llamado The Lands Between, donde los jugadores asumen el papel de un personaje conocido como el 'Tarnished'. Los jugadores deben explorar vastos paisajes, enfrentarse a enemigos desafiantes y descubrir los secretos del Elden Ring para restaurar el orden en el reino.",
 stock: false
 },
 {
 id: 5,
 nombre: "Minecraft",
 categoria: ["Aventura", "Mundo abierto"],
 precio: 3000,
 imagen: "../minecraft.png",
 descripcion: "Juego de mundo abierto con construcción y exploración.",
 historia: "Minecraft es un juego de mundo abierto desarrollado por Mojang Studios. La historia sigue a los jugadores mientras construyen y exploran un mundo generado aleatoriamente, lleno de recursos y criaturas. Los jugadores pueden crear estructuras, explorar biomas diferentes y participar en actividades cooperativas o competitivas.",
 stock: true
 },
 {
 id: 6,
 nombre: "Grand Theft Auto V",
 categoria: ["Accion", "Aventura", "Mundo abierto"],
 precio: 15999,
 imagen: "../grand-theft-auto-v.png",
 descripcion: "Juego de acción y aventura con un mundo abierto.",
 historia: "Grand Theft Auto V es un juego de acción y aventura desarrollado por Rockstar Games. La historia sigue a tres personajes principales: Michael De Santa, Franklin Clinton y Trevor Philips, mientras se enfrentan a los desafíos del mundo de Los Santos.",
 stock: true
 },
 {
 id: 7,
 nombre: "The Witcher 3: Wild Hunt",
 categoria: ["RPG", "Aventura"],
 precio: 5999,
 imagen: "../the-withcher-3.png",
 descripcion: "Juego de rol de aventura con una gran variedad de habilidades y modos de juego.",
 historia: "The Witcher 3: Wild Hunt es un juego de rol de aventura desarrollado por CD Projekt RED. La historia sigue a Geralt de Rivia, un cazador de monstruos conocido como el 'Whiterun', mientras intenta encontrar a su hija adoptiva, Ciri. Los jugadores pueden explorar un mundo abierto lleno de personajes, misiones y decisiones que afectan el desarrollo de la historia.",
 stock: true
 },
 {
 id: 8,
 nombre: "F1 2024",
 categoria: ["Carreras", "Simulación"],
 precio: 2999,
 imagen: "../f1-2024.png",
 descripcion: "Juego de simulación de fórmula 1 con una gran variedad de circuitos y modos de juego.",
 historia: "F1 2024 es un juego de simulación de fórmula 1 desarrollado por Codemasters. La historia sigue a los pilotos mientras compiten en una serie de circuitos del mundo, enfrentándose a desafíos técnicos y tácticos para ganar la carrera.",
 stock: true
 },
 {
 id: 9,
 nombre: "God of War Ragnarok",
 categoria: ["Accion", "Aventura"],
 precio: 35999,
 imagen: "../god-of-war-ragnarok.png",
 descripcion: "Juego de acción y aventura con un mundo abierto.",
 historia: "God of War Ragnarok es un juego de acción y aventura desarrollado por Santa Monica Studio. La historia sigue a Kratos y su hijo Atreus mientras navegan por los reinos de Midgard, Jotunheim y otros lugares, enfrentándose a desafíos y enemigos en su viaje.",
 stock: false
 },
 {
 id: 10,
 nombre: "Resident Evil Village",
 categoria: ["Terror", "Aventura"],
 precio: 21999,
 imagen: "../resident-evil-village.png",
 descripcion: "Juego de terror y aventura con una gran variedad de habilidades y modos de juego.",
 historia: "Resident Evil Village es un juego de terror y aventura desarrollado por Capcom. La historia sigue a Ethan Winters mientras intenta sobrevivir en un pueblo aislado lleno de criaturas monstruosas y peligrosas.",
 stock: false
 },
 {
 id: 11,
 nombre: "Dark Souls III",
 categoria: ["RPG", "Aventura"],
 precio: 14999,
 imagen: "../dark-souls-3.png",
 descripcion: "Juego de rol de aventura con una gran variedad de habilidades y modos de juego.",
 historia: "Dark Souls III es un juego de rol de aventura desarrollado por FromSoftware. La historia sigue a un personaje conocido como el 'Tarnished' mientras explora un mundo oscuro y desafiante, enfrentándose a enemigos poderosos y desafíos tácticos.",
 stock: true
 },
 {
 id: 12,
 nombre: "Hades",
 categoria: ["RPG", "Aventura"],
 precio: 12999,
 imagen: "../hades.png",
 descripcion: "Juego de rol de aventura con una gran variedad de habilidades y modos de juego.",
 historia: "Hades es un juego de rol de aventura desarrollado por Supergiant Games. La historia sigue a Persephone, la hija del dios del inframundo Hades, mientras intenta escapar de su padre y encontrar su camino hacia la libertad.",
 stock: true
 }
];

export default productos;
