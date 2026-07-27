export declare const ProjectStatus: {
    readonly Draft: "DRAFT";
    readonly Active: "ACTIVE";
    readonly OnHold: "ON_HOLD";
    readonly Completed: "COMPLETED";
    readonly Canceled: "CANCELLED";
};
export type EnumProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const ProjectPriority: {
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
    readonly High: "HIGH";
    readonly Critical: "CRITICAL";
};
export type EnumProjectPriority = (typeof ProjectPriority)[keyof typeof ProjectPriority];
//# sourceMappingURL=projects.enums.d.ts.map