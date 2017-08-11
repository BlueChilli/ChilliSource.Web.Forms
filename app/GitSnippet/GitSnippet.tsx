import React from 'react';

interface GitSnippetProps {
    src: string,
}

interface GitSnippetState {
    element?: any,
}

export default class GitSnippet extends React.Component<GitSnippetProps, GitSnippetState> {
    constructor(props) {
        super(props) 
        this.state = {
            element: null
        } 
    }
    componentDidMount() {
        
    }
    render() {
        const { element } = this.state;
        console.log('component did render: ', null)
        if (element) {
            console.log('appending element');
            const { src } = this.props;
            const script = document.createElement("script");
            script.src = src;
            element.appendChild(script);
        }
        return(
            <div ref={(element) => { 
                if (!this.state.element) {
                    console.log('setting state')
                    this.setState({ element });    
                }
            }}> 
            </div>
        )
    }
}