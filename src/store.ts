import { log } from "console"

export type TTypeInfo = {name: string, folder?: string, file?: string}

export const types: Record<string, TTypeInfo> = {
    'BOOL': {
        name: "boolean",
    }, 
    'FLOAT': {
        name: "number",
    },
    'INT': {
        name: "number",
    },
    'STRING': {
        name: "string",
    },
    'STRUCT': {
        name: "unknown",
    },
    'TEXT_LABEL_3': {
        name: "string",
    },
    'TEXT_LABEL_7': {
        name: "string",
    },
    'TEXT_LABEL_15': {
        name: "string",
    },
    'TEXT_LABEL_23': {
        name: "string",
    },
    'TEXT_LABEL_31': {
        name: "string",
    },
    'TEXT_LABEL_63': {
        name: "string",
    },
    'TEXT_LABEL': {
        name: "string",
    },
    'VOID': {
        name: "void",
    },
    // circular deps hack
    'NETWORK_GET_GAMER_STATUS_RESULT_STRUCT': {
        name: 'NetworkGetGamerStatusResultStruct',
        folder: 'structs',
        file: 'network-get-gamer-status-result-struct.struct.ts'
    },
    'STRUCT_CASINOMETRIC': {
        name: "CasinoMetric",
        folder: 'structs',
        file: 'casino-metric.struct.ts'
    },
    'STRUCT_CASINOMETRICLIGHT': {
        name: "CasinoMetricLight",
        folder: 'structs',
        file: 'casino-metric-light.struct.ts'
    },
    'GAMER_HANDLE': {
        name: "GamerHandle",
        folder: 'structs',
        file: 'gamer-handle.struct.ts'
    },
    'NETWORK_CLAN_DESC': {
        name: "NetworkClanDesc",
        folder: 'structs',
        file: 'network-clan-desc.struct.ts'
    },
    'scrContrabandMission': {
        name: "ContrabandMission",
        folder: 'structs',
        file: 'contraband-mission.struct.ts'
    },
    'scrBwBossWork': {
        name: "BwBossWork",
        folder: 'structs',
        file: 'bw-boss-work.struct.ts'
    },
    'VECTOR': {
        name: "Vector3",
        folder: 'predef',
        file: 'vector3.ts'
    }
}

const arrayPattern = /(\w+)\[(\d+)\]/;

export const enums = new Map<string, string>();
export const structs = new Set<string>();
export const typedefs = new Map<string, string>();
export const primitives = new Set<string>();


export const resolveType = (type: string): TTypeInfo => {
    if (types[type]) {
        return types[type]
    }

    return {name: type}
}
