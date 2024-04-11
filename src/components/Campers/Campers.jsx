import { useState } from "react";
import { Container } from "../../reusable/Reusable.styled";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CampersSection, Fieldset, FilterSection, FiltersStyled, Input, Label, LittleTittle, Location, SearchBtn, Text } from "./Campers.styled";
import campers from "../../campers.json";
import { CampersItem } from "../CampersItem/CampersItem";

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

                <FiltersStyled>
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
                </FiltersStyled>

                <FiltersStyled>
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
                </FiltersStyled>

                <SearchBtn>Search</SearchBtn>
            </FilterSection>

            <CampersSection>
                <ul>
                    {campers.map(camper => {
                        return <CampersItem key={camper._id} camper={camper}/>
                    })}
                </ul>
                {/* <StyledBtn>Load more</StyledBtn> */}
            </CampersSection>
        </Container>
    )
}