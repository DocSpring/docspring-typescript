export declare class SubmissionAction {
    'id': string;
    'integrationId': string | null;
    'state': SubmissionAction.StateEnum;
    'actionCategory': SubmissionAction.ActionCategoryEnum;
    'actionType': SubmissionAction.ActionTypeEnum;
    'resultData': object;
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
export declare namespace SubmissionAction {
    enum StateEnum {
        Pending,
        Processed,
        Failed,
        Error
    }
    enum ActionCategoryEnum {
        Notification,
        FileUpload
    }
    enum ActionTypeEnum {
        Webhook,
        SlackWebhook,
        Email,
        AwsS3Upload
    }
}
