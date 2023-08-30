"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequest = void 0;
var InvalidRequest = (function () {
    function InvalidRequest() {
    }
    InvalidRequest.getAttributeTypeMap = function () {
        return InvalidRequest.attributeTypeMap;
    };
    InvalidRequest.discriminator = undefined;
    InvalidRequest.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "InvalidRequest.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }
    ];
    return InvalidRequest;
}());
exports.InvalidRequest = InvalidRequest;
(function (InvalidRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = InvalidRequest.StatusEnum || (InvalidRequest.StatusEnum = {}));
})(InvalidRequest = exports.InvalidRequest || (exports.InvalidRequest = {}));
exports.InvalidRequest = InvalidRequest;
//# sourceMappingURL=invalidRequest.js.map