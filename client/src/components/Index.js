import React, { Component } from 'react';
import Links from './Links';


import Skill from './Skill';
import Project from './Project';

import resumePDF from '../assets/resume.pdf';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLoaded: false,
            sideBar: false,

            fixedHeaderBar: false,
        }

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const img = new Image();
        img.src = '/images/renderedBg.png';
        img.onload = () => {
            this.setState({ imgLoaded: true });
        };

        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > window.innerHeight / 2) {
            this.setState({
                fixedHeaderBar: true,
            })
        } else {
            this.setState({
                fixedHeaderBar: false,
            })
        }
    };

    toggleSideBar(blank = '') {
        this.setState({
            sideBar: !this.state.sideBar,
        });
    }

    clickedProject(project) {
        switch (project) {
            case 'Crew':
                window.open('https://crew.digitalcaldwell.com', '_blank');
                break;
            case 'Keypass Guard':
                window.open('https://www.keypassguard.com', '_blank');
                break;
            case 'Budget Bucks':
                window.open('https://budgetbucks.digitalcaldwell.com', '_blank');
                break;
            case 'Sendjet':
                window.open('https://github.com/DCmax1k/sendjet-mobile-app', '_blank');
                break;
            case 'Socialent':
                window.open('https://socialent.digitalcaldwell.com', '_blank');
                break; 
            case 'Pumped Workouts':
                window.open('https://pumpedup.digitalcaldwell.com/', '_blank');
                break; 
                

            default:
                break;
        }
    }

    openLink(link) {
        switch (link) {
            case 'github':
                window.open('https://www.github.com/DCmax1k', '_blank');
                break;
            case 'fiverr':
                window.open('https://www.fiverr.com/dylancaldwell35', '_blank');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/dylan-caldwell-77a412323/', '_blank');
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className='Index'>

                {/* SIDEBAR */}
                <div id='sideBar' className={this.state.sideBar?'active':''}>
                    <img className='closeX' onClick={this.toggleSideBar} alt='Close sidebar' src='/images/closeX.svg' />

                    <div className='links'>
                        <a onClick={this.toggleSideBar} href='#landing'>- home</a>
                        <a onClick={this.toggleSideBar} href='#expertise'>- expertise</a>
                        <a onClick={this.toggleSideBar} href='#work'>- work</a>
                        {/* <a  href='/resume' target='_blank'>- resume</a> */}
                        <a href={resumePDF} target='_blank' rel="noopener noreferrer" >- resume</a>
                        <a onClick={this.toggleSideBar} href='#contact'>- contact</a>
                    </div>

                    <div className='cr'>
                    © 2024 Made by Dylan Caldwell.
                    <br />
                    All rights reserved.
                    </div>
                </div>

                {/* Fixed Links */}
                <div id='fixedHeaderBar' className={this.state.fixedHeaderBar ? 'active' : ''}>
                    <img onClick={this.toggleSideBar} alt='Side bar open' src='/images/hamMenu.svg' />
                    <Links />
                </div>

                {/* LANDING */}
                <div id="landing">
                    <img className={this.state.imgLoaded?'active':''} id='bg' alt='background' src='/images/renderedBg.png' />

                    <div className='topLeft'>
                        <img onClick={this.toggleSideBar} className='hamMenu' alt='Side bar open' src='/images/hamMenu.svg' />
                        <h2 className='domain'>DigitalCaldwell</h2>
                    </div>

                    <Links />

                    <div className='title'>
                        <h1 className='name'>
                            DYLAN
                            <br />
                            CALDWELL
                        </h1>
                        <h3 className='subTitle'>
                            COMPUTER ENGINEER, FULL STACK WEB DEVELOPER.
                        </h3>
                    </div>

                    <div className='scroll'>
                        <div className='before dot'></div>
                        <div className='after dot'></div>
                        <img alt='scroll' src='/images/scrollArrow.svg' />
                    </div>
                </div>

                {/* EXPERTISE */}
                <div id='expertise' className='section'>

                    <h1 className='heading'>
                        My Expertise
                    </h1>

                    <div className='skills'>
                        <Skill title="Full Stack Websites" text="Passionate about UI/UX. Over 7 years of development experience in HTML, CSS, JS, React and Express frameworks." icon="/images/react.svg" designWidth={"14vh"} color={'#DF058D'} />
                        <Skill title="Server Infrastructure Specialist" text="Skilled in Linux server setup, web hosting, 24/7 server management, networking, VPN, streaming services." icon="/images/cubes-solid.svg" designWidth={"10vh"} color={'#2C49D8'} />
                        <Skill title="Software Development" text="Experienced in both functional and OOP: Javascript, Java, Python." icon="/images/desktop-solid.svg" designWidth={"13vh"} color={'#FF6B2B'} />
                        <div className='quote square'>
                            <div className='design'></div>
                            <h2>
                            Talent wins games, but teamwork and intelligence win championships.
                            </h2>
                            <p>
                            - Michael Jordan
                            </p> 
                        </div>

                        <img alt='Background Dummy Code' src='/images/bgCode.png' />
                    </div>

                </div>


                {/* WORK */}
                <div id='work' className='section'>

                    <div className='workHeading'>
                        <h1>
                            My
                            <br />
                            Work
                        </h1>

                        <p>
                        Computer Engineer and Server Infrastructure Specialist focused on software development, full stack websites, and servers. I’ve been developing full-stack web and mobile applications since 2019, and look forward to continuing my journey in creating engaging and innovative solutions.
                        </p>
                    </div>

                    <div className='projects'>

                        <div className='featuredProject'>
                            <div className='featuredProjectInfo'>
                                <h3>
                                    Current Project
                                </h3>
                                <h2>
                                    Pumped Up
                                </h2>
                                <p>
                                    {/* Track your workouts, stay consistent, and crush your fitness goals with smart insights, progress tracking, and personalized guidance. */}
                                    Your all-in-one toolset for achieving your workout and nutrition goals. From tracking your workouts, to easily and quickly tracking your meals by snapping a pic, to being provded scienve insights to help you better understand your health.
            
                                </p>

                                <div className='viewProjectButton' style={{backgroundColor: "#DB8854"}} onClick={() => this.clickedProject('Pumped Workouts')}>
                                    View Project
                                </div>
                            </div>

                            
                            <Project title={'Pumped Workouts'} subtitle={'Workout and health app - 2025'} src={'/images/projects/pumpedWorkouts.png'} action={this.clickedProject} />
                            
                        </div>

                        <div className='featuredProject'>
                            <div className='featuredProjectInfo'>
                                <h3>
                                    Featured Project
                                </h3>
                                <h2>
                                    Keypass Guard
                                </h2>
                                <p>
                                    Password Manager
            
                                </p>

                                <div className='viewProjectButton' onClick={() => this.clickedProject('Keypass Guard')}>
                                    View Project
                                </div>
                            </div>

                            
                            <Project title={'Keypass Guard'} subtitle={'Password Manager - 2024'} src={'/images/projects/keypassguard.png'} action={this.clickedProject} />
                            
                        </div>

                        <Project title={'Crew'} subtitle={'Schedule Manager - 2024'} src={'/images/projects/crew.png'} action={this.clickedProject} />
                        <Project title={'Budget Bucks'} subtitle={'Budgeting App - 2023'} src={'/images/projects/budgetbucks.png'} action={this.clickedProject} />
                        <Project title={'Sendjet'} subtitle={'Social App - 2022'} src={'/images/projects/sendjet.png'} action={this.clickedProject} />
                        <Project title={'Socialent'} subtitle={'Social Media - 2021'} src={'/images/projects/socialent.png'} action={this.clickedProject} />
                        


                    </div>


                </div>

                <footer id='contact' className='section'>
                    <div className='footerMessage'>
                        <h1>
                            Available for freelance opportunities
                        </h1>
                        <p>
                            Need a top-notch full stack or MERN stack developer to power up your web app?
                            <br />
                            Send me an email or contact me via any of the provided links!
                        </p>

                    </div>
                    <div className='footerLinks'>
                        <div className='email'>
                            dylan@digitalcaldwell.com
                            <div className='colorDesign'></div>
                        </div>

                        <div className='contactLinks'>
                            <div className='link' onClick={() => this.openLink('linkedin')}>
                                <div className='hoverer'></div>
                                <img alt='Linkedin icon' src='/images/icons/linkedin.png' />
                                Linkedin
                            </div>
                            <div className='link' onClick={() => this.openLink('github')}>
                                <div className='hoverer'></div>
                                <img alt='github icon' src='/images/icons/github.svg' />
                                Github
                            </div>
                            <div className='link' onClick={() => this.openLink('fiverr')}>
                                <div className='hoverer'></div>
                                <img alt='fiverr icon' src='/images/icons/fiverr.webp' />
                                Fiverr
                            </div>
                        </div>

                    </div>

                    <div className='copyright'>
                        © 2024 Made by Dylan Caldwell
                    </div>
                    


                </footer>




            </div>
        )
    }
}

export default Index;