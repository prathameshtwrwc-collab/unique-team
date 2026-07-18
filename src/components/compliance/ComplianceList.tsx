import { complianceItems } from "../../data/compliance";
import { ComplianceItem } from "./ComplianceItem";

export function ComplianceList() {
  const column1 = complianceItems.slice(0, 4);
  const column2 = complianceItems.slice(4, 8);

  return (
    <ol className="grid gap-x-14 gap-y-7 md:grid-cols-2">
      <div className="flex flex-col gap-7">
        {column1.map((item, i) => (
          <li key={item.id}>
            <ComplianceItem item={item} index={i} />
          </li>
        ))}
      </div>
      
      <div className="flex flex-col gap-5">
        {column2.map((item, i) => (
          <li key={item.id}>
            <ComplianceItem item={item} index={i + 4} />
          </li>
        ))}
      </div>
    </ol>
  );
}
