import { z } from 'zod';
export { z } from 'zod';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
export { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';

declare const registry: OpenAPIRegistry;

declare const loginSchema: z.ZodObject<{
    email: z.ZodPipe<z.ZodEmail, z.ZodTransform<string, string>>;
    password: z.ZodString;
}, z.core.$strip>;
declare const refreshTokenSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;

/**
 * Enums global object, exports all domains used within the system.
 */
declare const AuthEnums: {
    LoginStatus: {
        readonly Pending: "PENDING";
        readonly Authenticated: "AUTHENTICATED";
        readonly Unauthenticated: "UNAUTHENTICATED";
    };
};
type EnumLoginStatus = (typeof AuthEnums.LoginStatus)[keyof typeof AuthEnums.LoginStatus];

interface TokenPayloadDTO {
    sub: string;
}
type LoginAuthDTO = z.infer<typeof loginSchema>;

declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodPipe<z.ZodEmail, z.ZodTransform<string, string>>;
    password: z.ZodString;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodPipe<z.ZodEmail, z.ZodTransform<string, string>>>;
    password: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const userResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    isActive: z.ZodBoolean;
    createdAt: z.ZodCoercedDate<unknown>;
    updatedAt: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
declare const userIdSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;

declare const rfc7807ErrorSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    status: z.ZodNumber;
    detail: z.ZodOptional<z.ZodString>;
    instance: z.ZodOptional<z.ZodString>;
    errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
declare const paginationMetaSchema: z.ZodObject<{
    totalItems: z.ZodNumber;
    totalPages: z.ZodNumber;
    currentPage: z.ZodNumber;
    itemsPerPage: z.ZodNumber;
}, z.core.$strip>;
declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
declare function createPaginatedResponseSchema(schema: z.ZodTypeAny, schemaName: string): z.ZodObject<{
    data: z.ZodArray<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
    meta: z.ZodObject<{
        totalItems: z.ZodNumber;
        totalPages: z.ZodNumber;
        currentPage: z.ZodNumber;
        itemsPerPage: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;

type ProblemDetailsDTO = z.infer<typeof rfc7807ErrorSchema>;
type PaginationMetaDTO = z.infer<typeof paginationMetaSchema>;
type PaginationQueryDTO = z.infer<typeof paginationSchema>;
interface PaginatedResultDTO<T> {
    data: T[];
    meta: PaginationMetaDTO;
}

type CreateUserDTO = z.infer<typeof createUserSchema>;
type UpdateUserDTO = z.infer<typeof updateUserSchema>;
type UserIdDTO = z.infer<typeof userIdSchema>;
type UserResponseDTO = z.infer<typeof userResponseSchema>;
type PaginatedUsersDTO = PaginatedResultDTO<UserResponseDTO>;

declare const createTaskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
    priority: z.ZodDefault<z.ZodEnum<{
        readonly Low: "LOW";
        readonly Medium: "MEDIUM";
        readonly High: "HIGH";
        readonly Urgent: "URGENT";
    }>>;
    dueDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
declare const updateTaskSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    projectId: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly Low: "LOW";
        readonly Medium: "MEDIUM";
        readonly High: "HIGH";
        readonly Urgent: "URGENT";
    }>>>;
    dueDate: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    totalMinutes: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<{
        readonly Backlog: "BACKLOG";
        readonly Pending: "PENDING";
        readonly InProgress: "IN_PROGRESS";
        readonly InReview: "IN_REVIEW";
        readonly Completed: "COMPLETED";
        readonly Archived: "ARCHIVED";
    }>>;
}, z.core.$strip>;
declare const taskResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    projectId: z.ZodString;
    status: z.ZodEnum<{
        readonly Backlog: "BACKLOG";
        readonly Pending: "PENDING";
        readonly InProgress: "IN_PROGRESS";
        readonly InReview: "IN_REVIEW";
        readonly Completed: "COMPLETED";
        readonly Archived: "ARCHIVED";
    }>;
    priority: z.ZodEnum<{
        readonly Low: "LOW";
        readonly Medium: "MEDIUM";
        readonly High: "HIGH";
        readonly Urgent: "URGENT";
    }>;
    dueDate: z.ZodNullable<z.ZodDate>;
    totalMinutes: z.ZodDefault<z.ZodNumber>;
    isTimerActive: z.ZodBoolean;
    hasPendingSessions: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const taskIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare const TaskStatus: {
    readonly Backlog: "BACKLOG";
    readonly Pending: "PENDING";
    readonly InProgress: "IN_PROGRESS";
    readonly InReview: "IN_REVIEW";
    readonly Completed: "COMPLETED";
    readonly Archived: "ARCHIVED";
};
type EnumTaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
declare const TaskPriority: {
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
    readonly High: "HIGH";
    readonly Urgent: "URGENT";
};
type EnumTaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];

