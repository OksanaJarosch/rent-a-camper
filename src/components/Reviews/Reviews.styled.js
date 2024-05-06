import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const StyledItemHead = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`;

export const StyledLetterPlace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background: ${theme.color.lightGrey};
`;

export const StyledLetter = styled.p`
    color: ${theme.color.orange};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
`;

export const ReviewerName = styled.h3`
    color: ${theme.color.dark};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    margin-bottom: 4px;
`;

export const Reviewer = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const StarsList = styled.ul`
    display: flex;
    gap: 4px;
`;

export const Comment = styled.p`
    color: ${theme.color.grey};
    line-height: 1.5;
`;