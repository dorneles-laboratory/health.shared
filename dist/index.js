// src/lib/registry.ts
import { z } from "zod";
import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
  OpenApiGeneratorV3
} from "@asteasolutions/zod-to-openapi";
extendZodWithOpenApi(z);
var registry = new OpenAPIRegistry();

// src/modules/auth/auth.schemas.ts
var loginSchema = registry.register(
  "LoginRequest",
  z.object({
    email: z.email({
      error: ({ input }) => input === void 0 ? "O e-mail \xE9 obrigat\xF3rio." : "Formato de e-mail inv\xE1lido."
    }).min(1, { message: "O e-mail \xE9 obrigat\xF3rio." }).transform((value) => value.toLowerCase()).openapi({
      description: "E-mail do usu\xE1rio",
      example: "teste@teste.com.br"
    }),
    password: z.string({
      error: ({ input }) => input === void 0 ? "A senha \xE9 obrigat\xF3ria." : "A senha deve ser um texto."
    }).min(8, { message: "Senha deve ter no m\xEDnimo 8 caracteres." }).max(64, { message: "Senha deve ter no m\xE1ximo 64 caracteres." }).regex(/[A-Z]/, { message: "Senha deve conter letra mai\xFAscula." }).regex(/[a-z]/, { message: "Senha deve conter letra min\xFAscula." }).regex(/[0-9]/, { message: "Senha deve conter n\xFAmero." }).openapi({
      description: "Senha do usu\xE1rio com crit\xE9rios de seguran\xE7a",
      example: "Senha@123"
    })
  })
);
var refreshTokenSchema = registry.register(
  "RefreshTokenRequest",
  z.object({
    refreshToken: z.string({
      error: ({ input }) => input === void 0 ? "O token de atualiza\xE7\xE3o \xE9 obrigat\xF3rio." : "O token de atualiza\xE7\xE3o deve ser um texto."
    }).openapi({
      description: "Token de atualiza\xE7\xE3o obtido no login",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    })
  })
);

// src/modules/auth/auth.enums.ts
var AuthEnums = {
  LoginStatus: {
    Pending: "PENDING",
    Authenticated: "AUTHENTICATED",
    Unauthenticated: "UNAUTHENTICATED"
  }
};

// src/modules/users/users.schemas.ts
var createUserSchema = registry.register(
  "CreateUserRequest",
  z.object({
    name: z.string({
      error: ({ input }) => input === void 0 ? "O nome \xE9 obrigat\xF3rio." : "O nome deve ser um texto."
    }).min(2, { message: "Nome muito curto." }).max(120, { message: "Nome muito longo." }).trim().openapi({
      description: "Nome completo do usu\xE1rio",
      example: "Usu\xE1rio de Teste"
    }),
    email: z.email({
      error: ({ input }) => input === void 0 ? "O e-mail \xE9 obrigat\xF3rio." : "Formato de e-mail inv\xE1lido."
    }).transform((v) => v.toLowerCase()).openapi({
      description: "E-mail exclusivo do usu\xE1rio para login",
      example: "test@example.com"
    }),
    password: z.string({
      error: ({ input }) => input === void 0 ? "A senha \xE9 obrigat\xF3ria." : "A senha deve ser um texto."
    }).min(8, { message: "Senha deve ter no m\xEDnimo 8 caracteres." }).max(64, { message: "Senha deve ter no m\xE1ximo 64 caracteres." }).regex(/[A-Z]/, { message: "Senha deve conter letra mai\xFAscula." }).regex(/[a-z]/, { message: "Senha deve conter letra min\xFAscula." }).regex(/[0-9]/, { message: "Senha deve conter n\xFAmero." }).openapi({
      description: "Senha do usu\xE1rio com crit\xE9rios de seguran\xE7a",
      example: "Senha@123"
    }),
    // cellphone: z.string().trim().optional().openapi({
    //   description: 'Número de celular do usuário',
    //   example: '(55) 99999-9999',
    // }),
    // birthDate: z.coerce
    //   .date({
    //     message: 'A data de nascimento deve ser válida.',
    //   })
    //   .optional()
    //   .openapi({
    //     description: 'Data de nascimento do usuário (YYYY-MM-DD)',
    //     example: '1990-01-01',
    //   }),
    // address: z.string().trim().optional().openapi({
    //   description: 'Endereço do usuário',
    //   example: 'Rua Exemplo, 123 - Cidade/UF',
    // }),
    isActive: z.boolean().default(true).optional()
  })
);
var updateUserSchema = createUserSchema.partial().omit({ password: true }).extend({
  password: z.string().min(8, { message: "Senha deve ter no m\xEDnimo 8 caracteres." }).max(64, { message: "Senha deve ter no m\xE1ximo 64 caracteres." }).regex(/[A-Z]/, { message: "Senha deve conter letra mai\xFAscula." }).regex(/[a-z]/, { message: "Senha deve conter letra min\xFAscula." }).regex(/[0-9]/, { message: "Senha deve conter n\xFAmero." }).optional().openapi({
    description: "Nova senha do usu\xE1rio (opcional, com crit\xE9rios de seguran\xE7a)",
    example: "NovaSenha@123"
  }),
  isActive: z.boolean().optional()
}).refine((data) => Object.keys(data).length > 0, {
  message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
});
var userResponseSchema = registry.register(
  "UserResponse",
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    // cellphone: z.string().nullable(),
    // birthDate: z.coerce.date().nullable(),
    // address: z.string().nullable(),
    isActive: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
    // deletedAt: z.coerce.date().nullable(),
  })
);
var userIdSchema = z.object({
  id: z.uuid({
    error: ({ input }) => input === void 0 ? "O Id \xE9 obrigat\xF3rio." : "O ID do usu\xE1rio deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo do usu\xE1rio",
    example: "d3b07384-d113-49cd-a5d6-80d00d542fba"
  })
});

