import React from 'react'

const myContext = React.createContext();
const dataProvider = myContext.Provider
const datataConsumer = myContext.Consumer

export {dataProvider, datataConsumer}
