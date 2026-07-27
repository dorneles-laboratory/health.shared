import { CreateTaskDTO, UpdateTaskDTO, TaskResponseDTO, PaginatedTasksDTO } from '@lib/shared';
export declare class TaskService {
    /**
     * Creates a new task.
     * @param taskData - DTO with the new task's data.
     * @returns The created task object.
     */
    create(taskData: CreateTaskDTO): Promise<TaskResponseDTO>;
    /**
     * Searches for a task by its ID.
     * @param id - The ID of the task to search for.
     * @returns Returns the data for the searched task.
     * @throws AppError if the task is not found.
     */
    findById(id: string, userId?: string): Promise<TaskResponseDTO>;
    /**
     * Searches for tasks with pagination.
     * @param page - The page number to return.
     * @param limit - The number of items per page.
     * @returns An object with the pagination data and the list of tasks.
     */
    findAll(page?: number, limit?: number, userId?: string): Promise<PaginatedTasksDTO>;
    /**
     * Updates an existing task.
     * @param id - task id.
     * @param taskData - DTO with the updated task data.
     * @throws AppError if the task cannot be found.
     * @returns Returns the updated task data.
     */
    update(id: string, taskData: UpdateTaskDTO): Promise<TaskResponseDTO>;
    /**
     * Deletes a task.
     * @param id - task id.
     * @throws AppError if the task does not exist.
     */
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=Mainteance.service.d.ts.map