import { useState } from 'react'

import TagPicker from './Header/TagPicker'
import LinkAdder from './Header/LinkAdder'

import styles from '../scss/Header.module.scss'

const Header = ({rerender, forceRender}) => {

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.tagContainer}>
          <TagPicker rerender={rerender} forceRender={forceRender} />
        </div>
        <div className={styles.buttonsContainer}>
          <LinkAdder rerender={rerender} forceRender={forceRender}/>
        </div>
      </div>
    </header>
  )
}

export default Header