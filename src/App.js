import React from 'react';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import GridPanel from './grid/Panel';
import { gridData } from './Data.js';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  };

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)

    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <GridPanel
            tableContainerHeight={dimensions.height}
          data={gridData}
        />
    </ThemeProvider>
  );
}

export default App;
