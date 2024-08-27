import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManagerTitle } from "../manager/ManagerTitle";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