// src/modules/tasks/tasks.enums.ts
var TaskStatus = {
  Backlog: "BACKLOG",
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
  InReview: "IN_REVIEW",
  Completed: "COMPLETED",
  Archived: "ARCHIVED"
};
var TaskPriority = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
  Urgent: "URGENT"
};

// src/modules/tasks/tasks.schemas.ts
var createTaskSchema = registry.register(
  "CreateTaskRequest",
  z.object({
    title: z.string().min(2).max(120).trim().openapi({
      description: "T\xEDtulo da tarefa",
      example: "Implementar nova funcionalidade X"
    }),
    description: z.string().max(2e3).trim().optional().openapi({
      description: "Descri\xE7\xE3o detalhada",
      example: "Descri\xE7\xE3o detalhada da tarefa"
    }),
    projectId: z.string().uuid().openapi({
      description: "ID do projeto ao qual a tarefa pertence",
      example: "123e4567-e89b-12d3-a456-426614174000"
    }),
    priority: z.nativeEnum(TaskPriority).default(TaskPriority.Low).openapi({
      description: "Prioridade da tarefa",
      example: TaskPriority.High
    }),
    dueDate: z.coerce.date().optional().openapi({
      description: "Prazo limite da tarefa",
      example: "2024-12-31T23:59:59Z"
    })
  })
);
var updateTaskSchema = registry.register(
  "UpdateTaskRequest",
  createTaskSchema.extend({
    totalMinutes: z.number().int().openapi({
      description: "horas gastas na tarefa",
      example: 523
    }),
    status: z.nativeEnum(TaskStatus).openapi({
      description: "S\xF3 atualizamos o status depois de criada",
      example: TaskStatus.InProgress
    })
    //   assigneeId: z.string().uuid().optional().openapi({
    //     description: 'ID do usuário responsável',
    //     example: '123e4567-e89b-12d3-a456-426614174000',
    //   }),
    // estimatedHours: z.number().positive().optional().openapi({
    //   description: 'Estimativa em horas',
    //   example: 8,
    // }),
    // collaboratorIds: z
    //   .array(z.string().uuid())
    //   .optional()
    //   .openapi({
    //     description: 'Outros membros (Watchers)',
    //     example: [
    //       '123e4567-e89b-12d3-a456-426614174000',
    //       '123e4567-e89b-12d3-a456-426614174001',
    //     ],
    //   }),
  }).partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var taskResponseSchema = registry.register(
  "TaskResponse",
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string().nullable(),
    projectId: z.string().uuid(),
    status: z.nativeEnum(TaskStatus),
    priority: z.nativeEnum(TaskPriority),
    dueDate: z.date().nullable(),
    totalMinutes: z.number().int().default(0),
    isTimerActive: z.boolean(),
    hasPendingSessions: z.boolean().optional(),
    // assigneeId: z.string().uuid().nullable(),
    // estimatedHours: z.number().nullable(),
    // collaboratorIds: z.array(z.string().uuid()).nullable(),
    // createdById: z.string().uuid(),
    // closedById: z.string().uuid().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var taskIdSchema = z.object({
  id: z.string().uuid({ message: "O ID da tarefa deve ser um UUID v\xE1lido." }).openapi({
    param: { name: "id", in: "path" }
  })
});

// src/modules/projects/projects.enums.ts
var ProjectStatus = {
  Draft: "DRAFT",
  Active: "ACTIVE",
  OnHold: "ON_HOLD",
  Completed: "COMPLETED",
  Canceled: "CANCELLED"
};
var ProjectPriority = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
  Critical: "CRITICAL"
};

