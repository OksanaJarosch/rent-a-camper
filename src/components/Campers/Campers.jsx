import { Container, StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CampersSection, Fieldset, FilterSection, Input, Label, LittleTittle, Location, Text } from "./Campers.styled";

export const Campers = () => {

    const vehicleEquipment = [
        {name: "airConditioner", label: "AC", icon: "clima"},
        {name: "transmission", label: "Automatic", icon: "automatic"},
        {name: "kitchen", label: "Kitchen", icon: "kitchen"},
        {name: "TV", label: "TV", icon: "tv"},
        {name: "bathroom", label: "Shower/WC", icon: "shower"},
    ];

    const handleCheckboxChange = () => {

    };

    const isChecked = () => {

    };

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
                        {vehicleEquipment.map(item => {
                            const {name, label, icon} = item;

                            return (
                            <CustomCheckbox 
                                key={name} 
                                label={label} 
                                name={name} 
                                icon={icon} 
                                onChange={handleCheckboxChange}
                                checked={isChecked(name)} />
                            )
                        })}
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