import React from 'react'
import { UseAppContext } from '../../context'

const styles = {
  marginBottom: 20
}

export default () => {
  const { state, dispatch } = UseAppContext()

  return (
    <select 
      onChange={e => dispatch({ type: 'TOGGLE_MODE', payload: e.target.value })} 
      value={state.mode} 
      style={styles}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}