type CreateTaskDTO = z.infer<typeof createTaskSchema>;
type UpdateTaskDTO = z.infer<typeof updateTaskSchema>;
type TaskResponseDTO = z.infer<typeof taskResponseSchema>;
type TaskIdDTO = z.infer<typeof taskIdSchema>;
type PaginatedTasksDTO = PaginatedResultDTO<TaskResponseDTO>;

declare const createProjectSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
declare const updateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const projectResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly Draft: "DRAFT";
        readonly Active: "ACTIVE";
        readonly OnHold: "ON_HOLD";
        readonly Completed: "COMPLETED";
        readonly Canceled: "CANCELLED";
    }>;
    priority: z.ZodEnum<{
        readonly Low: "LOW";
        readonly Medium: "MEDIUM";
        readonly High: "HIGH";
        readonly Critical: "CRITICAL";
    }>;
    startDate: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const projectIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare const ProjectStatus: {
    readonly Draft: "DRAFT";
    readonly Active: "ACTIVE";
    readonly OnHold: "ON_HOLD";
    readonly Completed: "COMPLETED";
    readonly Canceled: "CANCELLED";
};
type EnumProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
declare const ProjectPriority: {
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
    readonly High: "HIGH";
    readonly Critical: "CRITICAL";
};
type EnumProjectPriority = (typeof ProjectPriority)[keyof typeof ProjectPriority];

type CreateProjectDTO = z.infer<typeof createProjectSchema>;
type UpdateProjectDTO = z.infer<typeof updateProjectSchema>;
type ProjectResponseDTO = z.infer<typeof projectResponseSchema>;
type ProjectIdDTO = z.infer<typeof projectIdSchema>;
type PaginatedProjectsDTO = PaginatedResultDTO<ProjectResponseDTO>;

