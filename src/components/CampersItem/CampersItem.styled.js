import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const CamperStyled = styled.li`
    display: flex;
    gap: 24px;
    width: 100%;
    height: 358px;
    padding: 24px;
    border-radius: 20px;
    border: ${theme.border.inputGrey};
    margin-bottom: 32px;
`;

export const PictureContainer = styled.div`
    max-width: 290px;
    height: 310px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Picture = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const AboutContainer = styled.div`
    width: 526px;
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

export const Title = styled.h2`
    color: ${theme.color.dark};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
`;