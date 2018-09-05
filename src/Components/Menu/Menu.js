import React, { Component } from 'react';
import Proptype from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

class Menu extends Component {
  render() {
    const { children } = this.props;
    return (
      <nav>
        <div>
          <ul>{children}</ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  children: Proptype.any,
};

export default Menu;
