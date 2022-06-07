import { useState, useEffect } from 'react'
import postData from '../../lib/postData'
import styles from '../../scss/LinkContainer.module.scss'

const LinkContainer = ({ rerender, link, id }) => {
  const handleContextClick = (e) => {
    e.preventDefault()
    postData('http://localhost:5000/pin/delete', [['_id', id]])
    rerender()
  }
  
  return(
    <div>
      <a onContextMenu={handleContextClick} href={link}>
        {link}
      </a>
    </div>
  )
}

export default LinkContainer