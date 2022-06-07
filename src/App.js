import React, { useState } from 'react'

import TagContext from './contexts/TagContext'

import Header from './components/Header'
import styles from './scss/App.module.scss'

const App = () => {
  const [tag, setTag] = useState('All')

  return (
    <div className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <TagContext.Provider value={{tag, setTag}}>
            <Header />
            
          </TagContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
