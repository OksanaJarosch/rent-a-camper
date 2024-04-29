import styled from "styled-components";
import { LittleTitle } from "../Modal/Modal.styled";
import { theme } from "../../helpers/themes";

export const FeauturesContainer = styled.div`
    max-width: 430px;
`;

export const VehicleDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
`;

export const Title = styled(LittleTitle)`
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: ${theme.border.inputGrey};
`;

export const Extras = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 44px;
`;
