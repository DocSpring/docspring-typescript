export declare class CombinedSubmissionAction {
    'id': string;
    'integrationId': string | null;
    'state': CombinedSubmissionAction.StateEnum;
    'actionCategory': CombinedSubmissionAction.ActionCategoryEnum;
    'actionType': CombinedSubmissionAction.ActionTypeEnum;
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
export declare namespace CombinedSubmissionAction {
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
