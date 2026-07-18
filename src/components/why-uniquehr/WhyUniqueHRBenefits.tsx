import { benefits } from "../../data/whyUniqueHR";
import { WhyUniqueHRBenefitRow } from "./WhyUniqueHRBenefitRow";

export function WhyUniqueHRBenefits() {
  return (
    <div className="flex flex-col gap-4">
      {benefits.map((benefit, i) => (
        <WhyUniqueHRBenefitRow key={benefit.number} benefit={benefit} index={i} />
      ))}
    </div>
  );
}
