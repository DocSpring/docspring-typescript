"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadTemplateDataDocument = void 0;
var UploadTemplateDataDocument = (function () {
    function UploadTemplateDataDocument() {
    }
    UploadTemplateDataDocument.getAttributeTypeMap = function () {
        return UploadTemplateDataDocument.attributeTypeMap;
    };
    UploadTemplateDataDocument.discriminator = undefined;
    UploadTemplateDataDocument.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "UploadTemplateDataDocumentMetadata"
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "UploadTemplateDataDocument.StorageEnum"
        }
    ];
    return UploadTemplateDataDocument;
}());
exports.UploadTemplateDataDocument = UploadTemplateDataDocument;
(function (UploadTemplateDataDocument) {
    var StorageEnum;
    (function (StorageEnum) {
        StorageEnum[StorageEnum["Cache"] = 'cache'] = "Cache";
    })(StorageEnum = UploadTemplateDataDocument.StorageEnum || (UploadTemplateDataDocument.StorageEnum = {}));
})(UploadTemplateDataDocument = exports.UploadTemplateDataDocument || (exports.UploadTemplateDataDocument = {}));
exports.UploadTemplateDataDocument = UploadTemplateDataDocument;
//# sourceMappingURL=uploadTemplateDataDocument.js.map