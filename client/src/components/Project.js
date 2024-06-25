import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.action = this.action.bind(this);
    }

    action() {
        this.props.action(this.props.title);
    }

    render() {
        return (
            <div className='Project' onClick={this.action}>
                <div className='displayImage'>
                    <img alt='Screenshot of project' src={this.props.src} />
                </div>
                <div className='projectInfo'>
                    <h2>
                        {this.props.title}
                    </h2>
                    <p>
                        {this.props.subtitle}
                    </p>

                    <div className='projectAction'>
                        View Project
                        <img alt='View project' src='/images/rightArrow.svg' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;