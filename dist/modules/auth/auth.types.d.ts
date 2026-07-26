import { z } from '@lib/shared';
import { loginSchema } from './auth.schemas';
export interface TokenPayloadDTO {
    sub: string;
}
export type LoginAuthDTO = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.types.d.ts.map