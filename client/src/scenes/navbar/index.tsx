import { useState } from "react";
import { Link } from "react-router-dom";
import WalletIcon from "@mui/icons-material/Wallet";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <WalletIcon sx={{ fontSize: "28px" }} />
        <Typography
          variant="h4"
          fontSize="16px">
          銀包
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("主頁")}
            style={{
              color: selected === "主頁" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}>
            主頁
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("開支預測")}
            style={{
              color: selected === "開支預測" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}>
            開支預測
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
