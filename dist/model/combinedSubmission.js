"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedSubmission = void 0;
var CombinedSubmission = (function () {
    function CombinedSubmission() {
    }
    CombinedSubmission.getAttributeTypeMap = function () {
        return CombinedSubmission.attributeTypeMap;
    };
    CombinedSubmission.discriminator = undefined;
    CombinedSubmission.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CombinedSubmission.StateEnum"
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
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
            "name": "submissionIds",
            "baseName": "submission_ids",
            "type": "Array<string>"
        },
        {
            "name": "sourcePdfs",
            "baseName": "source_pdfs",
            "type": "Array<object>"
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string"
        },
        {
            "name": "pdfHash",
            "baseName": "pdf_hash",
            "type": "string"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<CombinedSubmissionAction>"
        }
    ];
    return CombinedSubmission;
}());
exports.CombinedSubmission = CombinedSubmission;
(function (CombinedSubmission) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Processed"] = 'processed'] = "Processed";
        StateEnum[StateEnum["Error"] = 'error'] = "Error";
    })(StateEnum = CombinedSubmission.StateEnum || (CombinedSubmission.StateEnum = {}));
})(CombinedSubmission = exports.CombinedSubmission || (exports.CombinedSubmission = {}));
exports.CombinedSubmission = CombinedSubmission;
//# sourceMappingURL=combinedSubmission.js.map