import styled from "styled-components";
import {theme} from "../helpers/themes";


export const StyledOrangeBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 60px;
    border-radius: 200px;
    border: none;
    background: ${theme.color.orange};
    color: ${theme.color.white};
    width: fit-content;
    cursor: pointer;
    transition: ${theme.transition};

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
    transition: ${theme.transition};
    
    &:hover {
        border-color: ${theme.color.orange};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
    padding: 150px 64px 100px 64px;

    @media (min-width: ${theme.breakpoint.xl}) {
        flex-direction: row;
        justify-content: space-around;
    }
`;


export const Placeholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 888px;
    height: 358px;
    padding: 24px;
    border-radius: 20px;
    border: ${theme.border.inputGrey};
    font-size: 24px;
    line-height: 1.5;
    color: ${theme.color.grey};
`;

export const Title = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${theme.color.dark};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
`;

export const Input = styled.input`
    max-width: 360px;
    border-radius: 10px;
    border: none;
    background: ${theme.color.beige};
    padding: 18px;
`;