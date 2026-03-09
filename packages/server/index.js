const express = require('express');
const cors = require('cors');
const { mockList } = require('./mock/mokeList');
const app = express();
const router = express.Router();
app.use(cors());

app.get('/api/recommend', (req, res) => {
  let { pageSize, pageNum } = req.query;
  pageNum = parseInt(pageNum, 10) || 1;
  pageSize = parseInt(pageSize, 10) || 10;
  console.log(pageNum, pageSize);

  res.json({
    code: 200,
    data: {
      items: mockList.slice(pageNum, pageNum + pageSize),
      total: mockList.length,
      pageNum,
      pageSize,
    },
  });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