// src/modules/projects/projects.schemas.ts
var createProjectSchema = registry.register(
  "CreateProjectRequest",
  z.object({
    name: z.string({
      error: ({ input }) => input === void 0 ? "O nome do projeto \xE9 obrigat\xF3rio." : "O nome do projeto deve ser um texto."
    }).min(3, { message: "Nome do projeto muito curto." }).max(120, { message: "Nome do projeto muito longo." }).trim().openapi({
      description: "Nome do projeto",
      example: "Health V2"
    })
    // description: z
    //   .string()
    //   .max(2000, { message: 'Descrição muito longa.' })
    //   .trim()
    //   .optional()
    //   .openapi({
    //     description: 'Descrição detalhada do projeto e seus objetivos',
    //   }),
    // status: z.nativeEnum(ProjectStatus).default(ProjectStatus.Draft).openapi({
    //   description: 'Status inicial do projeto',
    //   example: 'draft',
    // }),
    // priority: z
    //   .nativeEnum(ProjectPriority)
    //   .default(ProjectPriority.Medium)
    //   .openapi({
    //     description: 'Prioridade estratégica do projeto',
    //     example: 'medium',
    //   }),
    // startDate: z.coerce.date().optional().openapi({
    //   description: 'Data de início oficial do projeto',
    // }),
    // endDate: z.coerce.date().optional().openapi({
    //   description: 'Data de término estimada ou prazo final',
    // }),
    // managerId: z
    //   .string()
    //   .uuid({ message: 'O ID do gerente deve ser um UUID válido.' })
    //   .optional()
    //   .openapi({
    //     description:
    //       'UUID do usuário responsável pelo gerenciamento do projeto',
    //   }),
  })
);
var updateProjectSchema = registry.register(
  "UpdateProjectRequest",
  createProjectSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var projectResponseSchema = registry.register(
  "ProjectResponse",
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string().nullable(),
    status: z.nativeEnum(ProjectStatus),
    priority: z.nativeEnum(ProjectPriority),
    startDate: z.date().nullable(),
    // endDate: z.date().nullable(),
    // managerId: z.string().uuid().nullable(),
    // memberIds: z.array(z.string().uuid()).nullable(),
    // createdById: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var projectIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O Id \xE9 obrigat\xF3rio." : "O ID do projeto deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo do projeto"
  })
});

// src/modules/time-log/time-log.enums.ts
var TimeLogNature = {
  DEV: "DEV",
  MEETING: "MEETING",
  TESTING: "TESTING",
  DOCUMENTATION: "DOCUMENTATION",
  CODE_REVIEW: "CODE_REVIEW",
  OTHER: "OTHER"
};

