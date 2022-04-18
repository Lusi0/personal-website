// blog post component
// import react
import React from 'react';


export default class BlogPost extends React.Component {

    render() {
        return (
            <div className="blog-post">
                <h2 className='blog-title'>{this.props.title}</h2>
                <p className='blog-content'>{this.props.content}</p>
                {/* link to project */}
                <div className='blog-button'>
                    <a className='repo' href={this.props.link} rel="noreferrer" target="_blank">{this.props.link}</a>
                </div>
                
                
            </div>
        );
    }
}
