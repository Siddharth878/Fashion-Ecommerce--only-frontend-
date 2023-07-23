
'use strict';

const buttonleft = document.querySelector('.btn--01');
const buttonright = document.querySelector('.btn--02');


const ClassHiddenEl = document.querySelector('.hidden');
const Class1sttesti = document.querySelector('.testimonials1st');
const Class2ndtesti = document.querySelector('.testimonials2nd');


const change = () => {

    Class1sttesti.classList.toggle("hidden");
    Class2ndtesti.classList.toggle('hidden');

};

buttonleft.addEventListener('click', change);
buttonright.addEventListener('click', change);































// Acoordian part
const arrowButton1 = document.querySelector(".icon-acc1");
const arrowButton2 = document.querySelector(".icon-acc2");
const arrowButton3 = document.querySelector(".icon-acc3");

// const HiddenaccAns = document.querySelector(".box-accordian");

const HiddenaccAns1 = document.querySelector(".b1");
const HiddenaccAns2 = document.querySelector(".b2");
const HiddenaccAns3 = document.querySelector(".b3");


// const AccordianText = document.querySelector(".Accordian");



// AccordianText.addEventListener('click',()=>{

//     HiddenaccAns.classList.toggle('hidden-acc');
// });





arrowButton1.addEventListener('click', () => {

    HiddenaccAns1.classList.toggle('hidden-acc1');
});
arrowButton2.addEventListener('click', () => {

    HiddenaccAns2.classList.toggle('hidden-acc2');
});
arrowButton3.addEventListener('click', () => {

    HiddenaccAns3.classList.toggle('hidden-acc3');
});

































// Smooth scrolling
const btncontact = document.querySelector('.contact-btn');
const contactSection = document.querySelector('#section-foot');
const aboutSectionbtn = document.querySelector('.about-btn');
const aboutforNowsec  = document.querySelector('#about-for-now');


btncontact.addEventListener('click',function(e)
{  
    const s1coords = contactSection.getBoundingClientRect();



    window.scrollTo({ // this is passing an object
            left: s1coords.left+window.pageXOffset,
            top: s1coords.top+window.pageYOffset,
            behavior:'smooth',
        });

        // yeh naya traika kaam nahi kr rha idk why
    // contactSection.scrollIntoView({behavior:'smooth'});
});






aboutSectionbtn.addEventListener('click',function(e)
{  
    const s1coords = aboutforNowsec.getBoundingClientRect();



    window.scrollTo({ // this is passing an object
            left: s1coords.left+window.pageXOffset,
            top: s1coords.top+window.pageYOffset,
            behavior:'smooth',
        });

    //     yeh naya traika kaam nahi kr rha idk why
    // aboutforNowsec.scrollIntoView({behavior:'smooth',});


});















// sticky navigation

const nav = document.querySelector('.Main-nav');


const stickyFunction = function(entries)
{
    const [entry] = entries;


    if(!entry.isIntersecting) 
         nav.classList.add('sticky');
    else
      nav.classList.remove('sticky');
}


const headerObeserver = new IntersectionObserver(stickyFunction,{
    root:null,
    threshold:0,

    // rootMargin:`-90px`,
}) ;


const header = document.querySelector('.header');
console.log(header);
console.log(nav);

headerObeserver.observe(header);
/// one limitation here that after sticky is added then functionality of buttons is gone