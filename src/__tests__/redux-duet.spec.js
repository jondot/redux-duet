import duet from '../redux-duet'

describe('duet', () => {
  it('with functions for action and handler', () => {
    const { action, handler } = duet('users/REQUEST',
        () => 42,
        (state, action) => state
      )
    expect(action()).toMatchSnapshot()
    expect(handler).toMatchSnapshot()
  })
  it('with functions for action and handler, handler map', () => {
    const { action, handler } = duet('users/REQUEST',
        () => 42,
      {
        fulfilled: (state, action) => state,
        rejected: (state, action) => state,
      }
      )
    expect(action()).toMatchSnapshot()
    expect(handler).toMatchSnapshot()
  })
  it('with blank action', () => {
    const { action, handler } = duet('users/REQUEST',
        (state, action) => state
      )
    expect(action()).toMatchSnapshot()
    expect(action('my-param')).toMatchSnapshot()
    expect(handler).toMatchSnapshot()
  })
  it('with blank action, handler map', () => {
    const { action, handler } = duet('users/REQUEST',
      {
        fulfilled: (state, action) => state,
        rejected: (state, action) => state,
      }
      )
    expect(action()).toMatchSnapshot()
    expect(handler).toMatchSnapshot()
  })
})
