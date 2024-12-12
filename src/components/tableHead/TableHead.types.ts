export type TableHeadProps = {
  handleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCount: number;
  rowsCount: number;
};

export type TableHeadColumn = { id: string; label: string };
