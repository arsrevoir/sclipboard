import { useState, useRef, useEffect } from 'react'

import postData from '../../lib/postData'

import { ReactComponent as PlusIcon } from '../../icons/plus.svg'
import styles from '../../scss/LinkAdder.module.scss'

const LinkAdder = ({rerender, forceRender}) => {
  const [active, setActive] = useState(false)
  const [link, setLink] = useState()
  const [tag, setTag] = useState()
  const [tagList, setTagList] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/category', {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => setTagList(data))
    .catch(err => console.log(err))
  }, [forceRender])

  const containerRef = useRef()

  const handleClickOutside = (e) => {
    if(!containerRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  const handleDropdown = () => {
    if(!active) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    setActive(!active)
  }

  const handleLinkInputChange = (e) => {
    setLink(e.target.value)
  }

  const handleTagInputChange = (e) => {
    setTag(e.target.value)
  }

  const handleSubmit = () => {
    postData('http://localhost:5000/pin/new', [['link', link], ['tag', tag]])
    setActive(false)
  }

  return(
    <div ref={containerRef} className={styles.container}>
      <button onClick={handleDropdown}>
        <PlusIcon />
      </button>
      {active &&
        <div className={styles.form}>
          <div className={styles.formContainer}>
            <div className={styles.wrapper}>
              <input onChange={handleLinkInputChange} className={styles.link} type='text' placeholder='Link'/>
              <select onChange={handleTagInputChange}>
                <option defaultValue>Select</option>
                {tagList.map((tag, index) => {
                  return <option value={tag.name} key={index}>{tag.name}</option>
                })}
              </select>

              <div className={styles.submit}>
                <button onClick={handleSubmit}>
                  <PlusIcon />
                  <span>
                    Save
                  </span>
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