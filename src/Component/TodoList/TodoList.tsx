import React from 'react';
import {RenameSpanFunction} from "../RenameSpanFunction";
import Button from "../Button";
import AddPanel from "../AddPanel/AddPanel";
import {FilterValuesType, TaskType} from "../../App";
import Task from "../Task/Task";
import {DeleteTwoTone} from "@mui/icons-material";
import {IconButton} from "@mui/material";

type TodoListPropsType = {
    id: string
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskID: string) => void
    changeFilter: (todolistId: string, filter: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filterBS: FilterValuesType
    removeTodolist: (todolistId: string) => void
    editTitleTodolist: (todolistId: string, title: string) => void
    editTitleTask: (todolistId: string, taskId: string, title: string) => void
}

function TodoList(props: TodoListPropsType) {

    const editTitleTaskHand = (taskId: string, title: string) => {
        props.editTitleTask( props.id, taskId, title)
    }

    const tasksComponents = props.tasks.map((task) => {
        return (
            <Task
                key={task.id}
                id={task.id}
                todolistId={props.id}
                title={task.title}
                isDone={task.isDone}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}
                editTitleTask={( title) => editTitleTaskHand(task.id, title)}
                //или деструктуризировать {...task}
            />
        )
    })

    //  если передаешь сам иншлстэйт то props.changeFilter === "значение"
    const onAllClickHandler = () => props.changeFilter(props.id, "All");
    const onActiveClickHandler = () => props.changeFilter(props.id, "Active");
    const onCompletedClickHandler = () => props.changeFilter(props.id, "Completed");
    const editTitleTodolistHandler = (title: string) => props.editTitleTodolist(props.id, title);

    return (
        <>
            <div>
                <IconButton
                    onClick={() => props.removeTodolist(props.id)}>
                    <DeleteTwoTone />
                </IconButton>
                <h3>
                    <RenameSpanFunction title={props.titleOfTodo} editTitleTodolist={editTitleTodolistHandler}/>
                </h3>
                <AddPanel addTask={props.addTask} id={props.id}/>

                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onAllClickHandler}
                            title={"All"}/>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onActiveClickHandler}
                            title={"Active"}/>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onCompletedClickHandler}
                            title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;