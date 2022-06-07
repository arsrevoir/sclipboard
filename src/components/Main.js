import { useState, useEffect, useContext } from 'react'
import TagContext from '../contexts/TagContext'
import styles from '../scss/Main.module.scss'

import LinkContainer from './Main/LinkContainer'

const Main = ({rerender, forceRender}) => {
  const [linkList, setLinkList] = useState(null)
  const tagContext = useContext(TagContext)

  useEffect(() => {
    let tagId = tagContext.tag.id
    let parameter = tagId == '0' ? '' : tagId
    fetch(`http://localhost:5000/pin/${parameter}`, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => setLinkList(data))
    .catch(err => console.log(err))
  }, [forceRender, tagContext.tag])

  const linkListEl = linkList ? linkList.map((link, index) => {
    return <LinkContainer rerender={rerender} link={link.link} id={link._id} key={index} />
  }) : <></>

  return(
    <main>
      <div className={styles.column}>
        {linkListEl}
      </div>
    </main>
  )
}

export default Main