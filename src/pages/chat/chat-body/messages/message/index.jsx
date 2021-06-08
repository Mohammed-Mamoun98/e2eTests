import { Paper } from '@material-ui/core'
import React from 'react'

export default function Message({text="",mine = false}) {
    const messageDirectionClass = mine ? 'ml-auto' : 'mr-auto'
    return (
        <Paper className={`w-50 p-2 mw-50 my-2 ${messageDirectionClass}`} style={{wordBreak:'break-word'}}>
            {text}
        </Paper>
    )
}
