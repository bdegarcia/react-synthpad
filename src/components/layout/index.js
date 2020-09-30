import React from 'react'
import { UseAppContext } from "../../context"

export default ({ children }) => {

    const { state } = UseAppContext()
    const styles ={
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        background: state.mode === 'light' ? 'beige' : ''
    }

    return (
        <div style={styles}>
            <div>{children}</div>
        </div>
    )
}