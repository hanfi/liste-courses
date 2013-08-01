var todos = Alloy.createCollection('todo')
todos.fetch()

fillTableView(todos.toJSON())

function fillTableView(collection){
var rows = []
var row
_.each (collection, function (todo){
    row = {title: todo.item};
    rows.push(row);
})
$.itemsList.setData(rows)
}

function emptyInput(e) {
	$.inputNew.value = ""
}

function submit(e) {
	var todo = Alloy.createModel('todo', {item:$.inputNew.value,done:0})
	todo.save()
//	alert($.inputNew.value)
	todos.fetch()
	fillTableView(todos.toJSON())

}

$.index.open();