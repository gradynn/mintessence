import React from 'react';
import './homePage.css';
import ShowcasePreview from '../../components/showcasePreview/showcasePreview';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import HomeTagLine from '../../components/homeTagLine';

class HomePageShowcases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showcases: [],
        };
    }

    componentDidMount() {
        this.fetchShowcases();
    }

    async fetchShowcases() {
        try {
            // Query all showcases and isolate only the list of showcases
            let allShowcases = await API.graphql({ query: queries.listShowcases });
            allShowcases = allShowcases.data.listShowcases.items;

            const cleanShowcases = allShowcases.filter(item => !(item._deleted));

            this.setState({
                showcases: cleanShowcases
            })
        }
        catch (error) {}
    }

    render() {
        return(
            this.state.showcases.map(item => (
                <section>
                    <ShowcasePreview key={item.id} imageSrc={item.photo} showcaseTitle={item.title} artistName={item.artistName} endDate={item.endDate} />
                </section>
            )
            )
        );

    }
}

const HomePage = () => {
    return(
        <>
            <section>
            <HomeTagLine />
            </section>
            <HomePageShowcases />
        </>
    );
}

export default HomePage;