import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function CustomAccordion({ accordionData }) {
  return (
    <div>
      {accordionData?.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ backgroundColor: "#3370b5" }}
          >
            <Typography sx={{ color: "white" }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#edf0f5", borderBottomLeftRadius: 10 }}
          >
            <Box style={{ maxHeight: "200px", overflow: "auto" }}>
              {item.details.map((detail, detailIndex) => (
                <Typography key={detailIndex}>
                  <Link
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    {detail.name}
                  </Link>
                </Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
