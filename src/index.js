// make secret later 
let client_id = "spWtFQ8sNrBp4gLHZ48_rRSxlXdHx5uiF7AQsU8Eixg"

// search image api
let searchBar = document.querySelector("#search")
let query = document.querySelector("#query") 
let imageDisplay = document.querySelector("#collection")

searchBar.addEventListener("submit", (event) => {
    event.preventDefault()

    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query.value}`)
    .then(r => r.json())
    .then(imageArray => {
        imageArray.results.forEach(image => {
            let imageIcon = document.createElement("img")
            imageIcon.src = image.urls.thumb
            imageDisplay.append(imageIcon)
        });
    })

    event.target.reset() 
})
