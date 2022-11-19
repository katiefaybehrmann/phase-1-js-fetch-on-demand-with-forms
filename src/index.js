const init = () => {
    const inputForm = document.querySelector('form');
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    const input = document.querySelector('input#searchByID');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value< 1 || input.value >3){
            title.textContent = "Select a move from the list"
            summary.textContent = "PLEASE!"
        }

        else if (1 <= input.value <= 3) {
            fetch(`http://localhost:3000/movies/${input.value}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    title.innerText = data.title;
                    summary.innerText = data.summary;
                });
        }
        

    })

}

document.addEventListener('DOMContentLoaded', init);