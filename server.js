const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.port | 3000;

app.use(cors());
app.use(bodyParser.json());

let items = [
    {
        _id: "1",
        title: "example 1",
        description: "this is the example 1"
    },
    {
        _id: "2",
        title: "example 2",
        description: "this is the example 2"
    },
    {
        _id: "3",
        title: "example 3",
        description: "this is the example 3"
    },
    {
        _id: "4",
        title: "example 4",
        description: "this is the example 4"
    }
]

app.get('/items', (req, res) => {
    res.json(items);
})

app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.json(newItem);
})

app.delete('/items/:id', (req, res)=>{
    const deleteId = req.params.id;
    items = items.filter((item)=>item._id !== deleteId);
    res.json({message:"Item deleted successfully!", data:items})
})

app.listen(port, () => {
    console.log(`Note: Server stated on port ${port}`)
})

