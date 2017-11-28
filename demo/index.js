// Services
var Http = /** @class */ (function () {
    function Http() {
        this.fake = {
            name: 'wilson',
            age: 110
        };
    }
    Http.prototype.request = function (url, type) {
        return this.fake;
    };
    return Http;
}());
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.merge = function (tpl, data) {
        return '<h1>My Template merge :D</h1>';
    };
    return Template;
}());
// Component
var Component = /** @class */ (function () {
    function Component() {
        this.html = '';
        this.template = new Template();
        this.http = new Http();
        this.initialize();
    }
    Component.prototype.initialize = function () {
        var data = this.http.request('/list-packages', 'post');
        var tpl = document.getElementById('tpl').innerHTML;
        this.html = this.template.merge(tpl, data);
    };
    Component.prototype.render = function () {
        var content = document.getElementById('content');
        content.innerHTML = this.html;
    };
    return Component;
}());
var component = new Component();
component.render();
