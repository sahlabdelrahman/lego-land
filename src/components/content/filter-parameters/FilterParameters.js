import { useState } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: "1px !important",
}));

const FilterParameters = () => {
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: "none",
      }}
      component="ul"
    >
      {chipData.map((data) => {
        // let icon = <CloseIcon fontSize="small" />;
        return (
          <ListItem key={data.key}>
            <Chip
              // icon={icon}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default FilterParameters;
