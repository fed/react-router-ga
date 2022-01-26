# react-router-ga

[![Downloads](https://img.shields.io/npm/dm/react-router-ga)](https://npm.im/react-router-ga)
[![Version](https://img.shields.io/npm/v/react-router-ga)](https://npm.im/react-router-ga)
[![License](https://img.shields.io/npm/l/react-router-ga)](https://opensource.org/licenses/MIT)

Google Analytics component for React Router. Bear in mind this is a super simple implementation that only logs page views. Logging of custom events, exceptions, user timings or social interactions is currently not supported.

## Props

| Prop | Type | Description | Default value |
|------|------|-------------|---------------|
| `id` | string | Google Analytics tracking ID | Required |
| `basename` | string | If provided, react-router-ga will prepend the basename to the pathname of each page view. (This should match the `basename` provided to the React Router `BrowserRouter` component. See [here](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md#basename-string) for documentation.) | - |
| `debug` | boolean | If enabled, react-router-ga will log all page views to the console | `false` |
| `trackPathnameOnly` | boolean | If enabled, react-router-ga will only send page views when the pathname changed | `false` |
| `map` | function | If provided, react-router-ga will run this function on the pathname of each page view before logging. At most one of `basename` and `map` should be set. |

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

You can also have a look at the demo app in the `example` directory. This app is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app/) and is making use of both [react-router](https://github.com/ReactTraining/react-router) and [react-router-ga](https://npm.im/react-router-ga).

Probably the code sample you are looking for is in the [`example/src/index.js` file](https://github.com/fknussel/react-router-ga/blob/master/example/src/index.js#L12-L22).

## Dependencies

This project has `react@^16.0.0` and `react-router-dom@^4.0.0` as peer dependencies.
