"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./addFieldsData"), exports);
__exportStar(require("./addFieldsTemplateResponse"), exports);
__exportStar(require("./authenticationError"), exports);
__exportStar(require("./authenticationSuccessResponse"), exports);
__exportStar(require("./combinePdfsData"), exports);
__exportStar(require("./combinedSubmission"), exports);
__exportStar(require("./combinedSubmissionAction"), exports);
__exportStar(require("./combinedSubmissionData"), exports);
__exportStar(require("./copyTemplateData"), exports);
__exportStar(require("./createCombinedSubmissionResponse"), exports);
__exportStar(require("./createCustomFileData"), exports);
__exportStar(require("./createCustomFileResponse"), exports);
__exportStar(require("./createFolderData"), exports);
__exportStar(require("./createFolderDataFolder"), exports);
__exportStar(require("./createHtmlTemplateData"), exports);
__exportStar(require("./createSubmissionBatchResponse"), exports);
__exportStar(require("./createSubmissionBatchSubmissionsResponse"), exports);
__exportStar(require("./createSubmissionDataRequestData"), exports);
__exportStar(require("./createSubmissionDataRequestTokenResponse"), exports);
__exportStar(require("./createSubmissionDataRequestTokenResponseToken"), exports);
__exportStar(require("./createSubmissionResponse"), exports);
__exportStar(require("./createTemplateFromUploadData"), exports);
__exportStar(require("./deleteTemplateResponse"), exports);
__exportStar(require("./folder"), exports);
__exportStar(require("./fullTemplate"), exports);
__exportStar(require("./fullTemplateDefaults"), exports);
__exportStar(require("./htmlTemplateData"), exports);
__exportStar(require("./invalidRequest"), exports);
__exportStar(require("./listSubmissionsResponse"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./moveFolderData"), exports);
__exportStar(require("./moveTemplateData"), exports);
__exportStar(require("./pendingTemplate"), exports);
__exportStar(require("./renameFolderData"), exports);
__exportStar(require("./submission"), exports);
__exportStar(require("./submissionAction"), exports);
__exportStar(require("./submissionBatch"), exports);
__exportStar(require("./submissionBatchData"), exports);
__exportStar(require("./submissionData"), exports);
__exportStar(require("./submissionDataBatchRequest"), exports);
__exportStar(require("./submissionDataRequest"), exports);
__exportStar(require("./template"), exports);
__exportStar(require("./templateData"), exports);
__exportStar(require("./updateDataRequestResponse"), exports);
__exportStar(require("./updateSubmissionDataRequestData"), exports);
__exportStar(require("./updateTemplateData"), exports);
__exportStar(require("./updateTemplateResponse"), exports);
__exportStar(require("./uploadTemplateData"), exports);
__exportStar(require("./uploadTemplateDataDocument"), exports);
__exportStar(require("./uploadTemplateDataDocumentMetadata"), exports);
var addFieldsData_1 = require("./addFieldsData");
var addFieldsTemplateResponse_1 = require("./addFieldsTemplateResponse");
var authenticationError_1 = require("./authenticationError");
var authenticationSuccessResponse_1 = require("./authenticationSuccessResponse");
var combinePdfsData_1 = require("./combinePdfsData");
var combinedSubmission_1 = require("./combinedSubmission");
var combinedSubmissionAction_1 = require("./combinedSubmissionAction");
var combinedSubmissionData_1 = require("./combinedSubmissionData");
var copyTemplateData_1 = require("./copyTemplateData");
var createCombinedSubmissionResponse_1 = require("./createCombinedSubmissionResponse");
var createCustomFileData_1 = require("./createCustomFileData");
var createCustomFileResponse_1 = require("./createCustomFileResponse");
var createFolderData_1 = require("./createFolderData");
var createFolderDataFolder_1 = require("./createFolderDataFolder");
var createHtmlTemplateData_1 = require("./createHtmlTemplateData");
var createSubmissionBatchResponse_1 = require("./createSubmissionBatchResponse");
var createSubmissionBatchSubmissionsResponse_1 = require("./createSubmissionBatchSubmissionsResponse");
var createSubmissionDataRequestData_1 = require("./createSubmissionDataRequestData");
var createSubmissionDataRequestTokenResponse_1 = require("./createSubmissionDataRequestTokenResponse");
var createSubmissionDataRequestTokenResponseToken_1 = require("./createSubmissionDataRequestTokenResponseToken");
var createSubmissionResponse_1 = require("./createSubmissionResponse");
var createTemplateFromUploadData_1 = require("./createTemplateFromUploadData");
var deleteTemplateResponse_1 = require("./deleteTemplateResponse");
var folder_1 = require("./folder");
var fullTemplate_1 = require("./fullTemplate");
var fullTemplateDefaults_1 = require("./fullTemplateDefaults");
var htmlTemplateData_1 = require("./htmlTemplateData");
var invalidRequest_1 = require("./invalidRequest");
var listSubmissionsResponse_1 = require("./listSubmissionsResponse");
var modelError_1 = require("./modelError");
var moveFolderData_1 = require("./moveFolderData");
var moveTemplateData_1 = require("./moveTemplateData");
var pendingTemplate_1 = require("./pendingTemplate");
var renameFolderData_1 = require("./renameFolderData");
var submission_1 = require("./submission");
var submissionAction_1 = require("./submissionAction");
var submissionBatch_1 = require("./submissionBatch");
var submissionBatchData_1 = require("./submissionBatchData");
var submissionData_1 = require("./submissionData");
var submissionDataBatchRequest_1 = require("./submissionDataBatchRequest");
var submissionDataRequest_1 = require("./submissionDataRequest");
var template_1 = require("./template");
var templateData_1 = require("./templateData");
var updateDataRequestResponse_1 = require("./updateDataRequestResponse");
var updateSubmissionDataRequestData_1 = require("./updateSubmissionDataRequestData");
var updateTemplateData_1 = require("./updateTemplateData");
var updateTemplateResponse_1 = require("./updateTemplateResponse");
var uploadTemplateData_1 = require("./uploadTemplateData");
var uploadTemplateDataDocument_1 = require("./uploadTemplateDataDocument");
var uploadTemplateDataDocumentMetadata_1 = require("./uploadTemplateDataDocumentMetadata");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AddFieldsTemplateResponse.StatusEnum": addFieldsTemplateResponse_1.AddFieldsTemplateResponse.StatusEnum,
    "AuthenticationError.StatusEnum": authenticationError_1.AuthenticationError.StatusEnum,
    "AuthenticationSuccessResponse.StatusEnum": authenticationSuccessResponse_1.AuthenticationSuccessResponse.StatusEnum,
    "CombinedSubmission.StateEnum": combinedSubmission_1.CombinedSubmission.StateEnum,
    "CombinedSubmissionAction.StateEnum": combinedSubmissionAction_1.CombinedSubmissionAction.StateEnum,
    "CombinedSubmissionAction.ActionCategoryEnum": combinedSubmissionAction_1.CombinedSubmissionAction.ActionCategoryEnum,
    "CombinedSubmissionAction.ActionTypeEnum": combinedSubmissionAction_1.CombinedSubmissionAction.ActionTypeEnum,
    "CreateCombinedSubmissionResponse.StatusEnum": createCombinedSubmissionResponse_1.CreateCombinedSubmissionResponse.StatusEnum,
    "CreateCustomFileResponse.StatusEnum": createCustomFileResponse_1.CreateCustomFileResponse.StatusEnum,
    "CreateSubmissionBatchResponse.StatusEnum": createSubmissionBatchResponse_1.CreateSubmissionBatchResponse.StatusEnum,
    "CreateSubmissionBatchSubmissionsResponse.StatusEnum": createSubmissionBatchSubmissionsResponse_1.CreateSubmissionBatchSubmissionsResponse.StatusEnum,
    "CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum": createSubmissionDataRequestData_1.CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum,
    "CreateSubmissionDataRequestData.AuthTypeEnum": createSubmissionDataRequestData_1.CreateSubmissionDataRequestData.AuthTypeEnum,
    "CreateSubmissionDataRequestTokenResponse.StatusEnum": createSubmissionDataRequestTokenResponse_1.CreateSubmissionDataRequestTokenResponse.StatusEnum,
    "CreateSubmissionResponse.StatusEnum": createSubmissionResponse_1.CreateSubmissionResponse.StatusEnum,
    "DeleteTemplateResponse.StatusEnum": deleteTemplateResponse_1.DeleteTemplateResponse.StatusEnum,
    "FullTemplate.ExpirationIntervalEnum": fullTemplate_1.FullTemplate.ExpirationIntervalEnum,
    "HtmlTemplateData.ExpirationIntervalEnum": htmlTemplateData_1.HtmlTemplateData.ExpirationIntervalEnum,
    "HtmlTemplateData.TemplateTypeEnum": htmlTemplateData_1.HtmlTemplateData.TemplateTypeEnum,
    "InvalidRequest.StatusEnum": invalidRequest_1.InvalidRequest.StatusEnum,
    "ModelError.StatusEnum": modelError_1.ModelError.StatusEnum,
    "PendingTemplate.ExpirationIntervalEnum": pendingTemplate_1.PendingTemplate.ExpirationIntervalEnum,
    "Submission.StateEnum": submission_1.Submission.StateEnum,
    "SubmissionAction.StateEnum": submissionAction_1.SubmissionAction.StateEnum,
    "SubmissionAction.ActionCategoryEnum": submissionAction_1.SubmissionAction.ActionCategoryEnum,
    "SubmissionAction.ActionTypeEnum": submissionAction_1.SubmissionAction.ActionTypeEnum,
    "SubmissionBatch.StateEnum": submissionBatch_1.SubmissionBatch.StateEnum,
    "SubmissionDataRequest.StateEnum": submissionDataRequest_1.SubmissionDataRequest.StateEnum,
    "SubmissionDataRequest.AuthTypeEnum": submissionDataRequest_1.SubmissionDataRequest.AuthTypeEnum,
    "SubmissionDataRequest.AuthSecondFactorTypeEnum": submissionDataRequest_1.SubmissionDataRequest.AuthSecondFactorTypeEnum,
    "Template.ExpirationIntervalEnum": template_1.Template.ExpirationIntervalEnum,
    "TemplateData.ExpirationIntervalEnum": templateData_1.TemplateData.ExpirationIntervalEnum,
    "UpdateDataRequestResponse.StatusEnum": updateDataRequestResponse_1.UpdateDataRequestResponse.StatusEnum,
    "UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum": updateSubmissionDataRequestData_1.UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum,
    "UpdateSubmissionDataRequestData.AuthTypeEnum": updateSubmissionDataRequestData_1.UpdateSubmissionDataRequestData.AuthTypeEnum,
    "UpdateTemplateResponse.StatusEnum": updateTemplateResponse_1.UpdateTemplateResponse.StatusEnum,
    "UploadTemplateData.ExpirationIntervalEnum": uploadTemplateData_1.UploadTemplateData.ExpirationIntervalEnum,
    "UploadTemplateData.TemplateTypeEnum": uploadTemplateData_1.UploadTemplateData.TemplateTypeEnum,
    "UploadTemplateDataDocument.StorageEnum": uploadTemplateDataDocument_1.UploadTemplateDataDocument.StorageEnum,
    "UploadTemplateDataDocumentMetadata.MimeTypeEnum": uploadTemplateDataDocumentMetadata_1.UploadTemplateDataDocumentMetadata.MimeTypeEnum,
};
var typeMap = {
    "AddFieldsData": addFieldsData_1.AddFieldsData,
    "AddFieldsTemplateResponse": addFieldsTemplateResponse_1.AddFieldsTemplateResponse,
    "AuthenticationError": authenticationError_1.AuthenticationError,
    "AuthenticationSuccessResponse": authenticationSuccessResponse_1.AuthenticationSuccessResponse,
    "CombinePdfsData": combinePdfsData_1.CombinePdfsData,
    "CombinedSubmission": combinedSubmission_1.CombinedSubmission,
    "CombinedSubmissionAction": combinedSubmissionAction_1.CombinedSubmissionAction,
    "CombinedSubmissionData": combinedSubmissionData_1.CombinedSubmissionData,
    "CopyTemplateData": copyTemplateData_1.CopyTemplateData,
    "CreateCombinedSubmissionResponse": createCombinedSubmissionResponse_1.CreateCombinedSubmissionResponse,
    "CreateCustomFileData": createCustomFileData_1.CreateCustomFileData,
    "CreateCustomFileResponse": createCustomFileResponse_1.CreateCustomFileResponse,
    "CreateFolderData": createFolderData_1.CreateFolderData,
    "CreateFolderDataFolder": createFolderDataFolder_1.CreateFolderDataFolder,
    "CreateHtmlTemplateData": createHtmlTemplateData_1.CreateHtmlTemplateData,
    "CreateSubmissionBatchResponse": createSubmissionBatchResponse_1.CreateSubmissionBatchResponse,
    "CreateSubmissionBatchSubmissionsResponse": createSubmissionBatchSubmissionsResponse_1.CreateSubmissionBatchSubmissionsResponse,
    "CreateSubmissionDataRequestData": createSubmissionDataRequestData_1.CreateSubmissionDataRequestData,
    "CreateSubmissionDataRequestTokenResponse": createSubmissionDataRequestTokenResponse_1.CreateSubmissionDataRequestTokenResponse,
    "CreateSubmissionDataRequestTokenResponseToken": createSubmissionDataRequestTokenResponseToken_1.CreateSubmissionDataRequestTokenResponseToken,
    "CreateSubmissionResponse": createSubmissionResponse_1.CreateSubmissionResponse,
    "CreateTemplateFromUploadData": createTemplateFromUploadData_1.CreateTemplateFromUploadData,
    "DeleteTemplateResponse": deleteTemplateResponse_1.DeleteTemplateResponse,
    "Folder": folder_1.Folder,
    "FullTemplate": fullTemplate_1.FullTemplate,
    "FullTemplateDefaults": fullTemplateDefaults_1.FullTemplateDefaults,
    "HtmlTemplateData": htmlTemplateData_1.HtmlTemplateData,
    "InvalidRequest": invalidRequest_1.InvalidRequest,
    "ListSubmissionsResponse": listSubmissionsResponse_1.ListSubmissionsResponse,
    "ModelError": modelError_1.ModelError,
    "MoveFolderData": moveFolderData_1.MoveFolderData,
    "MoveTemplateData": moveTemplateData_1.MoveTemplateData,
    "PendingTemplate": pendingTemplate_1.PendingTemplate,
    "RenameFolderData": renameFolderData_1.RenameFolderData,
    "Submission": submission_1.Submission,
    "SubmissionAction": submissionAction_1.SubmissionAction,
    "SubmissionBatch": submissionBatch_1.SubmissionBatch,
    "SubmissionBatchData": submissionBatchData_1.SubmissionBatchData,
    "SubmissionData": submissionData_1.SubmissionData,
    "SubmissionDataBatchRequest": submissionDataBatchRequest_1.SubmissionDataBatchRequest,
    "SubmissionDataRequest": submissionDataRequest_1.SubmissionDataRequest,
    "Template": template_1.Template,
    "TemplateData": templateData_1.TemplateData,
    "UpdateDataRequestResponse": updateDataRequestResponse_1.UpdateDataRequestResponse,
    "UpdateSubmissionDataRequestData": updateSubmissionDataRequestData_1.UpdateSubmissionDataRequestData,
    "UpdateTemplateData": updateTemplateData_1.UpdateTemplateData,
    "UpdateTemplateResponse": updateTemplateResponse_1.UpdateTemplateResponse,
    "UploadTemplateData": uploadTemplateData_1.UploadTemplateData,
    "UploadTemplateDataDocument": uploadTemplateDataDocument_1.UploadTemplateDataDocument,
    "UploadTemplateDataDocumentMetadata": uploadTemplateDataDocumentMetadata_1.UploadTemplateDataDocumentMetadata,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map