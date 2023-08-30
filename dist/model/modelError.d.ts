export declare class ModelError {
    'status': ModelError.StatusEnum;
    'error': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ModelError {
    enum StatusEnum {
        Error
    }
}
