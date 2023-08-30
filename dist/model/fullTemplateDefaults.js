"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTemplateDefaults = void 0;
var FullTemplateDefaults = (function () {
    function FullTemplateDefaults() {
    }
    FullTemplateDefaults.getAttributeTypeMap = function () {
        return FullTemplateDefaults.attributeTypeMap;
    };
    FullTemplateDefaults.discriminator = undefined;
    FullTemplateDefaults.attributeTypeMap = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "fontSize",
            "baseName": "fontSize",
            "type": "number"
        },
        {
            "name": "typeface",
            "baseName": "typeface",
            "type": "string"
        }
    ];
    return FullTemplateDefaults;
}());
exports.FullTemplateDefaults = FullTemplateDefaults;
//# sourceMappingURL=fullTemplateDefaults.js.map