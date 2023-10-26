let listaPeliculas = [
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FmGzrnMRqMLK4IzAgmlAujUuFZmm.jpg&w=256&q=75",
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxI6MI3WjqL8cpN64zFGHgIfBFCd.jpg&w=256&q=75",
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuEkeOsy9d6jTPxHIhLXuc19qACF.jpg&w=256&q=75",
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fq8ED7O2RM5pXCafMQuBKragWqPz.jpg&w=256&q=75",
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fg1pvPm838OvIJPDXRi4sux9LJSL.jpg&w=256&q=75",
    "https://www.cuevana3.eu/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxp6dSWEeq65MFdYXH7eNQy7R27E.jpg&w=256&q=75"
];

let NombrePelis = [
    "Big Mouth",
    "Tiny Toons Looniversidad",
    "SHY",
    "El plan del diablo",
    "Spice and Wolf",
    "Seraph of the End",
];

let errorI = document.getElementById("errorI");
let errorP = document.getElementById("errorP");

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    let urlImg = document.getElementById("imagenP").value;
    let nombrePeli = document.getElementById("nombreP").value;

    if (listaPeliculas.includes(urlImg)) {
        errorI.style.color = "#E94057";
        errorI.textContent = "Esta imagen ya ha sido agregada";
        return;
    }
    errorI.textContent = '';

    listaPeliculas.push(urlImg);
    document.getElementById("imagenP").value = '';

    // 
    if (NombrePelis.includes(nombrePeli)) {
        errorP.style.color = "#E94057";
        errorP.textContent = "Esta imagen ya ha sido agregada";
        return;
    }
    errorP.textContent = '';

    NombrePelis.push(nombrePeli);
    document.getElementById("nombreP").value = '';

    // 
    if (!urlImg.textContent && !nombrePeli.textContent) {
        document.getElementById("formulario").reset();

    }

    actualizarPeliculas();

});

function actualizarPeliculas() {

    let mostrar = ""
    let n = -1;
    while (n < listaPeliculas.length - 1) {
        n++;
        mostrar += "<div>" + "<img src = " + listaPeliculas[n] + ">" + "<p>" + NombrePelis[n] + "</p>" + "</div>";

    }

    document.getElementById("peliculas").innerHTML = mostrar

}

actualizarPeliculas();

//(inicia en 0; hasta 3; incrementa uno)
/* for (let i = 0; i < listaPeliculas.length; i++) {
    document.write("<img src =" + listaPeliculas[i] + ">");
} */
//document.write("<img src =" + listaPeliculas[1] + ">");
//document.write("<img src =" + listaPeliculas[2] + ">");
