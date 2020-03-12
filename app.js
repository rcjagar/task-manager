const form = document.querySelector('#task-form');

const actions = document.querySelector('.collection');

const clear = document.querySelector('.clear-task');

const filter = document.querySelector('.filter');

const taskinput = document.querySelector('#task');


loadEventListners();

function loadEventListners(){
    form.addEventListener('submit', addTask)

}

function addTask(e){
    if(taskinput.value === ''){
    alert('Add some taskes please');
}

const li = document.createElement('li');
li.className ='collection-items';
li.appendChild(document.createTextNode(taskinput.value));


// create new link element 
const link =document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
actions.appendChild(li);
taskinput.value='';
console.log(li)
e.preventDefault();
}

function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item'))
    {
       {
            e.target.parentElement.parentElement.remove();
        }
    }
    console.log(e.target);
}