let taskList=[
    {
        task:'Header',
        startDate:'06.01.2022',
        endDate:'10.01.2022',
        staff:'Akbar',
        status:'pending',
        isRejected:false
    },
    {
        task:'Main',
        startDate:'13.01.2022',
        endDate:'25.01.2022',
        staff:'Otabek',
        status:'doing',
        isRejected: false
    },
    {
        task:'Navbar',
        startDate:'08.01.2022',
        endDate:'15.01.2022',
        staff:'Ozodbek',
        status:'done',
        isRejected:false
    },
    {
        task:'Footer',
        startDate:'06.01.2022',
        endDate:'10.01.2022',
        staff:'Azizbek',
        status:'rejected',
        isRejected:true
    },
];

function drawTask() {
    document.getElementById('pendingTaskList').innerHTML='';
    document.getElementById('doingTaskList').innerHTML='';
    document.getElementById('doneTaskList').innerHTML='';
    document.getElementById('rejectedTaskList').innerHTML='';
    for (let i=0; i<taskList.length; i++){
        
        if (taskList[i].status==='pending'){
            document.getElementById('pendingTaskList').innerHTML +=
                '<div class="pendingCard">'+
                '<h6>'+ "Task: "+taskList[i].task +
                (taskList[i].isRejected ? '<span class="badge bg-danger">Rejected</span>' : ' ')+'</h6>'+
                '<h6>'+ "Staff: "+taskList[i].staff +'</h6>'+
                '<h6>'+ "Start Date: "+taskList[i].startDate +'</h6>'+
                '<h6>'+ "End Date: "+taskList[i].endDate +'</h6>'+
                '<select class="form-control mb-3" id="editedStatus'+i+'">' +
                '<option selected disabled>choose</option>' +
                '<option value="doing">doing</option>' +
                '<option value="done">done</option>' +
                '</select>'+
                '<button type="button" onclick="editTask('+i+')" type="button"  class="btn btn-warning d w-50">Edit</button>'+
                '<button type="button" onclick="deleteTask('+i+')" class="btn btn-danger d w-50">Delete</button>'+
                '</div>'
        }
        else if (taskList[i].status==='doing'){
           
            document.getElementById('doingTaskList').innerHTML +=
                '<div class="doingCard">'+
                '<h6>'+ "Task: "+taskList[i].task +
                (taskList[i].isRejected ? '<span class="badge bg-danger">Rejected</span>' : ' ')+'</h6>'+
                '<h6>'+ "Staff: "+taskList[i].staff +'</h6>'+
                '<h6>'+ "Start Date: "+taskList[i].startDate +'</h6>'+
                '<h6>'+ "End Date: "+taskList[i].endDate +'</h6>'+
                '<select class="form-control mb-3" id="editedStatus'+i+'">' +
                '<option selected disabled>choose</option>' +
                '<option value="pending">pending</option>' +
                '<option value="done">done</option>' +
                '</select>'+
                '<button type="button" onclick="editTask('+i+')" class="btn btn-warning d w-50">Edit</button>'+
                '<button type="button" onclick="deleteTask('+i+')" class="btn btn-danger d w-50">Delete</button>'+
                '</div>'
        }
        else if (taskList[i].status==='done'){
          
            document.getElementById('doneTaskList').innerHTML +=
                '<div class="doneCard">'+
                '<h6>'+ "Task: "+taskList[i].task +
                (taskList[i].isRejected ? '<span class="badge bg-danger">Rejected</span>' : ' ')+'</h6>'+
                '<h6>'+ "Staff: "+taskList[i].staff +'</h6>'+
                '<h6>'+ "Start Date: "+taskList[i].startDate +'</h6>'+
                '<h6>'+ "End Date: "+taskList[i].endDate +'</h6>'+
                '<button type="button" onclick="rejectTask('+i+')"class="btn btn-danger d w-75">Rejected</button>'+
                '</div>'
        }
        else{
            
            document.getElementById('rejectedTaskList').innerHTML +=
                '<div class="rejectedCard">'+
                '<h6>'+ "Task: "+taskList[i].task +'</h6>'+
                '<h6>'+ "Staff: "+taskList[i].staff +'</h6>'+
                '<h6>'+ "Start Date: "+taskList[i].startDate +'</h6>'+
                '<h6>'+ "End Date: "+taskList[i].endDate +'</h6>'+
                '<select class="form-control mb-3" id="editedStatus'+i+'">' +
                '<option selected disabled>choose</option>' +
                '<option value="pending">pending</option>' +
                '<option value="doing">doing</option>' +
                '</select>'+
                '<button type="button" onclick="editTask('+i+')" class="btn btn-warning d w-50">Edit</button>'+
                '</div>'
        }
    }
}
drawTask();

function addTask(){
    let task= document.forms['myForm']['task'].value;
    let startDate=document.forms['myForm']['startDate'].value;
    let endDate = document.forms['myForm']['endDate'].value;
    let staff=document.forms['myForm']['staff'].value;
    let status=document.forms['myForm']['status'].value;
    if (task.trim().length>0 && startDate.trim().length>0 
        && endDate.trim().length>0 && staff != 'choose' && status != 'choose'){
            let newTask={
                task, 
                startDate, 
                endDate, 
                staff,
                status,
                isRejected:false 
            };
            taskList.push(newTask);
            drawTask();
            document.forms['myForm'].reset();

    }else{
        alert("Fill all fields!");
    }

}

function deleteTask(taskIndex){
    taskList.splice(taskIndex,1);
    drawTask();
}
function rejectTask(taskIndex){
    taskList[taskIndex].status="rejected";
    taskList[taskIndex].isRejected=true;
    drawTask();
}
function editTask(editIndex){
    let selectedStatus=document.getElementById("editedStatus"+editIndex).value;
   if(selectedStatus!='choose'){
       taskList[editIndex].status=selectedStatus;
       drawTask();
   }else alert('Choose status!');
}
