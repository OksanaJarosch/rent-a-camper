import styled from "styled-components";
import {theme} from "../../helpers/themes";
import { Link, NavLink } from "react-router-dom";


export const StyledMenu = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    padding: 16px 32px;

    @media (min-width: ${theme.breakpoint.md}) {
        justify-content: space-between;
    }
`;

export const StyledNav = styled.nav`
    display: none;

    @media (min-width: ${theme.breakpoint.md}) {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledLogo = styled(Link)`
    display: none;

    @media (min-width: ${theme.breakpoint.md}) {
        display: block;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${theme.color.dark};
    font-weight: 600;
    padding: 16px;
    transition: color ${theme.transition};
    &.active {
        color: ${theme.color.orange};
    }
    &:hover {
        color: ${theme.color.orange};
    }
`;

export const StyledBurger = styled.button`
    padding: 0;
    border: none;
    background: transparent;

    @media (min-width: ${theme.breakpoint.md}) {
        justify-content: space-between;
        display: none;
    }
`;