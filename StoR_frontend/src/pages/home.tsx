import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [equipment, setEquipment] = useState(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("http://localhost:3000/equipment");
        const retrieveEquipment = await response.json();
        setEquipment(retrieveEquipment);
        console.log(retrieveEquipment);
      } catch {
        setFetchError("Failed to retieve equipment!");
      }
    };
    fetchEquipment();
  }, []);

  return (
    <>
      <h2>Hi, I am a Home Page!</h2>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <p>{equipment?.message}</p>
      </Stack>
    </>
  );
};
