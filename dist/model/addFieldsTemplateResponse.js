"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFieldsTemplateResponse = void 0;
var AddFieldsTemplateResponse = (function () {
    function AddFieldsTemplateResponse() {
    }
    AddFieldsTemplateResponse.getAttributeTypeMap = function () {
        return AddFieldsTemplateResponse.attributeTypeMap;
    };
    AddFieldsTemplateResponse.discriminator = undefined;
    AddFieldsTemplateResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "AddFieldsTemplateResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "newFieldIds",
            "baseName": "new_field_ids",
            "type": "Array<number>"
        }
    ];
    return AddFieldsTemplateResponse;
}());
exports.AddFieldsTemplateResponse = AddFieldsTemplateResponse;
(function (AddFieldsTemplateResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = AddFieldsTemplateResponse.StatusEnum || (AddFieldsTemplateResponse.StatusEnum = {}));
})(AddFieldsTemplateResponse = exports.AddFieldsTemplateResponse || (exports.AddFieldsTemplateResponse = {}));
exports.AddFieldsTemplateResponse = AddFieldsTemplateResponse;
//# sourceMappingURL=addFieldsTemplateResponse.js.map