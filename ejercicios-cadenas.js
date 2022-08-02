// Una cadena de texto con tu Nombre 
nombre = "Enzo";

// Otra cadena de texto con tu Apellido
apellido = "Marin";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
numero_letras = estudiante.length;
console.log(numero_letras);

// Una variable que contenga la primera letra del Nombre
primera_letra = nombre.slice(0,1);
console.log(primera_letra);
// ...otra forma de hacerlo
primera_letra_1 = nombre.charAt(0);
console.log(primera_letra_1);

// Otra variable que contenga la última letra del Apellido
ultima_letra = apellido.slice(4,5);
console.log(ultima_letra);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
eliminar_espacios = estudiante.split(" ").join("");
console.log(eliminar_espacios);
// otra forma de hacerlo 
eliminar_espacios_2 = estudiante.replace(/ /g , "");
console.log(eliminar_espacios_2);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
existe_nombre = estudiante.includes(nombre);
console.log(existe_nombre);