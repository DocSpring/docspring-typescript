"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionDataRequestTokenResponse = void 0;
var CreateSubmissionDataRequestTokenResponse = (function () {
    function CreateSubmissionDataRequestTokenResponse() {
    }
    CreateSubmissionDataRequestTokenResponse.getAttributeTypeMap = function () {
        return CreateSubmissionDataRequestTokenResponse.attributeTypeMap;
    };
    CreateSubmissionDataRequestTokenResponse.discriminator = undefined;
    CreateSubmissionDataRequestTokenResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateSubmissionDataRequestTokenResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "CreateSubmissionDataRequestTokenResponseToken"
        }
    ];
    return CreateSubmissionDataRequestTokenResponse;
}());
exports.CreateSubmissionDataRequestTokenResponse = CreateSubmissionDataRequestTokenResponse;
(function (CreateSubmissionDataRequestTokenResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = CreateSubmissionDataRequestTokenResponse.StatusEnum || (CreateSubmissionDataRequestTokenResponse.StatusEnum = {}));
})(CreateSubmissionDataRequestTokenResponse = exports.CreateSubmissionDataRequestTokenResponse || (exports.CreateSubmissionDataRequestTokenResponse = {}));
exports.CreateSubmissionDataRequestTokenResponse = CreateSubmissionDataRequestTokenResponse;
//# sourceMappingURL=createSubmissionDataRequestTokenResponse.js.map