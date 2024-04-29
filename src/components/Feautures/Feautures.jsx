import { Extra, ExtraSvg } from "../CampersItem/CampersItem.styled";
import { Extras, FeauturesContainer, Title, VehicleDetails } from "./Feautures.styled";
import sprite from "assets/sprite.svg";

export const Feautures = ({camper}) => {
    const {adults, engine, details, transmission} = camper;

    const camperExtras = [
        {name: "adults", label: `${adults} adults`, icon: "people", reverseStyle: true},
        {name: "transmission", label:`${transmission}`, icon: "automatic", reverseStyle: false},
        {name: "engine", label: `${engine}`, icon: "fuel", reverseStyle: true},
        {name: "airConditioner", label: "AC", icon: "clima", reverseStyle: true},
        {name: "kitchen", label: "Kitchen", icon: "kitchen", reverseStyle: false},
        {name: "beds", label: `${details.beds} beds`, icon: "bed", reverseStyle: false},
        {name: "TV", label: "TV", icon: "tv", reverseStyle: false},
        {name: "shower", label: "Shower", icon: "shower", reverseStyle: false},
    ];

    const vehicleDetails = [
        {name: "length", label: "Length"},
        {name: "width", label: "Width"},
        {name: "height", label: "Height"},
        {name: "tank", label: "Tank"},
        {name: "consumption", label: "Consumption"},
    ];

    return (
        <FeauturesContainer>
            <Extras>
            {camperExtras.map(extra => {
                        const {name, label, icon, reverseStyle} = extra;

                        return(
                            ((+(camper.details[name]) >= 1) || (camper[name])) &&
                            <Extra key={name}>
                                <ExtraSvg reverseStyle={reverseStyle}>
                                    <use href={`${sprite}#${icon}`} alt={name} />
                                </ExtraSvg>
                                <span>{label}</span>
                            </Extra>
                        )
                    })}
            </Extras>

            <Title>
                Vehicle details
            </Title>

            <VehicleDetails>
                <p>Form</p>
                {camper.form === "alcove" && <p>Alcove</p>}
                {camper.form === "fullyIntegrated" && <p>Fully Integrated</p>}
                {camper.form === "panelTruck" && <p>Pannel Truck</p>}
            </VehicleDetails>
            
            {vehicleDetails.map(item => {
                const {name, label} = item;

                return (
                    <VehicleDetails>
                        <p>{label}</p>
                        <p>{camper[name]}</p>
                    </VehicleDetails>
                )
            })}
        </FeauturesContainer>
    )
}