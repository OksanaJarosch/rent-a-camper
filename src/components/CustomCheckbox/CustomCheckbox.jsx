import { ChackboxLabel, Checkbox, HiddenCheckbox } from "../Campers/Campers.styled";
import sprite from "assets/sprite.svg";
import { theme } from "../../helpers/themes";
import { StyledSvg } from "./CustomCheckbox.styled";

export const CustomCheckbox = ({ label, name, icon, onChange, checked, reverseStyle }) => {

    const checkboxBorder = {
        border: checked ? `${theme.border.orange}` : `${theme.border.inputGrey}`
    };

    return (
        <Checkbox style={checkboxBorder} onClick={() => onChange(name)}>
            <HiddenCheckbox checked={checked} readOnly />
            <StyledSvg reverseStyle={reverseStyle}>
                <use href={`${sprite}#${icon}`} alt={name} />
            </StyledSvg>
            <ChackboxLabel>{label}</ChackboxLabel>
        </Checkbox>
    )
}