import TagPicker from './Header/TagPicker'
import LinkAdder from './Header/LinkAdder'

import styles from '../scss/Header.module.scss'

const Header = () => {

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.tagContainer}>
          <TagPicker />
        </div>
        <div className={styles.buttonsContainer}>
          <LinkAdder />
        </div>
      </div>
    </header>
  )
}

export default Header