import { prisma } from '../../infra/database.js';
import { AppError } from '../../utils/AppError.js';
import { CreateTaskDTO, UpdateTaskDTO, TaskResponseDTO, PaginatedTasksDTO, TaskStatus, } from '@lib/shared';
import { TimeLogService } from '../time-log/time-log.service.js';
export class TaskService {
    /**
     * Creates a new task.
     * @param taskData - DTO with the new task's data.
     * @returns The created task object.
     */
    async create(taskData) {
        try {
            const normalizedData = {
                title: taskData.title,
                description: taskData.description?.trim() === ''
                    ? undefined
                    : taskData.description,
                dueDate: taskData.dueDate ? new Date(taskData.dueDate) : undefined,
                projectId: taskData.projectId,
                priority: taskData.priority
                    ? taskData.priority.toUpperCase()
                    : undefined,
                status: TaskStatus.Backlog, // Set the default status to "Backlog"
            };
            const newTask = await prisma.task.create({
                data: normalizedData,
            });
            return newTask;
        }
        catch (error) {
            console.error('Erro ao criar tarefa: ', error);
            throw new AppError('Não foi possível criar a tarefa devido a um erro interno.', 500);
        }
    }
    /**
     * Searches for a task by its ID.
     * @param id - The ID of the task to search for.
     * @returns Returns the data for the searched task.
     * @throws AppError if the task is not found.
     */
    async findById(id, userId) {
        try {
            const task = await prisma.task.findUnique({
                where: { id },
                include: {
                    project: true,
                    timeSessions: {
                        where: { ...(userId ? { userId } : {}), isConsolidated: false },
                    },
                },
            });
            if (!task) {
                throw new AppError('Tarefa não encontrada.', 404);
            }
            const taskWithTimer = {
                ...task,
                isTimerActive: task.timeSessions.some((s) => s.endTime === null),
                hasPendingSessions: task.timeSessions.some((s) => s.endTime !== null && !s.isConsolidated),
            };
            return taskWithTimer;
        }
        catch (error) {
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao buscar tarefa: ', error);
            throw new AppError('Não foi possível buscar a tarefa devido a um erro interno.', 500);
        }
    }
    /**
     * Searches for tasks with pagination.
     * @param page - The page number to return.
     * @param limit - The number of items per page.
     * @returns An object with the pagination data and the list of tasks.
     */
    async findAll(page = 1, limit = 10, userId) {
        try {
            const skip = (page - 1) * limit;
            const [count, tasks] = await prisma.$transaction([
                prisma.task.count(),
                prisma.task.findMany({
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        project: true,
                        timeSessions: {
                            where: { userId, isConsolidated: false },
                            take: 1,
                        },
                    },
                }),
            ]);
            // Mapeia adicionando o isTimerActive e garantindo o formato correto
            const tasksWithTimer = tasks.map((task) => ({
                ...task,
                isTimerActive: task.timeSessions.some((s) => s.endTime === null),
                hasPendingSessions: task.timeSessions.some((s) => s.endTime !== null && !s.isConsolidated),
            }));
            return {
                data: tasksWithTimer,
                meta: {
                    totalItems: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    itemsPerPage: limit,
                },
            };
        }
        catch (error) {
            console.error('Erro ao listar tarefas: ', error);
            throw new AppError('Não foi possível buscar as tarefas devido a um erro interno.', 500);
        }
    }
    /**
     * Updates an existing task.
     * @param id - task id.
     * @param taskData - DTO with the updated task data.
     * @throws AppError if the task cannot be found.
     * @returns Returns the updated task data.
     */
    async update(id, taskData) {
        try {
            const taskToUpdate = await prisma.task.findUnique({
                where: { id },
            });
            if (!taskToUpdate) {
                throw new AppError('Tarefa não encontrada.', 404);
            }
            const normalizedData = {
                title: taskData.title,
                description: taskData.description?.trim() === ''
                    ? undefined
                    : taskData.description,
                dueDate: taskData.dueDate ? new Date(taskData.dueDate) : undefined,
                priority: taskData.priority
                    ? taskData.priority.toUpperCase()
                    : undefined,
                status: taskData.status ? taskData.status.toUpperCase() : undefined,
                totalMinutes: taskData.totalMinutes !== 0 ? taskData.totalMinutes : 0,
            };
            if (taskData.projectId) {
                normalizedData.project = {
                    connect: { id: taskData.projectId },
                };
            }
            if (taskData.status === TaskStatus.Completed) {
                const timeLogService = new TimeLogService();
                await timeLogService.deletePendingSessionsByTask(id);
            }
            const updatedTask = await prisma.task.update({
                where: { id },
                data: normalizedData,
            });
            return updatedTask;
        }
        catch (error) {
            console.error('DETALHE DO ERRO PRISMA:', error);
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao atualizar tarefa: ', error);
            throw new AppError('Não foi possível atualizar a tarefa devido a um erro interno.', 500);
        }
    }
    /**
     * Deletes a task.
     * @param id - task id.
     * @throws AppError if the task does not exist.
     */
    async delete(id) {
        try {
            const taskToDelete = await prisma.task.findUnique({
                where: { id },
            });
            if (!taskToDelete) {
                throw new AppError('Tarefa não encontrada.', 404);
            }
            await prisma.task.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof AppError)
                throw error;
            console.error('Erro ao deletar tarefa: ', error);
            throw new AppError('Não foi possível deletar a tarefa devido a um erro interno.', 500);
        }
    }
}
//# sourceMappingURL=IncidentUpdate.service.js.map