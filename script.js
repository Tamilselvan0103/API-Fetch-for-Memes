async function imgFlip(){
try{
  
let img = await fetch("https://api.imgflip.com/get_memes")
let response = await img.json();
let info = response.data.memes
// console.log(response)
// console.log(response.data.memes[0])
info.forEach((element) => {
  
  displayInfo(element)
});
}catch(error)
{
  console.log(error)
}
}
imgFlip()

function displayInfo(element){
  let col = document.getElementById("mainrow")
  col.innerHTML +=`
  <div class = "container col-sm" id = "main">
  <div class="card" style="width: 18rem; height :30rem;" id ="maincard">
  <img src="${element.url}" class="card-img-top img-thumbnail" id="img"alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text"><span>Box_count : </span>${element.box_count}</p>
    <p class="card-text"><span>Width : </span>${element.width}</p>
    <p class="card-text"><span>Height : </span>${element.height}</p>
  </div>
  </div>
  </div>
  
  
  `
}