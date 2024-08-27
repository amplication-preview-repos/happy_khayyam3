import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";

export const ManagerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="admins"
          reference="Admin"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <NumberInput label="rates" source="rates" />
      </SimpleForm>
    </Edit>
  );
};
