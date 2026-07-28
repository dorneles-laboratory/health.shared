import { z } from '@lib/shared';
import {
  createServicePortSchema,
  updateServicePortSchema,
  servicePortResponseSchema,
  servicePortIdSchema,
} from './service-port.schemas';
import type { PaginatedResultDTO } from '../../common/common.types';

export type CreateServicePortDTO = z.infer<typeof createServicePortSchema>;
export type UpdateServicePortDTO = z.infer<typeof updateServicePortSchema>;
export type ServicePortResponseDTO = z.infer<typeof servicePortResponseSchema>;
export type ServicePortIdDTO = z.infer<typeof servicePortIdSchema>;

export type PaginatedServicePortsDTO =
  PaginatedResultDTO<ServicePortResponseDTO>;
