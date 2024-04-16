import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const StyledSvg = styled.svg`
    width: 32px;
    height: 32px;
    stroke: ${props => props.reverseStyle ? "transparent" : theme.color.dark};
    fill: ${props => props.reverseStyle ? theme.color.dark :"transparent"};
`;