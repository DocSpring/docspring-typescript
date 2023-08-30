import localVarRequest from 'request';

export * from './addFieldsData';
export * from './addFieldsTemplateResponse';
export * from './authenticationError';
export * from './authenticationSuccessResponse';
export * from './combinedSubmission';
export * from './combinedSubmissionAction';
export * from './combinedSubmissionData';
export * from './copyTemplateData';
export * from './createCombinedSubmissionResponse';
export * from './createCustomFileResponse';
export * from './createFolderData';
export * from './createFolderDataFolder';
export * from './createHtmlTemplateData';
export * from './createSubmissionBatchResponse';
export * from './createSubmissionBatchSubmissionsResponse';
export * from './createSubmissionDataRequestData';
export * from './createSubmissionDataRequestTokenResponse';
export * from './createSubmissionDataRequestTokenResponseToken';
export * from './createSubmissionResponse';
export * from './createTemplateFromUploadData';
export * from './deleteTemplateResponse';
export * from './folder';
export * from './fullTemplate';
export * from './fullTemplateDefaults';
export * from './htmlTemplateData';
export * from './invalidRequest';
export * from './listSubmissionsResponse';
export * from './modelError';
export * from './moveFolderData';
export * from './moveTemplateData';
export * from './pendingTemplate';
export * from './renameFolderData';
export * from './submission';
export * from './submissionAction';
export * from './submissionBatch';
export * from './submissionBatchData';
export * from './submissionData';
export * from './submissionDataBatchRequest';
export * from './submissionDataRequest';
export * from './template';
export * from './templateData';
export * from './updateDataRequestResponse';
export * from './updateSubmissionDataRequestData';
export * from './updateTemplateData';
export * from './updateTemplateResponse';
export * from './uploadTemplateData';
export * from './uploadTemplateDataDocument';
export * from './uploadTemplateDataDocumentMetadata';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AddFieldsData } from './addFieldsData';
import { AddFieldsTemplateResponse } from './addFieldsTemplateResponse';
import { AuthenticationError } from './authenticationError';
import { AuthenticationSuccessResponse } from './authenticationSuccessResponse';
import { CombinedSubmission } from './combinedSubmission';
import { CombinedSubmissionAction } from './combinedSubmissionAction';
import { CombinedSubmissionData } from './combinedSubmissionData';
import { CopyTemplateData } from './copyTemplateData';
import { CreateCombinedSubmissionResponse } from './createCombinedSubmissionResponse';
import { CreateCustomFileResponse } from './createCustomFileResponse';
import { CreateFolderData } from './createFolderData';
import { CreateFolderDataFolder } from './createFolderDataFolder';
import { CreateHtmlTemplateData } from './createHtmlTemplateData';
import { CreateSubmissionBatchResponse } from './createSubmissionBatchResponse';
import { CreateSubmissionBatchSubmissionsResponse } from './createSubmissionBatchSubmissionsResponse';
import { CreateSubmissionDataRequestData } from './createSubmissionDataRequestData';
import { CreateSubmissionDataRequestTokenResponse } from './createSubmissionDataRequestTokenResponse';
import { CreateSubmissionDataRequestTokenResponseToken } from './createSubmissionDataRequestTokenResponseToken';
import { CreateSubmissionResponse } from './createSubmissionResponse';
import { CreateTemplateFromUploadData } from './createTemplateFromUploadData';
import { DeleteTemplateResponse } from './deleteTemplateResponse';
import { Folder } from './folder';
import { FullTemplate } from './fullTemplate';
import { FullTemplateDefaults } from './fullTemplateDefaults';
import { HtmlTemplateData } from './htmlTemplateData';
import { InvalidRequest } from './invalidRequest';
import { ListSubmissionsResponse } from './listSubmissionsResponse';
import { ModelError } from './modelError';
import { MoveFolderData } from './moveFolderData';
import { MoveTemplateData } from './moveTemplateData';
import { PendingTemplate } from './pendingTemplate';
import { RenameFolderData } from './renameFolderData';
import { Submission } from './submission';
import { SubmissionAction } from './submissionAction';
import { SubmissionBatch } from './submissionBatch';
import { SubmissionBatchData } from './submissionBatchData';
import { SubmissionData } from './submissionData';
import { SubmissionDataBatchRequest } from './submissionDataBatchRequest';
import { SubmissionDataRequest } from './submissionDataRequest';
import { Template } from './template';
import { TemplateData } from './templateData';
import { UpdateDataRequestResponse } from './updateDataRequestResponse';
import { UpdateSubmissionDataRequestData } from './updateSubmissionDataRequestData';
import { UpdateTemplateData } from './updateTemplateData';
import { UpdateTemplateResponse } from './updateTemplateResponse';
import { UploadTemplateData } from './uploadTemplateData';
import { UploadTemplateDataDocument } from './uploadTemplateDataDocument';
import { UploadTemplateDataDocumentMetadata } from './uploadTemplateDataDocumentMetadata';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AddFieldsTemplateResponse.StatusEnum": AddFieldsTemplateResponse.StatusEnum,
        "AuthenticationError.StatusEnum": AuthenticationError.StatusEnum,
        "AuthenticationSuccessResponse.StatusEnum": AuthenticationSuccessResponse.StatusEnum,
        "CombinedSubmission.StateEnum": CombinedSubmission.StateEnum,
        "CombinedSubmissionAction.StateEnum": CombinedSubmissionAction.StateEnum,
        "CombinedSubmissionAction.ActionCategoryEnum": CombinedSubmissionAction.ActionCategoryEnum,
        "CombinedSubmissionAction.ActionTypeEnum": CombinedSubmissionAction.ActionTypeEnum,
        "CreateCombinedSubmissionResponse.StatusEnum": CreateCombinedSubmissionResponse.StatusEnum,
        "CreateCustomFileResponse.StatusEnum": CreateCustomFileResponse.StatusEnum,
        "CreateSubmissionBatchResponse.StatusEnum": CreateSubmissionBatchResponse.StatusEnum,
        "CreateSubmissionBatchSubmissionsResponse.StatusEnum": CreateSubmissionBatchSubmissionsResponse.StatusEnum,
        "CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum": CreateSubmissionDataRequestData.AuthSecondFactorTypeEnum,
        "CreateSubmissionDataRequestData.AuthTypeEnum": CreateSubmissionDataRequestData.AuthTypeEnum,
        "CreateSubmissionDataRequestTokenResponse.StatusEnum": CreateSubmissionDataRequestTokenResponse.StatusEnum,
        "CreateSubmissionResponse.StatusEnum": CreateSubmissionResponse.StatusEnum,
        "DeleteTemplateResponse.StatusEnum": DeleteTemplateResponse.StatusEnum,
        "FullTemplate.ExpirationIntervalEnum": FullTemplate.ExpirationIntervalEnum,
        "HtmlTemplateData.ExpirationIntervalEnum": HtmlTemplateData.ExpirationIntervalEnum,
        "HtmlTemplateData.TemplateTypeEnum": HtmlTemplateData.TemplateTypeEnum,
        "InvalidRequest.StatusEnum": InvalidRequest.StatusEnum,
        "ModelError.StatusEnum": ModelError.StatusEnum,
        "PendingTemplate.ExpirationIntervalEnum": PendingTemplate.ExpirationIntervalEnum,
        "Submission.StateEnum": Submission.StateEnum,
        "SubmissionAction.StateEnum": SubmissionAction.StateEnum,
        "SubmissionAction.ActionCategoryEnum": SubmissionAction.ActionCategoryEnum,
        "SubmissionAction.ActionTypeEnum": SubmissionAction.ActionTypeEnum,
        "SubmissionBatch.StateEnum": SubmissionBatch.StateEnum,
        "SubmissionDataRequest.StateEnum": SubmissionDataRequest.StateEnum,
        "SubmissionDataRequest.AuthTypeEnum": SubmissionDataRequest.AuthTypeEnum,
        "SubmissionDataRequest.AuthSecondFactorTypeEnum": SubmissionDataRequest.AuthSecondFactorTypeEnum,
        "Template.ExpirationIntervalEnum": Template.ExpirationIntervalEnum,
        "TemplateData.ExpirationIntervalEnum": TemplateData.ExpirationIntervalEnum,
        "UpdateDataRequestResponse.StatusEnum": UpdateDataRequestResponse.StatusEnum,
        "UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum": UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum,
        "UpdateSubmissionDataRequestData.AuthTypeEnum": UpdateSubmissionDataRequestData.AuthTypeEnum,
        "UpdateTemplateResponse.StatusEnum": UpdateTemplateResponse.StatusEnum,
        "UploadTemplateData.ExpirationIntervalEnum": UploadTemplateData.ExpirationIntervalEnum,
        "UploadTemplateData.TemplateTypeEnum": UploadTemplateData.TemplateTypeEnum,
        "UploadTemplateDataDocument.StorageEnum": UploadTemplateDataDocument.StorageEnum,
        "UploadTemplateDataDocumentMetadata.MimeTypeEnum": UploadTemplateDataDocumentMetadata.MimeTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AddFieldsData": AddFieldsData,
    "AddFieldsTemplateResponse": AddFieldsTemplateResponse,
    "AuthenticationError": AuthenticationError,
    "AuthenticationSuccessResponse": AuthenticationSuccessResponse,
    "CombinedSubmission": CombinedSubmission,
    "CombinedSubmissionAction": CombinedSubmissionAction,
    "CombinedSubmissionData": CombinedSubmissionData,
    "CopyTemplateData": CopyTemplateData,
    "CreateCombinedSubmissionResponse": CreateCombinedSubmissionResponse,
    "CreateCustomFileResponse": CreateCustomFileResponse,
    "CreateFolderData": CreateFolderData,
    "CreateFolderDataFolder": CreateFolderDataFolder,
    "CreateHtmlTemplateData": CreateHtmlTemplateData,
    "CreateSubmissionBatchResponse": CreateSubmissionBatchResponse,
    "CreateSubmissionBatchSubmissionsResponse": CreateSubmissionBatchSubmissionsResponse,
    "CreateSubmissionDataRequestData": CreateSubmissionDataRequestData,
    "CreateSubmissionDataRequestTokenResponse": CreateSubmissionDataRequestTokenResponse,
    "CreateSubmissionDataRequestTokenResponseToken": CreateSubmissionDataRequestTokenResponseToken,
    "CreateSubmissionResponse": CreateSubmissionResponse,
    "CreateTemplateFromUploadData": CreateTemplateFromUploadData,
    "DeleteTemplateResponse": DeleteTemplateResponse,
    "Folder": Folder,
    "FullTemplate": FullTemplate,
    "FullTemplateDefaults": FullTemplateDefaults,
    "HtmlTemplateData": HtmlTemplateData,
    "InvalidRequest": InvalidRequest,
    "ListSubmissionsResponse": ListSubmissionsResponse,
    "ModelError": ModelError,
    "MoveFolderData": MoveFolderData,
    "MoveTemplateData": MoveTemplateData,
    "PendingTemplate": PendingTemplate,
    "RenameFolderData": RenameFolderData,
    "Submission": Submission,
    "SubmissionAction": SubmissionAction,
    "SubmissionBatch": SubmissionBatch,
    "SubmissionBatchData": SubmissionBatchData,
    "SubmissionData": SubmissionData,
    "SubmissionDataBatchRequest": SubmissionDataBatchRequest,
    "SubmissionDataRequest": SubmissionDataRequest,
    "Template": Template,
    "TemplateData": TemplateData,
    "UpdateDataRequestResponse": UpdateDataRequestResponse,
    "UpdateSubmissionDataRequestData": UpdateSubmissionDataRequestData,
    "UpdateTemplateData": UpdateTemplateData,
    "UpdateTemplateResponse": UpdateTemplateResponse,
    "UploadTemplateData": UploadTemplateData,
    "UploadTemplateDataDocument": UploadTemplateDataDocument,
    "UploadTemplateDataDocumentMetadata": UploadTemplateDataDocumentMetadata,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
