import React from 'react';
import './showcasePreview.css';

class CountdownCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
  
  render() {
    return(
      <div className='cardWrapper'>
        <p className='number'>{this.props.val}</p>
        <p className='unit'>{this.props.unit}</p>
      </div>
    );
  }
}

class ShowcasePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return(
      <div className='primaryWrapper'>
        <div className='profilePhotoWrapper'>
          <img className='profilePhoto' src={this.props.imageSrc}/>
        </div>
        <div className='infoWrapper'>
          <p id='artistName'>{this.props.artistName}</p>
          <p id='showcaseTitle'>{this.props.showcaseTitle}</p>
          <p className='standardText'>Showcase closing in...</p>
          <div className="countdownWrapper">
            <CountdownCard val={10} unit="d" />
            <CountdownCard val={48} unit="h" />
            <CountdownCard val={23} unit="m" />
            <CountdownCard val={58} unit="s" />
          </div>
          <button id='showcaseButton'>View Showcase</button>
        </div>
      </div>
    );
  }
}

export default ShowcasePreview;