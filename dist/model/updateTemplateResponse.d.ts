export declare class UpdateTemplateResponse {
    'status': UpdateTemplateResponse.StatusEnum;
    'errors'?: Array<string>;
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
export declare namespace UpdateTemplateResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
