"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionData = void 0;
var SubmissionData = (function () {
    function SubmissionData() {
    }
    SubmissionData.getAttributeTypeMap = function () {
        return SubmissionData.attributeTypeMap;
    };
    SubmissionData.discriminator = undefined;
    SubmissionData.attributeTypeMap = [
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
            "name": "dataRequests",
            "baseName": "data_requests",
            "type": "Array<CreateSubmissionDataRequestData>"
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "fieldOverrides",
            "baseName": "field_overrides",
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
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }
    ];
    return SubmissionData;
}());
exports.SubmissionData = SubmissionData;
//# sourceMappingURL=submissionData.js.map