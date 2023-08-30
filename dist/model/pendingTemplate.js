"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingTemplate = void 0;
var PendingTemplate = (function () {
    function PendingTemplate() {
    }
    PendingTemplate.getAttributeTypeMap = function () {
        return PendingTemplate.attributeTypeMap;
    };
    PendingTemplate.discriminator = undefined;
    PendingTemplate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "templateType",
            "baseName": "template_type",
            "type": "string"
        },
        {
            "name": "publicWebForm",
            "baseName": "public_web_form",
            "type": "boolean"
        },
        {
            "name": "publicSubmissions",
            "baseName": "public_submissions",
            "type": "boolean"
        },
        {
            "name": "expireSubmissions",
            "baseName": "expire_submissions",
            "type": "boolean"
        },
        {
            "name": "expireAfter",
            "baseName": "expire_after",
            "type": "number"
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean"
        },
        {
            "name": "expirationInterval",
            "baseName": "expiration_interval",
            "type": "PendingTemplate.ExpirationIntervalEnum"
        },
        {
            "name": "allowAdditionalProperties",
            "baseName": "allow_additional_properties",
            "type": "boolean"
        },
        {
            "name": "editableSubmissions",
            "baseName": "editable_submissions",
            "type": "boolean"
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string"
        },
        {
            "name": "slackWebhookUrl",
            "baseName": "slack_webhook_url",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "parentFolderId",
            "baseName": "parent_folder_id",
            "type": "string"
        }
    ];
    return PendingTemplate;
}());
exports.PendingTemplate = PendingTemplate;
(function (PendingTemplate) {
    var ExpirationIntervalEnum;
    (function (ExpirationIntervalEnum) {
        ExpirationIntervalEnum[ExpirationIntervalEnum["Minutes"] = 'minutes'] = "Minutes";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Hours"] = 'hours'] = "Hours";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Days"] = 'days'] = "Days";
    })(ExpirationIntervalEnum = PendingTemplate.ExpirationIntervalEnum || (PendingTemplate.ExpirationIntervalEnum = {}));
})(PendingTemplate = exports.PendingTemplate || (exports.PendingTemplate = {}));
exports.PendingTemplate = PendingTemplate;
//# sourceMappingURL=pendingTemplate.js.map