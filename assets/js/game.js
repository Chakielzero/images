// Efecto de difuminado al hacer scroll
window.addEventListener("scroll", () => {
    const mainImage = document.querySelector("#main-image img");
    const scrollY = window.scrollY;

    if (scrollY > 150) {
        mainImage.classList.add("hidden");
    } else {
        mainImage.classList.remove("hidden");
    }
});

// Filtro de juegos por ID
function filterGames() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const games = document.querySelectorAll('.game');

    games.forEach(game => {
        const gameID = game.getAttribute('data-id').toLowerCase();
        if (gameID.includes(searchInput)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}

// Función para añadir los juegos al DOM
function addGameToGallery({id, imgSrc, altText, title, downloadLink2}) {
    const gallery = document.getElementById('gallery');
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.setAttribute('data-id', id);

    gameDiv.innerHTML = `
        <img src="${imgSrc}" alt="${altText}">
        <p>${title}</p>
        <button onclick="window.location.href='${downloadLink2}'">Qiwi</button>
    `;

    gallery.appendChild(gameDiv);
}

document.addEventListener('DOMContentLoaded', function() {
  const floatingButton = document.querySelector('.custom-floating-button');
  const modal = document.querySelector('.custom-modal');

  floatingButton.addEventListener('click', function() {
    // Verifica si el modal está abierto o cerrado
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('open');
    } else {
      modal.classList.remove('open');
      modal.classList.add('hidden');
    }
  });
});

