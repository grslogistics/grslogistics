import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'

const Table = styled.table`
  ${reset.table};
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0.8rem;

  th,
  td {
    text-align: left;
    font-weight: normal;
    padding: 0.5rem 1rem;
  }

  > thead > tr {
    font-size: 1rem;
    background-color: ${colors.text};
  }

  th {
    color: #fff;
  }

  > tbody > tr {
    background-color: #fff;
    &:nth-child(odd) {
      background-color: ${colors.lightGray};
    }
  }

  td {
    color: ${colors.textLight};
    border-bottom: 1px solid ${colors.gray};
    border-right: 1px solid ${colors.gray};
    &:first-child {
      border-left: 1px solid ${colors.gray};
    }
  }

  tbody > tr:last-child > td:first-child {
    border-bottom-left-radius: 10px;
  }

  tbody > tr:last-child > td:last-child {
    border-bottom-right-radius: 10px;
  }
`

export default Table
