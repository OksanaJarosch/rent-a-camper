import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { LittleTitle } from "../Modal/Modal.styled";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 448px;
    padding: 24px;
    border-radius: 10px;
    border: ${theme.border.inputGrey};

    @media (min-width: ${theme.breakpoint.md}) {
        width: 448px;
    }
`;

export const FormTitle = styled(LittleTitle)`
    margin-bottom: 8px;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
`;

export const FormText = styled.p`
    color: ${theme.color.grey};
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 24px; 
`;

export const StyledError = styled.p`
    color: ${theme.color.orange};
    font-size: 12px;
    padding-left: 8px;
`;