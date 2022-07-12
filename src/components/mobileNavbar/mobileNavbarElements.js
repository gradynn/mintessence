import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuToggle = styled.button`
    background-color: white;
    border: none;
`;

export const DropdownLink = styled(Link)`
    font-size: 24px;
    font-weight: 500;
    margin-top: 23px;
    margin-bottom: 23px;
    color: white;
    text-align: center;
    width: 100%;

    &:hover {
        color: #d7deff;
    }

    &.active {
        font-weight: 600;
    }
`;