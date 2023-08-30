"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedSubmissionData = void 0;
var CombinedSubmissionData = (function () {
    function CombinedSubmissionData() {
    }
    CombinedSubmissionData.getAttributeTypeMap = function () {
        return CombinedSubmissionData.attributeTypeMap;
    };
    CombinedSubmissionData.discriminator = undefined;
    CombinedSubmissionData.attributeTypeMap = [
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "submissionIds",
            "baseName": "submission_ids",
            "type": "Array<string>"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }
    ];
    return CombinedSubmissionData;
}());
exports.CombinedSubmissionData = CombinedSubmissionData;
//# sourceMappingURL=combinedSubmissionData.js.map