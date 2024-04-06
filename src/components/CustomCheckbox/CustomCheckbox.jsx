import { ChackboxLabel, Checkbox, HiddenCheckbox } from "../Campers/Campers.styled";
import sprite from "assets/sprite.svg";
import { theme } from "../../helpers/themes";

export const CustomCheckbox = ({ label, name, icon, onChange, checked, type }) => {

    const checkboxBorder = {
        border: checked ? `${theme.border.orange}` : `${theme.border.inputGrey}`
    };

    const svgStyle = {
        stroke: type === "checkbox" ? `${theme.color.dark}` : "transparent",
        fill: type === "checkbox" ? "transparent" : `${theme.color.dark}`
    }

    return (
        <Checkbox style={checkboxBorder} onClick={() => onChange(name)}>
            <HiddenCheckbox type={type} checked={checked} readOnly />
            <svg width="32" height="32" style={svgStyle}>
                <use href={`${sprite}#${icon}`} alt={name} />
            </svg>
            <ChackboxLabel>{label}</ChackboxLabel>
        </Checkbox>
    )
}