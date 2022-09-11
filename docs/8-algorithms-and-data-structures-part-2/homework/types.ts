export type Job = {
  task?: () => any;
  priority: number;
}

export interface Runner {
  addJob: (job: Job) => void;
  run: () => any;
}
