
const taskInput=document.querySelector('#taskInput');
const button=document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

button.addEventListener('click',(e)=>{
    if(taskInput.value==''){
        console.log('no');
    }else{
        const li = document.createElement('li');
        li.innerHTML=`
                    <input type="checkbox" class="task-checkbox">
                    <span class="task-text">${taskInput.value}</span>
                    <button class="delete-btn">delete</button>`;
        taskList.appendChild(li);
        taskInput.value= '' ;
        // // appendChild(document.createTextNode(`${taskInput.value}`))
        // //to shatb on the task 
        // li.addEventListener('click',(e)=>{
        //     li.classList.toggle('completed');
        // });
        const checkbox = li.querySelector('.task-checkbox')
        const taskText = li.querySelector('.task-text');

        
        
        checkbox.addEventListener('change', () => {
           taskText.classList.toggle('completed');
        });


        //to delete button.
        const delete_btn = li.querySelector('.delete-btn');
        delete_btn.addEventListener('click',(e)=>{
            e.stopPropagation();
            li.remove();
        })
               
    }
}
)

//when enter add the task from the input too 
taskInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        button.click();
    }
})
