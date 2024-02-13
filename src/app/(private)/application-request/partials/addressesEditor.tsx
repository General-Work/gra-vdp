import React from "react";
import DateInput from "@app/components/forms/DateField";
import Form from "@app/components/forms/Form";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import Fieldset from "@app/components/ui/Fieldset";
import * as z from "zod";
import TextAreaField from "@app/components/forms/TextAreaField";
import { ID_TYPES } from "./personalEditor";

const REGIONS = [
  { value: "Ashanti", label: "Ashanti" },
  { value: "Ahafo", label: "Ahafo" },
  { value: "Bono", label: "Bono" },
  { value: "Eastern", label: "Eastern" },
];

const MODE_OF_CONTACT = [
  { value: "Email", label: "Email" },
  { value: "SMS", label: "SMS" },
  { value: "Phone Call", label: "Phone Call" },
];

const REP_CAPACITY = [
  { value: "Attorney", label: "Attorney" },
  { value: "Accountant", label: "Accountant" },
];

const intialValues = {};

const schema = z.object({});

const AddressesEditor = () => {
  return (
    <Form initialValues={intialValues} schema={schema} className="space-y-4">
      <Fieldset label="Physical Address" childrenDiv="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <SelectField
            label="Postal Region"
            required
            name="b"
            options={REGIONS}
          />
          <InputField label="Box Number" required name="a" />
          <InputField label="House Number" required name="c" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField label="Region" required name="e" options={REGIONS} />
          <SelectField
            label="Preferred mode of contact"
            required
            name="f"
            options={MODE_OF_CONTACT}
          />
        </div>
        <TextAreaField label="Location (Physical)" required name="d" rows={2} />
      </Fieldset>
      <Fieldset label="Representative Details" childrenDiv="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <InputField label="First Name" required name="req-a" />
          <InputField label="Surname" required name="req-b" />
          <InputField label="Phone Number" required name="req-d" />

          <SelectField
            label="Capacity"
            required
            name="req-c"
            options={REP_CAPACITY}
          />
          <SelectField
            label="ID Type"
            name="maritalStaus"
            required
            options={ID_TYPES}
          />
          <InputField label="ID Number" required name="idNumber" />
        </div>
        <SelectField
          options={[]}
          label="ID Issuing Country"
          required
          name="h"
        />
      </Fieldset>
    </Form>
  );
};

export default AddressesEditor;
