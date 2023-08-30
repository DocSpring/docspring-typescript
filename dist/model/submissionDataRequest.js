"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionDataRequest = void 0;
var SubmissionDataRequest = (function () {
    function SubmissionDataRequest() {
    }
    SubmissionDataRequest.getAttributeTypeMap = function () {
        return SubmissionDataRequest.attributeTypeMap;
    };
    SubmissionDataRequest.discriminator = undefined;
    SubmissionDataRequest.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "submissionId",
            "baseName": "submission_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "number"
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
            "name": "state",
            "baseName": "state",
            "type": "SubmissionDataRequest.StateEnum"
        },
        {
            "name": "viewedAt",
            "baseName": "viewed_at",
            "type": "string"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "string"
        },
        {
            "name": "authType",
            "baseName": "auth_type",
            "type": "SubmissionDataRequest.AuthTypeEnum"
        },
        {
            "name": "authSecondFactorType",
            "baseName": "auth_second_factor_type",
            "type": "SubmissionDataRequest.AuthSecondFactorTypeEnum"
        },
        {
            "name": "authProvider",
            "baseName": "auth_provider",
            "type": "string"
        },
        {
            "name": "authSessionStartedAt",
            "baseName": "auth_session_started_at",
            "type": "string"
        },
        {
            "name": "authSessionIdHash",
            "baseName": "auth_session_id_hash",
            "type": "string"
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
            "name": "authPhoneNumberHash",
            "baseName": "auth_phone_number_hash",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        }
    ];
    return SubmissionDataRequest;
}());
exports.SubmissionDataRequest = SubmissionDataRequest;
(function (SubmissionDataRequest) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Completed"] = 'completed'] = "Completed";
    })(StateEnum = SubmissionDataRequest.StateEnum || (SubmissionDataRequest.StateEnum = {}));
    var AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["None"] = 'none'] = "None";
        AuthTypeEnum[AuthTypeEnum["Password"] = 'password'] = "Password";
        AuthTypeEnum[AuthTypeEnum["Oauth"] = 'oauth'] = "Oauth";
        AuthTypeEnum[AuthTypeEnum["EmailLink"] = 'email_link'] = "EmailLink";
        AuthTypeEnum[AuthTypeEnum["PhoneNumber"] = 'phone_number'] = "PhoneNumber";
        AuthTypeEnum[AuthTypeEnum["Ldap"] = 'ldap'] = "Ldap";
        AuthTypeEnum[AuthTypeEnum["Saml"] = 'saml'] = "Saml";
    })(AuthTypeEnum = SubmissionDataRequest.AuthTypeEnum || (SubmissionDataRequest.AuthTypeEnum = {}));
    var AuthSecondFactorTypeEnum;
    (function (AuthSecondFactorTypeEnum) {
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["None"] = 'none'] = "None";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["PhoneNumber"] = 'phone_number'] = "PhoneNumber";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["Totp"] = 'totp'] = "Totp";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["MobilePush"] = 'mobile_push'] = "MobilePush";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["SecurityKey"] = 'security_key'] = "SecurityKey";
        AuthSecondFactorTypeEnum[AuthSecondFactorTypeEnum["Fingerprint"] = 'fingerprint'] = "Fingerprint";
    })(AuthSecondFactorTypeEnum = SubmissionDataRequest.AuthSecondFactorTypeEnum || (SubmissionDataRequest.AuthSecondFactorTypeEnum = {}));
})(SubmissionDataRequest = exports.SubmissionDataRequest || (exports.SubmissionDataRequest = {}));
exports.SubmissionDataRequest = SubmissionDataRequest;
//# sourceMappingURL=submissionDataRequest.js.map