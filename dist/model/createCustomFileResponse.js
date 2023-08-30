"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFileResponse = void 0;
var CreateCustomFileResponse = (function () {
    function CreateCustomFileResponse() {
    }
    CreateCustomFileResponse.getAttributeTypeMap = function () {
        return CreateCustomFileResponse.attributeTypeMap;
    };
    CreateCustomFileResponse.discriminator = undefined;
    CreateCustomFileResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateCustomFileResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "customFile",
            "baseName": "custom_file",
            "type": "object"
        }
    ];
    return CreateCustomFileResponse;
}());
exports.CreateCustomFileResponse = CreateCustomFileResponse;
(function (CreateCustomFileResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = CreateCustomFileResponse.StatusEnum || (CreateCustomFileResponse.StatusEnum = {}));
})(CreateCustomFileResponse = exports.CreateCustomFileResponse || (exports.CreateCustomFileResponse = {}));
exports.CreateCustomFileResponse = CreateCustomFileResponse;
//# sourceMappingURL=createCustomFileResponse.js.map