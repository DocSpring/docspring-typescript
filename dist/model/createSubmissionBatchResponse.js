"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionBatchResponse = void 0;
var CreateSubmissionBatchResponse = (function () {
    function CreateSubmissionBatchResponse() {
    }
    CreateSubmissionBatchResponse.getAttributeTypeMap = function () {
        return CreateSubmissionBatchResponse.attributeTypeMap;
    };
    CreateSubmissionBatchResponse.discriminator = undefined;
    CreateSubmissionBatchResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateSubmissionBatchResponse.StatusEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "submissionBatch",
            "baseName": "submission_batch",
            "type": "SubmissionBatch"
        },
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<CreateSubmissionBatchSubmissionsResponse>"
        }
    ];
    return CreateSubmissionBatchResponse;
}());
exports.CreateSubmissionBatchResponse = CreateSubmissionBatchResponse;
(function (CreateSubmissionBatchResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = CreateSubmissionBatchResponse.StatusEnum || (CreateSubmissionBatchResponse.StatusEnum = {}));
})(CreateSubmissionBatchResponse = exports.CreateSubmissionBatchResponse || (exports.CreateSubmissionBatchResponse = {}));
exports.CreateSubmissionBatchResponse = CreateSubmissionBatchResponse;
//# sourceMappingURL=createSubmissionBatchResponse.js.map