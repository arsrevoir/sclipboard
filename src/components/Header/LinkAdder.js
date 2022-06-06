import { useState } from 'react'

import { ReactComponent as PlusIcon } from '../../icons/plus.svg'
import styles from '../../scss/LinkAdder.module.scss'

const LinkAdder = () => {
  const [dropdown, setDropdown] = useState(false)
  const [link, setLink] = useState()

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleLinkInputChange = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = () => {
    console.log(link)
  }

  return(
    <div className={styles.container}>
      <div onClick={handleDropdown} className={styles.button}>
        <PlusIcon />
      </div>
      {dropdown &&
        <div className={styles.form}>
          <div className={styles.formContainer}>
            <div className={styles.wrapper}>
              <input onChange={handleLinkInputChange} type='text' placeholder='Link'/>
              <div className={styles.submit}>
                <button onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default LinkAdder