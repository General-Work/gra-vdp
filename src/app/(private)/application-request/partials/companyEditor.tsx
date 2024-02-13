import React from "react";
import Form from "@app/components/forms/Form";
import InputField from "@app/components/forms/InputField";
import Fieldset from "@app/components/ui/Fieldset";
import * as z from "zod";
import FileUpload from "@app/components/forms/FileUpload";

const intialValues = {};

const schema = z.object({});

const CompanyEditor = () => {
  return (
    <Form initialValues={intialValues} schema={schema} className="space-y-4">
      <Fieldset label="company / trust / government" childrenDiv="space-y-4">
        <InputField label="Registered Name" required name="a" />
        <InputField label="Trading Name" required name="b" />
        <InputField label="Registration Number" required name="c" />
      </Fieldset>
      <Fieldset label="Supporting Documents" childrenDiv="p-20">
        <FileUpload />
      </Fieldset>
    </Form>
  );
};

export default CompanyEditor;
