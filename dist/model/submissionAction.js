"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionAction = void 0;
var SubmissionAction = (function () {
    function SubmissionAction() {
    }
    SubmissionAction.getAttributeTypeMap = function () {
        return SubmissionAction.attributeTypeMap;
    };
    SubmissionAction.discriminator = undefined;
    SubmissionAction.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "integrationId",
            "baseName": "integration_id",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubmissionAction.StateEnum"
        },
        {
            "name": "actionCategory",
            "baseName": "action_category",
            "type": "SubmissionAction.ActionCategoryEnum"
        },
        {
            "name": "actionType",
            "baseName": "action_type",
            "type": "SubmissionAction.ActionTypeEnum"
        },
        {
            "name": "resultData",
            "baseName": "result_data",
            "type": "object"
        }
    ];
    return SubmissionAction;
}());
exports.SubmissionAction = SubmissionAction;
(function (SubmissionAction) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Processed"] = 'processed'] = "Processed";
        StateEnum[StateEnum["Failed"] = 'failed'] = "Failed";
        StateEnum[StateEnum["Error"] = 'error'] = "Error";
    })(StateEnum = SubmissionAction.StateEnum || (SubmissionAction.StateEnum = {}));
    var ActionCategoryEnum;
    (function (ActionCategoryEnum) {
        ActionCategoryEnum[ActionCategoryEnum["Notification"] = 'notification'] = "Notification";
        ActionCategoryEnum[ActionCategoryEnum["FileUpload"] = 'file_upload'] = "FileUpload";
    })(ActionCategoryEnum = SubmissionAction.ActionCategoryEnum || (SubmissionAction.ActionCategoryEnum = {}));
    var ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["Webhook"] = 'webhook'] = "Webhook";
        ActionTypeEnum[ActionTypeEnum["SlackWebhook"] = 'slack_webhook'] = "SlackWebhook";
        ActionTypeEnum[ActionTypeEnum["Email"] = 'email'] = "Email";
        ActionTypeEnum[ActionTypeEnum["AwsS3Upload"] = 'aws_s3_upload'] = "AwsS3Upload";
    })(ActionTypeEnum = SubmissionAction.ActionTypeEnum || (SubmissionAction.ActionTypeEnum = {}));
})(SubmissionAction = exports.SubmissionAction || (exports.SubmissionAction = {}));
exports.SubmissionAction = SubmissionAction;
//# sourceMappingURL=submissionAction.js.map