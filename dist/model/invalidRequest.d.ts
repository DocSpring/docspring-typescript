export declare class InvalidRequest {
    'status': InvalidRequest.StatusEnum;
    'errors': Array<string>;
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
export declare namespace InvalidRequest {
    enum StatusEnum {
        Error
    }
}
