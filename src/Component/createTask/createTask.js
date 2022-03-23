import React from 'react';
import './createTask.css'

function CreateTask(props) {
    return (
        <div class="row" id="bu">
            <div class="col-lg-5 offset-lg-3">

                <input value={props.value} onChange={props.onChange} />   </div >

            <button type="button" class="btn btn-outline-primary btn-sm " id="aj" onClick={props.addTask}>Add Task</button>

        </div>

        

    )
}

export default CreateTask;