const TaskContainerStyle = `my-5 px-5 py-5 rounded-lg shadow-md bg-white w-full dark:bg-darkGrey`;
const TaskDescriptionText = `text-black text-base font-bold dark:text-white`;
const SubTaskText = `text-medGray text-sm font-bold `;




export default function Task() {
  return (
    <div className={TaskContainerStyle}>
      <div className={TaskDescriptionText}>Example Task Text.</div>
      <div className={SubTaskText}>0 of 3 subtasks</div>
    </div>
  );
}

//box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
