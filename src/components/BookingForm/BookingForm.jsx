import { Input, StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { FormText, FormTitle, InputsContainer, StyledForm } from "./BookingForm.styled";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const today = new Date();
today.setHours(0, 0, 0, 0); 

const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Must be a valid email").required("Email is required"),
    date: Yup.date().min(today, "Date cannot be in the past").required("Date is required"),
    comment: Yup.string(),
})


export const BookingForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const handleBooking = data => {
        console.log(data);
        reset();
    };

    return(
        <StyledForm onSubmit={handleSubmit(handleBooking)}>
            <div>
                <FormTitle>Book your campervan now</FormTitle>
                <FormText>Stay connected! We are always ready to help you.</FormText>
                <InputsContainer>
                    <Input type="name" {...register("name")} placeholder="Name"/>
                    <p>{errors.name?.message}</p>
                    <Input type="email" {...register("email")} placeholder="Email"/>
                    <p>{errors.email?.message}</p>
                    <Input type="date" {...register("date")} placeholder="Booking date"/>
                    <p>{errors.date?.message}</p>
                    <Input type="text" {...register("comment")} placeholder="Comment"/>
                    <p>{errors.comment?.message}</p>
                </InputsContainer>
            </div>
            <StyledOrangeBtn type="submit">Send</StyledOrangeBtn>
        </StyledForm>
    )
}