const fisrtNamechange = (e) => {
    console.log(e.target.value);
    if (val.lengtht) {
        console.log('correct');
    }
}

// function submitForm(e){
//     e.preventDefault(event);
//     const t =e.target;
//     for(let i=0; i<t.length; i++){
//         console.dir(t[i].value);
//         console.dir(t[i].type);
//     }

// }

// function submitForm(e) {
//     e.preventDefault();
//     const t = e.target;
//     const res = {
//         hobbies: [],
//     };
//     for (let i = 0; i < t.length; i++) {
        
//         const ty = t[i].type;
//         if (ty != 'submit') {
//             const vl = t[i].value;
//             const nm = t[i].name;
//         }
        
//         if (ty == 'checkbox' && t[i].checked) {
//             {
//                 res.hobbies.push(vl);
//             }
            
//             if (ty !== 'checkbox') {
//                 res[nm] = vl;
//             }
//         }
//     }
//     console.log(res);
// }


function sum(a,b,fun){
    const ans = a+b;
    fun(ans);
}

function print(x){
    console.log('   ****',x,'****');

}
sum (3,4,print);
