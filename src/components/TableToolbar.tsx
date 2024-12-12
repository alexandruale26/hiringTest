import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUsersListController } from "./usersList/usersListContext";
import { alpha, Toolbar, Typography, Tooltip } from "@mui/material";

const TableToolbar: React.FC<{ selectedCount: number }> = ({ selectedCount }) => {
  const { handleDeleteUsers } = useUsersListController();

  return (
    <Toolbar
      sx={[
        { pl: { sm: "16px" }, borderRadius: "8px 8px 0 0", gap: "10px" },
        selectedCount > 0 && {
          bgcolor: ({ palette }) => alpha(palette.primary.main, 0.3),
        },
      ]}
    >
      {selectedCount > 0 ? (
        <Typography variant="h6">{selectedCount} selected</Typography>
      ) : (
        <Typography variant="h6">Users</Typography>
      )}

      {selectedCount > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteUsers}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

export default TableToolbar;
