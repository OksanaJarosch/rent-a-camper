import styled from "styled-components";
import {theme} from "../helpers/themes";


export const StyledOrangeBtn = styled.button`
    padding: 16px 60px;
    border-radius: 200px;
    border: none;
    background: ${theme.color.orange};
    color: ${theme.color.white};
    cursor: pointer;
    &:hover {
        background: ${theme.color.orangeHover};
    }
`;

export const StyledBtn = styled.button`
    padding: 16px 32px;
    border-radius: 200px;
    border: ${theme.border.inputGrey};
    background: transparent;
    cursor: pointer;
    &:hover {
        border-color: ${theme.color.orange};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 64px;
    padding: 150px 64px 100px 64px;
`