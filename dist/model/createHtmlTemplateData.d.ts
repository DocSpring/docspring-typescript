import { HtmlTemplateData } from './htmlTemplateData';
export declare class CreateHtmlTemplateData {
    'template': HtmlTemplateData;
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
