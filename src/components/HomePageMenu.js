import {useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import {gsap} from "gsap";
import "../routes/homePage.scss"
import Modal from 'react-modal';
import Contact from "./Contact";

Modal.setAppElement('#root');

const primaryMenuColor = getComputedStyle(document.documentElement).getPropertyValue('--menuLetters');
const bgLightColor = getComputedStyle(document.documentElement).getPropertyValue('--bgLight');
    //const highlightMenuColor = getComputedStyle(document.documentElement).getPropertyValue('--highlightMenuLetters');

export default function HomePageMenu(){

  const [modalIsOpen, setIsOpen] = useState(true);
  function openModal() {setIsOpen(true)}
  function closeModal() {setIsOpen(false)}
  function afterOpenModal() {return null;}

  ///////////////Projects////////////////////////////
  const projectLetterRefs = useRef([]);
        projectLetterRefs.current = [];
  var projectLetters = projectLetterRefs.current;
  function addProjectRefs(el){
    if (el && !projectLetters.includes(el)) {
      projectLetters.push(el);
    }
  };
  ///////////////theDojo////////////////////////////
  const theDojoLetterRefs = useRef([]);
        theDojoLetterRefs.current = [];
  var theDojoLetters = theDojoLetterRefs.current;
  function addTheDojoRefs(el){
    if (el && !theDojoLetters.includes(el)) {
      theDojoLetters.push(el);
    }
  };
  ///////////////aboutMe////////////////////////////
  const aboutMeLetterRefs = useRef([]);
        aboutMeLetterRefs.current = [];
  var aboutMeLetters = aboutMeLetterRefs.current;
  function addAboutMeRefs(el){
    if (el && !aboutMeLetters.includes(el)) {
      aboutMeLetters.push(el);
    }
  };
  //////////////////////allLetters///////////////////////////
  const allLetters = [projectLetters,theDojoLetters,aboutMeLetters];
  ///////////////////////////////////////////////////////
  var projectNavigation = useNavigate();
  var theDojoNavigation = useNavigate();
  var aboutMeNavigation = useNavigate();

  //////////////////////////////////////////////////////////

  useEffect(()=>{
    
    
    const projectsAnimation = gsap.timeline()
      .from(projectLetters,{
        x:300,
        duration: 1,
        scale: .5,
        stagger: .25,
        ease: "back(1)"
      })
      .from(projectLetters,{
        autoAlpha: 0,
        duration:2.53,
        ease: "power1.inOut"
      },"<")


      projectLetters.forEach((pl)=>{
        pl.addEventListener("mouseenter",function(e){
          e.preventDefault();
          gsap.to(projectLetters,{
            fill: "white",
            duration: .25
          })
        })
      })
      projectLetters.forEach((pl)=>{
        pl.addEventListener("mouseleave",function(e){
          e.preventDefault();
          gsap.to(projectLetters,{
            fill: primaryMenuColor,
            duration: .55
          })
        })
      })
      projectLetters.forEach((pl)=>{
        pl.addEventListener("click",function(e){
          return projectNavigation('/projects');
        })
      })

      
    /////////////////////////////////////////////////////////
    const dojoAnimation = gsap.timeline()
      .from(["#thedojo-letter-d","#thedojo-letter-o","#thedojo-letter-j","#thedojo-letter-o2"],{
        autoAlpha: 0,
        duration: .35,
        x:-100      
        },"-=.75")
      .from(["#thedojo-letter-t","#thedojo-letter-h","#thedojo-letter-e"],{
        autoAlpha: 0,
        duration:.5,
        x:-100,
        stagger: {
          amount: .235,
          from:"end",
          ease: "power1.inOut"
        }
      },"-=.65")

      theDojoLetters.forEach((dl)=>{
        dl.addEventListener("mouseenter",function(e){
          e.preventDefault();
          gsap.to(theDojoLetters,{
            fill: "white",
            duration: .25
          })
        })
      })
      theDojoLetters.forEach((dl)=>{
        dl.addEventListener("mouseleave",function(e){
          e.preventDefault();
          gsap.to(theDojoLetters,{
            fill: primaryMenuColor,
            duration: .55
          })
        })
      })
      theDojoLetters.forEach((dl)=>{
        dl.addEventListener("click",function(e){
          return theDojoNavigation('/the-dojo');
        })
      })

///////////////////////////////////////////////////////
    const aboutMeAnimation = gsap.timeline()
      .from(["#aboutme-letter-a","#aboutme-letter-b","#aboutme-letter-o","#aboutme-letter-u","#aboutme-letter-t","#aboutme-letter-m","#aboutme-letter-e"],{
      autoAlpha: 0,
      duration: 1.25,
      scale:.5,
      ease: "elastic.out(1.75, 1)"
      },"+=.05")

      aboutMeLetters.forEach((al)=>{
        al.addEventListener("mouseenter",function(e){
          e.preventDefault();
          gsap.to(aboutMeLetters,{
            fill: "white",
            duration: .25
          })
        })
      })
      aboutMeLetters.forEach((al)=>{
        al.addEventListener("mouseleave",function(e){
          e.preventDefault();
          gsap.to(aboutMeLetters,{
            fill: primaryMenuColor,
            duration: .55
          })
        })
      })
      aboutMeLetters.forEach((al)=>{
        al.addEventListener("click",function(e){
          return aboutMeNavigation('/about-me');
        })
      })

////////////////////////////////////////////////////////    
    const letterFlashAnimation = gsap.timeline()
      .to(allLetters,{      
        fill: "white",
        duration: .75,
        stagger: {
          each: 0.075,
          ease: "slow(0.7, 0.7, false)",
          from: "end"
        }
      },"-=.15")
      .to(allLetters,{
        fill: primaryMenuColor,
        duration: .35,
        stagger: {
          each: 0.075,
          ease: "slow(0.7, 0.7, false)",
          from: "end"
        }
      },"-=1.85")

    const emailAnimation = function(){
      let emailani = gsap.timeline()
        emailani.to("#email-icon",{strokeDashoffset:0,duration:.95})
        .to("#email-icon",{stroke:"white",duration:.55})
        .to("#email-icon",{stroke:primaryMenuColor,duration:.75},"-=.25");
        //return emailani;
    }

    const master = gsap.timeline();
    master.add(projectsAnimation)
        .add(dojoAnimation)
        .add(aboutMeAnimation)
        .add(letterFlashAnimation,"-=1")
        .add(emailAnimation,"-=.91")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  return (<>
    
    <svg  id="homePageMenu" width="770" height="512" version="1.1" viewBox="0 0 204 136" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="projects-gradient" gradientTransform="rotate(90)" >
          <stop offset="0%" stopColor="white"/>
          <stop offset="80%" stopColor="black"/>
          <stop offset="100%" stopColor="black"/>
        </linearGradient>
      </defs>
        <mask id="project-mask" >
          <rect x="0" y="0" width="770" height="250" fill="url(#projects-gradient)" />
        </mask>
       <g id="projects-link"  transform="translate(-54 -43)" strokeWidth="1.1" aria-label="Projects">
        <path id="projects-letter-p" className={"menuButton"} ref={addProjectRefs} d="m89 88q1.5-6.8 2.9-13 0.55-2.7 1.2-5.8 0.6-3 1.2-6 0.56-2.9 1.1-5.6 0.51-2.7 0.86-5 1.5-0.45 2.9-0.75 1.4-0.35 2.8-0.61 1.6-0.25 2.9-0.25 2.2 0 3.7 0.76 1.6 0.75 2.6 2.1 0.9 1.3 1.3 3t0.4 3.7q0 2.8-1 5.4-1 2.6-2.8 4.7-1.7 2-4 3.2-2.2 1.2-4.6 1.2h-0.6q-0.38 1.7-0.74 3.7-0.35 2-0.6 3.7-0.35 2-0.66 4zm14-31q-0.5 3.3-1.1 6.3-0.5 3-1.2 6.4 0.8-0.2 1.7-0.91 0.9-0.76 1.7-1.9 0.7-1.2 1.2-2.8 0.4-1.6 0.4-3.3 0-1.9-0.8-2.8t-1.9-0.96z"/>
        <path id="projects-letter-r" className={"menuButton"} ref={addProjectRefs} d="m109 88q1.4-6.7 2.7-13 0.4-2.7 1-5.6 0.5-3 1-5.8 0.5-2.9 0.9-5.6 0.4-2.7 0.7-4.9 2.9-0.91 6.2-1.3 3.3-0.46 6.6-0.46 2 0 3.2 0.46 1.3 0.45 2 1.3 0.8 0.81 1.1 1.9 0.3 1.1 0.3 2.5 0 2-0.7 4-0.7 1.9-1.9 3.7-1.2 1.7-2.7 3.2-1.5 1.4-3.3 2.3 0.9 2 1.9 4.4 1.1 2.4 2 4.5 1 2.5 2 5l-7.8 2.7q-1-3.2-1.8-6.1-0.3-1.2-0.7-2.4-0.4-1.3-0.7-2.4-0.3-1.1-0.5-2-0.2-0.91-0.2-1.5l-0.7 0.2q-0.3 1.6-0.7 3.8t-0.8 4.2q-0.4 2.4-0.9 4.8zm12-22q1-0.1 2.3-0.81 1.4-0.7 2.7-1.7 1.2-1 2.2-2.1 0.9-1.1 0.9-1.9 0-0.56-0.4-0.86-0.3-0.35-1-0.51-0.6-0.2-1.4-0.25-0.7 0-1.5 0-0.6 0-1.2 0-0.5 0-1 0z"/>
        <path id="projects-letter-o" className={"menuButton"} ref={addProjectRefs} d="m159 60q0 4.1-0.9 7.8-0.9 3.6-2.4 6.7-1.4 3-3.4 5.4-1.9 2.4-4 4.1-2.1 1.7-4.3 2.6-2.2 0.85-4.1 0.85-1.7 0-3.1-0.6-1.3-0.66-2.3-1.9-1-1.3-1.7-3.2-0.5-2-0.5-4.7 0-2.8 0.7-6 0.7-3.1 1.9-6.2 1.2-3.1 3-5.8 1.8-2.8 3.9-4.9 2.1-2.2 4.5-3.4t5.1-1.3q2.2 0 3.7 0.95 1.5 0.91 2.3 2.4 0.9 1.5 1.2 3.3 0.4 1.9 0.4 3.7zm-19 16q0 0.55 0.2 1.2 0.2 0.6 0.6 1 0.3 0.46 0.8 0.81 0.6 0.3 1.2 0.3 2.2 0 4-1.6t2.9-3.8q1.2-2.3 1.8-4.8 0.7-2.6 0.7-4.7 0-0.61-0.1-1.3-0.1-0.71-0.3-1.3-0.2-0.61-0.8-1-0.4-0.45-1.2-0.45-1.6 0-3 0.8-1.3 0.81-2.5 2.2-1 1.3-1.8 3-0.8 1.7-1.4 3.4-0.6 1.7-0.8 3.4-0.3 1.7-0.3 2.9z"/>
        <path id="projects-letter-j" className={"menuButton"} ref={addProjectRefs} d="m170 74q-0.4 2.2-1.1 4.6-0.7 2.4-1.8 4.3-1 1.9-2.6 3.2-1.5 1.3-3.6 1.3-1.4 0-3.1-0.6-1.6-0.61-3.6-2.1l3.5-7.8q0.3 0.5 1 0.9 0.7 0.36 1.6 0.36 0.6 0 1-1 0.5-1 0.9-2.3 0.3-1.4 0.5-2.8 0.2-1.4 0.3-2.3 1-4.9 1.9-9.7 0.8-4.9 2-9.7 2.3-0.2 4.4-0.6 2.2-0.46 4.5-1.1-0.8 2.6-1.6 5.8t-1.6 6.7q-0.7 3.4-1.4 6.8-0.7 3.3-1.2 5.9z"/>
        <path id="projects-letter-e" className={"menuButton"} ref={addProjectRefs} d="m170 88 6.6-36 16-1.4q-0.4 1.1-0.6 2.3-0.3 0.96-0.5 2-0.2 1-0.4 1.8-0.5 0.1-1.4 0.1t-2 0-2.2 0q-1 0-1.8 0l-1.8 9q1.6-0.1 2.9-0.15 1.1 0 2.3 0t1.7 0q-0.2 1.4-0.4 2.8-0.1 1.4-0.4 2.8-0.5 0-1.7 0.1-1.1 0-2.2 0-1.3 0.1-2.9 0.11l-1.7 9.3 7.3-1.2-0.5 5.8z"/>
        <path id="projects-letter-c" className={"menuButton"} ref={addProjectRefs} d="m209 77q-1.2 2.8-2.7 4.8-1.5 2-3.2 3.4-1.6 1.4-3.2 2-1.7 0.65-3.3 0.65-1.5 0-2.8-0.7-1.3-0.71-2.3-2.1-0.9-1.4-1.5-3.5t-0.6-4.8q0-4.7 1.3-9.3 1.3-4.6 3.7-8.3t5.6-5.9q3.3-2.3 7.2-2.3 1.2 0 2.3 0.51 1.1 0.5 1.9 1.4 0.9 0.91 1.3 2.2 0.5 1.3 0.5 2.9 0 0.31 0 0.66 0 0.3 0 0.65l-6.6 1.8q-0.6-1.3-1.5-1.3-0.8 0-1.7 0.96-0.8 0.9-1.7 2.4-0.8 1.5-1.6 3.3-0.9 1.8-1.5 3.7-0.6 1.9-1 3.6-0.3 1.7-0.3 2.7 0 1.6 0.4 2.3 0.4 0.65 1.1 0.65 0.6 0 1.3-0.4 0.7-0.46 1.3-1.1 0.6-0.71 1.1-1.6 0.5-0.86 0.7-1.7z"/>
        <path id="projects-letter-t" className={"menuButton"} ref={addProjectRefs} d="m213 88q1.1-5.5 2.2-11 0.4-2.3 0.9-4.7 0.4-2.5 0.8-4.8 0.5-2.4 0.8-4.6 0.4-2.3 0.6-4.1-1.2-0.15-2.4-0.1-1.1 0.1-2.3-0.31 0.1-0.8 0.1-1.9t0-2.1q0.1-1.2 0.1-2.5 1.3 0.1 2.6 0.15 1.4 0.1 2.7 0.1 2.5 0 4.9-0.1 2.4-0.15 4.4-0.3 2.1-0.2 4.1-0.46l-0.6 2.7q-0.2 1.2-0.5 2.4-0.2 1.2-0.4 2.1-1.1 0.31-2.3 0.46-1.1 0.1-2.2 0.3-0.3 1.7-0.7 3.8-0.4 2.1-0.8 4.3-0.4 2.2-0.7 4.5-0.4 2.3-0.7 4.4-0.9 5-1.6 10z"/>
        <path id="projects-letter-s" className={"menuButton"} ref={addProjectRefs} d="m249 75q0 2.8-1.1 5.1-1.1 2.3-2.9 3.9-1.8 1.7-4.4 2.6-2.4 0.9-5.3 0.9-2 0-4-1.1-2.1-1.1-3.9-3.5l3.7-7.3q0.4 0.66 1.1 1.4 0.7 0.65 1.5 1.2 0.9 0.51 1.8 0.86 0.9 0.3 1.6 0.3 0.6 0 1.3-0.2 0.6-0.2 1.2-0.6 0.5-0.41 0.8-0.91 0.4-0.55 0.4-1.3 0-1.2-0.8-2.2-0.8-1.1-1.9-2-1.2-0.95-2.5-1.9-1.4-0.96-2.6-2-1.1-1.1-1.9-2.4t-0.8-2.9q0-2.6 1.6-4.9 1.5-2.3 3.9-3.9 2.3-1.7 5.1-2.6t5.2-0.96q1.4 0 2.6 0.36 1.2 0.3 2.1 1.1 0.9 0.7 1.4 1.8t0.5 2.8q0 0.71-0.1 1.4-0.1 0.7-0.2 1.5l-7.3 2.1q0.1-0.41 0.1-0.81 0.1-0.4 0.1-0.81 0-1.5-0.5-2.2-0.5-0.7-1.4-0.7-0.4 0-1 0.3-0.5 0.3-1.2 0.81-0.5 0.45-0.9 1.1-0.4 0.65-0.4 1.4 0 1.2 0.6 2 0.7 0.8 1.8 1.5 1 0.7 2.1 1.5 1.2 0.71 2.2 1.9 1.1 1.2 1.7 2.9 0.7 1.7 0.7 4.4z"/>
       </g>
       <g id="thedojo-link" transform="translate(-54 -43)" strokeWidth=".78" aria-label="the DOJO">
        <path id="thedojo-letter-t" className={"menuButton"} ref={addTheDojoRefs} d="m148 119q0.8-3.8 1.5-7.5 0.3-1.6 0.6-3.3t0.6-3.3q0.3-1.7 0.5-3.2 0.3-1.6 0.4-2.9-0.8-0.1-1.6-0.1t-1.6-0.21q0-0.55 0-1.3t0.1-1.5q0-0.8 0-1.7 1 0.1 1.9 0.11 0.9 0 1.8 0 1.7 0 3.4-0.1 1.6-0.1 3-0.21 1.5-0.14 2.8-0.31l-0.4 1.9q-0.1 0.8-0.3 1.6-0.2 0.84-0.3 1.4-0.8 0.21-1.6 0.31-0.7 0.1-1.5 0.21-0.2 1.2-0.5 2.7-0.3 1.4-0.6 3-0.2 1.5-0.5 3.1-0.2 1.6-0.4 3-0.6 3.5-1.1 7.2z"/>
        <path id="thedojo-letter-h" className={"menuButton"} ref={addTheDojoRefs} d="m158 120q1-4.9 1.9-9.5 0.3-2 0.7-4.1 0.4-2.2 0.7-4.3 0.3-2 0.6-4 0.3-2 0.5-3.6 0.8 0 1.5 0.1 0.7 0 1.3 0.1 0.7 0 1.3 0.1 0.7 0 1.5 0-0.6 2.5-1.1 4.9-0.6 2.5-1.1 5l3.5-0.4q0.4-2.5 0.8-4.8 0.4-2.3 1-4.8 0.8-0.14 1.8-0.2 1-0.11 1.8-0.18 0.8-0.1 1.4-0.1 0.6-0.1 0.6-0.1-0.5 1.6-0.9 3.4-0.5 1.8-0.9 3.8-0.4 2-0.8 4-0.4 2.1-0.7 3.9-0.7 4.4-1.4 9l-5.4 0.7q0.4-2.1 0.8-4.1 0.3-1.7 0.7-3.5t0.6-3.1l-3.4 0.3q-0.3 1.4-0.6 3.1t-0.6 3.3q-0.4 1.9-0.8 3.8z"/>
        <path id="thedojo-letter-e" className={"menuButton"} ref={addTheDojoRefs} d="m174 119 4.6-25 11-0.94q-0.3 0.77-0.5 1.6-0.1 0.66-0.3 1.4-0.1 0.69-0.2 1.2-0.4 0-1.1 0.1-0.6 0-1.3 0t-1.5 0q-0.7 0-1.3 0l-1.2 6.2q1.1-0.1 2-0.1 0.8 0 1.6 0t1.2-0.1q-0.2 1-0.3 2-0.1 0.9-0.3 1.9-0.3 0-1.1 0t-1.6 0.1q-0.9 0-2 0l-1.2 6.4 5.1-0.8-0.3 4z"/>
        <path id="thedojo-letter-d" className={"menuButton"} ref={addTheDojoRefs} d="m210 102q0 1.8-0.5 3.9-0.6 2-1.5 4t-2.3 3.9q-1.4 1.8-3.1 3.2-1.8 1.3-3.9 2.1-2 0.9-4.3 0.9-0.5 0-1-0.1-0.5 0-1-0.1 1-4.8 1.9-9.3 0.3-2 0.7-4 0.4-2.1 0.7-4.1 0.4-2 0.7-3.9t0.5-3.3q1.5-0.28 3.1-0.52 1.5-0.24 3.1-0.24 1.9 0 3.2 0.59t2.1 1.6 1.2 2.4q0.4 1.4 0.4 2.9zm-8.2-2.7q-0.4 2.1-0.8 4-0.4 1.8-0.9 3.7-0.4 2-0.8 4-0.4 2.1-0.8 4.6 0.8-0.6 1.6-1.5 0.8-1 1.5-2.2 0.7-1.3 1.3-2.7 0.5-1.4 1-2.7 0.4-1.3 0.6-2.4 0.2-1.2 0.2-2 0-1.3-0.7-2-0.7-0.73-2.2-0.73z"/>
        <path id="thedojo-letter-o" className={"menuButton"} ref={addTheDojoRefs} d="m227 101q0 2.8-0.6 5.4-0.6 2.5-1.6 4.6t-2.4 3.8q-1.3 1.6-2.8 2.8-1.4 1.1-2.9 1.8-1.5 0.5-2.9 0.5-1.1 0-2.1-0.4-0.9-0.4-1.6-1.3-0.7-0.8-1.1-2.1-0.4-1.4-0.4-3.3t0.5-4.1q0.5-2.1 1.3-4.3 0.8-2.1 2.1-4 1.2-1.9 2.6-3.4 1.5-1.5 3.2-2.4 1.6-0.87 3.4-0.87 1.6 0 2.6 0.66 1.1 0.63 1.6 1.7 0.6 1 0.8 2.3 0.3 1.3 0.3 2.6zm-13 11q0 0.4 0.1 0.8 0.2 0.4 0.4 0.7 0.2 0.4 0.6 0.6t0.8 0.2q1.5 0 2.8-1.1 1.2-1 2-2.6t1.2-3.3q0.5-1.8 0.5-3.3 0-0.4-0.1-0.9t-0.2-0.9q-0.2-0.4-0.5-0.7t-0.9-0.3q-1.1 0-2 0.6-1 0.5-1.7 1.5-0.8 0.9-1.3 2-0.6 1.2-1 2.4t-0.6 2.3q-0.1 1.2-0.1 2z"/>
        <path id="thedojo-letter-j" className={"menuButton"} ref={addTheDojoRefs} d="m233 110q-0.3 1.5-0.7 3.2-0.5 1.6-1.3 2.9-0.7 1.4-1.8 2.3-1 0.8-2.5 0.8-0.9 0-2.1-0.4-1.1-0.4-2.5-1.4l2.4-5.4q0.2 0.4 0.7 0.7 0.5 0.2 1.1 0.2 0.4 0 0.7-0.7 0.4-0.7 0.6-1.6 0.3-0.9 0.4-1.9t0.2-1.6q0.7-3.3 1.3-6.7 0.6-3.3 1.4-6.7 1.5-0.14 3-0.42 1.6-0.31 3.1-0.73-0.5 1.8-1.1 4t-1.1 4.6q-0.5 2.4-1 4.7-0.4 2.3-0.8 4.1z"/>
        <path id="thedojo-letter-o2" className={"menuButton"} ref={addTheDojoRefs} d="m252 101q0 2.8-0.6 5.4-0.6 2.5-1.6 4.6t-2.3 3.8q-1.4 1.6-2.8 2.8-1.5 1.1-3 1.8-1.5 0.5-2.8 0.5-1.2 0-2.1-0.4-1-0.4-1.7-1.3-0.6-0.8-1.1-2.1-0.3-1.4-0.3-3.3t0.4-4.1q0.5-2.1 1.4-4.3 0.8-2.1 2-4 1.2-1.9 2.7-3.4 1.4-1.5 3.1-2.4t3.5-0.87q1.6 0 2.6 0.66 1 0.63 1.6 1.7 0.6 1 0.8 2.3 0.2 1.3 0.2 2.6zm-13 11q0 0.4 0.2 0.8 0.1 0.4 0.4 0.7 0.2 0.4 0.5 0.6 0.4 0.2 0.8 0.2 1.6 0 2.8-1.1 1.2-1 2-2.6t1.3-3.3q0.4-1.8 0.4-3.3 0-0.4-0.1-0.9 0-0.5-0.2-0.9-0.1-0.4-0.5-0.7-0.3-0.3-0.8-0.3-1.1 0-2.1 0.6-0.9 0.5-1.7 1.5-0.7 0.9-1.3 2-0.5 1.2-0.9 2.4t-0.6 2.3q-0.2 1.2-0.2 2z"/>
       </g>
       <g id="aboutme-link" transform="translate(-54 -43)" strokeWidth=".62" aria-label="about me">
        <path id="aboutme-letter-a" className={"menuButton"} ref={addAboutMeRefs} d="m178 144q-0.9 0-1.5-0.6t-0.6-1.4v-4.2q0-0.8 0.6-1.4t1.5-0.6h2.1q0.5 0 0.7-0.3 0.3-0.3 0.3-0.7v-1q0-0.4-0.3-0.7-0.2-0.3-0.7-0.3h-3l0.6-2.6h4q0.9 0 1.4 0.6 0.6 0.6 0.6 1.4v12zm1.5-2.6h1.6v-3h-1.6q-0.4 0-0.7 0.3t-0.3 0.7v1q0 0.4 0.3 0.7t0.7 0.3z"/>
        <path id="aboutme-letter-b" className={"menuButton"} ref={addAboutMeRefs} d="m185 144v-20l2.6-0.6v6.9h3.2q0.8 0 1.4 0.6 0.6 0.5 0.6 1.4v9.8q0 0.8-0.6 1.4t-1.4 0.6zm2.6-2.6h1.6q0.4 0 0.7-0.3t0.3-0.7v-6.6q0-0.4-0.3-0.7t-0.7-0.3h-1.6z"/>
        <path id="aboutme-letter-o" className={"menuButton"} ref={addAboutMeRefs} d="m197 144q-0.8 0-1.4-0.6t-0.6-1.4v-9.8q0-0.8 0.6-1.4t1.4-0.6h3.8q0.8 0 1.4 0.6t0.6 1.4v9.8q0 0.8-0.6 1.4t-1.4 0.6zm1.6-2.6h0.6q0.4 0 0.7-0.3t0.3-0.7v-6.6q0-0.4-0.3-0.7t-0.7-0.3h-0.6q-0.4 0-0.7 0.3t-0.3 0.7v6.6q0 0.4 0.3 0.7t0.7 0.3z"/>
        <path id="aboutme-letter-u" className={"menuButton"} ref={addAboutMeRefs} d="m206 144q-0.8 0-1.4-0.6t-0.6-1.4v-12h2.6v10q0 0.4 0.3 0.7t0.7 0.3h1.6v-11h2.6v14z"/>
        <path id="aboutme-letter-t" className={"menuButton"} ref={addAboutMeRefs} d="m214 144v-20l2.6-0.6v6.9h3.3l-0.7 2.6h-2.6v11z"/>
        <path id="aboutme-letter-m" className={"menuButton"} ref={addAboutMeRefs} d="m226 144v-14h11q0.9 0 1.4 0.6 0.6 0.6 0.6 1.4v12h-2.6v-10q0-0.4-0.3-0.7t-0.7-0.3h-1.6v11h-2.6v-10q0-0.4-0.3-0.7t-0.7-0.3h-1.6v11z"/>
        <path id="aboutme-letter-e" className={"menuButton"} ref={addAboutMeRefs} d="m243 144q-0.8 0-1.4-0.6t-0.6-1.4v-9.8q0-0.9 0.6-1.4 0.6-0.6 1.4-0.6h3.8q0.8 0 1.4 0.6 0.6 0.5 0.6 1.4v4.2q0 0.8-0.6 1.4t-1.4 0.6h-3.2v2q0 0.4 0.3 0.7t0.7 0.3h3.6l0.6 2.6zm0.6-8.2h1.6q0.4 0 0.7-0.3t0.3-0.7v-1q0-0.4-0.3-0.7t-0.7-0.3h-0.6q-0.4 0-0.7 0.3t-0.3 0.7z"/>
       </g>
      
        <path id="email-icon" d="m 128.9,105.5 v 19.8 h 32.5 v -19.8 l -30.6,0.2 14.6,13.3 14.1,-13.3" fill="none" strokeWidth="2.5"/>      
        
      </svg>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,.5)',
          width: '100%',
          height: "91vh",
          position: "absolute",
          top: "50px"
        },
        content: {
          position: "relative",
          top: "25%",
          left:"15%",
          color: 'lightsteelblue',
          backgroundColor: 'hsla(240, 25%, 54%,.25)',
          width: '650px',
          height: "50vh",
        }
      }}>
        <Contact/>
      </Modal>
  </>)
}