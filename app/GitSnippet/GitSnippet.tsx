import React from 'react';
import scriptLoader from 'react-async-script-loader'

interface GitSnippetProps {
    src: string,
}

interface GitSnippetState {
    element?: any,
}

class GitSnippet extends React.Component<GitSnippetProps, GitSnippetState> {
    constructor(props) {
        super(props) 
        this.state = {
            element: null
        } 
    }
    componentDidMount() {
    }
    render() {
       /*  const { element } = this.state;
        console.log('component did render: ', null)
        if (element) {
            console.log('appending element');
            const { src } = this.props;
            const script = document.createElement("script");
            script.src = src;
            element.appendChild(script);
        } */
        return(
            <div ref={(element) => { }}> 
            </div>
        )
    }
}

export default scriptLoader([
    'https://cdnjs.cloudflare.com/ajax/libs/absurd/0.3.8/absurd.min.js',
])(GitSnippet)