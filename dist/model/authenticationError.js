"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
var AuthenticationError = (function () {
    function AuthenticationError() {
    }
    AuthenticationError.getAttributeTypeMap = function () {
        return AuthenticationError.attributeTypeMap;
    };
    AuthenticationError.discriminator = undefined;
    AuthenticationError.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthenticationError.StatusEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        }
    ];
    return AuthenticationError;
}());
exports.AuthenticationError = AuthenticationError;
(function (AuthenticationError) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = AuthenticationError.StatusEnum || (AuthenticationError.StatusEnum = {}));
})(AuthenticationError = exports.AuthenticationError || (exports.AuthenticationError = {}));
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=authenticationError.js.map