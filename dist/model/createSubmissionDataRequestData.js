"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionDataRequestData = void 0;
var CreateSubmissionDataRequestData = (function () {
    function CreateSubmissionDataRequestData() {
    }
    CreateSubmissionDataRequestData.getAttributeTypeMap = function () {
        return CreateSubmissionDataRequestData.attributeTypeMap;
    };
    CreateSubmissionDataRequestData.discriminator = undefined;
    CreateSubmissionDataRequestData.attributeTypeMap = [
        {
            "name": "authPhoneNumberHash",
            "baseName": "auth_phone_number_hash",
            "type": "string"
        },
        {
            "name": "authProvider",
            "baseName": "auth_provider",
            "type": "string"
        },
        {
            "name": "authSecondFactorType",
            "baseName": "auth_second_factor_type",
            "type": "CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum"
        },
        {
            "name": "authSessionIdHash",
            "baseName": "auth_session_id_hash",
            "type": "string"
        },
        {
            "name": "authSessionStartedAt",
            "baseName": "auth_session_started_at",
            "type": "string"
        },
        {
            "name": "authType",
            "baseName": "auth_type",
            "type": "CreateSubmissionDataRequestData.AuthTypeEnum"
        },
        {
            "name": "authUserIdHash",
            "baseName": "auth_user_id_hash",
            "type": "string"
        },
        {
            "name": "authUsernameHash",
            "baseName": "auth_username_hash",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<string>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        }
    ];
    return CreateSubmissionDataRequestData;
}());
exports.CreateSubmissionDataRequestData = CreateSubmissionDataRequestData;
(function (CreateSubmissionDataRequestData) {
    var AuthSecondFactorTypeEnum;
    (function (AuthSecondFactorTypeEnum) {
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["None"] = 'none'] = "None";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["PhoneNumber"] = 'phone_number'] = "PhoneNumber";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["Totp"] = 'totp'] = "Totp";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["MobilePush"] = 'mobile_push'] = "MobilePush";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["SecurityKey"] = 'security_key'] = "SecurityKey";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["Fingerprint"] = 'fingerprint'] = "Fingerprint";
    })(AuthSecondFactorTypeEnum = CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum || (CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum = {}));
    var AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["None"] = 'none'] = "None";
        AuthTypeEnum[AuthTypeEnum["Password"] = 'password'] = "Password";
        AuthTypeEnum[AuthTypeEnum["Oauth"] = 'oauth'] = "Oauth";
        AuthTypeEnum[AuthTypeEnum["EmailLink"] = 'email_link'] = "EmailLink";
        AuthTypeEnum[AuthTypeEnum["PhoneNumber"] = 'phone_number'] = "PhoneNumber";
        AuthTypeEnum[AuthTypeEnum["Ldap"] = 'ldap'] = "Ldap";
        AuthTypeEnum[AuthTypeEnum["Saml"] = 'saml'] = "Saml";
    })(AuthTypeEnum = CreateSubmissionDataRequestData.AuthTypeEnum || (CreateSubmissionDataRequestData.AuthTypeEnum = {}));
})(CreateSubmissionDataRequestData = exports.CreateSubmissionDataRequestData || (exports.CreateSubmissionDataRequestData = {}));
exports.CreateSubmissionDataRequestData = CreateSubmissionDataRequestData;
//# sourceMappingURL=createSubmissionDataRequestData.js.map