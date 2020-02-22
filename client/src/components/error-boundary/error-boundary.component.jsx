import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error -> we have to manualy change the state
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    // return diff UI depend on state of error
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png}" />
          <ErrorImageText>Sorry, this page got eaten by a Dog.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children; // no error => render normaly
  }
}

export default ErrorBoundary;
