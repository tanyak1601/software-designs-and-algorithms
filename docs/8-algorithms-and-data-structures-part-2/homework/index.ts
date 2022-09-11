import { Job, Runner } from './types';

class JobRunner implements Runner{
  private heap: Array<Job|null|undefined>;

  constructor() {
    this.heap = [{ priority: Infinity }];
  }

  public addJob(job: Job) {
    this.heap.push(job);

    if (this.heap.length > 1) {
      let jobIdx: number = this.heap.length - 1;
      let parentIdx: number = Math.floor(jobIdx / 2);

      while( this.heap[parentIdx]!.priority < this.heap[jobIdx]!.priority) {
        const parent = this.heap[parentIdx];
        this.heap[parentIdx] = job;
        this.heap[jobIdx] = parent;

        jobIdx = parentIdx;
        parentIdx = Math.floor(jobIdx / 2);
      }
    }
  }

  private removeJob(): Job|null {
    if (this.heap.length === 1) return null;

    if (this.heap.length === 2) {
      return this.heap.pop() as Job;
    }

    const removedJob = this.heap[1] as Job;

    const jobs = this.heap.slice(2);
    this.heap = [{ priority: Infinity }];
    jobs.forEach(job => this.addJob(job as Job));
    
    return removedJob;
  }

  public run(): any {
    const topPriorityJob: Job|null = this.removeJob();

    if (topPriorityJob) {
      return topPriorityJob.task && topPriorityJob.task();
    }
  
    return null;
  }
}