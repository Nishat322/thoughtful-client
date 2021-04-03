import React from 'react'

const ThoughtsContext = React.createContext({
    thoughts: [],
    addThought: () => {},
    deleteThought: () => {}
})

export default ThoughtsContext