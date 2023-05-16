export type BoardType = {
  name: string;
  columns: ColumnItem[];
};

export type ColumnItem = {
  name: string;
  tasks: TaskItem[];
};

export type TaskItem = {
  title: string;
  description: string;
  status: string;
  subtasks: SubtaskItem[];
};

export type SubtaskItem = {
  title: string;
  isCompleted: boolean;
};

