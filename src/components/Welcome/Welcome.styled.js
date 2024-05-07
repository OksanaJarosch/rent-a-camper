import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { Link } from "react-router-dom";


export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 64px;
    padding: 20vh 64px 100px 64px;
`;

export const WelcomeText = styled.div`
    max-width: 1100px;
    padding: 36px;
    background-color: ${theme.color.transparentGrey};
    box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    font-size: 36px;
`;

export const Title = styled.h1`
    position: relative;
    z-index: 10;
    display: inline;
    margin-bottom: 12px;
    font-size: 48px;
    letter-spacing: -1px;
    font-weight: 600;
    text-transform: uppercase;
    
    @media (min-width: ${theme.breakpoint.md}) and (max-width: 909px) {
        font-size: 56px;
    }

    @media (min-width: 910px) {
        font-size: 72px;
    }
`;

export const WelcomeTitle = styled.h2`
    display: inline;
    margin-bottom: 24px;
    margin-left: -4px;
    font-size: 42px;
    letter-spacing: -1px;
    font-weight: 200;

    @media (min-width: ${theme.breakpoint.md}) and (max-width: 909px) {
        font-size: 56px;
    }

    @media (min-width: 910px) {
        font-size: 68px;
    }
`;

export const SecondaryTitle = styled.h2`
    margin-bottom: 36px;
    font-size: 24px;
    letter-spacing: -1px;
    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 44px;
`;

export const StyledLink = styled(Link)`
    color: inherit;
    font-size: 24px;
`;