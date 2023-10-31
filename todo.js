const todoList=[];
const doneList=[];
 
function addToList(todoItem){
     todoList.push(todoItem)
     return todoList;
}


function addTopList(todoItem){ // loop istället för unshift 
    for(let i=todoList.length-1; i>=0; i--){
        todoList[i+1] = todoList[i]
    }
todoList[0] = todoItem;
return todoList;
 }

// function addTopList(todoItem){  // unshift metod
//     todoList.unshift(todoItem);
//     return todoList
// }

function removeBottom(){
let removedItem=todoList.pop();
return removedItem;
}

function removeTop(){
let removdItem = todoList.shift();
return removdItem;
}


// 6. Ta bort en sak baserad på dess placering i listan
function removeByIndex(index){
    if(!isNaN(index) && index >=0 && index <= todoList.length-1){
let removedItem = todoList.splice(index,1)
return removedItem[0];
    }else{
        console.log('Fel')
    }
}


// 7. Ta bort en sak baserad på dess namn
function removeByName(name){
    for(let i=0; i<todoList.length; i++){
      
        if(todoList[i].beskrivning === name){
            let removed = removeByIndex(i)
    
            return removed;

        }
    }
}





// 8. Ta bort en sak och lägg till den i ”har gjort”-lista
function removeFromListAndAddToDone(doneItemIndex){
    if(!isNaN(doneItemIndex) && doneItemIndex >= 0 && doneItemIndex <= todoList.length-1){    
    let name = todoList[doneItemIndex]
    doneList.push(removeByName(name))
    }else{
        console.log('Felaktig inmatning')
    }
return doneList;
}


// 9. Flytta en sak till toppen av listan
function moveToTop(todoItem){
let item = removeByIndex(todoItem)
addTopList(item);
return todoList;
}



// 10. Flytta en sak till botten av listan
function moveToBottom(name){
    removed = removeByName(name);
    addToList(removed);
    return todoList;
}


// 11. Flytta en sak ett steg ner i listan
function moveItemDown(indexOfItem){
    if(!isNaN(indexOfItem) && indexOfItem>= 0 && indexOfItem <= todoList.length-1){
        let descItem = todoList[indexOfItem];
        let ascItem = todoList[indexOfItem+1];
        todoList[indexOfItem+1] = descItem
        todoList[indexOfItem] = ascItem
    return todoList;}
    else{
        console.log('Felaktig inmatning')
        return todoList;
    }
};


// 12. Flytta en sak ett steg upp i listan
function moveItemUp(indexOfItem){
if(!isNaN(indexOfItem) && indexOfItem>= 0 && indexOfItem <= todoList.length-1){
    let descItem = todoList[indexOfItem];
    let ascItem = todoList[indexOfItem-1];
    todoList[indexOfItem-1] = descItem
    todoList[indexOfItem] = ascItem
return todoList;}
else{
    console.log('Felaktig inmatning')
    return todoList;
}}
;