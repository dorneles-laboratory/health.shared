import { CreateServiceGroupDTO, UpdateServiceGroupDTO, ServiceGroupResponseDTO } from '@lib/shared';
export declare class ServiceGroupService {
    /**
     * Creates a new service group.
     * @param groupData - DTO with the new group's data.
     * @returns The created group object.
     */
    create(groupData: CreateServiceGroupDTO): Promise<ServiceGroupResponseDTO>;
    /**
     * Searches for a service group by its ID.
     * @param id - The ID of the group to search for.
     * @returns Returns the data for the searched group.
     * @throws AppError if the group is not found.
     */
    findById(id: string): Promise<ServiceGroupResponseDTO>;
    /**
     * Searches for all service groups (without pagination).
     * @returns An array of service groups.
     */
    findAll(): Promise<ServiceGroupResponseDTO[]>;
    /**
     * Updates an existing service group.
     * @param id - group id.
     * @param groupData - DTO with the updated group data.
     * @throws AppError if the group cannot be found.
     * @returns Returns the updated group data.
     */
    update(id: string, groupData: UpdateServiceGroupDTO): Promise<ServiceGroupResponseDTO>;
    /**
     * Deletes a service group.
     * @param id - group id.
     * @throws AppError if the group does not exist.
     */
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=ServiceGroup.service.d.ts.map