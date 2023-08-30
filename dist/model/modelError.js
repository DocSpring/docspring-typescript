"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelError = void 0;
var ModelError = (function () {
    function ModelError() {
    }
    ModelError.getAttributeTypeMap = function () {
        return ModelError.attributeTypeMap;
    };
    ModelError.discriminator = undefined;
    ModelError.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ModelError.StatusEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        }
    ];
    return ModelError;
}());
exports.ModelError = ModelError;
(function (ModelError) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = ModelError.StatusEnum || (ModelError.StatusEnum = {}));
})(ModelError = exports.ModelError || (exports.ModelError = {}));
exports.ModelError = ModelError;
//# sourceMappingURL=modelError.js.map