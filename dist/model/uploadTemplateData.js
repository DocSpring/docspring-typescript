"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadTemplateData = void 0;
var UploadTemplateData = (function () {
    function UploadTemplateData() {
    }
    UploadTemplateData.getAttributeTypeMap = function () {
        return UploadTemplateData.attributeTypeMap;
    };
    UploadTemplateData.discriminator = undefined;
    UploadTemplateData.attributeTypeMap = [
        {
            "name": "allowAdditionalProperties",
            "baseName": "allow_additional_properties",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "UploadTemplateDataDocument"
        },
        {
            "name": "editableSubmissions",
            "baseName": "editable_submissions",
            "type": "boolean"
        },
        {
            "name": "expirationInterval",
            "baseName": "expiration_interval",
            "type": "UploadTemplateData.ExpirationIntervalEnum"
        },
        {
            "name": "expireAfter",
            "baseName": "expire_after",
            "type": "number"
        },
        {
            "name": "expireSubmissions",
            "baseName": "expire_submissions",
            "type": "boolean"
        },
        {
            "name": "footerHtml",
            "baseName": "footer_html",
            "type": "string"
        },
        {
            "name": "headerHtml",
            "baseName": "header_html",
            "type": "string"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "publicSubmissions",
            "baseName": "public_submissions",
            "type": "boolean"
        },
        {
            "name": "publicWebForm",
            "baseName": "public_web_form",
            "type": "boolean"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "scss",
            "baseName": "scss",
            "type": "string"
        },
        {
            "name": "slackWebhookUrl",
            "baseName": "slack_webhook_url",
            "type": "string"
        },
        {
            "name": "templateType",
            "baseName": "template_type",
            "type": "UploadTemplateData.TemplateTypeEnum"
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string"
        }
    ];
    return UploadTemplateData;
}());
exports.UploadTemplateData = UploadTemplateData;
(function (UploadTemplateData) {
    var ExpirationIntervalEnum;
    (function (ExpirationIntervalEnum) {
        ExpirationIntervalEnum[ExpirationIntervalEnum["Minutes"] = 'minutes'] = "Minutes";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Hours"] = 'hours'] = "Hours";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Days"] = 'days'] = "Days";
    })(ExpirationIntervalEnum = UploadTemplateData.ExpirationIntervalEnum || (UploadTemplateData.ExpirationIntervalEnum = {}));
    var TemplateTypeEnum;
    (function (TemplateTypeEnum) {
        TemplateTypeEnum[TemplateTypeEnum["Pdf"] = 'pdf'] = "Pdf";
        TemplateTypeEnum[TemplateTypeEnum["Html"] = 'html'] = "Html";
    })(TemplateTypeEnum = UploadTemplateData.TemplateTypeEnum || (UploadTemplateData.TemplateTypeEnum = {}));
})(UploadTemplateData = exports.UploadTemplateData || (exports.UploadTemplateData = {}));
exports.UploadTemplateData = UploadTemplateData;
//# sourceMappingURL=uploadTemplateData.js.map