import { z } from '@lib/shared';
import { createServiceGroupSchema, updateServiceGroupSchema, serviceGroupResponseSchema, serviceGroupIdSchema } from './service-group.schemas';
import type { PaginatedResultDTO } from '../../common/common.types';
export type CreateServiceGroupDTO = z.infer<typeof createServiceGroupSchema>;
export type UpdateServiceGroupDTO = z.infer<typeof updateServiceGroupSchema>;
export type ServiceGroupResponseDTO = z.infer<typeof serviceGroupResponseSchema>;
export type ServiceGroupIdDTO = z.infer<typeof serviceGroupIdSchema>;
export type PaginatedServiceGroupsDTO = PaginatedResultDTO<ServiceGroupResponseDTO>;
//# sourceMappingURL=service-group.types.d.ts.map