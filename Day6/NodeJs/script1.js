// const figlet = require ('figlet');
// figlet ('Jai shree Ram',(err,data)=>{
//     console.log(data);
// });

// console.log('start');
// async function getapi(){
//     console.log('api calling.....');
//     const pr = await fetch('https://api.github.com/user/deepak3440');
//     console.log('making soon....');
//     const data = await pr.json();
//     console.log('::fetch data::');
// }
// getapi();
// console.log('end');

console.log('start');
async function callAPI(){
  const pr1 =new promise ((res,rej)=>{
    console.log('promise 1....');
    setTimeout(()=>{
      console.log('hello');
    },10000);
  })
  console.log ('promise 1 completed');
}
callAPI();