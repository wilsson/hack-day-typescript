// Services
class Http {
    public fake: object;
    constructor(){
        this.fake = {
            name: 'wilson', 
            age: 110
        }
    }
    public request(url: string, type: string){
        return this.fake;
    }
}

class Template {
    public merge(tpl: string, data: object): string {
        return '<h1>My Template merge :D</h1>';
    }
}

// Component
class Component {
    public http: Http;
    public template: Template;
    public html: string;
    constructor(){
        this.html = '';
        this.template = new Template();
        this.http = new Http();
        this.initialize();
    }

    public initialize() {
        let data: object = this.http.request('/list-packages', 'post');
        let tpl: string = document.getElementById('tpl').innerHTML;
        this.html = this.template.merge(tpl, data);
    }

    public render(){
        let content: HTMLElement = document.getElementById('content');
        content.innerHTML = this.html;
    }
}

let component = new Component();
component.render();