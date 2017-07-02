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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = function (_React$Component) {
    (0, _inherits3.default)(Github, _React$Component);

    function Github() {
        (0, _classCallCheck3.default)(this, Github);

        return (0, _possibleConstructorReturn3.default)(this, (Github.__proto__ || (0, _getPrototypeOf2.default)(Github)).apply(this, arguments));
    }

    (0, _createClass3.default)(Github, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3' }, _react2.default.createElement('input', { className: 'col-xs-12 search', type: 'search', placeholder: 'Search..' })))), _react2.default.createElement('div', { style: {}, className: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 panel panel-default' }, _react2.default.createElement('div', { className: 'panel-body' }, _react2.default.createElement('div', { className: 'block-img text-center' }, _react2.default.createElement('img', { src: this.props.user.avatar_url }), _react2.default.createElement('h3', null, this.props.user.name)), 'Basic panel example')));
        }
    }]);

    return Github;
}(_react2.default.Component);

exports.default = Github;