import { button } from 'aws-amplify';
import React from 'react';
import { NavLink } from 'react-router-dom';
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

        // Determine seconds until the end date
        const end = new Date(props.endDate);
        const start = new Date();
        var secondsUntil = end - start;

        // reduce down to days, hours, minutes, seconds
        const daysUntil = Math.trunc(secondsUntil / 86400000);
        secondsUntil -= (daysUntil * 86400000);
        const hoursUntil = Math.trunc(secondsUntil / 3600000);
        secondsUntil -= (hoursUntil * 3600000);
        const minutesUntil = Math.trunc(secondsUntil / 60000);
        secondsUntil -= (minutesUntil * 60000);
        secondsUntil = Math.trunc(secondsUntil / 1000);

        const buttonLink = '/showcase/' + this.props.showcaseId;

        this.state = {
            link: buttonLink,
            days: daysUntil,
            hours: hoursUntil,
            minutes: minutesUntil,
            seconds: secondsUntil
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick () {
        let d = this.state.days;
        let h = this.state.hours;
        let m = this.state.minutes;
        let s = this.state.seconds;

        if (s === 0) {
            if (m === 0) {
               if (h === 0) {
                    d--;
                    h = 23;
               } 
               h--;
               m = 59;
            }
            m--;
            s = 59;
        }
        else {
            s--;
        }

        this.setState({
            seconds: s,
            minutes: m,
            hours: h,
            days: d
        })
    }

    render() {
        return(
        <div className='primaryWrapper showcase-animation'>
            <div className='profilePhotoWrapper'>
                <img className='profilePhoto' src={this.props.imageSrc} a/>
            </div>
            <div className='infoWrapper'>
                <p id='artistName'>{this.props.artistName}</p>
                <p id='showcaseTitle'>{this.props.showcaseTitle}</p>
                <p className='standardText'>Showcase closing in...</p>
                <div className="countdownWrapper">
                    <CountdownCard val={this.state.days} unit="d" />
                    <CountdownCard val={this.state.hours} unit="h" />
                    <CountdownCard val={this.state.minutes} unit="m" />
                    <CountdownCard val={this.state.seconds} unit="s" />
                </div>
                <NavLink to={this.state.link}>
                    <button id='showcaseButton'>View Showcase</button>
                </NavLink>
            </div>
        </div>
        );
    }
}

export default ShowcasePreview;