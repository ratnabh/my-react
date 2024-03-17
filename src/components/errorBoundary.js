import React, { Component, Suspense } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    console.log(error, "error12");
    if (error) {
      return { error: true };
    }
  }
  render() {
    return this.state.error ? (
      <Suspense fallback={<div>error...</div>}></Suspense>
    ) : (
      this.props.children
    );
  }
}
