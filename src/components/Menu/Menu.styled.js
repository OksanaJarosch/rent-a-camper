import styled from "styled-components";
import {theme} from "../../helpers/themes";
import { Link, NavLink } from "react-router-dom";
import { StyledBtn } from "../../reusable/Reusable.styled";


export const StyledMenu = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 85px;
    padding: 16px 32px;

    @media (min-width: ${theme.breakpoint.md}) {
        justify-content: space-between;
        padding: 16px 64px;
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
        transition: ${theme.transition};

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${theme.color.dark};
    font-weight: 600;
    padding: 16px;
    transition: ${theme.transition};

    &.active {
        color: ${theme.color.orange};
    }
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: ${theme.breakpoint.md}) {
        display: block;
    }
`;

export const StyledBurger = styled.button`
    cursor: pointer;
    padding: 0;
    border: none;
    background: transparent;

    @media (min-width: ${theme.breakpoint.md}) {
        display: none;
    }
`;

export const BackdropMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.beige};
    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: center;
    padding: 24px;

    @media (min-width: ${theme.breakpoint.md}) {
        display: none;
    }
`;

export const MobBtn = styled(StyledBtn)`
    padding: 0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
`;
