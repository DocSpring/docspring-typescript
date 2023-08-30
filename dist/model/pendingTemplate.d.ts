export declare class PendingTemplate {
    'id': string;
    'name': string | null;
    'description': string | null;
    'templateType': string;
    'publicWebForm': boolean;
    'publicSubmissions': boolean;
    'expireSubmissions': boolean;
    'expireAfter'?: number;
    'locked': boolean;
    'expirationInterval'?: PendingTemplate.ExpirationIntervalEnum;
    'allowAdditionalProperties': boolean;
    'editableSubmissions': boolean;
    'webhookUrl': string | null;
    'slackWebhookUrl': string | null;
    'redirectUrl': string | null;
    'path'?: string;
    'parentFolderId'?: string | null;
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
export declare namespace PendingTemplate {
    enum ExpirationIntervalEnum {
        Minutes,
        Hours,
        Days
    }
}
