// blog post component
// import react
import React from 'react';


export default class BlogPost extends React.Component {

    render() {
        return (
            <div className="blog-post">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                {/* link to project */}
                <a href={this.props.link}>{this.props.link}</a>
            </div>
        );
    }
}
