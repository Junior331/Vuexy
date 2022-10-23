import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Props } from "./@types";
import RadialDasheds from "./Components/RadialDasheds";
import * as S from "./SupportTrackerProgressStyled";
const SupportTrackerProgress = ({ progress }: Props) => {
  return (
    <S.SupportTrackerProgressContainer>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          width: "268px",
          height: "268px",
        }}
      >
        <CircularProgress variant="determinate" />
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
          <RadialDasheds count={35} />
          <S.Circle />
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
    </S.SupportTrackerProgressContainer>
  );
};

export default SupportTrackerProgress;
