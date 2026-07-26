import { z } from '../lib/registry';
import { rfc7807ErrorSchema, paginationMetaSchema, paginationSchema } from './common.schemas';
export type ProblemDetailsDTO = z.infer<typeof rfc7807ErrorSchema>;
export type PaginationMetaDTO = z.infer<typeof paginationMetaSchema>;
export type PaginationQueryDTO = z.infer<typeof paginationSchema>;
export interface PaginatedResultDTO<T> {
    data: T[];
    meta: PaginationMetaDTO;
}
//# sourceMappingURL=common.types.d.ts.map