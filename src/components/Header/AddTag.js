import { useState } from 'react'
import postData from '../../lib/postData'
import styles from '../../scss/AddTag.module.scss'
import { ReactComponent as PlusIcon } from '../../icons/plus.svg'

const AddTag = ({ rerender }) => {
  const [active, setActive] = useState(false)
  const [tag, setTag] = useState(null)

  const handleClick = () => {
    setActive(!active)
  }

  const handleChange = (e) => {
    setTag(e.target.value)
  }

  const handleSubmit = () => {
    postData('http://localhost:5000/category/new/', [['name', tag]])
    rerender()
  }

  return(
    <div className={styles.container}>
        <button onClick={handleClick}>
          <PlusIcon />
        </button>
        {active && 
          <>
            <input onChange={handleChange} placeholder='Tag name'/>
            <button onClick={handleSubmit} className={styles.save}>
              <span>
                Save
              </span>
            </button>
          </>
        }
    </div>
  )
}

export default AddTag