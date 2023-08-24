var movies = [
    { title: 'Action', genre: 'action', poster: 'action.jpg' },
    { title: 'Comedy', genre: 'comedy', poster: 'comedy.webp' },
    { title: 'Drama', genre: 'drama', poster: 'drama.jpeg' },
    { title: 'Friction', genre: 'Friction', poster: 'friction.jpeg' },
    { title: 'Romantic', genre: 'Romantic', poster: 'romanc.jpeg' },
    // Add more movies here
];
var movies = [
    { title: 'Action', genre: 'action', poster: 'action.jpg' },
    { title: 'Comedy', genre: 'comedy', poster: 'comedy.webp' },
    { title: 'Drama', genre: 'drama', poster: 'drama.jpeg' },
    { title: 'Friction', genre: 'Friction', poster: 'friction.jpeg' },
    { title: 'Romantic', genre: 'Romantic', poster: 'romanc.jpeg' },
    // Add more movies here
];





// Function to display movies
function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterGenre = document.getElementById('filter').value;

    movies.forEach(movie => {
        if ((filterGenre === 'all' || movie.genre === filterGenre) &&
            (movie.title.toLowerCase().includes(searchInput))) {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            const image = document.createElement('img');
            image.src = movie.poster;
            image.alt = movie.title;
            const title = document.createElement('h2');
            title.textContent = movie.title;
            movieDiv.appendChild(image);
            movieDiv.appendChild(title);
            movieList.appendChild(movieDiv);
        }
    });

}

// Event listeners for search and filter
document.getElementById('search').addEventListener('input', displayMovies);
document.getElementById('filter').addEventListener('change', displayMovies);

// Initial display
displayMovies();

// Function to display movies
function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterGenre = document.getElementById('filter').value;

    movies.forEach(movie => {
        if ((filterGenre === 'all' || movie.genre === filterGenre) &&
            (movie.title.toLowerCase().includes(searchInput))) {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            const image = document.createElement('img');
            image.src = movie.poster;
            image.alt = movie.title;
            const title = document.createElement('h2');
            title.textContent = movie.title;
            movieDiv.appendChild(image);
            movieDiv.appendChild(title);
            movieList.appendChild(movieDiv);
        }
    });

}

// Event listeners for search and filter
document.getElementById('search').addEventListener('input', displayMovies);
document.getElementById('filter').addEventListener('change', displayMovies);

// Initial display
displayMovies();

