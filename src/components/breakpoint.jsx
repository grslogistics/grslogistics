import * as R from 'ramda'
import PropTypes from 'prop-types'
import withViewport from 'react-with-viewport'
import breakpoints from 'style/breakpoints'

Breakpoint.propTypes = {
  children: PropTypes.func.isRequired,
  breakPoint: PropTypes.object
}

function Breakpoint ({ children: render, breakPoint }) {
  return render(breakPoint)
}

export default withViewport({
  breakPoints: R.map(R.objOf('width'), breakpoints)
})(Breakpoint)
