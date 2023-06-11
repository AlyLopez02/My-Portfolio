import React from 'react';
import picture from '../../images/Alyssa-Lopez.jpeg';

const styles = {
    img: {
        width: 250,
        height: 'auto',
        border: 'solid black 2px'
    },
    p: {
        maxWidth: '80vw',
        maxHeight: 'auto'
    }
}

export default function About() {
    return (
        <div className='container text-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='m-5'><u>About Me</u></h2>

                <img src={picture} alt="Alyssa Lopez" className='rounded mb-5' style={styles.img}/>


                <p className='text-center mb-5' style={styles.p}>
                    My name is Alyssa Lopez and I am an aspiring web page developer. Back in 2022, I decided to change
                    career paths and have since put in the work to follow my new dream. My previous career path
                    was related to law enforcement and as such, I have an Associate's Degree in Criminal Justice.
                    In August 2022, I graduated from Rutger's Coding Boot Camp after learning the basics of
                    what I needed to know to become a web page developer. In the portfolio tab, you will see some of the projects I
                    completed while in the program. Before you look at them, let's learn a little more
                    about me outside of work!

                    My hobbies include crochet, knitting, reading, and playing video games. I love creating things,
                    from stuffed animals to scarves! Meanwhile, I also love the way books enable one to enter
                    another world simply by reading a page. I find that books increase my vocabulary as well as my
                    imagination! Finally, I find playing video games a great way to learn teamwork, strategy, and
                    communication. They make those three lessons extremely entertaining to undertake so it is a
                    win-win to me!

                </p>
            </div>
        </div>
    );
}

// THEN I see a recent photo or avatar of the developer and a short bio about them