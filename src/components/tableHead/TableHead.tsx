import React from "react";
import tableHeadCells from "./TableHeadData";
import { TableCell, TableHead as MuiTableHead, TableRow, Checkbox } from "@mui/material";
import type { TableHeadProps } from "./TableHead.types";

const TableHead: React.FC<TableHeadProps> = ({ handleSelectAll, selectedCount, rowsCount }) => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={selectedCount > 0 && selectedCount < rowsCount}
            checked={rowsCount > 0 && selectedCount === rowsCount}
            onChange={handleSelectAll}
          />
        </TableCell>
        {tableHeadCells.map((cell) => (
          <TableCell key={cell.id} sx={{ fontWeight: 600 }}>
            {cell.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
