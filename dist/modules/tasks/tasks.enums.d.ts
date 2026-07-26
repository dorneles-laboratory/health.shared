export declare const TaskStatus: {
    readonly Backlog: "BACKLOG";
    readonly Pending: "PENDING";
    readonly InProgress: "IN_PROGRESS";
    readonly InReview: "IN_REVIEW";
    readonly Completed: "COMPLETED";
    readonly Archived: "ARCHIVED";
};
export type EnumTaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const TaskPriority: {
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
    readonly High: "HIGH";
    readonly Urgent: "URGENT";
};
export type EnumTaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];
//# sourceMappingURL=tasks.enums.d.ts.map