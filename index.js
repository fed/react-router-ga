// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { Location, RouterHistory } from 'react-router-dom';

type Props = {
  id: string, // Google Analytics Tracking ID
  debug: boolean,
  withSearch?:boolean,
  children?: React.Node,
  location: Location,
  history: RouterHistory
};

class ReactRouterGA extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.sendPageView = this.sendPageView.bind(this);
    this.initialize = this.initialize.bind(this);

    this.initialize(props.id);
  }

  componentDidMount() {
    this.sendPageView(this.props.location);
    this.props.history.listen(this.sendPageView);
  }

  initialize() {
    if (!this.props.id) {
      console.error('[react-router-ga] Tracking ID is required.');
      return;
    }

    // Load Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    // Initialize Google Analytics
    window.ga('create', this.props.id, 'auto');
    window.ga('send', 'pageview');
  }

  sendPageView(location: Location) {
    // Do nothing if GA was not initialized due to a missing tracking ID.
    if (!window.ga) {
      return;
    }

    // Sets the page value on the tracker.
    let page = location.pathname + ( this.props.withSearch?location.search:"" );
    window.ga('set', 'page', page );

    // Sending the pageview no longer requires passing the page
    // value since it's now stored on the tracker object.
    window.ga('send', 'pageview');

    if (this.props.debug) {
      console.info(`[react-router-ga] Page view: ${page}`);
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
