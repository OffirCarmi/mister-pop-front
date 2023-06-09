import { PopList } from "./pop-list";

export const PopEdit = ({ pops }) => {
  return (
    <section className="pop-edit">
      <PopList pops={pops} />
    </section>
  );
};
