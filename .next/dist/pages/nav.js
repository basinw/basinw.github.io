'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function (_React$Component) {
    (0, _inherits3.default)(Nav, _React$Component);

    function Nav() {
        (0, _classCallCheck3.default)(this, Nav);

        return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
    }

    (0, _createClass3.default)(Nav, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('nav', { className: 'navbar navbar-default' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'navbar-header' }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' }, _react2.default.createElement('span', { className: 'sr-only' }, 'Toggle navigation'), _react2.default.createElement('span', { className: 'icon-bar' }), _react2.default.createElement('span', { className: 'icon-bar' }), _react2.default.createElement('span', { className: 'icon-bar' })), _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'navbar-brand' }, 'Profile'))), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' }, _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Github ', _react2.default.createElement('span', { className: 'sr-only' }, '(current)')))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com' }, _react2.default.createElement('a', null, 'Facebook'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', null, 'about'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/content' }, _react2.default.createElement('a', null, 'content')))))));
        }
    }]);

    return Nav;
}(_react2.default.Component);

exports.default = Nav;