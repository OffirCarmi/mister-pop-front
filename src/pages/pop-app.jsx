import React from "react";
import { connect } from "react-redux";
import { loadPops } from "../store/actions/pop.action";

import { PopList } from "../cmps/pop-app/pop-list";

class _PopApp extends React.Component {
  componentDidMount() {
    this.props.loadPops();
  }

  render() {
    const { pops } = this.props;
    return (
      <section className="pop-app">
        {pops.length > 0 && <PopList pops={pops} />}
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

export const PopApp = connect(mapStateToProps, mapDispatchToProps)(_PopApp);
