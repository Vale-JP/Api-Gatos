document.addEventListener('DOMContentLoaded', () => {
    const loadCatsButton = document.getElementById('loadCats');
    const gallery = document.getElementById('gallery');

    loadCatsButton.addEventListener('click', () => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(response => response.json())
            .then(data => {
                gallery.innerHTML = ''; // Clear the gallery
                data.forEach(cat => {
                    const catCard = document.createElement('div');
                    catCard.className = 'character-card';
                    catCard.innerHTML = `
                        <img src="${cat.url}" alt="Gato">
                        <h2>Gato</h2>
                        <p><a href="${cat.url}" target="_blank">Ver imagem completa</a></p> 
                    `;
                    gallery.appendChild(catCard);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar as imagens:', error);
            });
    });
});

