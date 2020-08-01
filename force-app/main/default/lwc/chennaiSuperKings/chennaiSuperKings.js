import { LightningElement } from 'lwc';

export default class ChennaiSuperKings extends LightningElement {
    constructor() {
        super();
        console.log("Inside ChennaiSuperKings constrcutor");
    }

    connectedCallback() {
        console.log("Inside ChennaiSuperKings connectedcallback");
    }

    disconnectedCallback() {
        console.log("Inside ChennaiSuperKings disconnectedcallback");
    }

    renderedCallback() {
        console.log("Inside ChennaiSuperKings renderedcallback");
    }

    errorCallback(error, stack) {
        console.log("Inside ChennaiSuperKings errorcallback:" +error);
    }
}