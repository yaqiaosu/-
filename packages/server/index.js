const express = require('express');
const cors = require('cors');
const { mockList } = require('./mock/mokeList');
const app = express();
const router = express.Router();
app.use(cors());
app.get('/api/recommend', (req, res) => {
  console.log(req.query);
  let { pageSize, pageNum } = req.query || {};
  pageNum = +pageNum || 1;
  pageSize = +pageSize || 10;
  res.json({
    code: 200,
    data: mockList.slice(pageNum, pageNum + pageSize),
    total: mockList.length,
    pageNum,
    pageSize,
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
