
function savetoLocalStorage(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const amount = event.target.amount.value;
    
    const obj= {
        expense: expense,
        description: description,
        category: category,
        amount: amount
    }

    //store in local storage with key as expense
    localStorage.setItem(obj.expense, JSON.stringify(obj))

    showexpenseonScreen(obj) 
}

function showexpenseonScreen(obj) {
    const parentElem = document.getElementById('listofitems') //create li tag also for new details
    const childElem = document.createElement('li')
    childElem.textContent= obj.expense + ' - ' + obj.description + ' - ' + obj.category + ' - ' + obj.amount ;
    parentElem.appendChild(childElem)
   
    //Adding delete button and functionality DOM 
    const delBtn= document.createElement('input')
    delBtn.type = "button"
    delBtn.style.color= "red"
    delBtn.style.backgroundColor= "cherry"
    delBtn.value = 'Delete'
    delBtn.onclick = () => {
        localStorage.removeItem(obj.expense)
        parentElem.removeChild(childElem)
    }
     
   
     //Adding EDIT button and functionality DOM 14
     //We will just delete from li and populate in input

    const editBtn= document.createElement('input')
    editBtn.type = "button"
    editBtn.style.color= "blue"
    editBtn.style.backgroundColor= "yellow"
    editBtn.value = 'Edit'
    editBtn.onclick = () => {
        localStorage.removeItem(obj.expense)
        parentElem.removeChild(childElem)
        document.getElementById('expense').value = obj.expense;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;
        document.getElementById('amount').value =obj.amount;
    }
    
    childElem.appendChild(delBtn)
    childElem.appendChild(editBtn)
    parentElem.appendChild(childElem)
}