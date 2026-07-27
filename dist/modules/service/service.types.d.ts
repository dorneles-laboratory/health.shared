import { z } from '@lib/shared';
import { createServiceSchema, updateServiceSchema, serviceResponseSchema, serviceIdSchema } from './service.schemas';
export type CreateServiceDTO = z.infer<typeof createServiceSchema>;
export type UpdateServiceDTO = z.infer<typeof updateServiceSchema>;
export type ServiceResponseDTO = z.infer<typeof serviceResponseSchema>;
export type ServiceIdDTO = z.infer<typeof serviceIdSchema>;
//# sourceMappingURL=service.types.d.ts.map