import React, { Component } from 'react';
import Links from './Links';

import sendData from './util/sendData';

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


    render() {
        return (
            <div className='Index'>

                {/* SIDEBAR */}
                <div id='sideBar' className={this.state.sideBar?'active':''}>
                    <img className='closeX' onClick={this.toggleSideBar} alt='Close sidebar' src='/images/closeX.svg' />

                    <div className='links'>
                        <a onClick={this.toggleSideBar} href='#landing'>// home</a>
                        <a onClick={this.toggleSideBar} href='#expertise'>// expertise</a>
                        <a onClick={this.toggleSideBar} href='#work'>// work</a>
                        <a onClick={this.toggleSideBar} href='#experience'>// experience</a>
                        <a onClick={this.toggleSideBar} href='#contact'>// contact</a>
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
                <div id='expertise'>

                    <h1 className='heading'>
                        My Expertise
                    </h1>

                </div>
            </div>
        )
    }
}

export default Index;