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
                <div id='section1'>
                    <div className='name'>
                        <span className='darkLightShadow'>Dylan</span>
                        <br />
                        <span className='lightDarkShadow'>Caldwell</span>
                    </div>
                    <div className='topHalf half'>

                    </div>
                    <div className='bottomHalf half'>

                    </div>

                    <div className='scroll'>
                        Scroll
                        <img src='/images/scrollArrow.svg' alt='scroll arrow' />
                    </div>
                </div>
                <div id='backgroundSection'>
                    <img className='background' src='/images/background.svg'alt='background' />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                    test
                    <br />
                </div>
            </div>
        )
    }
}

export default Index;