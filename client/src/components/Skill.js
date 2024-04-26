import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='skill square'>
                <div className='header'>
                    <img alt='icon' src={this.props.icon} />
                    <div className='title'>
                        <div className='design' style={{width: this.props.designWidth, backgroundColor: this.props.color}}></div>
                        {this.props.title}
                    </div>
                </div>

                <div className='bottom'>
                    <p>
                        &lt;h3&gt;
                        <p>
                            {this.props.text}
                        </p>
                        &lt;/h3&gt;
                    </p>
                </div>
            </div>
        );
    }
}

export default Skill;