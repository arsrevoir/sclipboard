import { useState, useEffect, useContext } from 'react'

import TagContext from '../../contexts/TagContext'

import styles from '../../scss/TagPicker.module.scss'
import { ReactComponent as ArrowUpIcon } from '../../icons/arrow-up.svg'
import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg'

const TagPicker = () => {
  let {selected, setSelected} = useContext(TagContext)
  const [tags, setTags] = useState(null)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const fetchTags = async () => {
      try{  
        let response = await fetch('http://localhost:5000/category', {method: 'GET', mode: 'cors'})
        let data = await response.json()

        setTags(data)
      } catch(err) {
        console.log(err)
      }
    }

    fetchTags()
  }, [])

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleTagChange = (e) => {
    setSelected(e.target.innerHTML)
  }
  
  const dropdownList = tags ? tags.map((tag, index) => {
    return <li onClick={handleTagChange} key={index}>{tag.name}</li>
  }) : <li></li>

  return(
    <div className={styles.container}>
      <div onClick={handleDropdown} className={styles.selected}>
        <div className={styles.selectedName}>
          {selected}
        </div>
        <div className={styles.dropdownIcon}>
          {dropdown ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>
      {dropdown &&
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainerWrapper}>
            <ul className={styles.list}>
              <li onClick={handleTagChange}>All</li>
              {dropdownList}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default TagPicker