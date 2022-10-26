const getMovie = async () => {
  let cardHTML = "";
  try {
    const results = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c58c4e98b8b0b0c80670a21b144c44be&language=en-US&page=1")
    const pelicula = await results.json()
    const peliculArray = pelicula.results;
    for (let p = 0; p < peliculArray.length; p++) {
      cardHTML += "<li>";
       cardHTML += `<div class='containerCard'>`;
        cardHTML += `<h1>${peliculArray[p].original_title}</h1>`;
        cardHTML += `<h3>${peliculArray[p].overview}</h3>`;
      cardHTML += `<div class="flapCard" style="background-image:url('https://image.tmdb.org/t/p/w500/${peliculArray[p].backdrop_path}');">`;
      cardHTML += `${peliculArray[p].title} `;
      cardHTML += ` </div>`;
      cardHTML += `</div>`;
      cardHTML += `</li>`;
    }
    document.getElementById('peliculas').innerHTML = cardHTML
  } catch (error) {
    alert(error)
  } finally {
  }
}
const getSerie = async () => {
  let cardSeriesHTML = "";
  try {
    const results = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=c58c4e98b8b0b0c80670a21b144c44be&language=en-US&page=1")
    const series = await results.json()
    const seriesArray = series.results;
    for (let p = 0; p < seriesArray.length; p++) {
      cardSeriesHTML += "<li>";
       cardSeriesHTML += `<div class='containerCard'>`;
        cardSeriesHTML += `<h1>${seriesArray[p].name}</h1>`;
        cardSeriesHTML += `<h3>${seriesArray[p].overview}</h3>`;
      cardSeriesHTML += `<div class="flapCard" style="background-image:url('https://image.tmdb.org/t/p/w500/${seriesArray[p].backdrop_path}');">`;
      cardSeriesHTML += `${seriesArray[p].name} `;
      cardSeriesHTML += ` </div>`;
      cardSeriesHTML += `</div>`;
      cardSeriesHTML += `</li>`;
    }
    document.getElementById('series').innerHTML = cardSeriesHTML;

  } catch (error) {
    alert("Series tiene un problema:" + error)
  } finally {
  }
}

const getPopular = async () => {
  let carrucelHTML = ""
  try {
    const results = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=c58c4e98b8b0b0c80670a21b144c44be")
    const Populares = await results.json()
    const PopularesArray = Populares.results;
    for (let s = 0; s < PopularesArray.length; s++) {
      carrucelHTML += `<section class="contenido-slider background" style="background-image: url('https://image.tmdb.org/t/p/original/${PopularesArray[s].backdrop_path}');">`;
      carrucelHTML += `<div class="cardCarrucel">`;
      carrucelHTML += `<div class="ContenedorCarrucelTexto">`;
      carrucelHTML += `<h2>${PopularesArray[s].title}</h2>`;
      carrucelHTML += `<p>${PopularesArray[s].overview}</p>`;
      carrucelHTML += ` <a href="#">Ver mas</a>`;
      carrucelHTML += ` </div>`;
      carrucelHTML += `</div>`;
      carrucelHTML += `</section>`;
    }
    document.getElementById('carrucelArmado').innerHTML = carrucelHTML
    console.log(PopularesArray)
  } catch (error) {
    alert(error)

  } finally {
    let slider = document.querySelector(".slider-contenedor")
    let sliderIndividual = document.querySelectorAll(".contenido-slider")
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 5000;

    window.addEventListener("resize", function () {
      width = sliderIndividual[0].clientWidth;
    })

    const indSlideContador = sliderIndividual.length;
    if (indSlideContador == 1) {
    } else {
      setInterval(function () {
        slides();
      }, intervalo);
    }
    function slides() {
      slider.style.transform = "translate(" + (-width * contador) + "px)";
      slider.style.transition = "transform .5s";
      contador++;
      if (contador == indSlideContador) {
        setTimeout(function () {
          slider.style.transform = "translate(1px)";
          slider.style.transition = "transform .5s";
          contador = 1;
        }, intervalo)
      }
    }
  }
}
getSerie()
getPopular()
getMovie()