// src/modules/time-log/time-log.schemas.ts
var createTimeLogSchema = registry.register(
  "CreateTimeLogRequest",
  z.object({
    taskId: z.string().uuid().openapi({
      description: "ID da tarefa relacionada",
      example: "123e4567-e89b-12d3-a456-426614174000"
    }),
    date: z.coerce.date().openapi({
      description: "Data em que o trabalho foi realizado",
      example: "2023-10-10"
    }),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato deve ser HH:MM").openapi({
      description: "Hora de in\xEDcio",
      example: "14:00"
    }),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato deve ser HH:MM").openapi({
      description: "Hora de fim",
      example: "16:30"
    }),
    nature: z.nativeEnum(TimeLogNature).openapi({
      description: "Natureza da atividade",
      example: TimeLogNature.DEV
    }),
    description: z.string().min(10).max(2e3).openapi({
      description: "Relato detalhado do que foi feito",
      example: "Refatora\xE7\xE3o da camada de autentica\xE7\xE3o e ajuste de tipagens no shared."
    })
  })
);
var updateTimeLogSchema = registry.register(
  "UpdateTimeLogRequest",
  createTimeLogSchema.omit({ taskId: true }).partial()
);
var timeLogResponseSchema = registry.register(
  "TimeLogResponse",
  z.object({
    id: z.string().uuid(),
    taskId: z.string().uuid(),
    userId: z.string().uuid(),
    date: z.date(),
    startTime: z.string(),
    endTime: z.string(),
    loggedMinutes: z.number().int().default(0),
    nature: z.nativeEnum(TimeLogNature),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var paginatedTimeLogsResponseSchema = registry.register(
  "PaginatedTimeLogsResponse",
  z.object({
    data: z.array(timeLogResponseSchema),
    meta: z.object({
      totalItems: z.number().int(),
      totalPages: z.number().int(),
      currentPage: z.number().int(),
      itemsPerPage: z.number().int()
    })
  })
);
var toggleTimerResponseSchema = registry.register(
  "ToggleTimerResponse",
  z.object({
    isTimerActive: z.boolean().openapi({
      description: "Indica se o cron\xF4metro passou a rodar (Play) ou pausou (Pause)",
      example: true
    })
  })
);
var pendingTimeResponseSchema = registry.register(
  "PendingTimeResponse",
  z.object({
    totalMinutes: z.number().openapi({
      description: "Total de minutos acumulados nas sess\xF5es abertas",
      example: 120
    }),
    firstStart: z.date().nullable().openapi({
      description: "Data e hora do primeiro Play acionado"
    }),
    lastEnd: z.date().nullable().openapi({
      description: "Data e hora do \xFAltimo Pause acionado (ou data atual se estiver rodando)"
    })
  })
);

// src/modules/service/service.enums.ts
var ServiceStatus = {
  OPERATIONAL: "OPERATIONAL",
  DEGRADED: "DEGRADED",
  PARTIAL_OUTAGE: "PARTIAL_OUTAGE",
  MAJOR_OUTAGE: "MAJOR_OUTAGE",
  MAINTENANCE: "MAINTENANCE"
};

// src/modules/service/service.schemas.ts
var createServiceSchema = registry.register(
  "CreateServiceRequest",
  z.object({
    name: z.string({
      message: "O nome do servi\xE7o \xE9 obrigat\xF3rio."
    }).min(2, { message: "Nome do servi\xE7o muito curto." }).max(100, { message: "Nome do servi\xE7o muito longo." }).trim().openapi({
      description: "Nome de exibi\xE7\xE3o do servi\xE7o",
      example: "API de Pagamentos"
    }),
    slug: z.string({
      message: "O slug \xE9 obrigat\xF3rio."
    }).min(2).max(100).trim().openapi({
      description: "Identificador \xFAnico amig\xE1vel (URL-safe)",
      example: "api-pagamentos"
    }),
    machineSlug: z.string({
      message: "A m\xE1quina (machineSlug) \xE9 obrigat\xF3ria."
    }).trim().openapi({
      description: "Slug da m\xE1quina onde o servi\xE7o est\xE1 hospedado",
      example: "server-prod-01"
    }),
    url: z.string({
      message: "A URL do servi\xE7o \xE9 obrigat\xF3ria."
    }).url({ message: "Deve ser uma URL v\xE1lida." }).trim().openapi({
      description: "URL principal do servi\xE7o para monitoramento/acesso",
      example: "https://api.meusistema.com"
    }),
    status: z.nativeEnum(ServiceStatus).default(ServiceStatus.OPERATIONAL).openapi({
      description: "Status atual de opera\xE7\xE3o do servi\xE7o",
      example: "OPERATIONAL"
    }),
    description: z.string().max(1e3, { message: "Descri\xE7\xE3o muito longa." }).trim().nullable().optional().openapi({
      description: "Descri\xE7\xE3o detalhada do servi\xE7o"
    }),
    groupId: z.string().uuid({ message: "O ID do grupo deve ser um UUID v\xE1lido." }).nullable().optional().openapi({
      description: "UUID do grupo de servi\xE7os ao qual este servi\xE7o pertence"
    }),
    isMonitored: z.boolean().default(false).openapi({
      description: "Indica se o servi\xE7o est\xE1 sendo monitorado",
      example: false
    }),
    isStandalone: z.boolean().default(false).openapi({
      description: "Indica se o servi\xE7o \xE9 independente (standalone)",
      example: false
    })
  })
);
var updateServiceSchema = registry.register(
  "UpdateServiceRequest",
  createServiceSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var serviceResponseSchema = registry.register(
  "ServiceResponse",
  z.object({
    id: z.string().uuid(),
    groupId: z.string().uuid().nullable().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    url: z.string(),
    status: z.nativeEnum(ServiceStatus),
    isStandalone: z.boolean(),
    orderIndex: z.number().int(),
    uptime30d: z.number(),
    avgResponseMs: z.number().int(),
    machineSlug: z.string(),
    isMonitored: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var servicePublicResponseSchema = registry.register(
  "ServicePublicResponse",
  z.object({
    id: z.string().uuid(),
    groupId: z.string().uuid().nullable().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    status: z.nativeEnum(ServiceStatus),
    isStandalone: z.boolean(),
    orderIndex: z.number().int(),
    uptime30d: z.number(),
    avgResponseMs: z.number().int()
  })
);
var serviceIdSchema = z.object({
  id: z.string().uuid({
    message: "O ID do servi\xE7o deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo do servi\xE7o"
  })
});

// src/modules/service-group/service-group.schemas.ts
var createServiceGroupSchema = registry.register(
  "CreateServiceGroupRequest",
  z.object({
    name: z.string({
      error: ({ input }) => input === void 0 ? "O nome do grupo \xE9 obrigat\xF3rio." : "O nome do grupo deve ser um texto."
    }).min(2, { message: "Nome do grupo muito curto." }).max(100, { message: "Nome do grupo muito longo." }).trim().openapi({
      description: "Nome de exibi\xE7\xE3o do grupo",
      example: "Core APIs"
    }),
    slug: z.string({
      error: ({ input }) => input === void 0 ? "O slug \xE9 obrigat\xF3rio." : "O slug deve ser um texto."
    }).min(2).max(100).trim().openapi({
      description: "Identificador \xFAnico amig\xE1vel (URL-safe)",
      example: "core-apis"
    }),
    description: z.string().max(1e3, { message: "Descri\xE7\xE3o muito longa." }).trim().optional().nullable().openapi({
      description: "Descri\xE7\xE3o detalhada do grupo de servi\xE7os"
    }),
    orderIndex: z.number().int().default(0).openapi({
      description: "\xCDndice usado para ordena\xE7\xE3o na interface",
      example: 1
    }),
    icon: z.string().max(100, { message: "\xCDcone muito longo." }).openapi({
      description: "\xCDcone representativo do grupo de servi\xE7os",
      example: "globe"
    })
  })
);
var updateServiceGroupSchema = registry.register(
  "UpdateServiceGroupRequest",
  createServiceGroupSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var serviceGroupResponseSchema = registry.register(
  "ServiceGroupResponse",
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    icon: z.string(),
    orderIndex: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var serviceGroupIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID do grupo deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo do grupo de servi\xE7o"
  })
});

// src/modules/service-port/service-port.enums.ts
var ServicePortProtocol = {
  TCP: "TCP",
  UDP: "UDP",
  HTTP: "HTTP",
  HTTPS: "HTTPS"
};

// src/modules/service-port/service-port.schemas.ts
var createServicePortSchema = registry.register(
  "CreateServicePortRequest",
  z.object({
    serviceId: z.string({ message: "O ID do servi\xE7o \xE9 obrigat\xF3rio." }).uuid({ message: "O ID do servi\xE7o deve ser um UUID v\xE1lido." }).openapi({
      description: "UUID do servi\xE7o dono desta porta"
    }),
    port: z.number({ message: "O n\xFAmero da porta \xE9 obrigat\xF3rio." }).int().min(1).max(65535).openapi({
      description: "N\xFAmero da porta (1 a 65535)",
      example: 443
    }),
    protocol: z.nativeEnum(ServicePortProtocol, {
      message: "O protocolo \xE9 obrigat\xF3rio."
    }).openapi({
      description: "Protocolo de comunica\xE7\xE3o",
      example: "HTTPS"
    }),
    description: z.string().max(255, { message: "Descri\xE7\xE3o muito longa." }).trim().nullable().optional().openapi({
      description: "Descri\xE7\xE3o ou uso da porta",
      example: "Porta principal da API"
    })
  })
);
var updateServicePortSchema = registry.register(
  "UpdateServicePortRequest",
  createServicePortSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var servicePortResponseSchema = registry.register(
  "ServicePortResponse",
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    port: z.number().int(),
    protocol: z.nativeEnum(ServicePortProtocol),
    description: z.string().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var servicePortIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID da porta deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo da porta"
  })
});

// src/modules/machine/machine.schemas.ts
var createMachineSchema = registry.register(
  "CreateMachineRequest",
  z.object({
    name: z.string({
      error: ({ input }) => input === void 0 ? "O nome da m\xE1quina \xE9 obrigat\xF3rio." : "O nome da m\xE1quina deve ser um texto."
    }).min(2, { message: "Nome da m\xE1quina muito curto." }).max(100, { message: "Nome da m\xE1quina muito longo." }).trim().openapi({
      description: "Nome de exibi\xE7\xE3o da m\xE1quina",
      example: "Server Prod 01"
    }),
    slug: z.string({
      error: ({ input }) => input === void 0 ? "O slug \xE9 obrigat\xF3rio." : "O slug deve ser um texto."
    }).min(2).max(100).trim().openapi({
      description: "Identificador \xFAnico amig\xE1vel (URL-safe)",
      example: "server-prod-01"
    }),
    os: z.string().trim().nullable().optional().openapi({ example: "Ubuntu 24.04 LTS" }),
    cpu: z.string().trim().nullable().optional().openapi({ example: "Intel Core i7-12700H" }),
    ramTotal: z.string().trim().nullable().optional().openapi({ example: "32 GB DDR5" }),
    localIp: z.string().trim().nullable().optional().openapi({ example: "192.168.0.10" }),
    publicIp: z.string().trim().nullable().optional().openapi({ example: "200.181.10.15" }),
    description: z.string().max(1e3, { message: "Descri\xE7\xE3o muito longa." }).trim().nullable().optional().openapi({
      description: "Descri\xE7\xE3o detalhada ou anota\xE7\xF5es sobre a m\xE1quina"
    }),
    online: z.boolean().default(false).openapi({
      description: "Status atual da m\xE1quina (Online/Offline)",
      example: true
    })
  })
);
var updateMachineSchema = registry.register(
  "UpdateMachineRequest",
  createMachineSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var machineResponseSchema = registry.register(
  "MachineResponse",
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    os: z.string().nullable(),
    cpu: z.string().nullable(),
    ramTotal: z.string().nullable(),
    localIp: z.string().nullable(),
    publicIp: z.string().nullable(),
    description: z.string().nullable(),
    online: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var machineIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID da m\xE1quina deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo da m\xE1quina"
  })
});

// src/modules/maintenance/maintenance.enums.ts
var MaintenanceStatus = {
  SCHEDULED: "SCHEDULED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELED: "CANCELED"
};

// src/modules/maintenance/maintenance.schemas.ts
var createMaintenanceSchema = registry.register(
  "CreateMaintenanceRequest",
  z.object({
    title: z.string({
      error: ({ input }) => input === void 0 ? "O t\xEDtulo da manuten\xE7\xE3o \xE9 obrigat\xF3rio." : "O t\xEDtulo deve ser um texto."
    }).min(3, { message: "T\xEDtulo muito curto." }).max(150, { message: "T\xEDtulo muito longo." }).trim().openapi({
      description: "T\xEDtulo ou resumo da manuten\xE7\xE3o",
      example: "Atualiza\xE7\xE3o do banco de dados principal"
    }),
    description: z.string().max(2e3, { message: "Descri\xE7\xE3o muito longa." }).trim().nullable().optional().openapi({
      description: "Detalhes da janela de manuten\xE7\xE3o"
    }),
    serviceId: z.string().uuid({ message: "O ID do servi\xE7o deve ser um UUID v\xE1lido." }).nullable().optional().openapi({
      description: "UUID do servi\xE7o afetado. Nulo representa manuten\xE7\xE3o global."
    }),
    status: z.nativeEnum(MaintenanceStatus).default(MaintenanceStatus.SCHEDULED).openapi({
      description: "Status atual da manuten\xE7\xE3o",
      example: "SCHEDULED"
    }),
    scheduledStart: z.coerce.date({
      message: "A data/hora de in\xEDcio programada \xE9 obrigat\xF3ria."
    }).openapi({
      description: "In\xEDcio programado da manuten\xE7\xE3o"
    }),
    scheduledEnd: z.coerce.date({
      message: "A data/hora de t\xE9rmino programada \xE9 obrigat\xF3ria."
    }).openapi({
      description: "Fim programado da manuten\xE7\xE3o"
    }),
    actualEnd: z.coerce.date().nullable().optional().openapi({
      description: "T\xE9rmino real da manuten\xE7\xE3o (preenchido ao concluir)"
    })
  })
);
var updateMaintenanceSchema = registry.register(
  "UpdateMaintenanceRequest",
  createMaintenanceSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var maintenanceResponseSchema = registry.register(
  "MaintenanceResponse",
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string().nullable(),
    serviceId: z.string().uuid().nullable(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduledStart: z.date(),
    scheduledEnd: z.date(),
    actualEnd: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var maintenancePublicResponseSchema = registry.register(
  "MaintenancePublicResponse",
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid().nullable().optional(),
    title: z.string(),
    description: z.string().nullable().optional(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduledStart: z.date(),
    scheduledEnd: z.date(),
    // actualEnd: z.date().nullable().optional(),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    service: z.object({
      name: z.string(),
      slug: z.string()
    }).nullable().optional()
  })
);
var maintenanceIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID da manuten\xE7\xE3o deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo da manuten\xE7\xE3o"
  })
});

