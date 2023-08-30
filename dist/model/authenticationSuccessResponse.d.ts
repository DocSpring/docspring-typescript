export declare class AuthenticationSuccessResponse {
    'status': AuthenticationSuccessResponse.StatusEnum;
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
export declare namespace AuthenticationSuccessResponse {
    enum StatusEnum {
        Success
    }
}
