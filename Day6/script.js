// console.log('start')
// setTimeout(()=>{
//     console.log('timeout...')
// },0);
// console.log('intermediate');
// console.log('end');


// asyncronous settimeout

// setTimeout(()=>{
//     console.log('timeout 1...')
// },20000);
// console.log('start')
// setTimeout(()=>{
//     console.log('timeout 2...')
// },5000);

// console.log('intermediate');
// console.log('end'); 

// createrOrder
// makepayment
// why promises?
// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('like123')},1000);
//     setTimeout(()=>{fn('like123')},1000);

// }
// function makepayment(orderId){
//     console.log(orderId);
// }

// createOrder('soap',makepayment);



// const pr = new Promise((resolve, reject)=>{
    // if(true){
    //    setTimeout(()=>{reject ("some items are out of stock");},0); 
    // }
    // else{
    //         reject();
    // }    
// });
// setTimeout(() => {
//     console.log("first time out ...");
// }, 0);

// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log(pr);


setTimeout(function abc(){
    console.log('i am one');
},0);

const pr= new Promise((res ,rej)=>{
    setTimeout(()=>{
        res('done')
    },0);
})

pr.then(function b(res){
    console.log("promise completed :",res);
});

setTimeout(function xyz(){
    console.log("i am two");
},0);


