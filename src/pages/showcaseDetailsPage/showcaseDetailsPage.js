import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import './showcaseDetailsPage.css';
import { NavLink } from 'react-router-dom';
import SubmissionView from '../../components/submissionView/submissionView';

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

class ShowcaseDetails extends React.Component {
    constructor(props) {
        super(props);

        const end = new Date(props.sc.endDate);
        const start = new Date();
        var secondsUntil = end - start;

        var hasEnded = false;
        if (secondsUntil < 0) {
            hasEnded = true;
        }

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
            seconds: secondsUntil,
            submit: false,
            ended: hasEnded
        };

        this.toggleViewSubmissions = this.toggleViewSubmissions.bind(this);
        this.toggleViewSubmit = this.toggleViewSubmit.bind(this);
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

    toggleViewSubmissions() {
        this.setState({
            submit: false
        })
    }

    toggleViewSubmit() {
        this.setState({
            submit: true
        })
    }

    render() {
        return(
            <div className='showcaseDetailsWrapper'>
                <div className='showcaseInfo'>
                    <img src={this.props.sc.photo} className='profilePhoto'/>
                    <div style={{'flex-direction': 'column'}}>
                        <p className='artistName'>{this.props.sc.artistName}</p>
                        <p className='showcaseTitle'>{this.props.sc.title}</p>
                        {!(this.state.ended) ?
                            <><p className='standardText'>Showcase closing in...</p><div className='countdownWrapper'>
                                <CountdownCard val={this.state.days} unit="d" />
                                <CountdownCard val={this.state.hours} unit="h" />
                                <CountdownCard val={this.state.minutes} unit="m" />
                                <CountdownCard val={this.state.seconds} unit="s" />
                            </div></>
                        :
                            <div id='showcaseEndedCard'>
                                <p className='standardText'> This showcase has ended.</p>
                            </div>
                        }   
                    </div>
                </div>
                { !(this.state.submit) ? 
                    (
                        <div id='tabButtons'>
                            <button className='selectedTab' onClick={this.toggleViewSubmissions}>
                                View Submissions
                            </button>
                            <button className='unselectedTab' onClick={this.toggleViewSubmit}>
                                Upload Submission
                            </button>
                        </div>
                    )
                :
                    (
                        <div id='tabButtons'>
                            <button className='unselectedTab' onClick={this.toggleViewSubmissions}>
                                View Submissions
                            </button>
                            <button className='selectedTab' onClick={this.toggleViewSubmit}>
                                Upload Submission
                            </button>
                        </div>
                    )
                }
                <div className='horizontalSeperator'></div>
                {(!this.state.submit) ? 
                    <SubmissionView matchId={this.props.sc.id}/> 
                    :
                    <></>
                }
            </div>
        );
    }
}

function ShowcaseDetailsPage(props) {
    const { showcaseId } = useParams();

    const [showcase, setShowcase] = useState(); 

    useEffect(() => {
        API.graphql({
            query: queries.getShowcase,
            variables: { id: showcaseId }
        }).then((response) => setShowcase(response.data.getShowcase)).catch((error) => console.log(error));
    }, []); 

    if (showcase) {
        return (
            <section>
                <ShowcaseDetails sc={showcase} />
            </section>
        );
    } else {
        return (
            <section>
                Loading...
            </section>
        );
    }
}

export default ShowcaseDetailsPage;