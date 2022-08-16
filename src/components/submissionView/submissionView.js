import { API } from "aws-amplify";
import React from "react";
import { convertCompilerOptionsFromJson } from "typescript";
import * as queries from '../../graphql/queries';
import './submissionView.css';

const Submission = (props) => {
    return(
        <img className='submissionPhoto' src={props.submission.photo} />
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

        this.setState({
            submissions: allSubmissions
        });
    }

    render() {
        return(
            <div class='submissions'>
                {this.state.submissions.map(item => (
                    <Submission submission={item} />
                ))}
            </div>
        );
    }
}

export default SubmissionView;