let elList = document.querySelector(".card__wraper")
let elTemplate = document.querySelector(".templed").content
let elForm = document.querySelector(".form")
let elFormInput = document.querySelector(".form__input")
let prevBtn = document.querySelector(".prev__btn")
let nextBtn = document.querySelector(".next__btn")


let count = 1
nextBtn.addEventListener("click", () => {
    count++
    fatchData()
})

nextBtn.addEventListener("click", () => {
  if(count < 0){
    prevBtn.style.color = "red"
  }
})


function renderArr(arr, List) {
    List.innerHTML = null
    arr.map(item => {

        let cloneTemplate = elTemplate.cloneNode(true)
        let cardimg = cloneTemplate.querySelector(".img")
        let cardtitle = cloneTemplate.querySelector(".title")
        let cardYear = cloneTemplate.querySelector(".year")



        cardimg.src = item.Poster
        cardtitle.textContent = item.Title
        cardYear.textContent = item.Year
        List.appendChild(cloneTemplate)
    })
}

// let rec = new webkitSpeechRecognition()


// rec.lang = "en-En"

// rec.onerror = (e) => {
//     console.log(e, "error");
// }


// rec.onresult = (e) => {
//     let speach = e.results[0][0].transcript


//     fetch(`http://www.omdbapi.com/?apikey=b6ac1f86&s=${speach}`)
//         .then(res => res.json())
//         .then(data => renderArr(data.Search, elList))

// }

// function searchFilms() {
//     rec.start()
// }

elForm.addEventListener("submit", e => {
    e.preventDefault()
    let inputValue = elFormInput.value.trim()

    if (inputValue != "") {
        elFormInput.style.borderBottom = "1px solid grey"

        fetch(`http://www.omdbapi.com/?apikey=b6ac1f86&s=${inputValue}`)
            .then(res => res.json())
            .then(data => renderArr(data.Search, elList))
    } else {
        elFormInput.style.borderBottom = "1px solid red"
    }

})


function fatchData() {

    elList.innerHTML = "<img src='api.gif'/>"

    fetch(`http://www.omdbapi.com/?apikey=b6ac1f86&s=spider&page=${count}`)
        .then(res => res.json())
        .then(data => renderArr(data.Search, elList))
        renderArr(data.Search, elList)

}

fatchData()