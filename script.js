/* =================================
   TIMIZA ANALYTICS WEBSITE JS
================================= */


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");


if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        const button = this.querySelector("button");


        button.innerHTML = "Sending...";


        setTimeout(()=>{


            alert(
            "Thank you! Your demo request has been received. Timiza Analytics will contact you shortly."
            );


            this.reset();


            button.innerHTML = "Request Demo";


        },1500);


    });

}





// ===============================
// SMOOTH SCROLLING
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







// ===============================
// NAVBAR EFFECT
// ===============================


window.addEventListener("scroll",()=>{


const navbar =
document.querySelector(".navbar");


if(window.scrollY > 50){


    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.15)";


}else{


    navbar.style.boxShadow =
    "none";


}


});








// ===============================
// SCROLL ANIMATION
// ===============================


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{
threshold:0.15
}

);




document.querySelectorAll(
".card,.stat,.section h2"
)
.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(30px)";

el.style.transition=
"all .7s ease";


observer.observe(el);


});









// ===============================
// DEMO BUTTONS
// ===============================


document.querySelectorAll(
".btn-primary"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


if(button.innerText.includes("Demo")){


document
.querySelector("#contact")
.scrollIntoView({
behavior:"smooth"
});


}


});

});






// ===============================
// APK DOWNLOAD TRACKING
// ===============================


const apk =
document.querySelector(
'a[href$=".apk"]'
);


if(apk){


apk.addEventListener(
"click",
()=>{


console.log(
"Timiza Analytics APK download started"
);


});


}






console.log(
"Timiza Analytics website loaded successfully"
);