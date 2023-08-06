import PropTypes from 'prop-types'

const Button = ({ label = '기본값' }) => {
  return <button>{label}</button>
}

// Button 의 prop 은 이런 모습이다.
Button.propTypes = {
  // label 이라는 것이 들어올건데 문자열이다.
  label: PropTypes.string,
}

export default Button
