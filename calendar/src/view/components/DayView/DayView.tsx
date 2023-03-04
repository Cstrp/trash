import { Box, Typography } from "@mui/material";
import { getDay, momentFormat, today } from "../../../data/utils";

export const DayView = () => {
  const day = getDay(today);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" letterSpacing={1}>
        {day.date}
      </Typography>
      {day.intervals.map((interval, idx) => (
        <Typography key={idx} letterSpacing={1}>
          {momentFormat(interval.start, "HH:mm")}
        </Typography>
      ))}
    </Box>
  );
};
