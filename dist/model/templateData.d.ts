export declare class TemplateData {
    'allowAdditionalProperties'?: boolean;
    'description'?: string | null;
    'editableSubmissions'?: boolean;
    'expirationInterval'?: TemplateData.ExpirationIntervalEnum;
    'expireAfter'?: number;
    'expireSubmissions'?: boolean;
    'footerHtml'?: string | null;
    'headerHtml'?: string | null;
    'html'?: string | null;
    'name'?: string | null;
    'publicSubmissions'?: boolean;
    'publicWebForm'?: boolean;
    'redirectUrl'?: string | null;
    'scss'?: string | null;
    'slackWebhookUrl'?: string | null;
    'webhookUrl'?: string | null;
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
export declare namespace TemplateData {
    enum ExpirationIntervalEnum {
        Minutes,
        Hours,
        Days
    }
}