// src/modules/incident/incident.enums.ts
var IncidentStatus = {
  INVESTIGATING: "INVESTIGATING",
  IDENTIFIED: "IDENTIFIED",
  MONITORING: "MONITORING",
  RESOLVED: "RESOLVED"
};
var IncidentSeverity = {
  DEGRADED: "DEGRADED",
  PARTIAL_OUTAGE: "PARTIAL_OUTAGE",
  MAJOR_OUTAGE: "MAJOR_OUTAGE"
};

// src/modules/incident/incident.schemas.ts
var createIncidentSchema = registry.register(
  "CreateIncidentRequest",
  z.object({
    title: z.string({
      error: ({ input }) => input === void 0 ? "O t\xEDtulo do incidente \xE9 obrigat\xF3rio." : "O t\xEDtulo deve ser um texto."
    }).min(3, { message: "T\xEDtulo muito curto." }).max(150, { message: "T\xEDtulo muito longo." }).trim().openapi({
      description: "T\xEDtulo curto descrevendo o problema",
      example: "Falha de comunica\xE7\xE3o com o Gateway de Pagamento"
    }),
    incidentRef: z.string().trim().nullable().optional().openapi({
      description: "C\xF3digo de refer\xEAncia externa (ex: INC-2026-0013)"
    }),
    serviceId: z.string().uuid({ message: "O ID do servi\xE7o deve ser um UUID v\xE1lido." }).nullable().optional().openapi({
      description: "UUID do servi\xE7o afetado. Se nulo, afeta a infraestrutura global."
    }),
    severity: z.nativeEnum(IncidentSeverity).openapi({
      description: "N\xEDvel de impacto do incidente",
      example: IncidentSeverity.MAJOR_OUTAGE
    }),
    status: z.nativeEnum(IncidentStatus).default(IncidentStatus.INVESTIGATING).openapi({
      description: "Fase atual de tratamento do incidente",
      example: IncidentStatus.INVESTIGATING
    }),
    startedAt: z.coerce.date().optional().openapi({
      description: "Data e hora exata em que o incidente come\xE7ou"
    }),
    resolvedAt: z.coerce.date().nullable().optional().openapi({
      description: "Data e hora em que o incidente foi resolvido"
    }),
    durationMinutes: z.number().int().nullable().optional().openapi({
      description: "Dura\xE7\xE3o total do incidente em minutos"
    })
  })
);
var updateIncidentSchema = registry.register(
  "UpdateIncidentRequest",
  createIncidentSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var incidentResponseSchema = registry.register(
  "IncidentResponse",
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    incidentRef: z.string().nullable(),
    serviceId: z.string().uuid().nullable(),
    severity: z.nativeEnum(IncidentSeverity),
    status: z.nativeEnum(IncidentStatus),
    startedAt: z.date(),
    resolvedAt: z.date().nullable(),
    durationMinutes: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var incidentPublicResponseSchema = registry.register(
  "IncidentPublicResponse",
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid().nullable().optional(),
    title: z.string(),
    status: z.nativeEnum(IncidentStatus),
    severity: z.nativeEnum(IncidentSeverity),
    startedAt: z.date(),
    resolvedAt: z.date().nullable().optional(),
    durationMinutes: z.number().int().nullable().optional(),
    incidentRef: z.string().nullable(),
    service: z.object({
      name: z.string(),
      slug: z.string()
    }).nullable().optional()
  })
);
var incidentIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID do incidente deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo do incidente"
  })
});

