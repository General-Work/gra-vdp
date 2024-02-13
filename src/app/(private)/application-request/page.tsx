"use client";

import React, { useState } from "react";
import PersonalEditor from "./partials/personalEditor";
import AddressesEditor from "./partials/addressesEditor";
import CompanyEditor from "./partials/companyEditor";
import Helper from "./partials/Helper";
import { Button } from "@app/components/ui/Button";

const Page = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep !== 3) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep !== 1) setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="h-full overflow-y-auto pb-6">
      <div className="flex flex-col gap-6 container mx-auto ">
        <Helper />
        <div className="flex flex-col gap-4">
          {activeStep === 1 ? (
            <PersonalEditor />
          ) : activeStep === 2 ? (
            <AddressesEditor />
          ) : activeStep === 3 ? (
            <CompanyEditor />
          ) : null}
          <div className="flex gap-3 pt-4 justify-end">
            <Button onClick={handleBack} variant="default">
              Back
            </Button>

            <Button onClick={handleNext} variant="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
