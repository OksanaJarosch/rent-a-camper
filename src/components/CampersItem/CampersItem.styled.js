import styled from "styled-components";
import { theme } from "../../helpers/themes";


export const CamperStyled = styled.li`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: 20px;
    border: ${theme.border.inputGrey};
    margin-bottom: 32px;

    @media (min-width: ${theme.breakpoint.xl}) {
        height: 358px;
        flex-direction: row;
    }
`;

export const PictureContainer = styled.div`
    max-width: max-content;
    height: 310px;
    border-radius: 10px;
    overflow: hidden;

    @media (min-width: ${theme.breakpoint.xl}) {
        max-width: 290px;
    }
`;

export const Picture = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const AboutContainer = styled.div`
    width: 100%;

    @media (min-width: ${theme.breakpoint.xl}) {
        width: 526px;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom: 8px;
`;

export const FlexContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`;

export const ShirtText = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${theme.color.grey};
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px; 
`;

export const Extra = styled.li`
    color: ${theme.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    display: flex;
    align-items: center;
    border-radius: 100px;
    background: ${theme.color.lightGrey};
    padding: 12px 18px;
`;

export const Extras = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`;

export const ExtraSvg = styled.svg`
    margin-right: 8px;
    width: 20px;
    height: 20px;;
    stroke: ${props => props.reverseStyle ? "transparent" : theme.color.dark};
    fill: ${props => props.reverseStyle ? theme.color.dark :"transparent"};
`;

export const ReviewsLink = styled.a`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${theme.color.dark};
    line-height: 1.5;
    text-decoration-line: underline;
    cursor: pointer;
`;

export const Location = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${theme.color.dark};
    line-height: 1.5;
`;

export const FavBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover svg {
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;