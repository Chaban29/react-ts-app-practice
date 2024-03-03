import React from 'react';

interface ClassCounterProps {
  count: number;
}

interface ClassCounterState {
  count: number;
}

class ClassCounter extends React.Component<
  ClassCounterProps,
  ClassCounterState
> {
  constructor(props: ClassCounterProps) {
    super(props);
    this.state = {
      count: props.count || 0,
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    if (this.state.count < 1) return;
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='counter__item'>
        <h3>{this.state.count}</h3>
        <button type='button' onClick={this.Increment}>
          Increment
        </button>
        <button type='button' onClick={this.Decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export { ClassCounter };
