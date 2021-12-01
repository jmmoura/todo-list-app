export enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
};
  
export interface Task {
    id: string | null | undefined;
    title: string;
    description: string;
    dueDate: Date;
    priority: TaskPriority;
    labels: string[];
};  