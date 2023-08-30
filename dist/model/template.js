"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var Template = (function () {
    function Template() {
    }
    Template.getAttributeTypeMap = function () {
        return Template.attributeTypeMap;
    };
    Template.discriminator = undefined;
    Template.attributeTypeMap = [
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
            "name": "expirationInterval",
            "baseName": "expiration_interval",
            "type": "Template.ExpirationIntervalEnum"
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
            "name": "locked",
            "baseName": "locked",
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
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "templateType",
            "baseName": "template_type",
            "type": "string"
        },
        {
            "name": "pageDimensions",
            "baseName": "page_dimensions",
            "type": "Array<Array<number>>"
        },
        {
            "name": "documentUrl",
            "baseName": "document_url",
            "type": "string"
        },
        {
            "name": "permanentDocumentUrl",
            "baseName": "permanent_document_url",
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
    return Template;
}());
exports.Template = Template;
(function (Template) {
    var ExpirationIntervalEnum;
    (function (ExpirationIntervalEnum) {
        ExpirationIntervalEnum[ExpirationIntervalEnum["Minutes"] = 'minutes'] = "Minutes";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Hours"] = 'hours'] = "Hours";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Days"] = 'days'] = "Days";
    })(ExpirationIntervalEnum = Template.ExpirationIntervalEnum || (Template.ExpirationIntervalEnum = {}));
})(Template = exports.Template || (exports.Template = {}));
exports.Template = Template;
//# sourceMappingURL=template.js.map