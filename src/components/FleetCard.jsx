import React from "react";
import vehicleImg from "../assets/vehicle.png";

const FleetCard = React.memo(
    ({fleet, onUpdateDriver, onToggle, onDelete}) => {
        console.log("Rendered card:", fleet.id);

        return (
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
                <img src={vehicleImg} width="100%" />
                <p><b>Reg No:</b> {fleet.regNo}</p>
                <p><b>Category:</b> {fleet.category}</p>
                <p><b>Driver:</b> {fleet.driver}</p>
                <p><b>Status:</b> {fleet.status}</p>
                <button onClick={() => onUpdateDriver(fleet.id)}>Update Driver</button>
                <button onClick={() => onToggle(fleet.id)}>Toggle Status</button>
                <button onClick={() => onDelete(fleet.id)}>Delete</button>
            </div>
        );
    }
);

export default FleetCard;