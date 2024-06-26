import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { StyledBtn } from "../../reusable/Reusable.styled";

export const FilterSection = styled.form`
    width: auto;

    @media (min-width: ${theme.breakpoint.xl}) {
        width: 360px;
    }
`

export const CampersSection = styled.section`
    max-width: 888px;

    @media (max-width: ${theme.breakpoint.xl}) {
        max-width: 610px;
        margin-right: auto;
        margin-left: auto;
    }
`

export const FiltersStyled = styled.section`
    margin-top: 32px;
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

export const Checkbox = styled.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 112px;
    align-items: center;
    justify-content:center;
    gap: 8px;
    border-radius: 10px;
    cursor: pointer;
`

export const HiddenCheckbox = styled.input`
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 112px;
    cursor: pointer;
`

export const ChackboxLabel = styled.p`
    color: ${theme.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
`

export const SearchBtn = styled(StyledBtn)`
    margin-top: 64px;
`