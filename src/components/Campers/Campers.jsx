import { useState } from "react";
import { Container, Input, Placeholder } from "../../reusable/Reusable.styled";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CampersSection, Fieldset, FilterSection, FiltersStyled, Label, LittleTittle, Location, SearchBtn, Text } from "./Campers.styled";
import campers from "../../campers.json";
import { CampersItem } from "../CampersItem/CampersItem"

export const Campers = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [locationFilter, setLocationFilter] = useState("");

    const vehicleEquipment = [
        {name: "airConditioner", label: "AC", icon: "clima", reverseStyle: true},
        {name: "transmission", label: "Automatic", icon: "automatic", reverseStyle: false},
        {name: "kitchen", label: "Kitchen", icon: "kitchen", reverseStyle: false},
        {name: "TV", label: "TV", icon: "tv", reverseStyle: false},
        {name: "shower", label: "Shower", icon: "shower", reverseStyle: false},
    ];

    const vehicleType = [
        {name: "panelTruck", label: "Van", icon: "van", reverseStyle: true},
        {name: "fullyIntegrated", label: "Fully Integrated", icon: "fully", reverseStyle: true},
        {name: "alcove", label: "Alcove", icon: "alcove", reverseStyle: true},
    ];

    const filterLocation = (campers, location) => {
        if (location === "") {
            return campers;
        }
        return campers.filter(camper => camper.location.toLocaleLowerCase().includes(location.toLocaleLowerCase()));
    };

    const filterType = (campers, type) => {
        if (type === null) {
            return campers;
        }
        return campers.filter(camper => camper.form === type);
    };

    const filterEquipment = (campers, equipment) => {
        if (equipment.length === 0) {
            return campers;
        }
        return campers.filter(camper => {
            return equipment.every(item => {
                return (+(camper.details[item]) >= 1) || (camper[item] === "automatic");
            })
        });
    };

    const getVisibleCampers = () => {
        let filteredCampers = campers;

        filteredCampers = filterLocation(filteredCampers, locationFilter);
        filteredCampers = filterType(filteredCampers, selectedRadio);
        filteredCampers = filterEquipment(filteredCampers, selectedCheckbox);

        return filteredCampers;
    };

    const updateLocation = value => {
        setLocationFilter(value);
    };

    const visibleCampers = getVisibleCampers();

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
        console.log(name);
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
            <FilterSection>
                <Location>
                <Label for="location">Location</Label>
                <Input type="name" id="location" placeholder="Please enter location" onChange={evt => updateLocation(evt.target.value)}/>
                </Location>

                <FiltersStyled>
                    <Text>Filters</Text>
                    <LittleTittle>Vehicle equipment</LittleTittle>
                    <Fieldset>
                        {vehicleEquipment.map(item => {
                            const {name, label, icon, reverseStyle} = item;

                            return (
                            <CustomCheckbox 
                                key={name} 
                                label={label} 
                                name={name} 
                                icon={icon} 
                                onChange={() => handleCheckboxChange(name)}
                                checked={isChecked(name)}
                                reverseStyle={reverseStyle}/>
                            )
                        })}
                    </Fieldset>
                </FiltersStyled>

                <FiltersStyled>
                    <LittleTittle>Vehicle type</LittleTittle>
                    <Fieldset>
                        {vehicleType.map(item => {
                            const {name, label, icon, reverseStyle} = item;

                            return (
                            <CustomCheckbox 
                                key={name} 
                                label={label} 
                                name={name} 
                                icon={icon} 
                                onChange={() => handleRadioChange(name)}
                                checked={onRadio(name)}
                                reverseStyle={reverseStyle} />
                            )
                        })}
                    </Fieldset>
                </FiltersStyled>

                <SearchBtn>Reset</SearchBtn>
            </FilterSection>

            <CampersSection>
                {visibleCampers.length ? (
                    <ul>
                        {visibleCampers.map(camper => {
                            return <CampersItem key={camper._id} camper={camper}/>
                        })}
                    </ul>
                ) : (
                    <Placeholder>
                        <p>Sorry, there's nothing to match what you've searched for.</p>
                    </Placeholder>
                )
        }
            </CampersSection>
        </Container>
    )
}