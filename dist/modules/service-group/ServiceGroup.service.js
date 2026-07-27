import { prisma } from '../../infra/database.js';
import { AppError } from '../../utils/AppError.js';
import { CreateServiceGroupDTO, UpdateServiceGroupDTO, ServiceGroupResponseDTO, } from '@lib/shared';
export class ServiceGroupService {
    /**
     * Creates a new service group.
     * @param groupData - DTO with the new group's data.
     * @returns The created group object.
     */
    async create(groupData) {
        try {
            const newGroup = await prisma.serviceGroup.create({
                data: groupData,
            });
            return newGroup;
        }
        catch (error) {
            console.error('Erro ao criar grupo de serviço: ', error);
            throw new AppError('Não foi possível criar o grupo de serviço devido a um erro interno.', 500);
        }
    }
    /**
     * Searches for a service group by its ID.
     * @param id - The ID of the group to search for.
     * @returns Returns the data for the searched group.
     * @throws AppError if the group is not found.
     */
    async findById(id) {
        try {
            const group = await prisma.serviceGroup.findUnique({
                where: { id },
            });
            if (!group) {
                throw new AppError('Grupo de serviço não encontrado.', 404);
            }
            return group;
        }
        catch (error) {
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao buscar grupo de serviço: ', error);
            throw new AppError('Não foi possível buscar o grupo de serviço devido a um erro interno.', 500);
        }
    }
    /**
     * Searches for all service groups (without pagination).
     * @returns An array of service groups.
     */
    async findAll() {
        try {
            const groups = await prisma.serviceGroup.findMany({
                orderBy: { orderIndex: 'asc' }, // Ordenando pelo orderIndex conforme o schema do banco
            });
            return groups;
        }
        catch (error) {
            console.error('Erro ao listar grupos de serviço: ', error);
            throw new AppError('Não foi possível buscar os grupos de serviço devido a um erro interno.', 500);
        }
    }
    /**
     * Updates an existing service group.
     * @param id - group id.
     * @param groupData - DTO with the updated group data.
     * @throws AppError if the group cannot be found.
     * @returns Returns the updated group data.
     */
    async update(id, groupData) {
        try {
            const groupToUpdate = await prisma.serviceGroup.findUnique({
                where: { id },
            });
            if (!groupToUpdate) {
                throw new AppError('Grupo de serviço não encontrado.', 404);
            }
            const updatedGroup = await prisma.serviceGroup.update({
                where: { id },
                data: groupData,
            });
            return updatedGroup;
        }
        catch (error) {
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao atualizar grupo de serviço: ', error);
            throw new AppError('Não foi possível atualizar o grupo de serviço devido a um erro interno.', 500);
        }
    }
    /**
     * Deletes a service group.
     * @param id - group id.
     * @throws AppError if the group does not exist.
     */
    async delete(id) {
        try {
            const groupToDelete = await prisma.serviceGroup.findUnique({
                where: { id },
            });
            if (!groupToDelete) {
                throw new AppError('Grupo de serviço não encontrado.', 404);
            }
            await prisma.serviceGroup.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao deletar grupo de serviço: ', error);
            throw new AppError('Não foi possível deletar o grupo de serviço devido a um erro interno.', 500);
        }
    }
}
//# sourceMappingURL=ServiceGroup.service.js.map