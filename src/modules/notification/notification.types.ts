import { z } from '../../lib/registry';
import {
  telegramTestSchema,
  telegramTestResponseSchema,
  updateTelegramConfigSchema,
  telegramConfigResponseSchema,
} from './notification.schemas';

export type TelegramTestDTO = z.infer<typeof telegramTestSchema>;
export type TelegramTestResponseDTO = z.infer<
  typeof telegramTestResponseSchema
>;
export type UpdateTelegramConfigDTO = z.infer<
  typeof updateTelegramConfigSchema
>;
export type TelegramConfigResponseDTO = z.infer<
  typeof telegramConfigResponseSchema
>;
