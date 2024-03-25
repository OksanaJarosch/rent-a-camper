import styled from "styled-components";
import {theme} from "../helpers/themes";


export const StyledOrangeBtn = styled.button`
    padding: 16px 60px;
    border-radius: 200px;
    border: none;
    background: ${theme.color.orange};
    &:hover {
        background: ${theme.color.orangeHover};
    }
`;

export const StyledBtn = styled.button`
    padding: 16px 32px;
    border-radius: 200px;
    border: ${theme.border.grey};
    background: transparent;
    &:hover {
        border-color: ${theme.color.orange};
    }
`;