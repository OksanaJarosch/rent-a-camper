import { useState } from "react";
import { Container } from "../../reusable/Reusable.styled";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CampersSection, Fieldset, FilterSection, FiltersStyled, Input, Label, LittleTittle, Location, SearchBtn, Text } from "./Campers.styled";
import campers from "../../campers.json";
import { CampersItem } from "../CampersItem/CampersItem";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../redux/filters/filterSlice";
import { selectLocation } from "../../redux/selectors";

export const Campers = () => {

    const [selectedCheckbox, setSelectedCheckbox] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState(null);

    const dispatch = useDispatch();
    const locationFilter = useSelector(selectLocation);

    const vehicleEquipment = [
        {name: "airConditioner", label: "AC", icon: "clima", reverseStyle: true},
        {name: "transmission", label: "Automatic", icon: "automatic", reverseStyle: false},
        {name: "kitchen", label: "Kitchen", icon: "kitchen", reverseStyle: false},
        {name: "TV", label: "TV", icon: "tv", reverseStyle: false},
        {name: "bathroom", label: "Shower/WC", icon: "shower", reverseStyle: false},
    ];

    const vehicleType = [
        {name: "van", label: "Van", icon: "van", reverseStyle: true},
        {name: "integrated", label: "Fully Integrated", icon: "fully", reverseStyle: true},
        {name: "alcove", label: "Alcove", icon: "alcove", reverseStyle: true},
    ];

    const getVisibleCampers = () => {
        if (locationFilter === "") {
            return campers;
        } else {
            const filtred = campers.filter(camper => {
                return camper.location.toLocaleLowerCase().includes(locationFilter.toLocaleLowerCase());
            });
            return filtred;
        }
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
                <Input type="name" id="location" placeholder="Please enter location" onChange={evt => dispatch(updateLocation(evt.target.value))}/>
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
                                onChange={handleCheckboxChange}
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
                                onChange={handleRadioChange}
                                checked={onRadio(name)}
                                reverseStyle={reverseStyle} />
                            )
                        })}
                    </Fieldset>
                </FiltersStyled>

                <SearchBtn>Search</SearchBtn>
            </FilterSection>

            <CampersSection>
                <ul>
                    {visibleCampers.map(camper => {
                        return <CampersItem key={camper._id} camper={camper}/>
                    })}
                </ul>
                {/* <StyledBtn>Load more</StyledBtn> */}
            </CampersSection>
        </Container>
    )
}