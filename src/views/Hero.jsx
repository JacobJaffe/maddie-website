import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="quill" hiddenMobile width={48} fill={colors['purple-lighter']} left="10%" top="20%" />
        <SVG icon="book" width={48} fill={colors['purple-lighter']} left="60%" top="70%" />
        <SVG icon="book" width={6} fill={colors['purple-light']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="quill" hiddenMobile width={16} fill={colors['purple-lighter']} left="80%" top="10%" />
        <SVG icon="book" width={12} fill={colors['purple-light']} left="90%" top="50%" />
        <SVG icon="keyboard" width={16} fill={colors['purple-light']} left="70%" top="90%" />
        <SVG icon="quill" width={6} fill={colors['purple-lightest']} left="75%" top="10%" />
        <SVG icon="typewriter" hiddenMobile width={8} fill={colors['purple-light']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="book" hiddenMobile width={24} fill={colors['purple-dark']} left="5%" top="70%" />
      <SVG icon="quill" width={6} fill={colors.purple} left="4%" top="20%" />
      <SVG icon="keyboard" width={8} fill={colors['purple-darker']} left="95%" top="90%" />
      <SVG icon="quill" hiddenMobile width={24} fill={colors['purple-light']} left="40%" top="80%" />
      <SVG icon="book" width={8} fill={colors['purple-light']} left="25%" top="5%" />
      <SVG icon="typewriter" width={64} fill={colors['purple-dark']} left="95%" top="5%" />
      <SVG icon="typewriter" hiddenMobile width={64} fill={colors['purple-light']} left="5%" top="90%" />
      <SVG icon="typewriter" width={6} fill={colors['purple-light']} left="10%" top="10%" />
      <SVG icon="keyboard" hiddenMobile width={16} fill={colors['purple-light']} left="10%" top="50%" />
      <SVG icon="typewriter" width={8} fill={colors['purple-light']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
