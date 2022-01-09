
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lesson 22</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>

<div class="container-fluid">
    <div class="row my-3">
        <div class="col">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    <h4>Add task</h4>
                </div>
                <div class="card-body">
                    <form name="myForm">
                        <label for="task">Taskni kiriting</label>
                        <textarea class="form-control mb-2" name="task" id="task" 
                                  cols="30" rows="3"></textarea>

                        <label for="startDate">Boshlanish vaqti</label>
                        <input type="date" id="startDate" name="starDate" class="form-control mb-2">


                        <label for="endDate">Tugash vaqti</label>
                        <input type="date" id="endDate" name="endDate" class="form-control mb-2">

                        <label for="staff">Xodimni tanlang</label>
                        <select class="form-control mb-2" name="staff" id="staff">
                            <option selected disabled>choose</option>
                            <option value="muhammad">Muhammad</option>
                            <option value="axror">Axror</option>
                            <option value="doston">Doston</option>
                        </select>

                        <label for="status">Statusni tanlang</label>
                        <select class="form-control mb-2" name="status" id="status">
                            <option selected disabled>choose</option>
                            <option value="pending">pending</option>
                            <option value="doing">doing</option>
                        </select>
                        <button type="button" onclick="addTask()" class="btn btn-dark mt-3 d-block w-100">
                            add task
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header bg-warning text-center text-white">
                    <h4>Pending task</h4>
                </div>
            </div>
                <div class="" id="pendingTaskList">
                  
                </div>
            
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary text-center text-white">
                    <h4>Doing task</h4>
                </div>
            </div>
            
            <div id="doingTaskList">

            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header bg-success text-center text-white">
                    <h4>Done task</h4>
                </div>
            </div>
            <div  id="doneTaskList">

            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header bg-danger text-center text-white">
                    <h4>Rejected task</h4>
                </div>
            </div>
            
            <div id="rejectedTaskList">

            </div>
        </div>
    </div>
</div>



<script src="js/bootstrap.bundle.js"></script>
<script src="index.js"></script>
</body>
</html>
