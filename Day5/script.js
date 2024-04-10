// console.log("Arjun Pandit");

// const animal=["dog","cat"];
// animal.pop("cat");
// console.log(animal);


// let arr=[2,e 23, 24, 25];
// function printArray(arr){
//     for ( let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// printArray(arr);

// let arr=[2, 23, 24, 25];
// function printArray(elem){
//     console.log(":",elem);
// }
//     function printArray(arr){
//     for ( let i=0; i<arr.length; i++){
//         printArray(arr[i]);
//     }
//     arr.forEach(printPretty);
// }

// printArray(arr);

// function printpreety(elem){
//     console.log("hello",elem);
// }

// setTimeout(printpreety,10000);

// console.log('GEC Start');

// function printPreety(){
//     console.log('prettyStart');
//     let ans=2+3;
//     console.log(ans);
//     console.log('preetyEnd');
// }

// setTimeout(printPreety,10000);
// console.log('GEC End');

// const btn =document.getElementById('btn');
// btn.addEventListener("click",printpreety);
// Comsol.console.log('start');
// const req =fetch ("https://api.github.com/users/'ArjunPandit'");
// console.log(req);
// req.then(()=>console.log('fetched'));
// console.log('end');

// console.log('start');
// const req = fetch('https://dummyjson.com/products/1')

// const res = req.then(res => res.json())

// res.then((data) => console.log(data));

// console.log('end')

console.log('start');
const req = fetch('https://dummyjson.com/products/1')

    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err=>{
        console.log("error occurd in fetch");
    });

console.log('end');
