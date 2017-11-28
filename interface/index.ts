// simple interface
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// interface with class
interface IMap {
    render(): void;
    remove(): void;
}

class Map implements IMap {
    public render() : void {
        // TODO: code here
    }

    public remove(): void {
        // TODO: code here
    }
}