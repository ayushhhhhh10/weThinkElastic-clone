function main(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
main();
function Scroller(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
Scroller();

gsap.to('#loader',{
    height:0,
    duration:1,
    delay:0.5
});

gsap.from('#heading h1',{
    y:150,
    duration:0.5,
    delay:0.7,
    opacity:0
});
gsap.from('#nav',{
    opacity:0,
    y:-80,
    delay:1
});

gsap.from('#video-container video',{
    width:100,
    height:100,
    scrollTrigger:{
        trigger:"#video-container",
        scroller:"#main",
        scrub:2,
        end:"top -10%"
    }
});

gsap.from('#text-container h1',{
    y:200,
    opacity:-1,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#text-container",
        scroller:"#main",
        scrub:2,
        end:"top -10%"
    }
})
gsap.from('#page7 h1',{
    y:200,
    opacity:-1,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        scrub:2,
        end:"top -10%"
    }
})
gsap.from('#page7 img',{
    y:200,
    opacity:-1,
    duration:1,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        scrub:2,
        end:"top -10%"
    }
})

var movement = document.querySelector('#main');
var crsr = document.querySelector(".circle");
var pointer = document.querySelectorAll('.follower');

movement.addEventListener('mousemove',function(dets){
    gsap.to(crsr,{
        left:dets.clientX,
        top:dets.clientY,
        power:2
    })
})

pointer.forEach(function(elem){
        elem.addEventListener('mouseenter',function(){
            crsr.style.display = "block";
        })
        
        elem.addEventListener('mouseleave',function(){
            crsr.style.display = "none";
        })
    });
