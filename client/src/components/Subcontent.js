import React from 'react'

import styles from '../static/Subcontent.module.css'

const Subcontent = (props) => {

  const {text}= props

  return (
    <div className={styles.subcontent}>{text}</div>
  )
}

export default Subcontent