// src/modules/incident-update/incident-update.schemas.ts
var createIncidentUpdateSchema = registry.register(
  "CreateIncidentUpdateRequest",
  z.object({
    incidentId: z.string({
      error: ({ input }) => input === void 0 ? "O ID do incidente \xE9 obrigat\xF3rio." : "O ID deve ser um UUID v\xE1lido."
    }).uuid({ message: "O ID do incidente deve ser um UUID v\xE1lido." }).openapi({
      description: "UUID do incidente ao qual esta atualiza\xE7\xE3o pertence"
    }),
    message: z.string({
      error: ({ input }) => input === void 0 ? "A mensagem da atualiza\xE7\xE3o \xE9 obrigat\xF3ria." : "A mensagem deve ser um texto."
    }).min(3, { message: "Mensagem muito curta." }).max(2e3, { message: "Mensagem muito longa." }).trim().openapi({
      description: "Texto descrevendo a atualiza\xE7\xE3o do incidente",
      example: "Identificamos a causa raiz no banco de dados e estamos aplicando o fix."
    }),
    status: z.nativeEnum(IncidentStatus).openapi({
      description: "Status do incidente no momento desta atualiza\xE7\xE3o",
      example: "IDENTIFIED"
    }),
    createdAt: z.coerce.date().optional().openapi({
      description: "Data customizada da atualiza\xE7\xE3o (se omitida, usar\xE1 o default do banco)"
    })
  })
);
var updateIncidentUpdateSchema = registry.register(
  "UpdateIncidentUpdateRequest",
  createIncidentUpdateSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var incidentUpdateResponseSchema = registry.register(
  "IncidentUpdateResponse",
  z.object({
    id: z.string().uuid(),
    incidentId: z.string().uuid(),
    message: z.string(),
    status: z.nativeEnum(IncidentStatus),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var incidentUpdateIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID da atualiza\xE7\xE3o deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo da atualiza\xE7\xE3o do incidente"
  })
});

