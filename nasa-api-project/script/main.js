let nasaUrl= `https://api.nasa.gov/planetary/apod?api_key=tAIqfjcBTq4rgqKPRGl13X6fCcaBWu9WeW0iZznI`
let imgTitle= document.querySelector("#titleImage")
let sectionImg = document.querySelector("#spaceImg")
let explain = document.querySelector("#explanation")
let atrib= document.querySelector("#atribution")
let footImg= document.querySelector("#footerImg")

fetch(nasaUrl).then((response)=>{
   return response.json()
}).then((data)=>{
    let title= data.title
    let explanation= data.explanation
    let copyR= data.copyright
    let dateImg= data.date
    let imgUrl= data.url
       imgTitle.innerHTML= title
       sectionImg.setAttribute('src',imgUrl)
       footImg.innerHTML= ` picture date: ${dateImg}`
       explain.innerHTML= explanation
       atrib.innerHTML= `Atributions : ${copyR} `
})


