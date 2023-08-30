"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinePdfsData = void 0;
var CombinePdfsData = (function () {
    function CombinePdfsData() {
    }
    CombinePdfsData.getAttributeTypeMap = function () {
        return CombinePdfsData.attributeTypeMap;
    };
    CombinePdfsData.discriminator = undefined;
    CombinePdfsData.attributeTypeMap = [
        {
            "name": "deleteCustomFiles",
            "baseName": "delete_custom_files",
            "type": "boolean"
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "sourcePdfs",
            "baseName": "source_pdfs",
            "type": "Array<object>"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }
    ];
    return CombinePdfsData;
}());
exports.CombinePdfsData = CombinePdfsData;
//# sourceMappingURL=combinePdfsData.js.map