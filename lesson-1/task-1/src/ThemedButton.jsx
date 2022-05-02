import React, { Component } from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends Component {
  render() {
    return (
      <button
        style={{ color: this.context.fontColor, backgroundColor: this.context.background }}
        {...this.props}
        className="btn"
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
