import * as React from "react";
import { useEffect, useState } from "react";
import dataProvider from "../dataProvider";

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

const arrState = ["NEW", "WASHING", "DRYING", "IRONING", "FINISH"];
const arrStateVarian = [
  { state: "NEW", variant: "error" },
  { state: "WASHING", variant: "warning" },
  { state: "DRYING", variant: "secondary" },
  { state: "IRONING", variant: "primary" },
  { state: "FINISH", variant: "success" }
];

export const numberFormat = value =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "IDR"
  }).format(value);

const OrderItem = () => {
  console.log("OrderItem");
  const record = useRecordContext();
  console.log(record);
  const [isLoading, setLoading] = useState(true);
  const [orderItemData, setOrderItemData] = useState({});

  const getArrItem = () => {
    dataProvider
      .getOrderItemByOrderId("orderitems/getitembyid", {
        orderId: record.id
      })
      .then(data => {
        setLoading(false);
        setOrderItemData(data.data);
      })
      .catch(e => {
        setLoading(false);
      });
  };

  const variantButton = state => {
    let objState = arrStateVarian.find(obj => {
      return obj.state === state;
    });
    return objState.variant;
  };

  useEffect(() => {
    getArrItem();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Table style={{ width: "100%" }}>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Received - Finish</TableCell>
          <TableCellRight>Price</TableCellRight>
          <TableCell> Qty </TableCell>
          <TableCellRight>Total</TableCellRight>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderItemData.map(item => (
          <TableRow
            key={item.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell style={{ padding: "4", width: "200px" }}>
              {item.id} # {item.namaproduct}
              {" - "}
              <Chip label={item.state} color={variantButton(item.state)} />
            </TableCell>
            <TableCell>
              {item.tanggal_masuk} - {item.tanggal_selesai}
            </TableCell>
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
