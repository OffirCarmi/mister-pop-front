import { popService } from "../../services/pop.service";
import { LabelPreview } from "./label-preview";

export const LabelList = ({ labels }) => {
  const labelsIndex = popService.getLabelsIndex()

  return (
    <ul className="label-list clean-list">
      {labels.map((label) => (
        <LabelPreview label={labelsIndex[label]} key={label} />
      ))}
    </ul>
  );
};
