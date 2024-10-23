import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ChipField,
  SearchInput,
  TextInput,
  DateInput,
  useTranslate
} from "react-admin";
import { Chip } from "@mui/material";

const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};
const postFilters = [
  <SearchInput source="nonota" alwaysOn />,
  <DateInput source="tglpenjualan" label="Tanggal" />,
  <QuickFilter source="state" label="Status" defaultValue={["NEW"]} />
];

export const OrderList = props => (
  <List {...props} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nonota" label="No Nota" />
      <DateField source="tglpenjualan" showTime label="Tanggal" />
      <TextField source="kodepelanggan" label="Kode Pelanggan" />
      <TextField source="namapelanggan" label="Nama Pelanggan" />
      <TextField source="telp" label="Telp" />
      <ChipField source="state" label="Status" />
      <NumberField
        source="total"
        options={{
          style: "currency",
          currency: "IDR"
        }}
        sx={{ fontWeight: "bold" }}
      />
      <TextField source="carabayar" label="Pembayaran" />
    </Datagrid>
  </List>
);
