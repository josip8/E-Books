'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize } = require('./database');
const getBooks = require('./routes/getBooks');
const comments = require('./routes/comments');
const grades = require('./routes/grades');
const authentication = require('./routes/authentication');
const app = express();
const cors = require('cors');

const port = process.env.PORT;

app.use(cors({origin: 'http://localhost:3000'}));
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/library', getBooks);
app.use('/comments', comments);
app.use('/grades', grades);
app.use('/authentication', authentication);

sequelize.sync()
  .then(() => {
    app.listen(port);
    console.log(`Server started on port ${port}`);
  });
