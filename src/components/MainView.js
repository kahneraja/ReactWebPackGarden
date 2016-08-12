import React from 'react';
import '../styles.css';

const propTypes = {

};

export default class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World'
    };
  }

  render() {
    const title = this.state.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

MainView.propTypes = propTypes;
