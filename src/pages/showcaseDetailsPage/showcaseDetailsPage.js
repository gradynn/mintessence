import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { useParams } from 'react-router-dom';

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
            <div>
                <p>Artist Name: {showcase.artistName}</p>
            </div>
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