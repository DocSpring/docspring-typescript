export declare class Template {
    'name': string | null;
    'description': string | null;
    'publicWebForm': boolean;
    'publicSubmissions': boolean;
    'expireSubmissions': boolean;
    'expireAfter': number;
    'expirationInterval': Template.ExpirationIntervalEnum;
    'allowAdditionalProperties': boolean;
    'editableSubmissions': boolean;
    'locked': boolean;
    'webhookUrl': string | null;
    'slackWebhookUrl': string | null;
    'redirectUrl': string | null;
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
export declare namespace Template {
    enum ExpirationIntervalEnum {
        Minutes,
        Hours,
        Days
    }
}
