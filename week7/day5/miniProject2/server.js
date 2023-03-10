const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const rssParser = require('rss-parser');
const port = 3001;
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  try {
    let feed = await parser.parseURL('your-rss-feed');
    console.log(feed.title);
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  } catch (err) {
    console.error('Failed to parse RSS feed:', err);
  }
})();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', async (req, res) => {
  try {
    const parser = new rssParser();
    const feed = await parser.parseURL('https://www.thefactsite.com/1000-interesting-facts/');
    res.render('index', { facts: feed.items });
  } catch (err) {
    console.error('Failed to retrieve RSS feed:', err);
    res.status(500).send('Failed to retrieve RSS feed');
  }
});

// Route for the search page
app.get('/search', (req, res) => {
  res.render('search', { posts: [] });
});

// Route for searching by title
app.post('/search/title', async (req, res) => {
  try {
    const parser = new rssParser();
    const feed = await parser.parseURL('https://www.thefactsite.com/1000-interesting-facts/');
    const title = req.body.title;
    const matchingPosts = feed.items.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
    res.render('search', { posts: matchingPosts });
  } catch (err) {
    console.error('Failed to retrieve RSS feed:', err);
    res.status(500).send('Failed to retrieve RSS feed');
  }
});

// Route for searching by category
app.post('/search/category', async (req, res) => {
  try {
    const parser = new rssParser();
    const feed = await parser.parseURL('https://www.thefactsite.com/1000-interesting-facts/');
    const category = req.body.category;
    const matchingPosts = feed.items.filter(post => post.categories.includes(category));
    res.render('search', { posts: matchingPosts });
  } catch (err) {
    console.error('Failed to retrieve RSS feed:', err);
    res.status(500).send('Failed to retrieve RSS feed');
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

