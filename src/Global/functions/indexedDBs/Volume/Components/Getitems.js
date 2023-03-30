import React from "react";
import PropTypes from "prop-types";
import volumedb from "../";

const Volumedbcom = {};

Volumedbcom.GetItem = class GetItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inProgress: false,
      value: undefined,
      error: undefined,
    };
  }

  UNSAFE_componentWillMount() {
    if (typeof window !== "object") {
      return;
    }

    if (this.props.lazy) {
      return;
    }

    this.getValue();
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }

  getValue = () => {
    this.setState({ inProgress: true });
    volumedb.getItem(this.props.itemKey, (err, value) => {
      if (this.willUnmount) return;

      this.setState(() => ({ value, error: err, inProgress: false }));
    });
  };

  render() {
    if (!this.props.render) {
      return null;
    }
    return (
      this.props.render({
        getValue: this.getValue,
        inProgress: this.state.inProgress,
        value: this.state.value,
        error: this.state.error,
      }) || null
    );
  }
};

Volumedbcom.GetItem.propTypes = {
  itemKey: PropTypes.string,
  // Do not call getValue on mount
  lazy: PropTypes.bool,
  render: PropTypes.func,
};

Volumedbcom.GetItem.defaultProps = {
  lazy: false,
};

export default Volumedbcom;
