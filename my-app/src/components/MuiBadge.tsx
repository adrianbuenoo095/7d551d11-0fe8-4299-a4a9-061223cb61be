import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Stack } from "@mui/material";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </Stack>
  );
};
