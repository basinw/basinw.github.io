'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler() {
    return _index2.default.push({
        pathname: 'content',
        query: { name: 'supawit' }
    });
};

_index2.default.onRouteChangeStart = function (url) {
    console.log('App is changing to: ', url);
};

_index2.default.onAppUpdated = function (nextUrl) {
    // persist the local state
    location.href = nextUrl;
};

exports.default = function () {
    return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'profile | about'), _react2.default.createElement('link', { rel: 'icon', href: 'https://assets-cdn.github.com/favicon.ico' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:400,700,600' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/style.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' })), _react2.default.createElement(_nav2.default, null), _react2.default.createElement('p', null, 'Welcome to About!'), _react2.default.createElement('div', null, ' Click ', _react2.default.createElement('span', { onClick: function onClick() {
            return _index2.default.push('/content');
        } }, 'here'), ' to open other page'), _react2.default.createElement('div', null, _react2.default.createElement('span', { onClick: handler }, 'click here send query string')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', null, 'back to home')));
};