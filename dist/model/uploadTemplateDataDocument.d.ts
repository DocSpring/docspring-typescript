import { UploadTemplateDataDocumentMetadata } from './uploadTemplateDataDocumentMetadata';
export declare class UploadTemplateDataDocument {
    'id': string;
    'metadata': UploadTemplateDataDocumentMetadata;
    'storage': UploadTemplateDataDocument.StorageEnum;
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
export declare namespace UploadTemplateDataDocument {
    enum StorageEnum {
        Cache
    }
}
