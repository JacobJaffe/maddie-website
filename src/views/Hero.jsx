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
        <SVG icon="quill" hiddenMobile width={48} fill={colors.orange} left="10%" top="20%" />
        <SVG icon="typewriter" width={48} fill={colors.red} left="60%" top="70%" />
        <SVG icon="keyboard" width={6} fill={colors['purple-lighter']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="typewriter" hiddenMobile width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="quill" width={12} fill={colors.white} left="90%" top="50%" />
        <SVG icon="typewriter" width={16} fill={colors['purple-lighter']} left="70%" top="90%" />
        <SVG icon="typewriter" width={16} fill={colors['purple-lightest']} left="30%" top="65%" />
        <SVG icon="quill" width={16} fill={colors['pink-light']} left="28%" top="15%" />
        <SVG icon="typewriter" width={6} fill={colors['purple-lightest']} left="75%" top="10%" />
        <SVG icon="quill" hiddenMobile width={8} fill={colors['purple-lightest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="keyboard" hiddenMobile width={24} fill={colors['purple-lighter']} left="5%" top="70%" />
      <SVG icon="typewriter" width={6} fill={colors['purple-lightest']} left="4%" top="20%" />
      <SVG icon="keyboard" width={12} fill={colors['purple-lightest']} left="50%" top="60%" />
      <SVG icon="keyboard" width={8} fill={colors['purple-lightest']} left="95%" top="90%" />
      <SVG icon="quill" hiddenMobile width={24} fill={colors['purple-lighter']} left="40%" top="80%" />
      <SVG icon="keyboard" width={8} fill={colors['purple-lighter']} left="25%" top="5%" />
      <SVG icon="quill" width={64} fill={colors.green} left="95%" top="5%" />
      <SVG icon="keyboard" hiddenMobile width={64} fill={colors.purple} left="5%" top="90%" />
      <SVG icon="quill" width={6} fill={colors['purple-lightest']} left="10%" top="10%" />
      <SVG icon="typewriter" width={12} fill={colors['purple-lightest']} left="40%" top="30%" />
      <SVG icon="quill" width={16} fill={colors['purple-lighter']} left="10%" top="50%" />
      <SVG icon="typewriter" width={8} fill={colors['purple-lighter']} left="80%" top="70%" />
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
