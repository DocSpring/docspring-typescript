import { UploadTemplateData } from './uploadTemplateData';
export declare class CreateTemplateFromUploadData {
    'template': UploadTemplateData;
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
