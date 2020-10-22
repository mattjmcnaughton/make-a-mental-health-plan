import React, { ReactElement } from "react";

type CreateMentalHealthPlanProps = {
  navbar?: ReactElement;
  footer?: ReactElement;
};

function CreateMentalHealthPlan(
  props: CreateMentalHealthPlanProps
): ReactElement {
  return (
    <div>
      {props.navbar}
      <div data-testid="create-mental-health-plan-container">
        <h2>Create a Mental Health Plan</h2>
      </div>
      {props.footer}
    </div>
  );
}

export default CreateMentalHealthPlan;
