export declare const ServiceStatus: {
    readonly OPERATIONAL: "operational";
    readonly DEGRADED: "degraded";
    readonly PARTIAL_OUTAGE: "partial_outage";
    readonly MAJOR_OUTAGE: "major_outage";
    readonly MAINTENANCE: "maintenance";
};
export type EnumServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];
export declare const IncidentStatus: {
    readonly INVESTIGATING: "investigating";
    readonly IDENTIFIED: "identified";
    readonly MONITORING: "monitoring";
    readonly RESOLVED: "resolved";
};
export type EnumIncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];
export declare const IncidentSeverity: {
    readonly DEGRADED: "degraded";
    readonly PARTIAL_OUTAGE: "partial_outage";
    readonly MAJOR_OUTAGE: "major_outage";
};
export type EnumIncidentSeverity = (typeof IncidentSeverity)[keyof typeof IncidentSeverity];
export declare const MaintenanceStatus: {
    readonly SCHEDULED: "scheduled";
    readonly IN_PROGRESS: "in_progress";
    readonly COMPLETED: "completed";
    readonly CANCELED: "canceled";
};
export type EnumMaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];
//# sourceMappingURL=infrastructure.enums.d.ts.map