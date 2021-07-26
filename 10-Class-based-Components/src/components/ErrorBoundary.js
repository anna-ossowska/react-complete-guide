import React, { Component } from 'react';
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(err) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.error}>
          <p>Something went wrong</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