// src/modules/daily-metric/daily-metric.schemas.ts
var createDailyMetricSchema = registry.register(
  "CreateDailyMetricRequest",
  z.object({
    serviceId: z.string({ message: "O ID do servi\xE7o \xE9 obrigat\xF3rio." }).uuid({ message: "O ID do servi\xE7o deve ser um UUID v\xE1lido." }).openapi({
      description: "UUID do servi\xE7o ao qual a m\xE9trica pertence"
    }),
    date: z.coerce.date({
      message: "A data da m\xE9trica \xE9 obrigat\xF3ria."
    }).openapi({
      description: "Data de refer\xEAncia para as m\xE9tricas",
      example: "2026-07-28"
    }),
    uptimePercent: z.number({ message: "O percentual de uptime \xE9 obrigat\xF3rio." }).min(0).max(100).openapi({
      description: "Percentual de disponibilidade no dia (0 a 100)",
      example: 99.9
    }),
    incidentCount: z.number().int().min(0).default(0).openapi({
      description: "N\xFAmero de incidentes registrados no dia",
      example: 0
    }),
    downtimeMinutes: z.number().int().min(0).default(0).openapi({
      description: "Tempo total de indisponibilidade em minutos",
      example: 5
    }),
    avgResponseMs: z.number({ message: "O tempo m\xE9dio de resposta \xE9 obrigat\xF3rio." }).int().min(0).openapi({
      description: "Tempo m\xE9dio de resposta em milissegundos",
      example: 120
    })
  })
);
var updateDailyMetricSchema = registry.register(
  "UpdateDailyMetricRequest",
  createDailyMetricSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualiza\xE7\xE3o."
  })
);
var dailyMetricResponseSchema = registry.register(
  "DailyMetricResponse",
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    date: z.date(),
    uptimePercent: z.number(),
    incidentCount: z.number().int(),
    downtimeMinutes: z.number().int(),
    avgResponseMs: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
);
var dailyMetricIdSchema = z.object({
  id: z.string().uuid({
    error: ({ input }) => input === void 0 ? "O ID \xE9 obrigat\xF3rio." : "O ID da m\xE9trica deve ser um UUID v\xE1lido."
  }).openapi({
    param: {
      name: "id",
      in: "path"
    },
    description: "UUID Identificador exclusivo da m\xE9trica"
  })
});

// src/modules/monitor/monitor.schemas.ts
var monitorResultSchema = registry.register(
  "MonitorResult",
  z.object({
    serviceId: z.string().uuid({ message: "O ID do servi\xE7o deve ser um UUID v\xE1lido." }).openapi({ description: "ID do servi\xE7o testado" }),
    status: z.enum(ServiceStatus).openapi({ description: "Status retornado pelo ping" }),
    latency: z.number().min(0).openapi({ description: "Lat\xEAncia em milissegundos" })
  })
);
var processResultsSchema = registry.register(
  "ProcessResultsRequest",
  z.object({
    results: z.array(monitorResultSchema).min(1, {
      message: "A lista de resultados n\xE3o pode estar vazia."
    })
  })
);
var monitorTargetSchema = registry.register(
  "MonitorTarget",
  z.object({
    id: z.string().uuid(),
    url: z.string().url()
  })
);
var monitorTargetsResponseSchema = registry.register(
  "MonitorTargetsResponse",
  z.object({
    data: z.array(monitorTargetSchema)
  })
);

