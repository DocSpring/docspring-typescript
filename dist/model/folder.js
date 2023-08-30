"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
var Folder = (function () {
    function Folder() {
    }
    Folder.getAttributeTypeMap = function () {
        return Folder.attributeTypeMap;
    };
    Folder.discriminator = undefined;
    Folder.attributeTypeMap = [
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
    return Folder;
}());
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map