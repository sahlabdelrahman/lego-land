import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { filterByAge } from "../../../redux/actions/products.action";

const Age = () => {
  const Accordion = styled(MuiAccordion)(({ theme }) => ({
    backgroundColor: "none",
    border: "none",
    boxShadow: "none",
  }));

  const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    padding: "0",
  }));

  const [state, setState] = useState({
    "up to a year": false,
    "1 year - 2 years": false,
    "3 year - 5 years": false,
    "6 year - 10 years": false,
    "older than 12 years": false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const checkedValues = Object.keys(state).filter((key) => state[key]);
    dispatch(filterByAge(checkedValues));
  }, [state, dispatch]);

  return (
    <div>
      <Accordion defaultExpanded="true">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            minHeight: "auto !important",
            marginTop: "10px",
            ".css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
              margin: "0 !important",
            },
          }}
        >
          <h6>Age</h6>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              {Object.entries(state).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={value}
                      onChange={handleChange}
                      name={key}
                      size="small"
                      sx={{
                        padding: "5px 0",
                        color: "#aaa",
                        marginRight: "8px",
                        "&.Mui-checked": {
                          color: "#df3538",
                        },
                      }}
                    />
                  }
                  label={key}
                />
              ))}
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Age;
