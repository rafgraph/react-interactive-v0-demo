/* eslint react/no-multi-comp: "off" */
import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import s from './stressTest.style';

class StressTest extends React.Component {
  constructor() {
    super();
    this.state = {
      showStressTest: false,
      batches: 0,
    };
    this.maxBatches = 25;
  }

  toggleStressTest = (cb) => {
    if (this.state.showStressTest) {
      this.setState({ showStressTest: false, batches: 0 }, cb);
    } else {
      this.batch(cb);
    }
  }

  batch(cb) {
    // batch asychrounsly so the creation of 500 divs is non-blocking and
    // the browser can execute other stuff in the callback queue,
    // note that the setTimeout is required b/t each setState call batch
    setTimeout(() => {
      this.setState(
        { showStressTest: true, batches: this.state.batches + 1 },
        () => { this.state.batches === this.maxBatches ? cb() : this.batch(cb); },
      );
    }, 0);
  }

  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Stress Test</h2>
        {' '}&ndash;{' '}
        <ToggleTest
          testShown={this.state.batches === this.maxBatches}
          toggleStressTest={this.toggleStressTest}
        />
        {this.state.showStressTest &&
          Object.keys(new Int8Array(this.state.batches)).map(Number).map(idx => (
            <Batch key={idx} batchNumber={idx + 1} />
          ))
        }
      </div>
    );
  }
}


class ToggleTest extends React.Component {
  static propTypes = {
    toggleStressTest: PropTypes.func,
    testShown: PropTypes.bool,
  }
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  toggleStressTest = () => {
    this.setState({ loading: true }, () => {
      this.props.toggleStressTest(() => {
        this.setState({ loading: false });
      });
    });
  }

  render() {
    const toggleItems = (
      <span
        onClick={this.toggleStressTest}
        {...s.create500Items}
      >
        {this.props.testShown ? 'remove' : 'create'} 500 Interactive divs
      </span>
    );
    const loading = (
      <span
        style={s.loading}
        focus={{}} // add blank focus prop so RI treats it as focusable
      >{'rendering...'}</span>
    );
    return (
      <Interactive
        as={this.state.loading ? loading : toggleItems}
        touchActiveTapOnly
      />
    );
  }
}


class Batch extends React.Component {
  static propTypes = {
    batchNumber: PropTypes.number,
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        {Object.keys(new Int8Array(20)).map(Number).map(idx => (
          <Item key={idx} itemNumber={idx + ((this.props.batchNumber - 1) * 20)} />
        ))}
      </div>
    );
  }
}


class Item extends React.Component {
  static propTypes = {
    itemNumber: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      iState: 'normal',
      focus: false,
      focusFrom: undefined,
    };
  }

  handleOnStateChange = ({ nextState }) => {
    this.setState(nextState);
  }

  numberMapping = {
    42: 'Todo 42: Read The Hitchhiker\'s Guide to the Galaxy',
    172: 'Mookie Betts',
    199: 'Tom Brady, Tom... fucking... Brady...',
    232: 'Julian Edelman',
  }

  render() {
    return (
      <Interactive
        as="div"
        onStateChange={this.handleOnStateChange}
        {...s.item}
        focus={{ focusFromTabStyle: s.item.focus }}
      >
        <div>
          {s.code('div')} number {this.props.itemNumber + 1}
          {this.state.iState !== 'normal' &&
            <span> &ndash; {s.code(this.state.iState)}</span>
          }
        </div>
        {this.state.focus &&
          <div style={s.showOnFocus}>
            &ndash; {this.numberMapping[this.props.itemNumber + 1] ||
            `Some ${this.props.itemNumber + 1} stuff shown on focus`}
          </div>
        }
      </Interactive>
    );
  }
}

export default StressTest;
