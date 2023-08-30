"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionDataRequestTokenResponseToken = void 0;
var CreateSubmissionDataRequestTokenResponseToken = (function () {
    function CreateSubmissionDataRequestTokenResponseToken() {
    }
    CreateSubmissionDataRequestTokenResponseToken.getAttributeTypeMap = function () {
        return CreateSubmissionDataRequestTokenResponseToken.attributeTypeMap;
    };
    CreateSubmissionDataRequestTokenResponseToken.discriminator = undefined;
    CreateSubmissionDataRequestTokenResponseToken.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "dataRequestUrl",
            "baseName": "data_request_url",
            "type": "string"
        }
    ];
    return CreateSubmissionDataRequestTokenResponseToken;
}());
exports.CreateSubmissionDataRequestTokenResponseToken = CreateSubmissionDataRequestTokenResponseToken;
//# sourceMappingURL=createSubmissionDataRequestTokenResponseToken.js.map