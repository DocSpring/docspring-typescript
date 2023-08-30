"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationSuccessResponse = void 0;
var AuthenticationSuccessResponse = (function () {
    function AuthenticationSuccessResponse() {
    }
    AuthenticationSuccessResponse.getAttributeTypeMap = function () {
        return AuthenticationSuccessResponse.attributeTypeMap;
    };
    AuthenticationSuccessResponse.discriminator = undefined;
    AuthenticationSuccessResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthenticationSuccessResponse.StatusEnum"
        }
    ];
    return AuthenticationSuccessResponse;
}());
exports.AuthenticationSuccessResponse = AuthenticationSuccessResponse;
(function (AuthenticationSuccessResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
    })(StatusEnum = AuthenticationSuccessResponse.StatusEnum || (AuthenticationSuccessResponse.StatusEnum = {}));
})(AuthenticationSuccessResponse = exports.AuthenticationSuccessResponse || (exports.AuthenticationSuccessResponse = {}));
exports.AuthenticationSuccessResponse = AuthenticationSuccessResponse;
//# sourceMappingURL=authenticationSuccessResponse.js.map