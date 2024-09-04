const parsers: Record<string, () => string> = {
    'BOOL': () => 'boolean',
    'STRING': () => 'string',
    'INT': () => 'number',
    'FLOAT': () => 'number',
    'TEXT_LABEL_3': () => 'string',
    'TEXT_LABEL_7': () => 'string',
    'TEXT_LABEL_15': () => 'string',
    'TEXT_LABEL_23': () => 'string',
    'TEXT_LABEL_31': () => 'string',
    'TEXT_LABEL_63': () => 'string',
    'TEXT_LABEL': () => 'string',
}

export const parseType = (type: string) => {
    const parser = parsers[type];
    if (!parser) {
        throw new Error(`Unknown type: ${type}`)
    }
    return parser();
}