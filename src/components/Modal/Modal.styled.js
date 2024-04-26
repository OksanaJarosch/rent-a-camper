import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const CloseBtn = styled.button`
    cursor: pointer;
    padding: 0;
    border: none;
    background: transparent;
`;

export const TitleFlexContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom: 10px;
`;

export const ReviewsContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`;

export const CamperPhotos = styled.ul`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    margin-top: 24px;
`;

export const PhotoPlace = styled.li`
    width: 290px;
    height: 310px;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${theme.color.beige}
`;

export const Description = styled.p`
    color: ${theme.color.grey};
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px; 
`;