function Controller() {
    function __alloyId8() {
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId6);
        }
        $.__views.itemsList.setData(rows);
    }
    function fillTableView(collection) {
        var rows = [];
        var row;
        _.each(collection, function(todo) {
            row = {
                title: todo.item
            };
            rows.push(row);
        });
        $.itemsList.setData(rows);
    }
    function emptyInput() {
        $.inputNew.value = "";
    }
    function submit() {
        var todo = Alloy.createModel("todo", {
            item: $.inputNew.value,
            done: 0
        });
        todo.save();
        todos.fetch();
        fillTableView(todos.toJSON());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("todo");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ "#444444", "#555555" ]
        },
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        top: 0,
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: 46,
        color: "white",
        text: "Ma liste de courses",
        id: "title"
    });
    $.__views.index.add($.__views.title);
    $.__views.inputNew = Ti.UI.createTextField({
        top: 46,
        width: Ti.UI.FILL,
        height: 46,
        borderRadius: 1,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "inputNew",
        hintText: "Nouveau ..."
    });
    $.__views.index.add($.__views.inputNew);
    emptyInput ? $.__views.inputNew.addEventListener("focus", emptyInput) : __defers["$.__views.inputNew!focus!emptyInput"] = true;
    submit ? $.__views.inputNew.addEventListener("return", submit) : __defers["$.__views.inputNew!return!submit"] = true;
    $.__views.itemsList = Ti.UI.createTableView({
        top: 92,
        id: "itemsList"
    });
    $.__views.index.add($.__views.itemsList);
    var __alloyId7 = Alloy.Collections["todo"] || todo;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var todos = Alloy.createCollection("todo");
    todos.fetch();
    fillTableView(todos.toJSON());
    $.index.open();
    __defers["$.__views.inputNew!focus!emptyInput"] && $.__views.inputNew.addEventListener("focus", emptyInput);
    __defers["$.__views.inputNew!return!submit"] && $.__views.inputNew.addEventListener("return", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;