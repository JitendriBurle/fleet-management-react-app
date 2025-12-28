import { useState } from "react";

const Sidebar = ({ fleets, setFleets }) => {
    const [regNo, setRegNo] = useState("");
    const [category, setCategory] = useState("");
    const [driver, setDriver] = useState("");
    const [status, setStatus] = useState("");

    const handleAddFleet = () => {
        if(!regNo || !category || !driver || !status) {
            alert("All fields are required");
            return;
        }

        const newFleet = {
            id: Date.now(),
            regNo,
            category,
            driver,
            status,
        };

        setFleets([...fleets, newFleet]);
        setRegNo("");
        setCategory("");
        setDriver("");
        setStatus("");
    };

    return (
        <div style={{ width: '250px', padding: '10px'}}>
            <h4>Add Fleet</h4>

            <input 
                placeholder="Vehicle Reg No"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Car</option>
            </select>
            <input 
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <input 
                placeholder="Driver"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option>Available</option>
                <option>Unavailable</option>
            </select>

            <button onClick={handleAddFleet}>Add Fleet</button>
        </div>
    );
}

export default Sidebar;
            