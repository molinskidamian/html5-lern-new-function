const addMovieBtn = document.querySelector('#addMovie');
const movies = [{
  title: 'Rambo',
  description: 'Pierwsza krew',
  dateStart: '2021-02-12',
  dateEnd: '2021-05-30',
  genre: 'Comedy',
  rating: 5,
}];
const form = document.querySelector('#addMovieForm');
const playlist = document.querySelector('.playlist');

function makeCard(movie) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('style', 'width: 18rem');
  wrapper.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute('src', '');
  img.setAttribute('alt', '');
  img.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');

  const cardTitleText = document.createTextNode(movie.title);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  const cardTextDescription = document.createTextNode(movie.description);

  const aText = document.createTextNode('Szczegóły');
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  a.classList.add('btn', 'btn-primary');
  a.appendChild(aText);

  wrapper.appendChild(img);
  wrapper.appendChild(cardBody);
  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  cardText.appendChild(cardTextDescription);
  cardBody.appendChild(cardText);
  cardBody.appendChild(a);

  playlist.appendChild(wrapper);
}

function addMovieToDb(e) {
  e.preventDefault();
  const title = form.title.value;
  const description = form.description.value;
  const dateStart = form.dateStart.value;
  const dateEnd = form.dateEnd.value;
  const genre = form.genre.value;
  const rating = form.rating.value;

  movies.push({
    title,
    description,
    dateStart,
    dateEnd,
    genre,
    rating,
  });

  if (movies.length != 0) {
    movies.forEach((el) => {
      makeCard(el);
    });
  }
}
addMovieBtn.addEventListener('click', addMovieToDb, false);

console.log(`Tablica movies posiada: ${movies.length} elementów`);

(function () {
  movies.forEach((el) => {
    makeCard(el);
  });
}());
