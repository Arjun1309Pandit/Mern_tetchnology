console.log("...APP started...");

function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=215d66f4e50d45839ace59055771f9cd")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        renderUI(data);
    })
}

// callAPI()

function renderUI(data){
    
    // console.log(articles);
    const root =document.getElementById("root");
    const articles=data.articles;
    for(let i=0; i<articles.length;i++){
    const ar = articles[i];
    
    const div =document.createElement("div");
    div.setAttribute("class","news-card");
    // root.appendChild(div);

    const h3 = document.createElement("h3");
    div.innerText=ar.title;
    div.appendChild(h3);

    const img = document.createElement("img");
    img.src = ar.urlToImage;
    // div.appendChild(h3);
    div.appendChild(img);

    root.appendChild(div);
}
}
callAPI();

// console.log("APP started");

// const url = "https://newspi.org/v2/top-headlines?country=in&apikey=215d66f4e50d45839ace59055771f9cd";
// function callAPI() {
//   fetch(url)
//   .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById("joke").innerHTML = data.articles[0].description;
//     })
// }
// function renderUI(){
//     const root = document.getElementById("root");
//     const div= document.createElement("div");
//     div.innerText="card";
//     root.appendChild(div);
// }
// renderUI();