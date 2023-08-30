"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTemplateResponse = void 0;
var DeleteTemplateResponse = (function () {
    function DeleteTemplateResponse() {
    }
    DeleteTemplateResponse.getAttributeTypeMap = function () {
        return DeleteTemplateResponse.attributeTypeMap;
    };
    DeleteTemplateResponse.discriminator = undefined;
    DeleteTemplateResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "DeleteTemplateResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }
    ];
    return DeleteTemplateResponse;
}());
exports.DeleteTemplateResponse = DeleteTemplateResponse;
(function (DeleteTemplateResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = DeleteTemplateResponse.StatusEnum || (DeleteTemplateResponse.StatusEnum = {}));
})(DeleteTemplateResponse = exports.DeleteTemplateResponse || (exports.DeleteTemplateResponse = {}));
exports.DeleteTemplateResponse = DeleteTemplateResponse;
//# sourceMappingURL=deleteTemplateResponse.js.map