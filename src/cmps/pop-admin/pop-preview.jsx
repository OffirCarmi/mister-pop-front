import { connect } from "react-redux";

import { useEffect, useState } from "react";
import { popService } from "../../services/pop.service";

import { PopBox } from "../pop-box";

import { savePop } from "../../store/actions/pop.action";
import { utilService } from "../../services/util.service";

const _PopPreview = ({ pop, savePop }) => {
  const [editPop, setEditPop] = useState(pop);
  const [isReadyToSave, setIsReadyToSave] = useState(false);

  const moviesIndex = popService.getMoviesIndex();
  const labelsIndex = popService.getLabelsIndex();

  useEffect(() => {
    if (isReadyToSave) {
      savePop(editPop);
      setIsReadyToSave(false);
    }
  }, [editPop]);

  const handleChange = (e) => {
    let { name, value, checked } = e.target;

    switch (name) {
      case "stock":
        setEditPop({ ...editPop, inStock: checked });
        break;
      case "image":
        break;
      case "price":
        setEditPop({ ...editPop, price: value });
        break;
      case "name":
        setEditPop({ ...editPop, name: value });
        break;
      case "movieCode":
        setEditPop({ ...editPop, movieCode: +value });
        break;
      case "labels":
        const popLabelIdx = editPop.labels.indexOf(+value);
        const updatedLabels = [...editPop.labels];
        if (popLabelIdx >= 0) updatedLabels.splice(popLabelIdx, 1);
        else updatedLabels.push(+value);
        updatedLabels.sort((a, b) => a - b);
        setEditPop({ ...editPop, labels: updatedLabels });
        break;
      case "description":
        setEditPop({ ...editPop, description: value });
        break;

      default:
        return;
    }
  };

  const onSavePop = () => {
    if (!isEdited()) return;
    setEditPop({ ...editPop, price: parseFloat(editPop.price).toFixed(2) });
    setIsReadyToSave(true);
  };

  const isEdited = () => {
    if (editPop.inStock !== pop.inStock) return true;
    if (editPop.price !== pop.price) return true;
    if (editPop.name !== pop.name) return true;
    if (editPop.movieCode !== pop.movieCode) return true;
    if (!utilService.isSameArray(editPop.labels, pop.labels)) return true;
    if (editPop.description !== pop.description) return true;
    return false;
  };

  const isLabelEdited = (label) => {
    if (
      (pop.labels.includes(+label) && !editPop.labels.includes(+label)) ||
      (editPop.labels.includes(+label) && !pop.labels.includes(+label))
    )
      return true;
    else return false;
  };

  return (
    <li className={`pop-preview ${isEdited() ? "edit" : ""}`}>
      <div className="image">
        {editPop._id?.length > 0 && <PopBox popId={editPop._id} />}
      </div>
      <div className="details">
        <section className="left">
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input
              className={pop.name !== editPop.name ? "edit" : ""}
              type="text"
              name="name"
              value={editPop.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="price">
            <label htmlFor="price">Price:</label>
            <div className="input-box">
              <span className="currency-symbol">$</span>
              <input
                className={pop.price !== editPop.price ? "edit" : ""}
                id="currency"
                type="number"
                name="price"
                value={editPop.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="movie">
            <label htmlFor="movieCode">Movie:</label>
            <select
              className={pop.movieCode !== editPop.movieCode ? "edit" : ""}
              name="movieCode"
              value={editPop.movieCode}
              onChange={(e) => handleChange(e)}
            >
              {Object.keys(moviesIndex).map((movieCode) => (
                <option value={movieCode} key={movieCode}>
                  {moviesIndex[movieCode]}
                </option>
              ))}
            </select>
          </div>
          <div className="labels">
            <label className="title" htmlFor="labels">
              Labels:
            </label>
            <div className="character">
              {Object.keys(labelsIndex)
                .slice(0, 4)
                .map((label) => (
                  <label
                    key={label}
                    className={isLabelEdited(label) ? "edit" : ""}
                  >
                    <input
                      type="checkbox"
                      name="labels"
                      value={label}
                      checked={editPop?.labels?.includes(+label)}
                      onChange={(e) => handleChange(e)}
                    />
                    {labelsIndex[label]}
                  </label>
                ))}
            </div>
            <hr className="inner" />
            <div className="role">
              {Object.keys(labelsIndex)
                .slice(4)
                .map((label) => (
                  <label
                    key={label}
                    className={isLabelEdited(label) ? "edit" : ""}
                  >
                    <input
                      type="checkbox"
                      name="labels"
                      value={label}
                      checked={editPop?.labels?.includes(+label)}
                      onChange={(e) => handleChange(e)}
                    />
                    {labelsIndex[label]}
                  </label>
                ))}
            </div>
          </div>
        </section>
        <section className="right">
          <div className="description">
            <div className="textarea-wrapper">
              <label>Description:</label>
              <textarea
                className={
                  pop.description !== editPop.description ? "edit" : ""
                }
                name="description"
                onChange={(e) => handleChange(e)}
                value={editPop.description}
              />
            </div>
          </div>
          <div className="stock-id-box">
            <div className="stock">
              <input
                type="checkbox"
                name="stock"
                checked={editPop.inStock}
                onChange={(e) => handleChange(e)}
              />
              <label
                className={`stock ${
                  pop.inStock !== editPop.inStock ? "edit" : ""
                }`}
              >
                {editPop.inStock ? "In stock" : "Out of stock"}
              </label>
            </div>
            <div className="id">
              POP ID: <span>{editPop._id}</span>
            </div>
          </div>
        </section>
      </div>
      <div className="save">
        {isEdited() && <button onClick={() => onSavePop()}>Save</button>}
      </div>
    </li>
  );
};

const mapStateToProps = (storeState) => {
  return {
    pops: storeState.popModule.pops,
  };
};

const mapDispatchToProps = { savePop };

export const PopPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PopPreview);
