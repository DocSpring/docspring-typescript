"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyTemplateData = void 0;
var CopyTemplateData = (function () {
    function CopyTemplateData() {
    }
    CopyTemplateData.getAttributeTypeMap = function () {
        return CopyTemplateData.attributeTypeMap;
    };
    CopyTemplateData.discriminator = undefined;
    CopyTemplateData.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "parentFolderId",
            "baseName": "parent_folder_id",
            "type": "string"
        }
    ];
    return CopyTemplateData;
}());
exports.CopyTemplateData = CopyTemplateData;
//# sourceMappingURL=copyTemplateData.js.map