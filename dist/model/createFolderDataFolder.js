"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolderDataFolder = void 0;
var CreateFolderDataFolder = (function () {
    function CreateFolderDataFolder() {
    }
    CreateFolderDataFolder.getAttributeTypeMap = function () {
        return CreateFolderDataFolder.attributeTypeMap;
    };
    CreateFolderDataFolder.discriminator = undefined;
    CreateFolderDataFolder.attributeTypeMap = [
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
    return CreateFolderDataFolder;
}());
exports.CreateFolderDataFolder = CreateFolderDataFolder;
//# sourceMappingURL=createFolderDataFolder.js.map