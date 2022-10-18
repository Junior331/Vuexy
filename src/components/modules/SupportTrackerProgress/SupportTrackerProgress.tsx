import { Box, Typography } from "@mui/material";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import RadialDasheds from "./Components/RadialDasheds";
import * as S from "./SupportTrackerProgressStyled";

const SupportTrackerProgress = (props: CircularProgressProps & { value: number }) => {
  return (
    <S.SupportTrackerProgressContainer>
      <Box sx={{ position: "relative", display: "inline-flex", width: "268px", height: "268px" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RadialDasheds count={35}/>
          <S.Circle />
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(0)}%`}</Typography>
        </Box>
      </Box>
    </S.SupportTrackerProgressContainer>
  );
};

export default SupportTrackerProgress;
