import React, { Component } from 'react';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="home-img">
          <img className="woman-picture" src="woman2.png"/>
        </div>
        <div className="home-text">
          <span className="hungry">Hungry?</span>
          <br></br>
          <br></br>
          <span className="thirsty">Thirsty?</span>
          <br></br>
          <br></br>
          <span className="bored">Bored?</span>
          <br></br>
          <br></br>
          {/* <span className="dont-know">Don't know where to go?</span> */}
        </div>

      </div>
    );
  }

}

export default Home
