import React from 'react'
import ReactDOMServer from 'react-dom/server'

const App = <h1>hello world from my react server side app!</h1>

export default ReactDOMServer.renderToString(App)
