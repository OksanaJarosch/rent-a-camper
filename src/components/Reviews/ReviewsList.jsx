import { StyledList } from "./Reviews.styled";
import { ReviewsItem } from "./ReviewsItem";

export const ReviewsList = ({reviews}) => {

    return (
        <StyledList>
            {reviews.length ? (
                reviews.map((r,index) => {
                    return <li key={r.reviewer_name+index}>
                        <ReviewsItem review={r}/>
                    </li>})
                    ) : (
                        <p>There are no rewievs yet</p>
                    )
            }
        </StyledList>
    )
};