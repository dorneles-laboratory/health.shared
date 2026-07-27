export declare const ServiceStatus: {
    readonly OPERATIONAL: "OPERATIONAL";
    readonly DEGRADED: "DEGRADED";
    readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
    readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    readonly MAINTENANCE: "MAINTENANCE";
};
export type EnumServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];
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
export declare const MaintenanceStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
};
export type EnumMaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];
export declare const ServicePortProtocol: {
    readonly TCP: "TCP";
    readonly UDP: "UDP";
    readonly HTTP: "HTTP";
    readonly HTTPS: "HTTPS";
};
export type EnumServicePortProtocol = (typeof ServicePortProtocol)[keyof typeof ServicePortProtocol];
//# sourceMappingURL=service.enums.d.ts.map