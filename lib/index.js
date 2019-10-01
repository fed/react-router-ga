"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactRouterGA =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactRouterGA, _React$Component);

  function ReactRouterGA(props) {
    var _this;

    _classCallCheck(this, ReactRouterGA);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactRouterGA).call(this, props));
    _this.sendPageView = _this.sendPageView.bind(_assertThisInitialized(_this));
    _this.initialize = _this.initialize.bind(_assertThisInitialized(_this));

    _this.initialize(props.id);

    return _this;
  }

  _createClass(ReactRouterGA, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sendPageView(this.props.location);
      this.props.history.listen(this.sendPageView);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.props.id) {
        console.error('[react-router-ga] Tracking ID is required.');
        return;
      } // Load Google Analytics


      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); // Initialize Google Analytics


      window.ga('create', this.props.id, 'auto');
    }
  }, {
    key: "sendPageView",
    value: function sendPageView(location) {
      // Do nothing if GA was not initialized due to a missing tracking ID.
      if (!window.ga) {
        return;
      } // Do nothing if trackPathnameOnly is enabled and the pathname didn't change.


      if (this.props.trackPathnameOnly && location.pathname === this.lastPathname) {
        return;
      }

      this.lastPathname = location.pathname; // Sets the page value on the tracker. If a basename is provided, then it is prepended to the pathname.

      var page = this.props.basename ? "".concat(this.props.basename).concat(location.pathname) : location.pathname;
      window.ga('set', 'page', page); // Sending the pageview no longer requires passing the page
      // value since it's now stored on the tracker object.

      window.ga('send', 'pageview');

      if (this.props.debug) {
        console.info("[react-router-ga] Page view: ".concat(page));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ReactRouterGA;
}(React.Component);

ReactRouterGA.defaultProps = {
  debug: false
};

var _default = (0, _reactRouterDom.withRouter)(ReactRouterGA);

exports["default"] = _default;
