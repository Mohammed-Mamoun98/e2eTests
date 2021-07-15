import { IconButton, Paper } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'

export const TodoItem = ({text,onDelete = ()=>{},id})=> {
    return (
        <Paper className="p-1 my-2 d-flex justify-content-between align-items-center"> 
            <span>
                {text}
            </span>
            <IconButton onClick={()=>onDelete(id)}>
                <Delete color="secondary"/>
            </IconButton>
        </Paper>
    )
}
