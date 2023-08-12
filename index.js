const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const category = require('./data/category.json');
const news = require('./data/allNews.json');

const app = express();

// midleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const detailNews = news.find(n => parseInt(n._id) === id);
    res.send(detailNews);
})

app.listen(port, () => {
    console.log('Server is running on port', port)
}) 