import React, { Component, useState } from 'react';

const soMuchText =
  'React Code Splitting, Traditionally, all the components in a React application would be bundled into one single file called bundle.js This allows the browser to download the entire app once so that the user can navigate seamlessly without having the need!';

class ShowMoreComponent extends Component {
  state = {
    expanded: false,
  };

  render() {
    const shortText = soMuchText.slice(0, 50);
    const { expanded } = this.state;

    return (
      <div>
        {expanded ? soMuchText : shortText}{' '}
        <button
          onClick={() =>
            this.setState(state => ({ expanded: !state.expanded }))
          }
        >
          {expanded ? 'Less' : 'More'}
        </button>
      </div>
    );
  }
}

export default function ShowMoreFunction() {
  const shortText = soMuchText.slice(0, 50);
  const [expanded, setExpanded] = useState(false);
  const [count, incrementCount] = useState(0);

  return (
    <div>
      {expanded ? soMuchText : shortText}{' '}
      <button onClick={() => setExpanded(expanded => !expanded)}>
        {expanded ? 'Less' : 'More'}
      </button>
      <br />
      Current count: {count}
      <button onClick={() => incrementCount(count + 1)}>Increment</button>
    </div>
  );
}
