'use strict';

var _reduxDuet = require('../redux-duet');

var _reduxDuet2 = _interopRequireDefault(_reduxDuet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('duet', function () {
  it('with functions for action and handler', function () {
    var _duet = (0, _reduxDuet2.default)('users/REQUEST', function () {
      return 42;
    }, function (state, action) {
      return state;
    }),
        action = _duet.action,
        handler = _duet.handler;

    expect(action()).toMatchSnapshot();
    expect(handler).toMatchSnapshot();
  });
  it('with functions for action and handler, handler map', function () {
    var _duet2 = (0, _reduxDuet2.default)('users/REQUEST', function () {
      return 42;
    }, {
      fulfilled: function fulfilled(state, action) {
        return state;
      },
      rejected: function rejected(state, action) {
        return state;
      }
    }),
        action = _duet2.action,
        handler = _duet2.handler;

    expect(action()).toMatchSnapshot();
    expect(handler).toMatchSnapshot();
  });
  it('with blank action', function () {
    var _duet3 = (0, _reduxDuet2.default)('users/REQUEST', function (state, action) {
      return state;
    }),
        action = _duet3.action,
        handler = _duet3.handler;

    expect(action()).toMatchSnapshot();
    expect(handler).toMatchSnapshot();
  });
  it('with blank action, handler map', function () {
    var _duet4 = (0, _reduxDuet2.default)('users/REQUEST', {
      fulfilled: function fulfilled(state, action) {
        return state;
      },
      rejected: function rejected(state, action) {
        return state;
      }
    }),
        action = _duet4.action,
        handler = _duet4.handler;

    expect(action()).toMatchSnapshot();
    expect(handler).toMatchSnapshot();
  });
});