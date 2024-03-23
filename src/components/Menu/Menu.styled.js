import styled from "styled-components";
import {theme} from "../../helpers/themes";


export const StyledMenu = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 32px;
`;

export const StyledNav = styled.nav`
    display: none;

    @media (min-width: ${theme.breakpoint.md}) {
        display: flex;
        gap: 24px;
        justify-content: space-between;
    }
`;
