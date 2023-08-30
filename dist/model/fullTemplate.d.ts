import { FullTemplateDefaults } from './fullTemplateDefaults';
export declare class FullTemplate {
    'name': string | null;
    'description': string | null;
    'publicWebForm': boolean;
    'publicSubmissions': boolean;
    'expireSubmissions': boolean;
    'expireAfter': number;
    'expirationInterval': FullTemplate.ExpirationIntervalEnum;
    'allowAdditionalProperties': boolean;
    'editableSubmissions': boolean;
    'locked': boolean;
    'webhookUrl': string | null;
    'slackWebhookUrl': string | null;
    'redirectUrl': string | null;
    'firstTemplate': boolean;
    'html': string | null;
    'headerHtml': string | null;
    'footerHtml': string | null;
    'scss': string | null;
    'encryptPdfs': boolean;
    'encryptPdfsPassword': string | null;
    'defaults': FullTemplateDefaults;
    'fields': object;
    'sharedFieldData': object;
    'fieldOrder': Array<Array<number>>;
    'documentMd5': string | null;
    'documentFilename': string | null;
    'documentParseError': boolean;
    'documentState': string;
    'embedDomains': Array<string> | null;
    'pageCount': number;
    'documentProcessed': boolean;
    'demo': boolean;
    'id': string;
    'templateType': string;
    'pageDimensions': Array<Array<number>> | null;
    'documentUrl': string | null;
    'permanentDocumentUrl': string | null;
    'path': string;
    'parentFolderId': string | null;
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
export declare namespace FullTemplate {
    enum ExpirationIntervalEnum {
        Minutes,
        Hours,
        Days
    }
}
