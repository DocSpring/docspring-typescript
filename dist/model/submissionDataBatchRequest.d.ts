export declare class SubmissionDataBatchRequest {
    'css'?: string;
    'data': object;
    'html'?: string;
    'metadata'?: object;
    'templateId': string | null;
    'test'?: boolean;
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
