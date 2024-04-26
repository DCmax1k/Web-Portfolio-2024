import React, { Component } from 'react';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='links'>
                <a href='#landing'>home<span className='bit'>000</span></a>
                <a href='#expertise'>expertise<span className='bit'>001</span></a>
                <a href='#work'>work<span className='bit'>010</span></a>
                <a href='#experience'>experience<span className='bit'>011</span></a>
                <a href='#contact'>contact<span className='bit'>100</span></a>
            </div>
        );
    }
}

export default Links;