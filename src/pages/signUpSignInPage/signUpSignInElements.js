import React from 'react';
import styled from 'styled-components';

export const SwitchButtonSelected = styled.button`
    color: white;
    border: none;
    font-size: 24px;
    text-align: center;
    background-color: #9A94DC;
    border-bottom: 5px solid #9A94DC;
    padding: 0px 100px 0px 100px;
`

export const SwitchButtonUnselected = styled.button`
    color: black;
    border: none;
    background-color: transparent;
    font-size: 24px;
    test-align: center;
    border-bottom: 5px solid #9A94DC;
    padding: 0px 100px 0px 100px;

    &:hover {
        color: white;
        background-color: #9A94DC;
    }
`

export const TermsText = styled.p`
    font-size: 12px;
`