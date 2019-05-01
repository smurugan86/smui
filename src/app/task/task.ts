export class Task {
    
    public constructor(init?: Partial<Task >) {
        Object.assign(this, init);
    }
    _id: string;
    title: string;
    userStory: string;
    description: string;
    userId:string;
    taskDate:Date;  
}
