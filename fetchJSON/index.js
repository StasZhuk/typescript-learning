"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var body = todo.body;
    logTodo(id, title, body);
});
var logTodo = function (id, title, body) {
    console.log("\n    id is " + id + ",\n    title is " + title + ",\n    body is " + body + ",\n  ");
};
var words = ['red', 'blue', 'yellow'];
var found;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'blue')
        found = true;
}
var hh = 4;
