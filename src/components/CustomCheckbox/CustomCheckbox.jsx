import { ChackboxLabel, Checkbox, HiddenCheckbox } from "../Campers/Campers.styled";
import sprite from "assets/sprite.svg";

export const CustomCheckbox = ({ label, name, icon, onChange, checked }) => {
    return (
        <Checkbox>
            <HiddenCheckbox type="checkbox" checked={checked} readOnly />
            <svg width="32" height="32" stroke="#101828" fill="transparent">
                <use href={`${sprite}#${icon}`} alt={name} />
            </svg>
            <ChackboxLabel>{label}</ChackboxLabel>
        </Checkbox>
    )
}