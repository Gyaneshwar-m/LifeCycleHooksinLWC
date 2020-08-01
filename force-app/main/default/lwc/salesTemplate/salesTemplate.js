import { LightningElement, api } from 'lwc';
import firsttemplate from './salesTemplate.html';
import secondtemplate from './serviceTemplate.html';

export default class SalesTemplate extends LightningElement {
 @api templatename = 'Salestemplate';
        constructor(){
            super();
            console.log("Inside Constructor");
               }
        connectedCallback(){
            console.log("Inside ConnectedCallbackp");
               }
        disconnectedCallback(){
            console.log(" Inside DisconnectedCallBack");
               }
               
    onchange(){
        if (this.templatename === 'Salestemplate' ) {
            this.templatename = 'Servicetemplate';
        }
        else{
            this.templatename = 'Salestemplate';
        }

    }

    render(){
        console.log("Inside render")
        if (this.templatename === "Salestemplate") {
            return firsttemplate;
            
        }
        else{
            return secondtemplate;
        }
    }
    renderedCallback(){
        console.log("renderedcallback");

    }
   
}