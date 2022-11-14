import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from './wordcloud'
//import { getDocs, collection } from 'firebase/firestore';
//import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const skillsArray = 'Skills'.split('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
/*
    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={skillsArray}
                        idx={15}
                    />
                </h1>
            </div>
            <Loader type="pacman" />
        </>
    );
*/
    return (
        <>
          <div className="container portfolio-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={skillsArray}
                  idx={15}
                />
                <br />
              </h1>
              <p>
                I love to learn about Infrastructure Management technologies.
              </p>
              <p>
                Looking for a role in a company with the opportunity to work with
                the latest technologies on challenging and diverse projects.
              </p>
            </div>
    
            <div className="tagcloud-wrap">
              <WordCloud />
            </div>
          </div>
    
          <Loader type="pacman" />
        </>
      )
}

export default Portfolio;