"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubmissionsResponse = void 0;
var ListSubmissionsResponse = (function () {
    function ListSubmissionsResponse() {
    }
    ListSubmissionsResponse.getAttributeTypeMap = function () {
        return ListSubmissionsResponse.attributeTypeMap;
    };
    ListSubmissionsResponse.discriminator = undefined;
    ListSubmissionsResponse.attributeTypeMap = [
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<Submission>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string"
        }
    ];
    return ListSubmissionsResponse;
}());
exports.ListSubmissionsResponse = ListSubmissionsResponse;
//# sourceMappingURL=listSubmissionsResponse.js.map