import { map, objOf } from 'ramda'
import PropTypes from 'prop-types'
import withViewport from 'react-with-viewport'
import breakpoints from 'style/breakpoints'

Breakpoint.propTypes = {
  children: PropTypes.func.isRequired,
  breakPoint: PropTypes.object
}

function Breakpoint ({ children: render, breakPoint }) {
  return render(breakPoint.key)
}

export default withViewport({
  breakPoints: map(objOf('width'), breakpoints)
})(Breakpoint)
