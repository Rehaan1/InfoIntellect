const faders = document.querySelectorAll(".fade-in"); //select all fade in Classes
const sliders = document.querySelectorAll(".slide-in");//select all slide in classes
const counters = document.querySelectorAll(".number"); //select all number classes


const countUp_1 = new CountUp('number1',0,1470,0,3); //creating countUp objects for Counting Animaiton
const countUp_2 = new CountUp('number2',0,2000,0,3); //CountUp(id,startval,endval,decimalpoints,duration)
const countUp_3 = new CountUp('number3',0,3040,0,3);

const appearOptions = {
  threshold: 0.30, //45% of the screen should be in vieport to fade in
  rootMargin: "0px 0px -30px 0px" //reduce viewport size
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) //creating IntersectionObserver
{
    entries.forEach(entry => {
      if(!entry.isIntersecting) //if not intersecting with page
      {
        entry.target.classList.remove('appear');
      }
      else
      {
          entry.target.classList.add('appear'); //adding class appear
          if(entry.target.classList.contains('number')) //checking if Count Up number
          {
              countUp_1.start(); //starting counter
              countUp_2.start();
              countUp_3.start();
          }
          //appearOnScroll.unobserve(entry.target);
      }
    })
},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader); //adding observe to all fader
})

sliders.forEach(slider=> {
  appearOnScroll.observe(slider);  //adding observe to all slider
})

counters.forEach(counter => {
  appearOnScroll.observe(counter); //adding observe to all counters
})
