import { useEffect } from "react";
import { Comment, Reviewer, ReviewerName, StarsList, StyledItemHead, StyledLetter, StyledLetterPlace } from "./Reviews.styled";
import sprite from "assets/sprite.svg";
import { useState } from "react";


export const ReviewsItem = ({review}) => {
    const {reviewer_name, reviewer_rating, comment} = review;

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const getStars = () => {
            const newStars = [];
    
            for (let star = 0; star < 5; star++) {
                if (star < +(reviewer_rating)) {
                    newStars.push("yellow");
                } else {
                    newStars.push("grey");
                }
                setStars(newStars);
            }
        };

        getStars();
    }, [reviewer_rating]);
    

    return (
        <>
            <StyledItemHead>
                <StyledLetterPlace>
                    <StyledLetter>{reviewer_name.slice(0, 1)}</StyledLetter>
                </StyledLetterPlace>
                
                <Reviewer>
                    <ReviewerName>{reviewer_name}</ReviewerName>
                    <StarsList>
                        {stars.map((s, index) => {
                            return (
                                <li key={index}>
                                    {s === "yellow" ? (
                                    <svg width="16" height="16">
                                        <use href={`${sprite}#star`} />
                                    </svg>
                                    ) : (
                                        <svg width="16" height="16">
                                        <use href={`${sprite}#grey-star`} />
                                    </svg>
                                    )}
                                </li>
                            )
                        })}
                    </StarsList>
                </Reviewer>
            </StyledItemHead>
            <Comment>{comment}</Comment>
        </>
    )
};