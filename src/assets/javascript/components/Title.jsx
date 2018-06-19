import React, {Component} from 'react'
import styled from 'styled-components'

export default class Title extends Component {
  render() {
    const {align} = this.props
    return (
      <Head align={align}>{this.props.children}</Head>
    )
  }
}

const getAlign = (props) => {
  if (props.align === 'center') {
    return 'center'
  } else if (props.align === 'right') {
    return 'right'
  } else {
    return 'left'
  }
}

const Head = styled.h1`
  margin: 24px 0;
  font-size: 20px;
  text-align: ${props => getAlign(props)};
`