// src/common/common.schemas.ts
var rfc7807ErrorSchema = registry.register(
  "ProblemDetails",
  z.object({
    type: z.string().url().optional().openapi({
      description: "URI que identifica o tipo do erro",
      example: "https://api.dorneles.dev/errors/validation-error"
    }),
    title: z.string().openapi({
      description: "Um resumo curto e leg\xEDvel para humanos do problema",
      example: "Erro de valida\xE7\xE3o nos dados enviados."
    }),
    status: z.number().openapi({
      description: "O c\xF3digo de status HTTP correspondente",
      example: 400
    }),
    detail: z.string().optional().openapi({
      description: "Uma explica\xE7\xE3o espec\xEDfica para esta ocorr\xEAncia do problema",
      example: "O campo email n\xE3o possui um formato v\xE1lido."
    }),
    instance: z.string().optional().openapi({
      description: "URI que identifica a ocorr\xEAncia espec\xEDfica deste problema",
      example: "/tasks/123e4567-e89b-12d3-a456-426614174000"
    }),
    errors: z.record(z.string(), z.array(z.string())).optional().openapi({
      description: "Detalhes de valida\xE7\xE3o campo a campo (opcional)",
      example: {
        dueDate: ["A data de vencimento deve estar no futuro."]
      }
    })
  })
);
var paginationMetaSchema = registry.register(
  "PaginationMeta",
  z.object({
    totalItems: z.number().openapi({ example: 150 }),
    totalPages: z.number().openapi({ example: 15 }),
    currentPage: z.number().openapi({ example: 1 }),
    itemsPerPage: z.number().openapi({ example: 10 })
  })
);
var paginationSchema = registry.register(
  "PaginationQuery",
  z.object({
    page: z.coerce.number({ message: "A p\xE1gina deve ser um n\xFAmero." }).int("A p\xE1gina deve ser um n\xFAmero inteiro.").min(1, "A p\xE1gina deve ser no m\xEDnimo 1.").optional().default(1),
    limit: z.coerce.number({ message: "O limite deve ser um n\xFAmero." }).int("O limite deve ser um n\xFAmero inteiro.").min(1, "O limite deve ser no m\xEDnimo 1.").optional().default(10)
  })
);
function createPaginatedResponseSchema(schema, schemaName) {
  return registry.register(
    schemaName,
    z.object({
      data: z.array(schema),
      meta: paginationMetaSchema
    })
  );
}

// src/utils/date-time.ts
function timeStringToMinutes(timeString) {
  const timeRegex = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]$/;
  if (!timeRegex.test(timeString)) return null;
  const [hours, minutes] = timeString.split(":").map(Number);
  return (hours ? hours * 60 : 0) + (minutes ? minutes : 0);
}
function minutesToDecimalHours(minutes) {
  if (minutes < 0) return 0;
  return Math.round(minutes / 60 * 100) / 100;
}
function formatMinutesToReadable(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m > 0 ? `${m}m` : ""}` : `${m}m`;
}
export {
  AuthEnums,
  IncidentSeverity,
  IncidentStatus,
  MaintenanceStatus,
  OpenApiGeneratorV3,
  ProjectPriority,
  ProjectStatus,
  ServicePortProtocol,
  ServiceStatus,
  TaskPriority,
  TaskStatus,
  TimeLogNature,
  createDailyMetricSchema,
  createIncidentSchema,
  createIncidentUpdateSchema,
  createMachineSchema,
  createMaintenanceSchema,
  createPaginatedResponseSchema,
  createProjectSchema,
  createServiceGroupSchema,
  createServicePortSchema,
  createServiceSchema,
  createTaskSchema,
  createTimeLogSchema,
  createUserSchema,
  dailyMetricIdSchema,
  dailyMetricResponseSchema,
  formatMinutesToReadable,
  incidentIdSchema,
  incidentPublicResponseSchema,
  incidentResponseSchema,
  incidentUpdateIdSchema,
  incidentUpdateResponseSchema,
  loginSchema,
  machineIdSchema,
  machineResponseSchema,
  maintenanceIdSchema,
  maintenancePublicResponseSchema,
  maintenanceResponseSchema,
  minutesToDecimalHours,
  monitorResultSchema,
  monitorTargetSchema,
  monitorTargetsResponseSchema,
  paginatedTimeLogsResponseSchema,
  paginationMetaSchema,
  paginationSchema,
  pendingTimeResponseSchema,
  processResultsSchema,
  projectIdSchema,
  projectResponseSchema,
  refreshTokenSchema,
  registry,
  rfc7807ErrorSchema,
  serviceGroupIdSchema,
  serviceGroupResponseSchema,
  serviceIdSchema,
  servicePortIdSchema,
  servicePortResponseSchema,
  servicePublicResponseSchema,
  serviceResponseSchema,
  taskIdSchema,
  taskResponseSchema,
  timeLogResponseSchema,
  timeStringToMinutes,
  toggleTimerResponseSchema,
  updateDailyMetricSchema,
  updateIncidentSchema,
  updateIncidentUpdateSchema,
  updateMachineSchema,
  updateMaintenanceSchema,
  updateProjectSchema,
  updateServiceGroupSchema,
  updateServicePortSchema,
  updateServiceSchema,
  updateTaskSchema,
  updateTimeLogSchema,
  updateUserSchema,
  userIdSchema,
  userResponseSchema,
  z
};
