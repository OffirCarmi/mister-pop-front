import { PopPreview } from "./pop-preview";

export const PopList = ({ pops }) => {
  return (
    <div className="pop-list">
      {pops.map((pop) => (
        <PopPreview key={pop._id} pop={pop} />
      ))}
    </div>
  );
};
