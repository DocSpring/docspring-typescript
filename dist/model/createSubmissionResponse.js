"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionResponse = void 0;
var CreateSubmissionResponse = (function () {
    function CreateSubmissionResponse() {
    }
    CreateSubmissionResponse.getAttributeTypeMap = function () {
        return CreateSubmissionResponse.attributeTypeMap;
    };
    CreateSubmissionResponse.discriminator = undefined;
    CreateSubmissionResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateSubmissionResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "submission",
            "baseName": "submission",
            "type": "Submission"
        }
    ];
    return CreateSubmissionResponse;
}());
exports.CreateSubmissionResponse = CreateSubmissionResponse;
(function (CreateSubmissionResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = CreateSubmissionResponse.StatusEnum || (CreateSubmissionResponse.StatusEnum = {}));
})(CreateSubmissionResponse = exports.CreateSubmissionResponse || (exports.CreateSubmissionResponse = {}));
exports.CreateSubmissionResponse = CreateSubmissionResponse;
//# sourceMappingURL=createSubmissionResponse.js.map