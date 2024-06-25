import React, { Component } from 'react';
import Links from './Links';


import Skill from './Skill';
import Project from './Project';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLoaded: false,
            sideBar: false,
        }

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    componentDidMount() {
        const img = new Image();
        img.src = '/images/renderedBg.png';
        img.onload = () => {
            this.setState({ imgLoaded: true });
        };
    }

    toggleSideBar() {
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
                        <a onClick={this.toggleSideBar} href='#experience'>- experience</a>
                        <a onClick={this.toggleSideBar} href='#contact'>- contact</a>
                    </div>

                    <div className='cr'>
                    © 2024. Made by Dylan Caldwell.
                    <br />
                    All right reserved.
                    </div>
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
                        <Skill title="Full Stack Websites" text="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and Express frameworks." icon="/images/react.svg" designWidth={"14vh"} color={'#DF058D'} />
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
                        Engineer and Server Infrastructure Specialist focused on software development, full stack websites, and servers. I’ve been developing full-stack web and mobile applications since 2019, and look forward to continuing my journey in creating engaging and innovative solutions.
                        </p>
                    </div>

                    <div className='projects'>

                        <div className='featuredProject'>
                            <div className='featuredProjectInfo'>
                                <h3>
                                    Featured Project
                                </h3>
                                <h2>
                                    Crew
                                </h2>
                                <p>
                                    Web Development
                                </p>

                                <div className='viewProjectButton' onClick={() => this.clickedProject('Crew')}>
                                    View Project
                                </div>
                            </div>

                            <Project title={'Crew'} subtitle={'Web Development'} src={'/images/projects/crew.png'} action={this.clickedProject} />
                            
                        </div>

                        <Project title={'Keypass Guard'} subtitle={'Web Development'} src={'/images/projects/keypassguard.png'} action={this.clickedProject} />
                        <Project title={'Budget Bucks'} subtitle={'Web Development'} src={'/images/projects/budgetbucks.png'} action={this.clickedProject} />
                        <Project title={'Sendjet'} subtitle={'Mobile App'} src={'/images/projects/sendjet.png'} action={this.clickedProject} />
                        


                    </div>


                </div>




            </div>
        )
    }
}

export default Index;