import PropTypes from 'prop-types'
import formatDate from 'date-fns/format'
import ruLocale from 'date-fns/locale/ru'

DateTime.propTypes = {
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  format: PropTypes.string.isRequired
}

function DateTime ({ date, format }) {
  return formatDate(date, format, {
    locale: ruLocale
  })
}

export default DateTime
