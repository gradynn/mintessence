import React from "react";
import styled from "styled-components"

const Heading = styled.p`
    font-weight: 500;
    font-size: 50px;
`;

const Subheading = styled.p`
    font-weight: 400;
`;

const Subheading2 = styled.p`
    font-weight: 400;
    position: absolute;
    bottom: 0;
`;

const Highlight = styled.span`
    color: #9A94DC;
`;

const TagLineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
    height: 80vh;
`;

const HomeTagLine = () => {
    return (
        <TagLineWrapper>
            <Heading>
                Explore <Highlight>Artist-Fan</Highlight> Collaboration
            </Heading>
            <Subheading>
                Submit fan art to your favorite <Highlight>Artists</Highlight>
            </Subheading>
        </TagLineWrapper>
    );
}

export default HomeTagLine;