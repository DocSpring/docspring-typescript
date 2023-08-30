"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionBatchSubmissionsResponse = void 0;
var CreateSubmissionBatchSubmissionsResponse = (function () {
    function CreateSubmissionBatchSubmissionsResponse() {
    }
    CreateSubmissionBatchSubmissionsResponse.getAttributeTypeMap = function () {
        return CreateSubmissionBatchSubmissionsResponse.attributeTypeMap;
    };
    CreateSubmissionBatchSubmissionsResponse.discriminator = undefined;
    CreateSubmissionBatchSubmissionsResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateSubmissionBatchSubmissionsResponse.StatusEnum"
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
    return CreateSubmissionBatchSubmissionsResponse;
}());
exports.CreateSubmissionBatchSubmissionsResponse = CreateSubmissionBatchSubmissionsResponse;
(function (CreateSubmissionBatchSubmissionsResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Success"] = 'success'] = "Success";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
        StatusEnum[StatusEnum["ValidButNotSaved"] = 'valid_but_not_saved'] = "ValidButNotSaved";
    })(StatusEnum = CreateSubmissionBatchSubmissionsResponse.StatusEnum || (CreateSubmissionBatchSubmissionsResponse.StatusEnum = {}));
})(CreateSubmissionBatchSubmissionsResponse = exports.CreateSubmissionBatchSubmissionsResponse || (exports.CreateSubmissionBatchSubmissionsResponse = {}));
exports.CreateSubmissionBatchSubmissionsResponse = CreateSubmissionBatchSubmissionsResponse;
//# sourceMappingURL=createSubmissionBatchSubmissionsResponse.js.map