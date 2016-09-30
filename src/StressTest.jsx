/* eslint react/no-multi-comp: "off" */
import React, { PropTypes } from 'react';
import Interactive from '../../react-interactive-component/src/index';
import s from './stressTest.style';

class StressTest extends React.Component {
  constructor() {
    super();
    this.state = {
      showStressTest: false,
      loading: false,
    };
    this.endLoadingTime = new Date();
  }

  toggleStressTest = (cb) => {
    this.setState({ showStressTest: !this.state.showStressTest }, cb);
  }

  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Stress Test</h2>
        {' '}&ndash;{' '}
        <ToggleTest
          testShown={this.state.showStressTest}
          toggleStressTest={this.toggleStressTest}
        />
        {this.state.showStressTest &&
          Object.keys(new Int8Array(500)).map(Number).map((idx) =>
            <Item key={idx} itemNumber={idx} />
          )
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
      // testShown: false,
      loading: false,
    };
    this.endLoadingTime = new Date();
  }

  toggleStressTest = () => {
    // ignore click events that happen while loading:
    // note that while the single thread is occupied by creating 500 divs (ReactElements),
    // click events are queued (from physical clicks) and register after the stack is clear,
    // they usually land on the 'rendering...' span which doesn't have a click handler (good),
    // but sometimes the toggle link will be re-rendered before the click queue is empty
    // so some of the clicks will call this.toggleStressTest, so ignore the click events
    // for the first 300ms after 'rendering...' finishes
    if (new Date() - this.endLoadingTime < 300) {
      return;
    }

    this.setState({ loading: true },
      () => {
        // even though props.toggleStressTest isn't called until after setState finishes,
        // the actual updating of the DOM appears to be async (after setState), so wait 50
        // for DOM to update (show rendering...) before calling props.toggleStressTest
        // (which occupies the single thread while the 500 divs (ReactElements) are created)
        setTimeout(() => {
          this.props.toggleStressTest(() => {
            // set end time and call setState async b/c there is a linear time gap
            // (based on number of divs rendered) b/t when this callback is called
            // and when setState is executed, (maybe some clean up related to the 500 divs,
            // b/c this cb is called after the show/hide 500 divs setState call)
            setTimeout(() => {
              this.endLoadingTime = new Date();
              this.setState({ loading: false });
            }, 0);
          });
        }, 50);
      }
    );
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
      >{this.props.testShown ? 'removing...' : 'rendering...'}</span>
    );
    return (
      <Interactive
        as={this.state.loading ? loading : toggleItems}
      />
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
    };
  }

  handleOnStateChange = ({ nextState }) => {
    this.setState(nextState);
  }
  handleLeaveFocus = () => {
    this.setState({ forceNormal: true }, this.setState.bind(this, { forceNormal: false }));
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
        tabIndex="0"
        {...s.item}
        focus={{
          focusFromTabStyle: s.item.focus,
          onLeave: this.handleLeaveFocus,
        }}
        forceState={(this.state.forceNormal && { iState: 'normal' }) || null}
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
