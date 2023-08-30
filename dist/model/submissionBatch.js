"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionBatch = void 0;
var SubmissionBatch = (function () {
    function SubmissionBatch() {
    }
    SubmissionBatch.getAttributeTypeMap = function () {
        return SubmissionBatch.attributeTypeMap;
    };
    SubmissionBatch.discriminator = undefined;
    SubmissionBatch.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        },
        {
            "name": "pendingCount",
            "baseName": "pending_count",
            "type": "number"
        },
        {
            "name": "errorCount",
            "baseName": "error_count",
            "type": "number"
        },
        {
            "name": "completionPercentage",
            "baseName": "completion_percentage",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubmissionBatch.StateEnum"
        },
        {
            "name": "processedAt",
            "baseName": "processed_at",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<Submission>"
        }
    ];
    return SubmissionBatch;
}());
exports.SubmissionBatch = SubmissionBatch;
(function (SubmissionBatch) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Processed"] = 'processed'] = "Processed";
        StateEnum[StateEnum["Error"] = 'error'] = "Error";
    })(StateEnum = SubmissionBatch.StateEnum || (SubmissionBatch.StateEnum = {}));
})(SubmissionBatch = exports.SubmissionBatch || (exports.SubmissionBatch = {}));
exports.SubmissionBatch = SubmissionBatch;
//# sourceMappingURL=submissionBatch.js.map