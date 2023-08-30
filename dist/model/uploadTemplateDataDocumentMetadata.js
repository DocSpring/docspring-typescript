"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadTemplateDataDocumentMetadata = void 0;
var UploadTemplateDataDocumentMetadata = (function () {
    function UploadTemplateDataDocumentMetadata() {
    }
    UploadTemplateDataDocumentMetadata.getAttributeTypeMap = function () {
        return UploadTemplateDataDocumentMetadata.attributeTypeMap;
    };
    UploadTemplateDataDocumentMetadata.discriminator = undefined;
    UploadTemplateDataDocumentMetadata.attributeTypeMap = [
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mime_type",
            "type": "UploadTemplateDataDocumentMetadata.MimeTypeEnum"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }
    ];
    return UploadTemplateDataDocumentMetadata;
}());
exports.UploadTemplateDataDocumentMetadata = UploadTemplateDataDocumentMetadata;
(function (UploadTemplateDataDocumentMetadata) {
    var MimeTypeEnum;
    (function (MimeTypeEnum) {
        MimeTypeEnum[MimeTypeEnum["ApplicationPdf"] = 'application/pdf'] = "ApplicationPdf";
    })(MimeTypeEnum = UploadTemplateDataDocumentMetadata.MimeTypeEnum || (UploadTemplateDataDocumentMetadata.MimeTypeEnum = {}));
})(UploadTemplateDataDocumentMetadata = exports.UploadTemplateDataDocumentMetadata || (exports.UploadTemplateDataDocumentMetadata = {}));
exports.UploadTemplateDataDocumentMetadata = UploadTemplateDataDocumentMetadata;
//# sourceMappingURL=uploadTemplateDataDocumentMetadata.js.map