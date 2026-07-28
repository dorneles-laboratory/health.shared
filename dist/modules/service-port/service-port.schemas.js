import { z, registry } from '../../lib/registry';
import { ServicePortProtocol } from './service-port.enums';
export const servicePortSchema = registry.register('ServicePort', z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    port: z.number().int(),
    protocol: z.nativeEnum(ServicePortProtocol),
    description: z.string().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
}));
//# sourceMappingURL=service-port.schemas.js.map