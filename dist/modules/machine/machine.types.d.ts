import { z } from '@lib/shared';
import { createMachineSchema, updateMachineSchema, machineResponseSchema, machineIdSchema } from './machine.schemas';
import type { PaginatedResultDTO } from '../../common/common.types';
export type CreateMachineDTO = z.infer<typeof createMachineSchema>;
export type UpdateMachineDTO = z.infer<typeof updateMachineSchema>;
export type MachineResponseDTO = z.infer<typeof machineResponseSchema>;
export type MachineIdDTO = z.infer<typeof machineIdSchema>;
export type PaginatedMachinesDTO = PaginatedResultDTO<MachineResponseDTO>;
//# sourceMappingURL=machine.types.d.ts.map