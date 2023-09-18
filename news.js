const apikey = "572cb1b55eaf417e8fd91d15bbe322f5"
const url = "https://newsapi.org/v2/everything?q="
 const date = "2023-08-30"


let container = document.getElementById('container')
let navsearch = document.getElementById('navsearch')
let navbutton = document.getElementById('navbutton')



async function fetchnews(ne){
    container.innerHTML = ''

     const res =  await fetch(`${url}${ne}&from=${date}&apiKey=${apikey}`)
     const data = await res.json();
     console.log(data);

     for (let i = 0; i < data.articles.length; i++) {
       


        if(data.articles[i].urlToImage !== null){
        container.innerHTML += `<div class="card"><a href =${data.articles[i].url}  id = "url">
        <div class="cardheader">
            <img src=${data.articles[i].urlToImage}
                alt="">
        </div>
        <div class="cardcontaint">
            <h2 id="title">${data.articles[i].title}</h2>
            <h3 class="source" id="source"><a href = ${data.articles[i].url}> ${data.articles[i].url} </a></h3>
            <p class="newsdisc" id="newsdisc">${data.articles[i].description}</p>
        </div>
     
        </a>
        </div>

     `
        }


         
     }


}

window.addEventListener('load' ,  fetchnews("India"))

navbutton.addEventListener("click" , ()=>{
    fetchnews(navsearch.value) })



// fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-07-31&sortBy=publishedAt&apiKey=572cb1b55eaf417e8fd91d15bbe322f5')
// .then(response=>{
//     return response.json();

// }).then(json=>{
//     console.log(json);
// })
  

// axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-31&sortBy=publishedAt&apiKey=572cb1b55eaf417e8fd91d15bbe322f5')
// .then(response=>{

//     console.log(response.data);
// })
// let request = new XMLHttpRequest();
//       request.open("GET", "https://newsapi.org/v2/everything?q=tesla&from=2023-07-31&sortBy=publishedAt&apiKey=572cb1b55eaf417e8fd91d15bbe322f5");
//       request.send();
//       request.onload = () => {
//         console.log(request);
//         if (request.status === 200) {
//           // by default the response comes in the string format, we need to parse the data into JSON
//           console.log(JSON.parse(request.response));
//         } else {
//           console.log(`error ${request.status} ${request.statusText}`);
//         }
//       };