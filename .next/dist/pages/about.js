'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

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
    return _react2.default.createElement('div', {
        'data-jsx': 1649468087
    }, _react2.default.createElement('p', {
        'data-jsx': 1649468087
    }, 'Welcome to About!'), _react2.default.createElement('div', {
        'data-jsx': 1649468087
    }, ' Click ', _react2.default.createElement('span', { onClick: function onClick() {
            return _index2.default.push('/content');
        }, 'data-jsx': 1649468087
    }, 'here'), ' to open other page'), _react2.default.createElement('div', {
        'data-jsx': 1649468087
    }, _react2.default.createElement('span', { onClick: handler, 'data-jsx': 1649468087
    }, 'send query string')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', {
        'data-jsx': 1649468087
    }, 'te')), _react2.default.createElement(_style2.default, {
        styleId: 1649468087,
        css: 'pre[data-jsx="1649468087"]{color:white;background:gray}'
    }));
};