import React, { Component } from 'react';
import sendData from './util/sendData';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }


    render() {
        return (
            <div className='Index'>
                {/* LANDING */}
                <div id="landing">
                    <img id='bg' alt='background' src='/images/renderedBgBright.png' />

                    <div className='topLeft'>
                        <h2 className='domain'>DigitalCaldwell</h2>
                    </div>

                    <div className='links'>
                        <a href='#landing'>home<span className='bit'>000</span></a>
                        <a href='#expertise'>expertise<span className='bit'>001</span></a>
                        <a href='#work'>work<span className='bit'>010</span></a>
                        <a href='#experience'>experience<span className='bit'>011</span></a>
                        <a href='#contact'>contact<span className='bit'>100</span></a>
                    </div>

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

                </div>
            </div>
        )
    }
}

export default Index;