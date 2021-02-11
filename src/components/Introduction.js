import React from 'react'



export default class Introduction extends React.Component {



    render () {
        return (
            <div className="intro"> 
                <p>My name is <span id="myName">Aaron Brezel</span>.</p>
                <p>I am a Brooklyn-based computational journalist and newsroom developer.</p>
                <p>I've worn lots of hats: investigative reporter, talk-radio host, data visualizationist and software engineer.</p>
                <p>When out of the office, I like baseball, hiking, photography and video games.</p>
                <p>I use this website to collect all my work links in one place.</p>
                <p>Shoot me <a href="mailto:brezelaaron@gmail.com?subject=Hello from the website!" rel="noreferrer" target="_blank" tabindex={0}>an email</a> if you like to chat.</p>
                <p>Happy browsing!</p>
            </div>
        );
    }
}

