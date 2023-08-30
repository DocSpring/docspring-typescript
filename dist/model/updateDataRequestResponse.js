"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDataRequestResponse = void 0;
var UpdateDataRequestResponse = (function () {
    function UpdateDataRequestResponse() {
    }
    UpdateDataRequestResponse.getAttributeTypeMap = function () {
        return UpdateDataRequestResponse.attributeTypeMap;
    };
    UpdateDataRequestResponse.discriminator = undefined;
    UpdateDataRequestResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateDataRequestResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "dataRequest",
            "baseName": "data_request",
            "type": "SubmissionDataRequest"
        }
    ];
    return UpdateDataRequestResponse;
}());
exports.UpdateDataRequestResponse = UpdateDataRequestResponse;
(function (UpdateDataRequestResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = UpdateDataRequestResponse.StatusEnum || (UpdateDataRequestResponse.StatusEnum = {}));
})(UpdateDataRequestResponse = exports.UpdateDataRequestResponse || (exports.UpdateDataRequestResponse = {}));
exports.UpdateDataRequestResponse = UpdateDataRequestResponse;
//# sourceMappingURL=updateDataRequestResponse.js.map