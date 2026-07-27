import { Request, Response, NextFunction } from 'express';
import { ServiceGroupService } from './ServiceGroup.service';
import { UpdateServiceGroupDTO, createServiceGroupSchema, serviceGroupIdSchema, updateServiceGroupSchema, ServiceGroupResponseDTO, } from '@lib/shared';
export class ServiceGroupController {
    serviceGroupService = new ServiceGroupService();
    /**
     * Creates a new service group
     */
    create = async (req, res, next) => {
        try {
            const validation = createServiceGroupSchema.safeParse(req.body);
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
            const newGroup = await this.serviceGroupService.create(validation.data);
            res.status(201).json(newGroup);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Search the service group by id
     */
    findById = async (req, res, next) => {
        try {
            const validation = serviceGroupIdSchema.safeParse(req.params);
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
            const group = await this.serviceGroupService.findById(id);
            res.status(200).json(group);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Search all service groups (without pagination)
     */
    findAll = async (req, res, next) => {
        try {
            const result = await this.serviceGroupService.findAll();
            res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Update the service group by id
     */
    update = async (req, res, next) => {
        try {
            const idValidation = serviceGroupIdSchema.safeParse(req.params);
            if (!idValidation.success) {
                res.status(400).json({
                    type: '/errors/validation-error',
                    title: 'ID inválido',
                    status: 400,
                    errors: idValidation.error.flatten().fieldErrors,
                });
                return;
            }
            const bodyValidation = updateServiceGroupSchema.safeParse(req.body);
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
            const groupData = bodyValidation.data;
            const updatedGroup = await this.serviceGroupService.update(id, groupData);
            res.status(200).json(updatedGroup);
        }
        catch (error) {
            next(error);
        }
    };
    /**
     * Delete the service group by id
     */
    delete = async (req, res, next) => {
        try {
            const validation = serviceGroupIdSchema.safeParse(req.params);
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
            await this.serviceGroupService.delete(id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=ServiceGroup.controller.js.map