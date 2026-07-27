import { Request, Response, NextFunction } from 'express';
export declare class ServiceGroupController {
    private serviceGroupService;
    /**
     * Creates a new service group
     */
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Search the service group by id
     */
    findById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Search all service groups (without pagination)
     */
    findAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Update the service group by id
     */
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    /**
     * Delete the service group by id
     */
    delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=ServiceGroup.controller.d.ts.map