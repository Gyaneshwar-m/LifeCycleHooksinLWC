import { LightningElement } from 'lwc';

export default class MumbaiIndians extends LightningElement {
    constructor() {
        super();
        console.log("Inside MumbaiIndians constrcutor");
    }

    connectedCallback() {
        console.log("Inside MumbaiIndians connectedcallback");
    }

    disconnectedCallback() {
        console.log("Inside MumbaiIndians disconnectedcallback");
    }

    renderedCallback() {
        console.log("Inside MumbaiIndians renderedcallback");
    }

    errorCallback(error, stack) {
        console.log("Inside MumbaiIndians errorcallback:" +error);
    }
}