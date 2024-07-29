import React from "react";
import './style.css';
import { useState, useEffect } from 'react';
import { BiLogoFacebook, BiLogoWhatsapp} from "react-icons/bi";
import { TbMailFast } from "react-icons/tb";
import { PiGithubLogo } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";

function Home() {
    const [activeLink, setActiveLink] = useState('home');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["DÉVELOPPEUSE WEB"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() + 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[loopNum % toRotate.length]; // Construire fullText
        //let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="home" id="home">
            <div className='home-content'>
                <h1>Hey! C'est moi</h1>
                <span>MANJATIANA Florida Safica</span>
                <h3 className='text-animation'>Je suis <span className='text'>{text}</span> </h3>
                <p>
                    Développeuse web expérimentée avec 3 ans d'expérience.
                    J'ai l'expérience pour la création de sites web et d'applications web dynamiques.
                </p>

                <div className='social-icons'>
                    <a href="#"><BiLogoFacebook className='icon' /></a>
                    <a href="#"><BiLogoWhatsapp className='icon' /></a>
                    <a href="#"><TbMailFast className='icon' /></a>
                    <a href="#"><RiGithubLine className='icon' /></a>
                </div>

                <div className='btn'>
                    <a href="">Download my cv</a>
                </div>
            </div>
            <div className='home-img'>
                <img src="image/profile1.jpg" alt="" className='image' />
            </div>
        </section>
    )
}

export default Home;