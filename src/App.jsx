import "./App.css";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "employeeName",
    headerName: "",
    width: 100,
    editable: true,
  },
  {
    field: "monday",
    headerName: "Monday",
    type: "dropdown",
    width: 100,
    editable: true,
    textAlign: "center",
  },
  {
    field: "tuesday",
    headerName: "Tuesday",
    type: "button",
    width: 100,
    editable: true,
  },
  {
    field: "wednesday",
    headerName: "Wednesday",
    type: "button",
    width: 100,
    editable: true,
  },
  {
    field: "thursday",
    headerName: "Thursday",
    type: "button",
    width: 100,
    editable: true,
  },
  {
    field: "friday",
    headerName: "Friday",
    type: "button",
    width: 100,
    editable: true,
  },
  {
    field: "saturday",
    headerName: "Saturday",
    type: "button",
    width: 100,
    editable: true,
  },
];

const rows = [
  { id: 1, employeeName: "Amber D" },
  { id: 2, employeeName: "Amber R" },
  { id: 3, employeeName: "Austin" },
  { id: 4, employeeName: "Brian" },
  { id: 5, employeeName: "Cass" },
  { id: 6, employeeName: "Cierra" },
  { id: 7, employeeName: "Chris" },
  { id: 8, employeeName: "Macie" },
  { id: 9, employeeName: "Ray" },
  { id: 10, employeeName: "Sky" },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
