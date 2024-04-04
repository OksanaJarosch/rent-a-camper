import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const FilterSection = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 360px;
`

export const CampersSection = styled.section`
    width: 888px;
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LittleTittle = styled.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${theme.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${theme.border.lightGrey};
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${theme.color.grey};
    margin-bottom: 14px;
`

export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${theme.color.grey};
`

export const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`

export const Input = styled.input`
    width: 360px;
    border-radius: 10px;
    border: none;
    background: ${theme.color.beige};
    padding: 18px;
`

export const Checkbox = styled.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    padding: 17px 18px;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: ${theme.border.inputGrey};
`