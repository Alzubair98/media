import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center ">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={() => setExpanded(!expanded)} className="cursor-pointer">
          {expanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
