import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageTextSub,
} from "./error-boundary.styles";

import { selectError } from "../../features/gallery/gallery-slice";
import { Button } from "../button/button.component";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true, errorMessage: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasErrored: error,
      errorMessage: errorInfo,
    });
  }

  render() {
    const { errorMsg } = this.props;
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/O0DCcQy.png" />
          <ErrorImageText>
            {errorMsg ?? "Sorry this page is broken."}
          </ErrorImageText>
          <ErrorImageTextSub>
            {errorMsg === "Rate Limit Exceeded"
              ? "Please try again after 1 hour. "
              : "Please Try again Later."}
          </ErrorImageTextSub>
          <Button onClick={() => window.location.reload()}>Refresh</Button>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

const mapStateToProps = createStructuredSelector({
  errorMsg: selectError,
});

export default connect(mapStateToProps)(ErrorBoundary);
