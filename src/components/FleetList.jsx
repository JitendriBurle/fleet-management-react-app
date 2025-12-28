import { useCallback } from "react";
import FleetCard from "./FleetCard";

const FleetList = ({ fleets, setFleets }) => {
  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;

    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleStatus = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: f.status === "Available" ? "Unavailable" : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (!confirm("Are you sure?")) return;
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <div
      style={{
        flex: 1,
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {fleets.map((fleet) => (
        <FleetCard
          key={fleet.id}
          fleet={fleet}
          onUpdateDriver={updateDriver}
          onToggle={toggleStatus}
          onDelete={deleteFleet}
        />
      ))}
    </div>
  );
};

export default FleetList;
