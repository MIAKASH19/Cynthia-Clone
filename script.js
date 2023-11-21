const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


// let timeout;
// function skewCursor(){
//     clearTimeout(timeout)
//     //define the scale value
//     let xscale = 1
//     let yscale = 1

//     let xprev = 0
//     let yprev = 0

//     window.addEventListener('mousemove',function (dets){
        
//         xscale = gsap.utils.clamp (.7, 1.3 , dets.clientX - xprev)
//         yscale = gsap.utils.clamp (.7, 1.3 , dets.clientY - yprev)
        
//         xprev = dets.clientX
//         yprev = dets.clientY
        
//         cursor(xscale, yscale);

//         timeout = setTimeout(() => {
//                 const cursor = document.querySelector(".cursor")
//                 cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//             }, 100);

//     })
// }

function cursor(){
    window.addEventListener("mousemove", function (dets){
        const cursor = document.querySelector(".cursor")
        cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function firstpage(){
    var tl = gsap.timeline()

    tl.from(".nav",{
        y:"-50",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5
    })
    .to(".boundelem",{
        y: 0,
        delay: -1,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: 0.2
    })
    .from(".herofooter",{
        y:"-20",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5
    })
}

document.querySelectorAll(".elem").forEach(function(elem) {

    var rotateinit = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Expo.easeInOut
        })
    })

    elem.addEventListener("mousemove", function (dets){

        let diff = dets.clientY - elem.getBoundingClientRect().top

        diffrot = dets.clientX - rotateinit
        rotateinit = dets.clientX;
        
        console.log(diffrot);
        

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top: diff,
            left: dets.clientX,
            ease: Power3,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 2)
        })
    })

    
})





firstpage()
// skewCursor()
cursor()