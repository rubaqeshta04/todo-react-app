// MyAccordion.jsx
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

export default function MyAccordion() {
  const [checked, setChecked] = useState(false);

  return (
    <Container maxWidth="md" className="mt-20">
      <Box sx={{ bgcolor: "#cfe8fc" }} />

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ flexGrow: 1 }}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ flexGrow: 1 }}>Accordion 2</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
              defaultChecked
              color="success" // أخضر لما يكون on
            />
          </AccordionDetails>
        </Accordion>
      </div>

      <Collapse orientation="horizontal" in={checked}>
        <div className="bg-orange-700 h-500 w-200 ">
          <h1>Hello World</h1>
        </div>
      </Collapse>
    </Container>
  );
}
