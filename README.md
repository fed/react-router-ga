# react-router-ga

Google Analytics component for React Router. Bear in mind this is a super simple implementation that only logs page views. Logging of custom events, exceptions, user timings or social interactions is currently not supported.

## Props

| Prop | Type | Description | Default value |
|------|------|-------------|---------------|
| `id` | string | Google Analytics tracking ID | Required |
| `basename` | string | If provided, react-router-ga will prepend the basename to the pathname of each page view. (This should match the `basename` provided to the React Router `BrowserRouter` component. See [here](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md#basename-string) for documentation.) | - |
| `debug` | boolean | If enabled, react-router-ga will log all page views to the console | `false` |
| `trackPathnameOnly` | boolean | If enabled, react-router-ga will only send page views when the pathname changed | `false` |

## Usage Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import { Home, Login, NoMatch } from './components';

ReactDOM.render(
  <BrowserRouter>
    <Analytics id="UA-123456789-0" debug>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Analytics>
  </BrowserRouter>,
  document.getElementById('root')
);
```

## Demo App

You can also have a look at this simple app bootstrapped with [create-react-app](https://github.com/facebook/create-react-app/) that's making use of [react-router](https://github.com/ReactTraining/react-router) and **react-router-ga**: https://github.com/fknussel/react-router-ga-demo.

## Dependencies

This project has `react@^16.0.0` and `react-router-dom@^4.0.0` as peer dependencies.
