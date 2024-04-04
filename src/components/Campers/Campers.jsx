import { Container, StyledOrangeBtn } from "../../reusable/Reusable.styled"
import { CampersSection, Checkbox, Fieldset, FilterSection, Input, Label, LittleTittle, Location, Text } from "./Campers.styled"

export const Campers = () => {
    return (
        <Container>
            <FilterSection type="submit">
                <Location>
                <Label for="location">Location</Label>
                <Input type="name" id="location" placeholder="Please enter location"/>
                </Location>

                <div>
                    <Text>Filters</Text>
                    <LittleTittle>Vehicle equipment</LittleTittle>
                    <Fieldset>
                        <Checkbox type="checkbox" name="equipment"/>
                        <Checkbox type="checkbox" name="equipment"/>
                        <Checkbox type="checkbox" name="equipment"/>
                        <Checkbox type="checkbox" name="equipment"/>
                        <Checkbox type="checkbox" name="equipment"/>
                    </Fieldset>
                </div>

                <div>
                    <LittleTittle>Vehicle type</LittleTittle>
                    <Fieldset>
                        <input type="radio" name="type"/>
                        <input type="radio" name="type"/>
                        <input type="radio" name="type"/>
                    </Fieldset>
                </div>

                <StyledOrangeBtn>Search</StyledOrangeBtn>
            </FilterSection>

            <CampersSection>Right Section</CampersSection>
        </Container>
    )
}