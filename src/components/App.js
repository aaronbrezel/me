import React from 'react';

//css imports
import '../css/App.css';

//Icon imports
import linkedin from '../logos/LinkedIn.svg';  
import twitter from '../logos/Twitter.svg';
import instagram from '../logos/Instagram.svg';
import github from '../logos/GitHub.svg';
import observable from '../logos/Observable.svg';
import quoteworthy from '../logos/Quoteworthy.svg';
import miamiherald from '../logos/MiamiHerald.svg';
import stlpostdispatch from '../logos/STLPostDispatch.png';
import studentlife from '../logos/StudentLife.svg';

//Component imports
import HelloRoulette from './HelloRoulette.js';
import Introduction from './Introduction.js';
import LinkBox from './LinkBox.js'




class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      // firstLaunch: null,
      temp: "nothing",
    };
  }
  
  render () {

    // console.log(observable)
    const LINK_DATA = [
      { site: "LinkedIn", type: "Social", link: "https://www.linkedin.com/in/aaron-brezel/", icon: linkedin },
      { site: "Twitter", type: "Social", link: "https://twitter.com/aaronbrezel", icon: twitter },
      { site: "Instagram", type: "Social", link: "https://www.instagram.com/brezlet/", icon: instagram},
      { site: "GitHub", type: "Code", link: "https://github.com/aaronbrezel", icon: github },
      { site: "Observable", type: "Code", link: "https://observablehq.com/@aaronbrezel", icon: observable },
      { site: "Quoteworthy", type: "Code", link: "https://chrome.google.com/webstore/detail/quoteworthy/aanbnbjieflpdcekdifhcdoakdogobhc", icon: quoteworthy},
      { site: "Miami Herald", type: "Journalism", link: "https://www.miamiherald.com/search/?q=Aaron+Brezel", icon: miamiherald},
      { site: "St. Louis Post-Dispatch", type: "Journalism", link: "https://www.stltoday.com/search/?k=%22aaron%20brezel%22", icon: stlpostdispatch},
      { site: "Student Life", type: "Journalism", link: "https://www.studlife.com/author/aaronbrezel/", icon: studentlife}
    ];



    return (
      <div className="App">
        <div className="contentWindow">
          {<HelloRoulette/>}
          {<Introduction />}
          {<LinkBox type="Social" linkData={LINK_DATA.filter(row => row['type'] === "Social")} />}
          {<LinkBox type="Code" linkData={LINK_DATA.filter(row => row['type'] === "Code")} />}
          {<LinkBox type="Journalism" linkData={LINK_DATA.filter(row => row['type'] === "Journalism")} />}
        </div>
        {/* <HelloRoulette /> */}
      
      </div>
      );
  }
}

export default App;
