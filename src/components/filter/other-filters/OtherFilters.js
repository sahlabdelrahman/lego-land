import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { Divider } from "@mui/material";

const OtherFilters = () => {
  const Accordion = styled(MuiAccordion)(({ theme }) => ({
    backgroundColor: "none",
    border: "none",
    boxShadow: "none",
  }));

  const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    padding: "0",
  }));

  return (
    <div>
      <div>
        <Accordion>
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
            <h6>Brand</h6>
          </AccordionSummary>
        </Accordion>
      </div>
      <Divider />
      <div>
        <Accordion>
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
            <h6>Characters</h6>
          </AccordionSummary>
        </Accordion>
      </div>
      <Divider />
      <div>
        <Accordion>
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
            <h6>Stock availability</h6>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
};

export default OtherFilters;
