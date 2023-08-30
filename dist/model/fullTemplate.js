"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTemplate = void 0;
var FullTemplate = (function () {
    function FullTemplate() {
    }
    FullTemplate.getAttributeTypeMap = function () {
        return FullTemplate.attributeTypeMap;
    };
    FullTemplate.discriminator = undefined;
    FullTemplate.attributeTypeMap = [
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
            "type": "FullTemplate.ExpirationIntervalEnum"
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
            "name": "firstTemplate",
            "baseName": "first_template",
            "type": "boolean"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "headerHtml",
            "baseName": "header_html",
            "type": "string"
        },
        {
            "name": "footerHtml",
            "baseName": "footer_html",
            "type": "string"
        },
        {
            "name": "scss",
            "baseName": "scss",
            "type": "string"
        },
        {
            "name": "encryptPdfs",
            "baseName": "encrypt_pdfs",
            "type": "boolean"
        },
        {
            "name": "encryptPdfsPassword",
            "baseName": "encrypt_pdfs_password",
            "type": "string"
        },
        {
            "name": "defaults",
            "baseName": "defaults",
            "type": "FullTemplateDefaults"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "object"
        },
        {
            "name": "sharedFieldData",
            "baseName": "shared_field_data",
            "type": "object"
        },
        {
            "name": "fieldOrder",
            "baseName": "field_order",
            "type": "Array<Array<number>>"
        },
        {
            "name": "documentMd5",
            "baseName": "document_md5",
            "type": "string"
        },
        {
            "name": "documentFilename",
            "baseName": "document_filename",
            "type": "string"
        },
        {
            "name": "documentParseError",
            "baseName": "document_parse_error",
            "type": "boolean"
        },
        {
            "name": "documentState",
            "baseName": "document_state",
            "type": "string"
        },
        {
            "name": "embedDomains",
            "baseName": "embed_domains",
            "type": "Array<string>"
        },
        {
            "name": "pageCount",
            "baseName": "page_count",
            "type": "number"
        },
        {
            "name": "documentProcessed",
            "baseName": "document_processed",
            "type": "boolean"
        },
        {
            "name": "demo",
            "baseName": "demo",
            "type": "boolean"
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
    return FullTemplate;
}());
exports.FullTemplate = FullTemplate;
(function (FullTemplate) {
    var ExpirationIntervalEnum;
    (function (ExpirationIntervalEnum) {
        ExpirationIntervalEnum[ExpirationIntervalEnum["Minutes"] = 'minutes'] = "Minutes";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Hours"] = 'hours'] = "Hours";
        ExpirationIntervalEnum[ExpirationIntervalEnum["Days"] = 'days'] = "Days";
    })(ExpirationIntervalEnum = FullTemplate.ExpirationIntervalEnum || (FullTemplate.ExpirationIntervalEnum = {}));
})(FullTemplate = exports.FullTemplate || (exports.FullTemplate = {}));
exports.FullTemplate = FullTemplate;
//# sourceMappingURL=fullTemplate.js.map