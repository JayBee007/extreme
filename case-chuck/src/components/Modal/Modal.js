import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    setTimeout(() => modalRoot.removeChild(this.el), 10000);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
