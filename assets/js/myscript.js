//variabler bliver deklareret
const start_url = 'https://dog.ceo/api/breed/hound/afghan/images'
let imgEle = document.getElementById('imgEle')
let data;
let count = 0;
let countMinus = document.getElementById('minus')
let countPlus = document.getElementById('plus')
let breedselect = document.getElementById('breeds')
let dogtitel = document.getElementById('dogtitel')

//async fetch function bliver kaldt med getDogs
function getDogs(url){
    fetch(url)
    .then(res => res.json())
    .then(json => save(json))
}
//save function der bliver kaldt efter fetch function og sætter src på imgEle med count som mulighed for at plus og minus index i array med billeder
function save(result) {
    data = result
    imgEle.src = data.message[count]
}
//getDog bliver kaldt med start_url
getDogs(start_url)

//setSrc function der sætter sti for billedet
function setSrc() {
    imgEle.src = data.message[count]
}
//click event på countPlus button der giver count + 1 og kalder setSrc function
countPlus.addEventListener("click",()=>{
    count = count+1
    setSrc()
})
//click event på countMinus button der giver count - 1 og kalder setSrc function
countMinus.addEventListener("click",()=>{
    count = count-1
    setSrc()
})
//onchange event på breedselect der ændre breed_url ud fra select option og kører getDogs med breed_url herefter bliver dogtitel sat med select option
breedselect.addEventListener("change", ()=>{
    breed_url = 'https://dog.ceo/api/breed/hound/'+breedselect.value+'/images'
    getDogs(breed_url)
    dogtitel.innerText ='Showing '+ breedselect.value + ' dogs'
})


