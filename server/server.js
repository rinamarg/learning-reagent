import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { performSearch } from './helpers/search.js';
import { GIGS, GIGS_PER_PAGE } from './constants.js';

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/gigs', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const gigsPerPage = GIGS_PER_PAGE;
  const startIndex = (page - 1) * gigsPerPage;
  const endIndex = startIndex + gigsPerPage;

  const searchQuery = req.query.search || '';
  let filteredGigs = GIGS;

  if (searchQuery) {
    filteredGigs = performSearch(searchQuery, GIGS);
  }
  const paginatedGigs = filteredGigs.slice(startIndex, endIndex);

  res.json({
    page,
    totalPages: Math.ceil(filteredGigs.length / gigsPerPage),
    gigs: paginatedGigs,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
