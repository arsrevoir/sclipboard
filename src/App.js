import React, { useState } from 'react'

import TagContext from './contexts/TagContext'

import Header from './components/Header'
import styles from './scss/App.module.scss'

const App = () => {
  const [selected, setSelected] = useState('All')

  return (
    <div className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <TagContext.Provider value={{selected, setSelected}}>
            <Header />
          </TagContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
