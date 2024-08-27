import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TurfTitle } from "../turf/TurfTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
