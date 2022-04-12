export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
            this.number1=0;
            this.number2=0;
        } catch(e){}
    }
    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
                
            } else {
                items[counter].style.display = 'flex';
                items[items.length-1].style.display = 'none';
            }
        });
    }
    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }
/*     Proverka(container1,items1,container2,items2,num1,num2){
        container1.querySelector('.plus').addEventListener('click', () => {
            if(items1[1].style.display=="flex"){
                num1=1;
                if(num1+num2==2){
                    alert('num1');
                }
            }
        });
        container2.querySelector('.plus').addEventListener('click', () => {
            if(items2[1].style.display=="flex"){
                num2=1;
                if(num1+num2==2){
                    setTimeout(()=>{
                        items2.forEach((item, i, arr) => {
                            if (i !== arr.length - 1) {
                                item.style.display = 'none';
                            }
                        });
                        items2[3].style.display = 'flex';
                        this.oldConter=0;
                        this.newCounter=0;
                        num1=0;
                        num2=0;
                        
                    },1000);
                }
            }
        });
        
        
    } */
    init() {
        try {
            
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
           // this.Proverka(this.oldOfficer, this.oldItems,this.newOfficer, this.newItems,this.number1,this.number2);
            
        } catch(e){}
        
    }
}