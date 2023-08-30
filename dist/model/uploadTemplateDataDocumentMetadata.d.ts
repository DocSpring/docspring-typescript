export declare class UploadTemplateDataDocumentMetadata {
    'filename': string;
    'mimeType': UploadTemplateDataDocumentMetadata.MimeTypeEnum;
    'size': number;
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
export declare namespace UploadTemplateDataDocumentMetadata {
    enum MimeTypeEnum {
        ApplicationPdf
    }
}
