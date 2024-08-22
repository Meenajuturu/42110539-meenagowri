document.addEventListener('DOMContentLoaded', () => {
    const genreInput = document.getElementById('genre');
    const resultsDiv = document.getElementById('results');
    
    genreInput.addEventListener('input', () => {
        const genre = genreInput.value.trim();
        
        if (genre.length > 0) {
            fetch(`ajax.php?genre=${encodeURIComponent(genre)}`)
                .then(response => response.json())
                .then(data => {
                    resultsDiv.innerHTML = '';
                    
                    if (data.length > 0) {
                        const ul = document.createElement('ul');
                        data.forEach(movie => {
                            const li = document.createElement('li');
                            li.textContent = movie;
                            ul.appendChild(li);
                        });
                        resultsDiv.appendChild(ul);
                    } else {
                        resultsDiv.textContent = 'No movies found.';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            resultsDiv.innerHTML = '';
        }
    });
});
