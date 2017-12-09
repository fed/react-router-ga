# react-router-ga

Google Analytics component for React Router.

## Props

| Prop | Type | Description | Default value |
|------|------|-------------|---------------|
| `id` | string | Google Analytics ID | Required |
| `debub` | boolean | If enabled, react-router-ga will log all page views to the console | `false` |

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
