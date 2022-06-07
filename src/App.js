import React, { useState } from 'react'

import TagContext from './contexts/TagContext'

import Header from './components/Header'
import Main from './components/Main'
import styles from './scss/App.module.scss'

const App = () => {
  const [tag, setTag] = useState({name: 'All', id: '0'})
  const [forceRender, setForceRender] = useState(false)

  const rerender = () => {
    setForceRender(!forceRender)
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <TagContext.Provider value={{tag, setTag}}>
            <Header rerender={rerender} forceRender={forceRender} />
            <Main rerender={rerender} forceRender={forceRender} />
          </TagContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
