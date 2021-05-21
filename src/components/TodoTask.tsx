import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  task: ITask
  completeTask(taskNameToDelete: string): void
}

export const TodoTask = ({task, completeTask}: Props) => {
  return(
    <div className="task">
      <div className="content">
        <span className="taskName">
          {task.taskName}
        </span>
        <span className="deadline">
          Due: {task.deadline} Days
        </span>
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button>
    </div>
  )
}