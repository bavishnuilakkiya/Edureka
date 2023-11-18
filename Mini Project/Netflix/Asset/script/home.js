



let spanTxt=document.querySelectorAll(".acc-img");


spanTxt.forEach((userItem) => {
  
    console.log(userItem.getAttribute("src"))


    userItem.onclick =() => {

        let spanImg=document.querySelector("img");
        console.log(spanImg.getAttribute("src"));
        const mySrc = spanImg.getAttribute("src");

            if(mySrc=="Asset/images/plus.jpg"){
                spanImg.setAttribute("src","Asset/images/xmark.jpg");
            }
            else{
                spanImg.setAttribute("src","Asset/images/plus.jpg");
            }

};

  
});