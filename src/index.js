// make secret later 
let client_id = "spWtFQ8sNrBp4gLHZ48_rRSxlXdHx5uiF7AQsU8Eixg"

// search term 
let query = document.querySelector("#query") 

// page 
let page = 1 

// fetch photos 
let getData = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query.value}&page=${page}`)
    .then(r => r.json())
    .then(imageArray => {
    //    let max = imageArray.total_pages 

        imageArray.results.forEach(image => {
            let imageIcon = document.createElement("img")
            imageIcon.className = "display"
            imageIcon.src = image.urls.thumb
            imageDisplay.append(imageIcon)
    
            modalFunctionality(imageIcon, image)
        });
        imageDisplay.append(prev, next)
    })
}

// pagination 
let prev = document.createElement("button")
prev.className = "btn"
prev.innerHTML = "Previous Page"
let next = document.createElement("button")
next.className = "btn"
next.innerHTML = "Next Page"

let prevFunctionality = () => {
    prev.addEventListener("click", () => {
        page > 1 ? page -= 1 : page = 1 
        getData()
        console.log(page)
    })
}
prevFunctionality()

let nextFunctionality = () => {
    next.addEventListener("click", () => {
        // page < max ? page += 1 : page = max 
        page += 1 
        getData()
        console.log(page)
    })
}
nextFunctionality()

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
let welcome = document.querySelector(".search-bar")
let searchBar = document.querySelector("#search")
let imageDisplay = document.querySelector(".collection")
let body = document.querySelector("body")

searchBar.addEventListener("submit", (event) => {
    event.preventDefault()

    welcome.innerHTML = ""
    body.style.background = "gray"

    getData()
    event.target.reset() 
})





        

    


