import { z } from '../../lib/registry';
export declare const createTaskSchema: z.ZodObject<{
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
export declare const updateTaskSchema: z.ZodObject<{
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
export declare const taskResponseSchema: z.ZodObject<{
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
export declare const taskIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=tasks.schemas.d.ts.map