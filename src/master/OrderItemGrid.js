import * as React from "react";
import { useQuery } from "react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Chip
} from "@mui/material";
import {
  useGetManyReference,
  useGetOne,
  useRecordContext,
  Loading,
  Error,
  DateField
} from "react-admin";

import { TableCellRight } from "./TableCellRight";

export const numberFormat = value =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "IDR"
  }).format(value);

const OrderItem = () => {
  console.log("OrderItem");
  const record = useRecordContext();
  console.log(record);

  const { data, isLoading, error } = useGetManyReference("orderitems", {
    target: "idtitipanlaundry",
    id: record.id,
    pagination: { page: 1, perPage: 100 },
    sort: { field: "idtitipanlaundry", order: "DESC" }
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Table style={{ width: "100" }}>
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Item</TableCell>
          <TableCell>Received</TableCell>
          <TableCell>Finish</TableCell>
          <TableCellRight>Price</TableCellRight>
          <TableCell>Quantity</TableCell>
          <TableCellRight>Total</TableCellRight>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(item => (
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>
              <Chip label={item.state} variant="outlined" />
              {item.namaproduct}
            </TableCell>
            <TableCell>{item.tanggal_masuk}</TableCell>
            <TableCell>{item.tanggal_selesai}</TableCell>
            <TableCellRight>{numberFormat(item.hargajual)}</TableCellRight>
            <TableCell>
              {item.jumlah} {item.satuan}
            </TableCell>
            <TableCellRight sx={{ fontWeight: "bold" }}>
              {numberFormat(item.jumlah * item.hargajual)}
            </TableCellRight>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderItem;
