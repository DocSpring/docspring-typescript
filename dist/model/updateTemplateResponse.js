"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTemplateResponse = void 0;
var UpdateTemplateResponse = (function () {
    function UpdateTemplateResponse() {
    }
    UpdateTemplateResponse.getAttributeTypeMap = function () {
        return UpdateTemplateResponse.attributeTypeMap;
    };
    UpdateTemplateResponse.discriminator = undefined;
    UpdateTemplateResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateTemplateResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }
    ];
    return UpdateTemplateResponse;
}());
exports.UpdateTemplateResponse = UpdateTemplateResponse;
(function (UpdateTemplateResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = UpdateTemplateResponse.StatusEnum || (UpdateTemplateResponse.StatusEnum = {}));
})(UpdateTemplateResponse = exports.UpdateTemplateResponse || (exports.UpdateTemplateResponse = {}));
exports.UpdateTemplateResponse = UpdateTemplateResponse;
//# sourceMappingURL=updateTemplateResponse.js.map