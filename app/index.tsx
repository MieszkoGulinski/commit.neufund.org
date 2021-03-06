import * as React from "react";
import * as ReactDOM from "react-dom";
import Countdown from "./containers/Countdown";

const root = document.getElementById("react-root");

const render = () => {
  /* We are doing this because we are not loading the "react-root"
  div in the following pages[whitepaper, faq, prodcut]
  */
  if (root) {
    ReactDOM.render(
      <div>
        <Countdown />
      </div>,
      root
    );
  }
};

// Add development time features
if (process.env.NODE_ENV !== "production") {
  // Enable React Debug Tool
  // tslint:disable-next-line
  const ReactDebugTool = require('react-dom/lib/ReactDebugTool');
  ReactDebugTool.beginProfiling();

  // Enable Webpack hot module replacement
  if ((module as any).hot) {
    // Replace reducers
    // (module as any).hot.accept('./reducers', () => {
    //   const newReducer = require('./reducers').default;
    //   store.replaceReducer(newReducer);
    // });
    // Replace routes and components
    // (module as any).hot.accept('./routes', () => {
    //   const newAppRoutes = require('./routes').default;
    //   // NOTE: We don't update the store middleWare,
    //   //       if you change routes you need to refresh.
    //   render(store, newAppRoutes);
    // });
  }

  // we require this files only to track changes in them automatically

  // tslint:disable-next-line
  require('!raw-loader!../dist/index.html');
  // tslint:disable-next-line
  require('!raw-loader!../dist/app.css');
}

render();
