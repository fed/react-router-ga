'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactRouterGA = function (_React$Component) {
  _inherits(ReactRouterGA, _React$Component);

  function ReactRouterGA(props) {
    _classCallCheck(this, ReactRouterGA);

    var _this = _possibleConstructorReturn(this, (ReactRouterGA.__proto__ || Object.getPrototypeOf(ReactRouterGA)).call(this, props));

    _this.sendPageView = _this.sendPageView.bind(_this);
    _this.initialize = _this.initialize.bind(_this);

    _this.initialize(props.id);
    return _this;
  }

  _createClass(ReactRouterGA, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.sendPageView(this.props.location);
      this.props.history.listen(this.sendPageView);
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      if (!this.props.id) {
        console.error('[react-router-ga] Tracking ID is required.');
        return;
      }

      // Load Google Analytics
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      // Initialize Google Analytics
      window.ga('create', this.props.id, 'auto');
      window.ga('send', 'pageview');
    }
  }, {
    key: 'sendPageView',
    value: function sendPageView(location) {
      // Do nothing if GA was not initialized due to a missing tracking ID.
      if (!window.ga) {
        return;
      }

      // Do nothing if pathnameOnly is enabled and the pathname didn't change.
      if (this.props.pathnameOnly && location.pathname === this.lastPathname) {
        return;
      }

      this.lastPathname = location.pathname;

      // Sets the page value on the tracker.
      window.ga('set', 'page', location.pathname);

      // Sending the pageview no longer requires passing the page
      // value since it's now stored on the tracker object.
      window.ga('send', 'pageview');

      if (this.props.debug) {
        console.info('[react-router-ga] Page view: ' + location.pathname);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ReactRouterGA;
}(React.Component);

ReactRouterGA.defaultProps = {
  debug: false
};

exports.default = (0, _reactRouterDom.withRouter)(ReactRouterGA);
