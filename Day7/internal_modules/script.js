// const fs =require('fs');
// const data = fs.readFileSync('./myreadme.txt',{encoding:'utf8'});
// console.log(data);
// console.log(data.tostring());



// const fs = require('fs');
// const data = fs.writeFileSync('./logs.txt',"10th April 2024 : Day 7");
// console.log(data);


// const fs =require('fs');
// console.log('start');
// const data = fs.readFileSync('./myreadme.txt',{encoding:'utf8'});
// console.log(data);
// console.log('end');

// promises in file system 

// const fsPromises = require ('fs/promises');
// console.log('start');
// const pr = fsPromises.readFile('./myreadme.txt',{encoding:'utf8'});
// console.log(pr)
// pr.then((res)=>{
//     console.log(res);
// })

// console.log('end');


// callback in file system
// const  fs= require ('fs')
// fs.readFile('./myreadme.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// })

// http://localhost:1400/
// const http = require ('http');
// const app =http.createServer((req , res)=>{
//     console.log("recieved!");
// });

// app.listen(1400);
 
// const {log}= require('console');
// const http = require ('http');
// const server =http.createServer((req , res)=>{
//     console.log("recieved!");
//     console.log(req.url);
//     req.WriteHed(200,{
//         'content-type':'text/html',
//     })

//     res.end();
// });

// server.listen(1400,()=>{
//     console.log('........server started.........');
// })


 
// const {log}= require('console');


// const http = require('http');
// const htmlTemplate=`
//     <!DOCTYLE HTML>
//     <html>
//     <head></head>
//     <body> __product__</body>
//     </html?
//    `
// const cardTemplate = `
//     <div clasd='product-card>
//         <h4> __TITTLE__</h4>
//         <p>__INFO__</p>
//     </div>
//    `
// const page = htmlTemplate.replace('__product__',cardTemplate);
// const server =http.createServer((req , res)=>{
//     // console.log("recieved!");
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html',
//     })

//     res.end(page);
// });

// server.listen(2000,()=>{
//     console.log('........server started.........');
// });

const http = require('http');
const htmlTemplate=`
    <!DOCTYLE HTML>
    <html>
    <head></head>
    <body> __product__</body>
    </html?
   `
const cardTemplate = `
    <div clasd='product-card>
        <h4> __TITTLE__</h4>
        <p>__INFO__</p>
    </div>
   `
   const card1=cardTemplate.replace('__TITTLE__','xiapmi note 11 pro')
   .replace('__INFO__','this is chinese mobile');
const page = htmlTemplate.replace('__product__',cardTemplate);
const server =http.createServer((req , res)=>{
    // console.log("recieved!");
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html',
    })

    res.end(page);
});

server.listen(2000,()=>{
    console.log('........server started.........');
});