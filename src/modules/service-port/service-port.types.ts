import { z } from '@lib/shared';
import { servicePortSchema } from './service-port.schemas';

export type ServicePortDTO = z.infer<typeof servicePortSchema>;
