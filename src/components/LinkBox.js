import React from 'react';



function LinkIcon(props) {
    
    const icon = props.icon;
    
    return (
        <div className="linkIcon">
            <img src={icon} className="App-logo" alt="logo" />
        </div>
    )
}

function LinkSquare (props) {
    return (
        <div className="linkSquare">
            <a href={props.link}>
                {/* {props.site} */}
                <LinkIcon class="linkIcon" icon={props.icon}/>
            </a>
        </div>
    )
}




export default class LinkBox extends React.Component {

    constructor(props) {
        super(props);
        this.links = props.linkData.map(item => (<LinkSquare id={item['site']} site={item['site']} link={item['link']} icon={item['icon']} />));
        this.type = props.type
    }


    render () {
        return (
            <div className="linkBox">
                <div className="linkHeader">
                    <h1>{this.type}</h1>
                </div>
                <div className="linkContainer">
                    {this.links}
                </div>
            </div>
        )
      

    }



}