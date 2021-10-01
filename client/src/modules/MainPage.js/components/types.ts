export type TodoBody = {
  body: string;
}

export type TodoData = {
  id: number;
  body: string;
  completed: boolean;
  userId?: number;
}
