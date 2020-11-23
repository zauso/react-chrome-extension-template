import React, { Component, useState, useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        console.log('App sucssesful')
    }, [])
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    const handelEvent = (e) => {
        let _value = `https://${e.target.value}`
        setValue(_value)
    }
    const plus = () => {
        let a = count + 1
        setCount(a)
    }
    const minus = () => {
        let a = count - 1
        setCount(a)
    }
    const openTab = (url) => {
        chrome.tabs.create({ url: value })
    }
    return (
        <div>
            <h1>React Chrome Extension</h1>
            <p>Count: {count}</p>
            <button onClick={() => plus()}>Plus +</button>
            <button onClick={() => minus()}>Minus -</button>
            <br />
            <input type="text" onChange={(e) => handelEvent(e)} />
            <button
                onClick={() => {
                    openTab('https://google.com')
                }}
            >
                Open new tab
            </button>
        </div>
    )
}
export default App
