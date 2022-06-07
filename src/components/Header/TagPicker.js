import { useState, useEffect, useContext, useRef } from 'react'

import TagContext from '../../contexts/TagContext'
import postData from '../../lib/postData'

import styles from '../../scss/TagPicker.module.scss'
import { ReactComponent as ArrowUpIcon } from '../../icons/arrow-up.svg'
import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg'

import AddTag from './AddTag'


const TagPicker = ({rerender, forceRender}) => {
  let {tag, setTag} = useContext(TagContext)
  const [active, setActive] = useState(false)
  const [tagList, setTagList] = useState(null)
  
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

  const handleTagChange = (e) => {
    setTag(e.target.getAttribute('data-value'))
    setActive(!active)
  }

  const handleContextMenu = (e) => {
    e.preventDefault()
    postData('http://localhost:5000/category/delete', [['name', e.target.getAttribute('data-value')]])
    rerender()
  }
  
  const dropdownList = tagList ? tagList.map((tag, index) => {
    return <li onContextMenu={handleContextMenu} onClick={handleTagChange} key={index} data-value={tag.name}>{tag.name}</li>
  }) : <li></li>

  return(
    <div ref={containerRef} className={styles.container}>
      <div onClick={handleDropdown} className={styles.selected}>
        <div className={styles.selectedName}>
          {tag}
        </div>

        <div className={styles.dropdownIcon}>
          {active ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>

      {active &&
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainerWrapper}>
            <ul className={styles.list}>
              <li data-value='All' onContextMenu={handleContextMenu} onClick={handleTagChange}>All</li>
              {dropdownList}
              <AddTag rerender={rerender} />
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default TagPicker