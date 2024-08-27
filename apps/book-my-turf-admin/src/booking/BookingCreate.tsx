import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TurfTitle } from "../turf/TurfTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="confirmed" source="confirmed" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="time" source="time" />
        <ReferenceInput source="turf.id" reference="Turf" label="turf">
          <SelectInput optionText={TurfTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
