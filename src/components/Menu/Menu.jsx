import { Link } from "react-router-dom"
import sprite from "assets/sprite.svg"
import { StyledMenu } from "./Menu.styled"

export const Menu = () => {
    return (
        <StyledMenu>
            <Link to="/">
                <svg width="32" height="32">
                    <use href={`${sprite}#van`}/>
                </svg>
            </Link>
        </StyledMenu>
    )
}