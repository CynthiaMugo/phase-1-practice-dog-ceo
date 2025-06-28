// const { createElement } = require("react");

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
// Add JavaScript that:on page load, fetches the images using the url above
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const container = document.getElementById("dog-image-container");


    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Cute doggo";

            container.appendChild(img)
        })
    })
    .catch(error => {
      console.error("Failed to fetch dog images:", error);
    });

// After the first challenge is completed, add JavaScript that:
//on page load, fetches all the dog breeds using the url provided
//adds the breeds to the page in the <ul> provided in index.html

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const liContainer = document.getElementById("dog-breeds");
    // console.log(liContainer);
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
            const list = document.createElement("li");
            list.textContent = breed;
            liContainer.appendChild(list);

            list.addEventListener("click", () => {
                list.style.color = "red";
            })
        })
    })
    .catch(error => {
        console.error("Failed to fetch dog images:", error);
    });

    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;

    if (selectedLetter === "all") {
        renderBreeds(allBreeds);
    } else {
        const filtered = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        renderBreeds(filtered);
    }
    });
})
