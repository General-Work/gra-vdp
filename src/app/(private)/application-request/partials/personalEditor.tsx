import React from "react";
import DateInput from "@app/components/forms/DateField";
import Form from "@app/components/forms/Form";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import Fieldset from "@app/components/ui/Fieldset";
import * as z from "zod";

const YES_OPTIONS = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const APP_TYPES = [
  { value: "Self", label: "Self" },
  { value: "Onbehalf of Individual", label: "Onbehalf of Individual" },
  { value: "Onbehalf of a Company", label: "Onbehalf of a Company" },
];

const REPRESENTING = [
  { value: "Myself", label: "Myself" },
  { value: "Another Individual", label: "Another Individual" },
  { value: "Company", label: "Company" },
];
const MARITAL_STATUS = [
  { value: "Married", label: "Married" },
  { value: "Single", label: "Single" },
  { value: "Divorced", label: "Divorced" },
];

export const ID_TYPES = [
  { value: "ECOWAS Card", label: "ECOWAS Card" },
  { value: "TIN", label: "TIN" },
  { value: "Passport", label: "Passport" },
];

const intialValues = {};

const schema = z.object({});

const PersonalEditor = () => {
  return (
    <Form initialValues={intialValues} schema={schema} className="space-y-4">
      <Fieldset label="Application Information" childrenDiv="space-y-4">
        <SelectField
          label="Are you applying for VDP?"
          required
          name="a"
          options={YES_OPTIONS}
        />
        <SelectField
          label="Application Type"
          required
          name="b"
          options={APP_TYPES}
        />
        <SelectField
          label="Awareness of ongoing Audit or Investigation?"
          required
          name="c"
          options={YES_OPTIONS}
        />
      </Fieldset>
      <Fieldset label="Personal Details" childrenDiv="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <SelectField
            label="Representing"
            required
            name="d"
            options={REPRESENTING}
          />
          <InputField label="First Name" required name="e" />
          <InputField label="Surname" required name="f" />
          <InputField label="Middle Name" name="g" />

          <DateInput label="Date of Birth" name="dob" required />
          <SelectField
            label="Marital Status"
            name="maritalStaus"
            required
            options={MARITAL_STATUS}
          />
          <SelectField
            label="ID Type"
            name="maritalStaus"
            required
            options={ID_TYPES}
          />
          <InputField label="ID Number" required name="idNumber" />
          <SelectField
            options={[]}
            label="ID Issuing Country"
            required
            name="h"
          />
        </div>
      </Fieldset>
    </Form>
  );
};

export default PersonalEditor;
