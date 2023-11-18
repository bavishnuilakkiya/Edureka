

//var Greet = prompt("Enter text you want to greet: ")
//result=`Hello ${Greet} Welcome Ilakkiya`;
//document.getElementById("container").innerHTML = result ;

//console.log(confirm(result))

let num=prompt("Enter the number to find even or odd");
let res;
if(parseInt(num)%2==0){
    res="The given number is Even"
}
else{
    res="The given number is odd"
}

document.getElementById("container").innerHTML=res;