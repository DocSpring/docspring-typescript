"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submission = void 0;
var Submission = (function () {
    function Submission() {
    }
    Submission.getAttributeTypeMap = function () {
        return Submission.attributeTypeMap;
    };
    Submission.discriminator = undefined;
    Submission.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
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
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean"
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "processedAt",
            "baseName": "processed_at",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Submission.StateEnum"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "truncatedText",
            "baseName": "truncated_text",
            "type": "object"
        },
        {
            "name": "pdfHash",
            "baseName": "pdf_hash",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string"
        },
        {
            "name": "permanentDownloadUrl",
            "baseName": "permanent_download_url",
            "type": "string"
        },
        {
            "name": "batchId",
            "baseName": "batch_id",
            "type": "string"
        },
        {
            "name": "dataRequests",
            "baseName": "data_requests",
            "type": "Array<SubmissionDataRequest>"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<SubmissionAction>"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "referrer",
            "baseName": "referrer",
            "type": "string"
        }
    ];
    return Submission;
}());
exports.Submission = Submission;
(function (Submission) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Processed"] = 'processed'] = "Processed";
        StateEnum[StateEnum["InvalidData"] = 'invalid_data'] = "InvalidData";
        StateEnum[StateEnum["Error"] = 'error'] = "Error";
        StateEnum[StateEnum["ImageDownloadFailed"] = 'image_download_failed'] = "ImageDownloadFailed";
        StateEnum[StateEnum["ImageProcessingFailed"] = 'image_processing_failed'] = "ImageProcessingFailed";
        StateEnum[StateEnum["WaitingForDataRequests"] = 'waiting_for_data_requests'] = "WaitingForDataRequests";
        StateEnum[StateEnum["SyntaxError"] = 'syntax_error'] = "SyntaxError";
        StateEnum[StateEnum["AccountSuspended"] = 'account_suspended'] = "AccountSuspended";
        StateEnum[StateEnum["LicenseRevoked"] = 'license_revoked'] = "LicenseRevoked";
        StateEnum[StateEnum["Accidental"] = 'accidental'] = "Accidental";
    })(StateEnum = Submission.StateEnum || (Submission.StateEnum = {}));
})(Submission = exports.Submission || (exports.Submission = {}));
exports.Submission = Submission;
//# sourceMappingURL=submission.js.map