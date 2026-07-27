export declare const IncidentStatus: {
    readonly INVESTIGATING: "INVESTIGATING";
    readonly IDENTIFIED: "IDENTIFIED";
    readonly MONITORING: "MONITORING";
    readonly RESOLVED: "RESOLVED";
};
export type EnumIncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];
export declare const IncidentSeverity: {
    readonly DEGRADED: "DEGRADED";
    readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
    readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
};
export type EnumIncidentSeverity = (typeof IncidentSeverity)[keyof typeof IncidentSeverity];
//# sourceMappingURL=incident.enums.d.ts.map