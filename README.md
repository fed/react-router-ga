# react-router-ga

Google Analytics component for React Router. Bear in mind this is a super simple implementation that only logs page views. Logging of custom events, exceptions, user timings or social interactions are not supported.

## Props

| Prop | Type | Description | Default value |
|------|------|-------------|---------------|
| `id` | string | Google Analytics tracking ID | Required |
| `debug` | boolean | If enabled, react-router-ga will log all page views to the console | `false` |
| `pathnameOnly` | boolean | If enabled, react-router-ga will only send page views when the pathname changed | `false` |

## Usage Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import App from './containers/App';
import Login from './containers/Login';

ReactDOM.render(
  <BrowserRouter>
    <Analytics id="UA-111111111-1" debug>
      <App>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </App>
    </Analytics>
  </BrowserRouter>,
  document.getElementById('root')
);
```

## Dependencies

This project has `react@^16.2.0` and `react-router-dom@^4.2.2` as peer dependencies.
