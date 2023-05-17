import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PopBox } from "../cmps/pop-box";
import { DetailsBox } from "../cmps/pop-details/details-box";
import { popService } from "../services/pop.service";

export const PopDetails = () => {
  const [pop, setPop] = useState(null);
  const { popId } = useParams();

  useEffect(() => {
    popService.getById(popId).then((pop) => setPop(pop));
  }, [popId]);

  if (!pop) return <p>loading...</p>;
  return (
    <section className="pop-details">
      <PopBox popId={pop._id} />
      <DetailsBox pop={pop} />
    </section>
  );
};
