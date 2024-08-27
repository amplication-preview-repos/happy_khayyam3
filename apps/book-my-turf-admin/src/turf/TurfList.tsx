import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TurfList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Turfs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
