import { Link } from "react-router-dom"
import sprite from "assets/sprite.svg"

export const Menu = () => {
    return (
        <>
            <Link to="/">
                <svg>
                    <use href={`${sprite}#van`}/>
                </svg>
            </Link>
        </>
    )
}