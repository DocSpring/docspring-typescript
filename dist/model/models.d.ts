/// <reference types="node" />
/// <reference types="node" />
import localVarRequest from 'request';
export * from './addFieldsData';
export * from './addFieldsTemplateResponse';
export * from './authenticationError';
export * from './authenticationSuccessResponse';
export * from './combinePdfsData';
export * from './combinedSubmission';
export * from './combinedSubmissionAction';
export * from './combinedSubmissionData';
export * from './copyTemplateData';
export * from './createCombinedSubmissionResponse';
export * from './createCustomFileData';
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
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
