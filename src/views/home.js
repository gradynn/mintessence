import React from 'react';
import { HiMenu } from 'react-icons/hi';
import styled from 'styled-components';

// Simple styled textual components for use only here
const tagLine1 = styled.p`
    font-size: 100px;
`;

const keyText = styled.span`
    color: #9A94DC;
`;

const Home = () => {
    return (
        <tagLine1>Explore <keyText>Artist-Fan</keyText> Collaboration</tagLine1>
    );
};  

export default Home;