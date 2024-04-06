import { useState } from "react";
import { Container, StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CampersSection, Fieldset, FilterSection, Input, Label, LittleTittle, Location, Text } from "./Campers.styled";

export const Campers = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState(null);

    const vehicleEquipment = [
        {name: "airConditioner", label: "AC", icon: "clima"},
        {name: "transmission", label: "Automatic", icon: "automatic"},
        {name: "kitchen", label: "Kitchen", icon: "kitchen"},
        {name: "TV", label: "TV", icon: "tv"},
        {name: "bathroom", label: "Shower/WC", icon: "shower"},
    ];

    const vehicleType = [
        {name: "van", label: "Van", icon: "van"},
        {name: "integrated", label: "Fully Integrated", icon: "fully"},
        {name: "alcove", label: "Alcove", icon: "alcove"},
    ];

    const handleCheckboxChange = (name) => {
        setSelectedCheckbox(prev => {
            if (prev.includes(name)) {
                return prev.filter(item => item !== name);
            } else {
                return [...prev, name];
            }
        })
    };

    const handleRadioChange = (name) => {
        setSelectedRadio(prev => {
            if (prev === name){
                return null;
            } else {
                return name;
            }
        })
    };

    const isChecked = (name) => {
        return selectedCheckbox.includes(name);
    };

    const onRadio = (name) => {
        return selectedRadio === name;
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
                                checked={isChecked(name)}
                                type="checkbox" />
                            )
                        })}
                    </Fieldset>
                </div>

                <div>
                    <LittleTittle>Vehicle type</LittleTittle>
                    <Fieldset>
                        {vehicleType.map(item => {
                            const {name, label, icon} = item;

                            return (
                            <CustomCheckbox 
                                key={name} 
                                label={label} 
                                name={name} 
                                icon={icon} 
                                onChange={handleRadioChange}
                                checked={onRadio(name)}
                                type="radio" />
                            )
                        })}
                    </Fieldset>
                </div>

                <StyledOrangeBtn>Search</StyledOrangeBtn>
            </FilterSection>

            <CampersSection>Right Section</CampersSection>
        </Container>
    )
}