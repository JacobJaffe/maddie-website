import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg={`linear-gradient(to right, ${colors.purple} 0%, ${colors['purple-lighter']} 100%)`}
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="typewriter" width={6} fill={colors.purple} left="85%" top="75%" />
        <SVG icon="book" width={8} fill={colors.purple} left="70%" top="20%" />
        <SVG icon="quill" width={8} fill={colors.purple} left="25%" top="5%" />
        <SVG icon="keyboard" hiddenMobile width={24} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="keyboard" hiddenMobile width={16} fill={colors.purple} left="20%" top="90%" />
        <SVG icon="quill" width={12} fill={colors.white} left="90%" top="30%" />
        <SVG icon="book" width={16} fill={colors.purple} left="70%" top="90%" />
        <SVG icon="quill" hiddenMobile width={16} fill={colors['purple-lightest']} left="18%" top="75%" />
        <SVG icon="typewriter" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="book" hiddenMobile width={8} fill={colors.purple} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="typewriter" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="book" width={12} fill={colors.purple} left="80%" top="60%" />
      <SVG icon="quill" width={6} fill={colors.purple} left="10%" top="10%" />
      <SVG icon="typewriter" width={12} fill={colors.purple} left="29%" top="26%" />
      <SVG icon="book" width={16} fill={colors['purple-lighter']} left="75%" top="30%" />
      <SVG icon="keyboard" width={8} fill={colors.purple} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
