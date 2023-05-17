import { LabelPreview } from "./label-preview";

export const LabelList = ({ labels }) => {
  return (
    <ul className="label-list clean-list">
      {labels.map((label) => (
        <LabelPreview label={label} key={label} />
      ))}
    </ul>
  );
};
