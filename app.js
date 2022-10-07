require('@babel/register');

// Фреймворк веб-приложений.
const express = require('express');

const app = express();

const flash = require('connect-flash');
// HTTP request logger middleware for node.js.
// Логгирование деталей запросов.
const morgan = require('morgan');
const path = require('path');

const PORT = 7777;

// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

app.use(flash());

// Импорт маршрутов.
const indexRouter = require('./routes/index');
const entriesRouter = require('./routes/entries');

// Подключаем логгирование запросов
app.use(morgan('dev'));

// Подключаем статику
app.use(express.static(path.resolve('public')));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/entries', entriesRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
