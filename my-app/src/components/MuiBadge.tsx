import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, IconButton } from "@mui/material";

export const MuiBadge = () => {
  return (
    <IconButton
      aria-label="cart"
      //   onClick={handleMenu}
      color="inherit"
    >
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};
