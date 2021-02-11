import React from 'react';
import randomize from '../logos/randomize.svg';


function Greeting(props) {
    const greeting = props.greeting;

    return (
        <span>
            {greeting}
        </span>
    );
}

function Emoji(props) {
    const emoji = props.emoji;

    return (
        <span>
            {emoji}
        </span>
    );
}

function Spin(props) {

    return (
        <button className="rand-button" onClick={props.onClick}>
            <img src={randomize}  alt="Randomize" />
        </button>

    );
}





class HelloRoulette extends React.Component {

    constructor(props) {
        super(props);
        
        this.greetings = ["Hello", "Hi there", "Howdy", "Welcome"]
        this.emojis = ["👋","😀", "🙂", "🧐", "🤩", "🥳", "🤠", "🖐", "✌️"];
        
        this.state = {
            greeting: this.greetings[Math.floor(Math.random() * this.greetings.length)],
            emoji: this.emojis[Math.floor(Math.random() * this.emojis.length)]
        };
        
        
        // this.greeting = this.greetings[0];
        // this.emoji = this.emojis[0];
        // this.handleSpin = this.handleSpin.bind(this);
    }

   
    handleSpin(e) {
        e.preventDefault();
        // this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
        // this.emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
        
        this.setState({
            greeting: this.greetings[Math.floor(Math.random() * this.greetings.length)],
            emoji: this.emojis[Math.floor(Math.random() * this.emojis.length)]
        });
        
        // console.log(this.state.greeting)
        // console.log(this.state.emoji)
    }





    render() {
    

        return (
            <h1>
                <Greeting 
                    greeting={this.state.greeting}
                />&nbsp;
                <Emoji emoji={this.state.emoji}/>
                {/* <Spin onClick={this.handleSpin} /> */}
            </h1>
        );
    }

}



export default HelloRoulette