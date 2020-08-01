import { LightningElement } from 'lwc';

export default class IplManagement extends LightningElement {
    constructor() {
        super();
        console.log("Inside IPL Management constrcutor");
        
    }

    connectedCallback() {
        console.log("Inside IPL Management connectedcallback");
    }

    disconnectedCallback() {
        console.log("Inside IPL Management disconnectedcallback");
    }

    renderedCallback() {
        console.log("Inside IPL Management renderedcallback");
    }

    errorCallback(error, stack) {
        console.log("Inside errorcallback:" +error);
        alert(console.error("Inside error"));
    }

}