"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedSubmissionAction = void 0;
var CombinedSubmissionAction = (function () {
    function CombinedSubmissionAction() {
    }
    CombinedSubmissionAction.getAttributeTypeMap = function () {
        return CombinedSubmissionAction.attributeTypeMap;
    };
    CombinedSubmissionAction.discriminator = undefined;
    CombinedSubmissionAction.attributeTypeMap = [
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
            "type": "CombinedSubmissionAction.StateEnum"
        },
        {
            "name": "actionCategory",
            "baseName": "action_category",
            "type": "CombinedSubmissionAction.ActionCategoryEnum"
        },
        {
            "name": "actionType",
            "baseName": "action_type",
            "type": "CombinedSubmissionAction.ActionTypeEnum"
        },
        {
            "name": "resultData",
            "baseName": "result_data",
            "type": "object"
        }
    ];
    return CombinedSubmissionAction;
}());
exports.CombinedSubmissionAction = CombinedSubmissionAction;
(function (CombinedSubmissionAction) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Processed"] = 'processed'] = "Processed";
        StateEnum[StateEnum["Failed"] = 'failed'] = "Failed";
        StateEnum[StateEnum["Error"] = 'error'] = "Error";
    })(StateEnum = CombinedSubmissionAction.StateEnum || (CombinedSubmissionAction.StateEnum = {}));
    var ActionCategoryEnum;
    (function (ActionCategoryEnum) {
        ActionCategoryEnum[ActionCategoryEnum["Notification"] = 'notification'] = "Notification";
        ActionCategoryEnum[ActionCategoryEnum["FileUpload"] = 'file_upload'] = "FileUpload";
    })(ActionCategoryEnum = CombinedSubmissionAction.ActionCategoryEnum || (CombinedSubmissionAction.ActionCategoryEnum = {}));
    var ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["Webhook"] = 'webhook'] = "Webhook";
        ActionTypeEnum[ActionTypeEnum["SlackWebhook"] = 'slack_webhook'] = "SlackWebhook";
        ActionTypeEnum[ActionTypeEnum["Email"] = 'email'] = "Email";
        ActionTypeEnum[ActionTypeEnum["AwsS3Upload"] = 'aws_s3_upload'] = "AwsS3Upload";
    })(ActionTypeEnum = CombinedSubmissionAction.ActionTypeEnum || (CombinedSubmissionAction.ActionTypeEnum = {}));
})(CombinedSubmissionAction = exports.CombinedSubmissionAction || (exports.CombinedSubmissionAction = {}));
exports.CombinedSubmissionAction = CombinedSubmissionAction;
//# sourceMappingURL=combinedSubmissionAction.js.map