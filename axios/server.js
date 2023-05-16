const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json([
        { name: 'samuca' },
        { name: 'eu memo' }
    ])
})

app.listen('2000')