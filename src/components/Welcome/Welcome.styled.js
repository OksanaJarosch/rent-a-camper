import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { Link } from "react-router-dom";


export const WelcomeText = styled.div`
    max-width: 1100px;
    padding: 36px;
    background-color: ${theme.color.transparentGrey};
    box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    font-size: 36px;
`;

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 56px;
    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 44px;
`;

export const StyledLink = styled(Link)`
    color: inherit;
`;