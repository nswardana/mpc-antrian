import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SearchInput,
  EditButton,
  CloneButton,
  useTranslate,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  ReferenceField,
  useGetIdentity
} from "react-admin";
import { Chip, useMediaQuery } from "@mui/material";
import { matchPath, useLocation } from "react-router";

import MobileGrid from './MobileGrid';

const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};
const postFilters = [
  <SearchInput source="name" alwaysOn variant="outlined" />,
];

const GridActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
      <ExportButton />
      <CreateButton
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const ItemBelanjaList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/itembelanja/create", location.pathname);
  const { identity } = useGetIdentity();

  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  console.log("itembelanja==>isXSmall", isXSmall);

  if (!identity) return null;
  return (
    <>
      <List filters={postFilters} actions={<GridActions />} sx={{
        width: {
          sm: 800, // theme.breakpoints.up('sm')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }
      }
      >
        {isXSmall ? (
          <MobileGrid />
        ) : (
            <>

              <Datagrid
                size="small"
              // rowClick="show"

              >
                <TextField source="id" label="Id" />
                <TextField source="name" label="Nama" />
                <TextField source="desc" label="Keterangan" />
                <EditButton />
              </Datagrid>
            </>
          )}

      </List>
    </>
  );
};

export default ItemBelanjaList;
