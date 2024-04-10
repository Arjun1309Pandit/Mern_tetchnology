function sub(a,b){
    console.log(a-b);


}
module.exports=sub;

function sum(a,b){
    console.log(a+b);


}
module.exports={
    fn1:sub,
    fn2:sum
};

