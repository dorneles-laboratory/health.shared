import { Request, Response, NextFunction } from 'express';
import { TaskService } from './IncidentUpdate.service.js';
import { UpdateTaskDTO, PaginatedTasksDTO, createTaskSchema, taskIdSchema, paginationSchema, updateTaskSchema, TaskResponseDTO, } from '@lib/shared';
export class TaskController {
    taskService = new TaskService();
    /**
     * Creates a new task
     */
    create = async (req, res, next) => {
        try {
            const validation = createTaskSchema.safeParse(req.body);
            if (!validation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'Erro de validação nos dados enviados',
                    status: 400,
                    detail: 'Um ou mais campos falharam na validação.',
                    errors: validation.error.flatten().fieldErrors,
                });
                return;
            }
            const newTask = await this.taskService.create(validation.data);
            res.status(201).json(newTask);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * search the task by id
     */
    findById = async (req, res, next) => {
        try {
            const validation = taskIdSchema.safeParse(req.params);
            if (!validation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'ID inválido',
                    status: 400,
                    errors: validation.error.flatten().fieldErrors,
                });
                return;
            }
            const { id } = validation.data;
            const task = await this.taskService.findById(id);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * search all tasks
     */
    findAll = async (req, res, next) => {
        try {
            const validation = paginationSchema.safeParse(req.query);
            if (!validation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'Parâmetros de paginação inválidos',
                    status: 400,
                    errors: validation.error.flatten().fieldErrors,
                });
                return;
            }
            const { page, limit } = validation.data;
            const result = await this.taskService.findAll(page, limit);
            res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * update the task by id
     */
    update = async (req, res, next) => {
        try {
            const idValidation = taskIdSchema.safeParse(req.params);
            if (!idValidation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'ID inválido',
                    status: 400,
                    errors: idValidation.error.flatten().fieldErrors,
                });
                return;
            }
            const bodyValidation = updateTaskSchema.safeParse(req.body);
            if (!bodyValidation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'Erro de validação nos dados enviados',
                    status: 400,
                    errors: bodyValidation.error.flatten().fieldErrors,
                });
                return;
            }
            const { id } = idValidation.data;
            const taskData = bodyValidation.data;
            const updatedTask = await this.taskService.update(id, taskData);
            res.status(200).json(updatedTask);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * delete the task by id
     */
    delete = async (req, res, next) => {
        try {
            const validation = taskIdSchema.safeParse(req.params);
            if (!validation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'ID inválido',
                    status: 400,
                    errors: validation.error.flatten().fieldErrors,
                });
                return;
            }
            const { id } = validation.data;
            await this.taskService.delete(id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=IncidentUpdate.controller.js.map