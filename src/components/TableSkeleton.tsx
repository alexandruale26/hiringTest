import tableHeadCells from "./tableHead/TableHeadData";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Table,
  TableContainer,
  Toolbar,
  Typography,
  TableBody,
  Skeleton,
} from "@mui/material";

const TableSkeleton = () => {
  return (
    <>
      <Toolbar sx={[{ gap: "10px", pl: { sm: "16px" } }]}>
        <Typography variant="h6">Users</Typography>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox disabled />
              </TableCell>
              {tableHeadCells.map((cell) => (
                <TableCell key={cell.id} sx={{ fontWeight: 600 }}>
                  {cell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <TableRow key={item}>
                  <TableCell padding="checkbox">
                    <Checkbox disabled />
                  </TableCell>
                  {tableHeadCells.map(({ id }) => (
                    <TableCell key={id}>
                      <Skeleton />
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableSkeleton;
