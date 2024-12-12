import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TableToolbar from "./TableToolbar";
import TableHead from "./tableHead/TableHead";
import { useUsersListController } from "./usersList/usersListContext";
import type { UserData } from "./usersList/UsersList.types";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableRow as MuiTableRow } from "@mui/material";

const Table: React.FC<{ data: UserData[] }> = ({ data }) => {
  const { selected, setSelected } = useUsersListController();

  const handleSelectAll = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    if (target.checked) {
      const newSelected = data.map((item) => item.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <>
      <TableToolbar selectedCount={selected.length} />
      <TableContainer>
        <MuiTable>
          <TableHead handleSelectAll={handleSelectAll} selectedCount={selected.length} rowsCount={data.length} />
          <TableBody>
            {data.map((row) => {
              const isSelected = selected.includes(row.id);

              return (
                <MuiTableRow
                  hover
                  key={row.id}
                  onClick={() => handleSelect(row.id)}
                  selected={isSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  {Object.entries(row).map(([key, value]) => (
                    <TableCell key={key} sx={{ color: "#222" }}>
                      {value}
                    </TableCell>
                  ))}
                </MuiTableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};

export default Table;
