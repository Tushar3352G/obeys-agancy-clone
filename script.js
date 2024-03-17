let obeys_tl = gsap.timeline();
const growtext = document.querySelector(".grow-text")
const vidcursor = document.querySelector(".video-cursor")
let grownum = 0;
const videocontainer = document.querySelector(".videos-thumbcontaienr");
const vidthumb = document.querySelector(".videos-thumbimg");
const video = document.querySelector(".videos-thumbcontaienr video");
const magnetH4 = document.querySelector(".obeys-header h4");
let flag = 0;


function websitepreloader(){
    obeys_tl.from(".website-preloader .loader-text>.text-come-up,.now-text",{
        y :130,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
    })
    gsap.from(".website-preloader .counter-text,.website-preloader .now-text",{
        opacity:0,
        duration:0.3,
        delay:0.4,
        onStart:function(){
            setInterval(function(){
                if(grownum < 100){
                    grownum++
            }
            else{
                grownum = 100
            }
            growtext.textContent = grownum
            },35)
    
        },
    })
    obeys_tl.to(".website-preloader .loader-text", {
        opacity: 0,
        duration:0.3,
        delay:2.5,
    });
    obeys_tl.to(".website-preloader", {
        y:-1100,
        duration:1,
    });
    gsap.from(".obeystext span", {
        y :130,
        delay:4.9,
        stagger:0.15,
        duration:0.6,
    });
    gsap.from(".obeys-header",{
        opacity:0,
        delay:5.5,
        duration:0.8,
    })

    obeys_tl.to(".website-preloader", {
        display:'none',
        pointerEvents:'none',
    });
}


function sherjs(){
Shery.imageEffect(".imgboxani", {
        style: 4,
        // debug: true,
        gooey: true,
        config:{"uColor":{"value":true},"uSpeed":{"value":0.24,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.19,"range":[0,5]},"uFrequency":{"value":7.25,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.714270156211907},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.24,"range":[1,15]},"durationOut":{"value":1.41,"range":[0.1,5]},"durationIn":{"value":1.52,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.69,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}}
});



Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.3,
  });


  Shery.makeMagnet(".mageffect", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
    scale:2,
});

}


function videoHandler(){

    
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            gsap.to(vidcursor,{
                left:dets.clientX - 500 + "px",
                top:dets.clientY - 200 + "px",
                ease: "cubic-bezier(0.76, 0, 0.24, 1)",
                duration: 0.9,
            })
            gsap.to(".mousefollower",{
                scale:0,
               opacity:0,
            })


        })
    })


    videocontainer.addEventListener("mouseleave",function(){
            gsap.to(vidcursor,{
               top:"0%",
               left:"80%",
               ease: "cubic-bezier(0.76, 0, 0.24, 1)",
               duration: 0.9
            })    
            
            gsap.to(".mousefollower",{
                scale:1,
                opacity:1,
             })

    })

    videocontainer.addEventListener("click",function(){


        
        if(flag == 0){
            gsap.to(vidthumb,{
                opacity:0,
                
            })
            gsap.to(video,{
                opacity:1,
                
            })
            gsap.to(vidcursor,{
                scale:0.5,
            
            })
            vidcursor.innerHTML = `<svg class="button__pause-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="visibility: inherit; opacity: 1;">
            <path d="M0 24V0H7.36842V24H0Z" fill="white"></path>
            <path d="M12.6316 24V0H20V24H12.6316Z" fill="white"></path></svg>`

            video.play()
            flag = 1
        }
        else{
            gsap.to(vidthumb,{
                opacity:1,
            })
            gsap.to(video,{
                opacity:0,
                
            })
            gsap.to(vidcursor,{
                scale:1,
            
            })
            vidcursor.innerHTML = `<svg class="button__play-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12L2.43406e-07 24L-7.15256e-07 -8.74228e-07L20 12Z" fill="white"></path>
          </svg>`
            video.pause()
            flag = 0
        }


  
    })
}



// websitepreloader()
sherjs()
videoHandler()