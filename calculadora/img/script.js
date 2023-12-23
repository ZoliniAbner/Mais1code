const previousOperationText = document.querySelector("#previous-operation");

const currentOperationText = document.querySelector("#current-operation");

const buttons = document.querySelector("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";

    }

    //add digit to calculatr screen

    addDigit(digit) {
        // check if current operation already has a dot
     if(digit === "." && this.currentOperation.innerText.includes(".")){
        return;
     }
      this.currentOperation = digit
      this.updateScreen()
    }

    //Process all calculator operations

     processOperation(operation){

        //check if current is empty

        if(this.currentOperation.innerText === "" && operation !== "c"){
            if(this.previousOperationText.innerText !== ""){
                //change operation
                this.changeOperation(operation);
            }
            return
        }

        // Get current and previous value

        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperation.innerText;

        switch(operation){
            case"+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;

            case"-":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;

            case"/":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;

            case"*":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;

            case"DEL":
            
            this.processDelOperator();
            break;

            case"CE":
            this.processClearCurrentOperator();
            break;

            case"C":
            this.processClearOperation();
            break;

            case"=":
            this.procesEqualsOperator();
            break;

            default:
            return;
        }
     }

    //Change values of the calculator screen

    updateScreen(operationValue = null, operation = null, current = null, previous = null){
       
       if(operationValue === null){
        this.currentOperation.innerText += this.currentOperation;
       }else{
        //check if value is zero, if it is just add current value

        if(previous === 0){
            operationValue = current
        }

        //add current  value to previous
        this.previousOperationText.innerText = ` ${operationValue} ${operation}`;
        this.currentOperationText.innerText = "";

       }
        
    }

    //change math operation


    changeOperation(operation){

        const mathOperations = ["*", "/", "+", "."]
        if(!mathOperations.include(operation)){
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.slice(0, -1) + operation;
    }
     // delete tthe last digit
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperation.innerText.slice(0, -1);
    }

        // clear current opertion
    processClearCurrentOperator(){
        this.currentOperationText.innerText - ""
    }

    //clear all operations
    processClearOperation(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText ="";
    }

    procesEqualsOperator(){
        const operation = previousOperationText.innerText.split("")[1];

        this.processOperation(operation);
    }
}

const calc = new calculator(previousOperationText,currentOperationText);

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >=0 || value === "."){
            console.log(value);
        }else{
            console.log("Op:" + value);
        }
    })
})