import { z } from '../../lib/registry';
export declare const createTimeLogSchema: z.ZodObject<{
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
export declare const updateTimeLogSchema: z.ZodObject<{
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
export declare const timeLogResponseSchema: z.ZodObject<{
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
export declare const paginatedTimeLogsResponseSchema: z.ZodObject<{
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
export declare const toggleTimerResponseSchema: z.ZodObject<{
    isTimerActive: z.ZodBoolean;
}, z.core.$strip>;
export declare const pendingTimeResponseSchema: z.ZodObject<{
    totalMinutes: z.ZodNumber;
    firstStart: z.ZodNullable<z.ZodDate>;
    lastEnd: z.ZodNullable<z.ZodDate>;
}, z.core.$strip>;
//# sourceMappingURL=time-log.schemas.d.ts.map