"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionBatchData = void 0;
var SubmissionBatchData = (function () {
    function SubmissionBatchData() {
    }
    SubmissionBatchData.getAttributeTypeMap = function () {
        return SubmissionBatchData.attributeTypeMap;
    };
    SubmissionBatchData.discriminator = undefined;
    SubmissionBatchData.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<SubmissionDataBatchRequest>"
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
    return SubmissionBatchData;
}());
exports.SubmissionBatchData = SubmissionBatchData;
//# sourceMappingURL=submissionBatchData.js.map