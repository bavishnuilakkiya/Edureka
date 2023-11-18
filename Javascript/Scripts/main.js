

/*const myHeading = document.querySelector("#main");

myHeading.textContent = "Hello world!";


document.querySelector(".container").addEventListener("click",()=> document.getElementById("container").textContent="Ouch! Stop poking me!");
*/

let theme=document.querySelector("img");

console.log(theme.getAttribute("src"));

theme.onclick= () => {

    const mySrc = theme.getAttribute("src");

    if(mySrc=="Asset/images/moonrise.jpg"){
        theme.setAttribute("src","Asset/images/sunrise.jpg")
    }
    else{
        theme.setAttribute("src","Asset/images/moonrise.jpg")
    }
};

const player_btn=document.querySelector("button")

player_btn.addEventListener("click",update_name);

function update_name() {
    var name=prompt("Enter the Payer name:");
    player_btn.textContent=`Player 1: ${name}`;
}
