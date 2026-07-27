import { Request, Response, NextFunction } from 'express';
export declare class TaskController {
    private taskService;
    /**
     * Creates a new task
     */
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * search the task by id
     */
    findById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * search all tasks
     */
    findAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * update the task by id
     */
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * delete the task by id
     */
    delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=Machine.controller.d.ts.map