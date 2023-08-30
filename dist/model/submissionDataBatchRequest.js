"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionDataBatchRequest = void 0;
var SubmissionDataBatchRequest = (function () {
    function SubmissionDataBatchRequest() {
    }
    SubmissionDataBatchRequest.getAttributeTypeMap = function () {
        return SubmissionDataBatchRequest.attributeTypeMap;
    };
    SubmissionDataBatchRequest.discriminator = undefined;
    SubmissionDataBatchRequest.attributeTypeMap = [
        {
            "name": "css",
            "baseName": "css",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "templateId",
            "baseName": "template_id",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }
    ];
    return SubmissionDataBatchRequest;
}());
exports.SubmissionDataBatchRequest = SubmissionDataBatchRequest;
//# sourceMappingURL=submissionDataBatchRequest.js.map