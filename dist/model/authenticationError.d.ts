export declare class AuthenticationError {
    'status'?: AuthenticationError.StatusEnum;
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
export declare namespace AuthenticationError {
    enum StatusEnum {
        Error
    }
}
