import React, { useState } from 'react'
import Message from './message'

export default function Messages({messages = []}) {
    return (
        <div className="position-absolute w-100 mh-100 overflow-auto p-3">
            {
                messages.map(message =>(
                    <Message {...message} />
                ))
            }
        </div>
    )
}
