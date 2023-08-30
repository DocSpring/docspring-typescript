export declare class CreateCustomFileResponse {
    'status': CreateCustomFileResponse.StatusEnum;
    'errors'?: Array<string>;
    'customFile': object;
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
export declare namespace CreateCustomFileResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
