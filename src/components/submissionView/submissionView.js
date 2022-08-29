import { API } from "aws-amplify";
import React, { useState } from "react";
import * as queries from '../../graphql/queries';
import './submissionView.css';
import SubmissionModal from "../submissionModal/submissionModal";

function Submission(props) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <><button onClick={() => setIsOpen(true)} className='submissionModalButton' >
            <img className='submissionPhoto' src={props.submission.photo} />
        </button>
        <SubmissionModal open={isOpen} onClose={() => setIsOpen(false)} submission={props.submission} /></>
    );
}

class SubmissionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upload: false,
            submissions: []
        };

        this.getSubmissions();
    }

    async getSubmissions() {
        let allSubmissions = await API.graphql({ query: queries.listSubmissions });
        allSubmissions = allSubmissions.data.listSubmissions.items;
        allSubmissions = allSubmissions.filter(item => !(item._deleted));
        allSubmissions = allSubmissions.filter(item => (item.showcaseID === this.props.matchId));

        console.log('Getting submissions');

        this.setState({
            submissions: allSubmissions
        });
    }

    render() {
        return(
            <div className='submissions'>
                {this.state.submissions.map(item => (
                    <Submission submission={item} />
                ))}
            </div>
        );
    }
}

export default SubmissionView;