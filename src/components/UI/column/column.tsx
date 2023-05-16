const ColumnContainerStyle = `p-0 m-0 max-w-[400px]`;
const TaskContainerStyle = `my-5 px-5 py-5 rounded-lg shadow-md bg-white w-full dark:bg-darkGrey`;
const TaskDescriptionText = `text-black text-base font-bold dark:text-white`;
const SubTaskText = `text-medGray text-sm font-bold `;
import { TaskItem } from '../../../../api/data.types';

type ColumnProps = {
  tasks: TaskItem[];
};

export default function Column(props: ColumnProps) {
  const { tasks } = props;
  return (
    <div className={ColumnContainerStyle}>
      {tasks.map((task) => (
        <div className={TaskContainerStyle}>
          <div className={TaskDescriptionText}>{task.title} </div>
          <div className={SubTaskText}> 0 of {task.subtasks.length} subtasks</div>
        </div>
      ))}
    </div>
  );
}
