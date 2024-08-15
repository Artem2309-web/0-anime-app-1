
// searchAnime
async function searchAnime() {
  const query = document.getElementById('searchInput').value;
  const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
  const data = await response.json();
  console.log(data);
  displayAnime(data.data);
};

function displayAnime(animeList) {
  const animeListContainer = document.getElementById('animeList');
  animeListContainer.innerHtml = '';

  animeList.forEach(anime => {
    const animeItem = document.createElement('div');
    animeItem.classList.add('anime-item');
  
    const title = anime.attributes.canonicalTitle;
    const synopsis = anime.attributes.synopsis;
    const rating = anime.attributes.ageRating;
    const episodeCount = anime.attributes.episodeCount;
    const posterImage = anime.attributes.posterImage.original;
  
    animeItem.innerHTML = `
      <img src="${posterImage}" alt="${title}">
      <h3>${title}</h3>
      <p>${synopsis}</p>
      <span>Рейтинг: ${rating}</span>
      <span>Эпизодов: ${episodeCount}</span>
    `;
  
    animeListContainer.appendChild(animeItem);
  });
}