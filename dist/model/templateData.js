"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateData = void 0;
var TemplateData = (function () {
    function TemplateData() {
    }
    TemplateData.getAttributeTypeMap = function () {
        return TemplateData.attributeTypeMap;
    };
    TemplateData.discriminator = undefined;
    TemplateData.attributeTypeMap = [
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
            "name": "editableSubmissions",
            "baseName": "editable_submissions",
            "type": "boolean"
        },
        {
            "name": "expirationInterval",
            "baseName": "expiration_interval",
            "type": "TemplateData.ExpirationIntervalEnum"
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
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string"
        }
    ];
    return TemplateData;
}());
exports.TemplateData = TemplateData;
(function (TemplateData) {
    var ExpirationIntervalEnum;
    (function (ExpirationIntervalEnum) {
        ExpirationIntervalEnum[ExpirationIntervalEnum["Minutes"] = 'minutes'] = "Minutes";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Hours"] = 'hours'] = "Hours";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Days"] = 'days'] = "Days";
    })(ExpirationIntervalEnum = TemplateData.ExpirationIntervalEnum || (TemplateData.ExpirationIntervalEnum = {}));
})(TemplateData = exports.TemplateData || (exports.TemplateData = {}));
exports.TemplateData = TemplateData;
//# sourceMappingURL=templateData.js.map