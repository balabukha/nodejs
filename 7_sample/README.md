# Выполнение тестового задания

Используемый стек:

backEnd
  node.js
  express
  mongoose
  mongoDb
frontEnd
  React

# backEnd
Сервер на nodejs находится 7_sample/src/index.js
адрес: localhost:3000
старт проекта: 
1. Установка зависимостей: в папке 7_sample запустить npm i
2. сборка проекта: npm run dev

* 7_sample/src/URL/ - путь к CSV файлу с прайс листом
* 7_sample/src/middlewares/ - middleware для идентификации "админа" в header при POST запросе
* 7_sample/src/models/ - модель для mongoose
* saveDataInDb.js - модуль для сохранения данных в mongoDb

* GET /upload - загрузка и конвертиция CSV в array
* GET /saveinDb - сохранение конвертированных данных в БД
* GET /:shopName/:productId - вывод данных, одного товара в json формате
* POST /:shopName - используется middleware, с заголовком 'admin', обновление БД, путем удаления текущих данных в БД

# frontEnd

frontEnd часть расположена 7_sample/client/
