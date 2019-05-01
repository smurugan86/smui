

export class Blog {
    
    public constructor(init?: Partial<Blog >) {
        Object.assign(this, init);
    }
    _id: string;
    title: string;   
    description: string;
    userId:string;
    blogDate:Date;
}
