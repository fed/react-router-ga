// @flow
import * as React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import type { Location, RouterHistory } from 'react-router-dom';

type Props = {
  id: string,
  children?: React.Node,
  debug: boolean,
  location: Location,
  history: RouterHistory
};

class ReactRouterGA extends React.Component<Props> {
  constructor(props) {
    super(props);
    ReactGA.initialize(props.id);
  }

  componentDidMount() {
    this.sendPageView(this.props.location);
    this.props.history.listen(this.sendPageView);
  }

  sendPageView(location: Location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    if (this.props.debug) {
      console.info(`[react-router-ga] Page view: ${location.pathname}`);
    }
  }

  render() {
    return this.props.children;
  }
}

ReactRouterGA.defaultProps = {
  debug: false
};

export default withRouter(ReactRouterGA);