declare const createTimeLogSchema: z.ZodObject<{
    taskId: z.ZodString;
    date: z.ZodCoercedDate<unknown>;
    startTime: z.ZodString;
    endTime: z.ZodString;
    nature: z.ZodEnum<{
        readonly DEV: "DEV";
        readonly MEETING: "MEETING";
        readonly TESTING: "TESTING";
        readonly DOCUMENTATION: "DOCUMENTATION";
        readonly CODE_REVIEW: "CODE_REVIEW";
        readonly OTHER: "OTHER";
    }>;
    description: z.ZodString;
}, z.core.$strip>;
declare const updateTimeLogSchema: z.ZodObject<{
    date: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    description: z.ZodOptional<z.ZodString>;
    startTime: z.ZodOptional<z.ZodString>;
    endTime: z.ZodOptional<z.ZodString>;
    nature: z.ZodOptional<z.ZodEnum<{
        readonly DEV: "DEV";
        readonly MEETING: "MEETING";
        readonly TESTING: "TESTING";
        readonly DOCUMENTATION: "DOCUMENTATION";
        readonly CODE_REVIEW: "CODE_REVIEW";
        readonly OTHER: "OTHER";
    }>>;
}, z.core.$strip>;
declare const timeLogResponseSchema: z.ZodObject<{
    id: z.ZodString;
    taskId: z.ZodString;
    userId: z.ZodString;
    date: z.ZodDate;
    startTime: z.ZodString;
    endTime: z.ZodString;
    loggedMinutes: z.ZodDefault<z.ZodNumber>;
    nature: z.ZodEnum<{
        readonly DEV: "DEV";
        readonly MEETING: "MEETING";
        readonly TESTING: "TESTING";
        readonly DOCUMENTATION: "DOCUMENTATION";
        readonly CODE_REVIEW: "CODE_REVIEW";
        readonly OTHER: "OTHER";
    }>;
    description: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const paginatedTimeLogsResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        taskId: z.ZodString;
        userId: z.ZodString;
        date: z.ZodDate;
        startTime: z.ZodString;
        endTime: z.ZodString;
        loggedMinutes: z.ZodDefault<z.ZodNumber>;
        nature: z.ZodEnum<{
            readonly DEV: "DEV";
            readonly MEETING: "MEETING";
            readonly TESTING: "TESTING";
            readonly DOCUMENTATION: "DOCUMENTATION";
            readonly CODE_REVIEW: "CODE_REVIEW";
            readonly OTHER: "OTHER";
        }>;
        description: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, z.core.$strip>>;
    meta: z.ZodObject<{
        totalItems: z.ZodNumber;
        totalPages: z.ZodNumber;
        currentPage: z.ZodNumber;
        itemsPerPage: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const toggleTimerResponseSchema: z.ZodObject<{
    isTimerActive: z.ZodBoolean;
}, z.core.$strip>;
declare const pendingTimeResponseSchema: z.ZodObject<{
    totalMinutes: z.ZodNumber;
    firstStart: z.ZodNullable<z.ZodDate>;
    lastEnd: z.ZodNullable<z.ZodDate>;
}, z.core.$strip>;

declare const TimeLogNature: {
    readonly DEV: "DEV";
    readonly MEETING: "MEETING";
    readonly TESTING: "TESTING";
    readonly DOCUMENTATION: "DOCUMENTATION";
    readonly CODE_REVIEW: "CODE_REVIEW";
    readonly OTHER: "OTHER";
};
type EnumTimeLogNature = (typeof TimeLogNature)[keyof typeof TimeLogNature];

type CreateTimeLogDTO = z.infer<typeof createTimeLogSchema>;
type TimeLogResponseDTO = z.infer<typeof timeLogResponseSchema>;
type UpdateTimeLogDTO = z.infer<typeof updateTimeLogSchema>;
type PaginatedTimeLogsDTO = z.infer<typeof paginatedTimeLogsResponseSchema>;

declare const createServiceSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    machineSlug: z.ZodString;
    url: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    groupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isMonitored: z.ZodDefault<z.ZodBoolean>;
    isStandalone: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
declare const updateServiceSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    machineSlug: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    groupId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isMonitored: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    isStandalone: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
declare const serviceResponseSchema: z.ZodObject<{
    id: z.ZodString;
    groupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>;
    isStandalone: z.ZodBoolean;
    orderIndex: z.ZodNumber;
    uptime30d: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
    machineSlug: z.ZodString;
    isMonitored: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const servicePublicResponseSchema: z.ZodObject<{
    id: z.ZodString;
    groupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>;
    isStandalone: z.ZodBoolean;
    orderIndex: z.ZodNumber;
    uptime30d: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
}, z.core.$strip>;
declare const serviceIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare const ServiceStatus: {
    readonly OPERATIONAL: "OPERATIONAL";
    readonly DEGRADED: "DEGRADED";
    readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
    readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    readonly MAINTENANCE: "MAINTENANCE";
};
type EnumServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

type CreateServiceDTO = z.infer<typeof createServiceSchema>;
type UpdateServiceDTO = z.infer<typeof updateServiceSchema>;
type ServiceResponseDTO = z.infer<typeof serviceResponseSchema>;
type ServicePublicResponseDTO = z.infer<typeof servicePublicResponseSchema>;
type ServiceIdDTO = z.infer<typeof serviceIdSchema>;

declare const createServiceGroupSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    orderIndex: z.ZodDefault<z.ZodNumber>;
    icon: z.ZodString;
}, z.core.$strip>;
declare const updateServiceGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    orderIndex: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const serviceGroupResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    icon: z.ZodString;
    orderIndex: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const serviceGroupIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

type CreateServiceGroupDTO = z.infer<typeof createServiceGroupSchema>;
type UpdateServiceGroupDTO = z.infer<typeof updateServiceGroupSchema>;
type ServiceGroupResponseDTO = z.infer<typeof serviceGroupResponseSchema>;
type ServiceGroupIdDTO = z.infer<typeof serviceGroupIdSchema>;
type PaginatedServiceGroupsDTO = PaginatedResultDTO<ServiceGroupResponseDTO>;

declare const createServicePortSchema: z.ZodObject<{
    serviceId: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
declare const updateServicePortSchema: z.ZodObject<{
    serviceId: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    protocol: z.ZodOptional<z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.core.$strip>;
declare const servicePortResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const servicePortIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

type CreateServicePortDTO = z.infer<typeof createServicePortSchema>;
type UpdateServicePortDTO = z.infer<typeof updateServicePortSchema>;
type ServicePortResponseDTO = z.infer<typeof servicePortResponseSchema>;
type ServicePortIdDTO = z.infer<typeof servicePortIdSchema>;
type PaginatedServicePortsDTO = PaginatedResultDTO<ServicePortResponseDTO>;

declare const ServicePortProtocol: {
    readonly TCP: "TCP";
    readonly UDP: "UDP";
    readonly HTTP: "HTTP";
    readonly HTTPS: "HTTPS";
};
type EnumServicePortProtocol = (typeof ServicePortProtocol)[keyof typeof ServicePortProtocol];

declare const createMachineSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cpu: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ramTotal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    online: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
declare const updateMachineSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    os: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cpu: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    ramTotal: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    localIp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    publicIp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    online: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
declare const machineResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodNullable<z.ZodString>;
    cpu: z.ZodNullable<z.ZodString>;
    ramTotal: z.ZodNullable<z.ZodString>;
    localIp: z.ZodNullable<z.ZodString>;
    publicIp: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    online: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const machineIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

type CreateMachineDTO = z.infer<typeof createMachineSchema>;
type UpdateMachineDTO = z.infer<typeof updateMachineSchema>;
type MachineResponseDTO = z.infer<typeof machineResponseSchema>;
type MachineIdDTO = z.infer<typeof machineIdSchema>;
type PaginatedMachinesDTO = PaginatedResultDTO<MachineResponseDTO>;

declare const createMaintenanceSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>;
    scheduledStart: z.ZodCoercedDate<unknown>;
    scheduledEnd: z.ZodCoercedDate<unknown>;
    actualEnd: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
declare const updateMaintenanceSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>>;
    scheduledStart: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    scheduledEnd: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    actualEnd: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
}, z.core.$strip>;
declare const maintenanceResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    serviceId: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduledStart: z.ZodDate;
    scheduledEnd: z.ZodDate;
    actualEnd: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const maintenancePublicResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduledStart: z.ZodDate;
    scheduledEnd: z.ZodDate;
    service: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        slug: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const maintenanceIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare const MaintenanceStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
};
type EnumMaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

type CreateMaintenanceDTO = z.infer<typeof createMaintenanceSchema>;
type UpdateMaintenanceDTO = z.infer<typeof updateMaintenanceSchema>;
type MaintenanceResponseDTO = z.infer<typeof maintenanceResponseSchema>;
type MaintenancePublicResponseDTO = z.infer<typeof maintenancePublicResponseSchema>;
type MaintenanceIdDTO = z.infer<typeof maintenanceIdSchema>;
type PaginatedMaintenancesDTO = PaginatedResultDTO<MaintenanceResponseDTO>;

declare const createIncidentSchema: z.ZodObject<{
    title: z.ZodString;
    incidentRef: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    status: z.ZodDefault<z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>>;
    startedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    resolvedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
declare const updateIncidentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    incidentRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    severity: z.ZodOptional<z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>>>;
    startedAt: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    resolvedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
    durationMinutes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
declare const incidentResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    incidentRef: z.ZodNullable<z.ZodString>;
    serviceId: z.ZodNullable<z.ZodString>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    startedAt: z.ZodDate;
    resolvedAt: z.ZodNullable<z.ZodDate>;
    durationMinutes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const incidentPublicResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    startedAt: z.ZodDate;
    resolvedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    incidentRef: z.ZodNullable<z.ZodString>;
    service: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        slug: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const incidentIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

declare const IncidentStatus: {
    readonly INVESTIGATING: "INVESTIGATING";
    readonly IDENTIFIED: "IDENTIFIED";
    readonly MONITORING: "MONITORING";
    readonly RESOLVED: "RESOLVED";
};
type EnumIncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];
declare const IncidentSeverity: {
    readonly DEGRADED: "DEGRADED";
    readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
    readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
};
type EnumIncidentSeverity = (typeof IncidentSeverity)[keyof typeof IncidentSeverity];

type CreateIncidentDTO = z.infer<typeof createIncidentSchema>;
type UpdateIncidentDTO = z.infer<typeof updateIncidentSchema>;
type IncidentResponseDTO = z.infer<typeof incidentResponseSchema>;
type IncidentPublicResponseDTO = z.infer<typeof incidentPublicResponseSchema>;
type IncidentIdDTO = z.infer<typeof incidentIdSchema>;
type PaginatedIncidentsDTO = PaginatedResultDTO<IncidentResponseDTO>;

declare const createIncidentUpdateSchema: z.ZodObject<{
    incidentId: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
declare const updateIncidentUpdateSchema: z.ZodObject<{
    incidentId: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>>;
    createdAt: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
declare const incidentUpdateResponseSchema: z.ZodObject<{
    id: z.ZodString;
    incidentId: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const incidentUpdateIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

type CreateIncidentUpdateDTO = z.infer<typeof createIncidentUpdateSchema>;
type UpdateIncidentUpdateDTO = z.infer<typeof updateIncidentUpdateSchema>;
type IncidentUpdateResponseDTO = z.infer<typeof incidentUpdateResponseSchema>;
type IncidentUpdateIdDTO = z.infer<typeof incidentUpdateIdSchema>;
type PaginatedIncidentUpdatesDTO = PaginatedResultDTO<IncidentUpdateResponseDTO>;

declare const createDailyMetricSchema: z.ZodObject<{
    serviceId: z.ZodString;
    date: z.ZodCoercedDate<unknown>;
    uptimePercent: z.ZodNumber;
    incidentCount: z.ZodDefault<z.ZodNumber>;
    downtimeMinutes: z.ZodDefault<z.ZodNumber>;
    avgResponseMs: z.ZodNumber;
}, z.core.$strip>;
declare const updateDailyMetricSchema: z.ZodObject<{
    serviceId: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    uptimePercent: z.ZodOptional<z.ZodNumber>;
    incidentCount: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    downtimeMinutes: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    avgResponseMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
declare const dailyMetricResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    date: z.ZodDate;
    uptimePercent: z.ZodNumber;
    incidentCount: z.ZodNumber;
    downtimeMinutes: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const dailyMetricIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;

type CreateDailyMetricDTO = z.infer<typeof createDailyMetricSchema>;
type UpdateDailyMetricDTO = z.infer<typeof updateDailyMetricSchema>;
type DailyMetricResponseDTO = z.infer<typeof dailyMetricResponseSchema>;
type DailyMetricIdDTO = z.infer<typeof dailyMetricIdSchema>;
type PaginatedDailyMetricsDTO = PaginatedResultDTO<DailyMetricResponseDTO>;

declare const monitorResultSchema: z.ZodObject<{
    serviceId: z.ZodString;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>;
    latency: z.ZodNumber;
}, z.core.$strip>;
declare const processResultsSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        serviceId: z.ZodString;
        status: z.ZodEnum<{
            readonly OPERATIONAL: "OPERATIONAL";
            readonly DEGRADED: "DEGRADED";
            readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
            readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
            readonly MAINTENANCE: "MAINTENANCE";
        }>;
        latency: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const monitorTargetSchema: z.ZodObject<{
    id: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
declare const monitorTargetsResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;

type MonitorResultDTO = z.infer<typeof monitorResultSchema>;
type ProcessResultsDTO = z.infer<typeof processResultsSchema>;
type MonitorTargetDTO = z.infer<typeof monitorTargetSchema>;

/**
 * Converte string "HH:mm" em minutos totais desde a meia-noite.
 */
declare function timeStringToMinutes(timeString: string): number | null;
/**
 * Converte minutos totais para decimal (ex: 90min -> 1.5).
 */
declare function minutesToDecimalHours(minutes: number): number;
/**
 * Formata minutos para exibição legível "Xh Ym".
 */
declare function formatMinutesToReadable(minutes: number): string;

export { AuthEnums, type CreateDailyMetricDTO, type CreateIncidentDTO, type CreateIncidentUpdateDTO, type CreateMachineDTO, type CreateMaintenanceDTO, type CreateProjectDTO, type CreateServiceDTO, type CreateServiceGroupDTO, type CreateServicePortDTO, type CreateTaskDTO, type CreateTimeLogDTO, type CreateUserDTO, type DailyMetricIdDTO, type DailyMetricResponseDTO, type EnumIncidentSeverity, type EnumIncidentStatus, type EnumLoginStatus, type EnumMaintenanceStatus, type EnumProjectPriority, type EnumProjectStatus, type EnumServicePortProtocol, type EnumServiceStatus, type EnumTaskPriority, type EnumTaskStatus, type EnumTimeLogNature, type IncidentIdDTO, type IncidentPublicResponseDTO, type IncidentResponseDTO, IncidentSeverity, IncidentStatus, type IncidentUpdateIdDTO, type IncidentUpdateResponseDTO, type LoginAuthDTO, type MachineIdDTO, type MachineResponseDTO, type MaintenanceIdDTO, type MaintenancePublicResponseDTO, type MaintenanceResponseDTO, MaintenanceStatus, type MonitorResultDTO, type MonitorTargetDTO, type PaginatedDailyMetricsDTO, type PaginatedIncidentUpdatesDTO, type PaginatedIncidentsDTO, type PaginatedMachinesDTO, type PaginatedMaintenancesDTO, type PaginatedProjectsDTO, type PaginatedResultDTO, type PaginatedServiceGroupsDTO, type PaginatedServicePortsDTO, type PaginatedTasksDTO, type PaginatedTimeLogsDTO, type PaginatedUsersDTO, type PaginationMetaDTO, type PaginationQueryDTO, type ProblemDetailsDTO, type ProcessResultsDTO, type ProjectIdDTO, ProjectPriority, type ProjectResponseDTO, ProjectStatus, type ServiceGroupIdDTO, type ServiceGroupResponseDTO, type ServiceIdDTO, type ServicePortIdDTO, ServicePortProtocol, type ServicePortResponseDTO, type ServicePublicResponseDTO, type ServiceResponseDTO, ServiceStatus, type TaskIdDTO, TaskPriority, type TaskResponseDTO, TaskStatus, TimeLogNature, type TimeLogResponseDTO, type TokenPayloadDTO, type UpdateDailyMetricDTO, type UpdateIncidentDTO, type UpdateIncidentUpdateDTO, type UpdateMachineDTO, type UpdateMaintenanceDTO, type UpdateProjectDTO, type UpdateServiceDTO, type UpdateServiceGroupDTO, type UpdateServicePortDTO, type UpdateTaskDTO, type UpdateTimeLogDTO, type UpdateUserDTO, type UserIdDTO, type UserResponseDTO, createDailyMetricSchema, createIncidentSchema, createIncidentUpdateSchema, createMachineSchema, createMaintenanceSchema, createPaginatedResponseSchema, createProjectSchema, createServiceGroupSchema, createServicePortSchema, createServiceSchema, createTaskSchema, createTimeLogSchema, createUserSchema, dailyMetricIdSchema, dailyMetricResponseSchema, formatMinutesToReadable, incidentIdSchema, incidentPublicResponseSchema, incidentResponseSchema, incidentUpdateIdSchema, incidentUpdateResponseSchema, loginSchema, machineIdSchema, machineResponseSchema, maintenanceIdSchema, maintenancePublicResponseSchema, maintenanceResponseSchema, minutesToDecimalHours, monitorResultSchema, monitorTargetSchema, monitorTargetsResponseSchema, paginatedTimeLogsResponseSchema, paginationMetaSchema, paginationSchema, pendingTimeResponseSchema, processResultsSchema, projectIdSchema, projectResponseSchema, refreshTokenSchema, registry, rfc7807ErrorSchema, serviceGroupIdSchema, serviceGroupResponseSchema, serviceIdSchema, servicePortIdSchema, servicePortResponseSchema, servicePublicResponseSchema, serviceResponseSchema, taskIdSchema, taskResponseSchema, timeLogResponseSchema, timeStringToMinutes, toggleTimerResponseSchema, updateDailyMetricSchema, updateIncidentSchema, updateIncidentUpdateSchema, updateMachineSchema, updateMaintenanceSchema, updateProjectSchema, updateServiceGroupSchema, updateServicePortSchema, updateServiceSchema, updateTaskSchema, updateTimeLogSchema, updateUserSchema, userIdSchema, userResponseSchema };
