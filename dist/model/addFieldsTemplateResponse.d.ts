export declare class AddFieldsTemplateResponse {
    'status': AddFieldsTemplateResponse.StatusEnum;
    'errors'?: Array<string>;
    'newFieldIds'?: Array<number>;
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
export declare namespace AddFieldsTemplateResponse {
    enum StatusEnum {
        Success,
        Error
    }
}
