// secret client_id
// require('dotenv').config()
let client_id = "spWtFQ8sNrBp4gLHZ48_rRSxlXdHx5uiF7AQsU8Eixg"
// let key = process.env.CLIENT_ID

// search term 
let searchTerm = document.querySelector("#search-term")  

// page 
let page = 1 

// fetch photos 
let getData = (query) => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`)
    .then(r => r.json())
    .then(imageArray => {
    //    let max = imageArray.total_pages 

        imageArray.results.forEach(image => {
            let imageIcon = document.createElement("img")
            imageIcon.className = "display"
            imageIcon.src = image.urls.thumb
            imageCollection.append(imageIcon)
    
            modalFunctionality(imageIcon, image)
        });
        imageCollection.append(prev, next)
    })
}

// pagination 
let prev = document.createElement("button")
prev.className = "btn"
prev.innerHTML = "Previous Page"
let next = document.createElement("button")
next.className = "btn"
next.innerHTML = "Next Page"

let prevFunctionality = (query) => {
    prev.addEventListener("click", () => {
        page > 1 ? page -= 1 : page = 1 
        imageCollection.innerHTML = ""
        getData(query)
    })
}

let nextFunctionality = (query) => {
    next.addEventListener("click", () => {
        // page < max ? page += 1 : page = max 
        page += 1 
        imageCollection.innerHTML = ""
        getData(query)
    })
}

// modal 
let modalBG = document.querySelector(".modal-background")
let modal = document.querySelector(".modal")

let modalFunctionality = (imageIcon, image) => {
    imageIcon.addEventListener("click", () => {
        let closeModal = document.createElement("span")
        closeModal.className = "close"
        closeModal.innerHTML = "&times"
        let modalImage = document.createElement("img")
        modalImage.src = image.urls.regular 
        let modalCaption = document.createElement("h4")
        modalCaption.innerHTML = image.alt_description
        modal.innerHTML = ""
        modal.append(closeModal, modalImage, modalCaption)

        modal.style.display = "block"

        closeModal.addEventListener("click", () => {
            modal.style.display = "none"
        })
    })
}

// search image api
let welcome = document.querySelector(".welcome")
let searchBar = document.querySelector("#search-bar")
let imageCollection = document.querySelector(".collection")
let body = document.querySelector("body")

searchBar.addEventListener("submit", (event) => {
    event.preventDefault()
    let query = searchTerm.value 

    welcome.innerHTML = ""
    body.style.background = "gray"

    getData(query)
    event.target.reset() 

    prevFunctionality(query)
    nextFunctionality(query)
})





        

    


