import React from "react";
import { connect } from "react-redux";

import { loadPops } from "../store/actions/pop.action";
import { PopEdit } from "../cmps/pop-admin/pop-edit";

class _PopAdmin extends React.Component {
  componentDidMount() {
    this.props.loadPops();
  }

  render() {
    const { pops } = this.props;
    return (
      <section className="pop-admin">
        <h1>Editing POPs</h1>
        <button className="add-pop">Add new POP</button>
        <PopEdit pops={pops} />
      </section>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    pops: storeState.popModule.pops,
  };
};

const mapDispatchToProps = { loadPops };

export const PopAdmin = connect(mapStateToProps, mapDispatchToProps)(_PopAdmin);
