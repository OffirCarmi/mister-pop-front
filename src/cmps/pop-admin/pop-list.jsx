import { PopPreview } from "./pop-preview";

export const PopList = ({ pops }) => {
  return (
    <ul className="pop-list clean-list">
      {pops.map((pop) => (
        <PopPreview pop={pop} key={pop._id} />
      ))}
    </ul>
  );
};
