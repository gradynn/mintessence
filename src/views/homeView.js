import React from "react";
import TimedShowcaseDisplay from "../components/timedShowcaseDisplay/timedShowcaseDisplay";
import HomeTagLine from "../components/homeTagLine";

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <HomeTagLine />
                <TimedShowcaseDisplay />
            </div>
        );
    }
}

export default HomeView;