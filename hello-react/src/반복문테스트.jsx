/* import PropTypes from 'prop-types'

const 반복문테스트 = () => {
  const 데이터목록 = [1, 2, 3]
  const LI들 = 데이터목록.map((데이터) => {
    return <li>{데이터}</li>
  })

  return <ul>{LI들}</ul>
}

반복문테스트.propTypes = {}

export default 반복문테스트


 */

import PropTypes from 'prop-types'

const 반복문테스트 = () => {
  const 데이터목록 = [1, 2, 3]
  const 필터한데이터 = 데이터목록.filter((요소) => {
    const 일보다큰값이다 = 요소 > 1
    return 일보다큰값이다
  })

  return <ul>{LI들}</ul>
}

반복문테스트.propTypes = {}

export default 반복문테스트
