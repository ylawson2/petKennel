import React from 'react';

class ChildComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="child-card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
        <p>{this.props.status}</p>
        <button onClick={() => this.props.onAction(this.props.id)}>Click Me</button>
      </div>
    );
  }
}

export default ChildComponent;
