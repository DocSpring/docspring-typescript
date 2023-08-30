"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCombinedSubmissionResponse = void 0;
var CreateCombinedSubmissionResponse = (function () {
    function CreateCombinedSubmissionResponse() {
    }
    CreateCombinedSubmissionResponse.getAttributeTypeMap = function () {
        return CreateCombinedSubmissionResponse.attributeTypeMap;
    };
    CreateCombinedSubmissionResponse.discriminator = undefined;
    CreateCombinedSubmissionResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateCombinedSubmissionResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "combinedSubmission",
            "baseName": "combined_submission",
            "type": "CombinedSubmission"
        }
    ];
    return CreateCombinedSubmissionResponse;
}());
exports.CreateCombinedSubmissionResponse = CreateCombinedSubmissionResponse;
(function (CreateCombinedSubmissionResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = CreateCombinedSubmissionResponse.StatusEnum || (CreateCombinedSubmissionResponse.StatusEnum = {}));
})(CreateCombinedSubmissionResponse = exports.CreateCombinedSubmissionResponse || (exports.CreateCombinedSubmissionResponse = {}));
exports.CreateCombinedSubmissionResponse = CreateCombinedSubmissionResponse;
//# sourceMappingURL=createCombinedSubmissionResponse.js.map