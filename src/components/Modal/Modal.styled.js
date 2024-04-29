import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { Title } from "../../reusable/Reusable.styled";

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
    margin-right: 24px;
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
    margin-bottom: 44px; 
`;

export const Price = styled(Title)`
    margin-bottom: 24px;
`;

export const ScrollContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100% - 120px);
    margin-bottom: 24px;
    padding-right: 16px;

    &::-webkit-scrollbar {
        width: 8px;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${theme.color.scroll};
        border-radius: 7px;
        width: 8px;
    }
`;

export const InfoBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    color: ${props => props.isActive ? theme.color.orange : theme.color.dark};
`;

export const LittleTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 44px;
    padding-bottom: 24px;
    border-bottom: ${theme.border.inputGrey};
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content:space-between;
    gap: 24px;
    margin-right: 24px;
`;