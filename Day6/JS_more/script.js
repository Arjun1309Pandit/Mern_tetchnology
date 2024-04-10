// console.log('hello');

// const arr =[12,23,45];

// const ans = arr.forEach((a)=>{
//     console.log(a);
// });

// console.log(ans);

// maths 


// const arr =[12,23,45];
// const arr2 = [23,34,34,63.3];

// // const ans = arr.map((a)=>{
// //     console.log(a);
// //     return a*2;
// // });

// const ans3 = arr.map(a=>parseInt(a));

// console.log(ans3);


// array modification and create new array

// const arr =[23,234,56,];

// arr.push(99);
// const ans = arr.map(a=>a*2);

// const arr2 =[23,34,45,66];
// // console.log=arr.map(a=>parseInt(a));
// console.log(arr);

// console.log(ans);



// filter 
// const arr =[23,23,44,56];
// const arr2 = arr.filter((a)=>{
//     if (a%2===0){
//         return a;
//     }
// })
// console.log(arr2);


// filter array


// const arr =['delhi', 'saharanpur','chennai', 'ghaziabad','Iraq','india','pune']
// const ans = arr.filter((s)=>{
//     if(s.includes('i')|| s.includes('I')){
//         return true;
//     }
//     else false;
// });
// console.log(ans);


// 

// const arr =['delhi', 'saharanpur-india','chennai-india', 'ghaziabad-india','Iraq','indiA','pune-india','australia','china']
// const ans = arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }
//     else {
//     return false;
//     }
// });
// console.log(ans);




// 

// const arr =['delhi', 'saharanpur-india','chennai-india', 'ghaziabad-india','Iraq','indiA','pune-india','australia','china']
// const ans1 = arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }
//     else {
//     return false;
//     }
// });

// const ans2 = arr.filter((a)=>a.toLowerCase().includes('india'));

// const ans3 = arr.map((a)=>a.toUpperCase());
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);


// array reduce


// const arr=[2,3,4,5,7];
// const ans = arr.reduce((a,b)=>{
//     return a+b;
// })
// console.log(ans);

 


const arr=[22,33,44,55];
const ans= arr.reduce((total,curr)=>{
    // console.log(a,b,c,d);
    return total+curr;
});
console.log(ans);
