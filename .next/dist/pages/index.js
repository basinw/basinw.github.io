'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _github = require('./github');

var _github2 = _interopRequireDefault(_github);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.state = {
            user: {},
            repos: []
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'fetchProfile',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('https://api.github.com/users/basinw').then(function (res) {
                                    return res.json();
                                }).then(function (data) {
                                    return data;
                                });

                            case 2:
                                user = _context.sent;

                                this.setState({ user: user });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchProfile() {
                return _ref.apply(this, arguments);
            }

            return fetchProfile;
        }()
    }, {
        key: 'fetchRepos',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var repos;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return fetch('https://api.github.com/users/basinw/repos').then(function (res) {
                                    return res.json();
                                }).then(function (data) {
                                    return data;
                                });

                            case 2:
                                repos = _context2.sent;

                                this.setState({ repos: repos });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function fetchRepos() {
                return _ref2.apply(this, arguments);
            }

            return fetchRepos;
        }()
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.fetchProfile();
            this.fetchRepos();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'profile | Github'), _react2.default.createElement('link', { rel: 'icon', href: 'https://assets-cdn.github.com/favicon.ico' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:400,700,600' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/style.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' })), _react2.default.createElement(_nav2.default, null), _react2.default.createElement(_github2.default, { user: this.state.user, title: 'Github profile', repos: this.state.repos }));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;