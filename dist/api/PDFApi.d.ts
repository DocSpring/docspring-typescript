/// <reference types="node" />
import http from 'http';
import { AddFieldsData } from '../model/addFieldsData';
import { AddFieldsTemplateResponse } from '../model/addFieldsTemplateResponse';
import { AuthenticationSuccessResponse } from '../model/authenticationSuccessResponse';
import { CombinePdfsData } from '../model/combinePdfsData';
import { CombinedSubmission } from '../model/combinedSubmission';
import { CombinedSubmissionData } from '../model/combinedSubmissionData';
import { CopyTemplateData } from '../model/copyTemplateData';
import { CreateCombinedSubmissionResponse } from '../model/createCombinedSubmissionResponse';
import { CreateCustomFileData } from '../model/createCustomFileData';
import { CreateCustomFileResponse } from '../model/createCustomFileResponse';
import { CreateFolderData } from '../model/createFolderData';
import { CreateHtmlTemplateData } from '../model/createHtmlTemplateData';
import { CreateSubmissionBatchResponse } from '../model/createSubmissionBatchResponse';
import { CreateSubmissionDataRequestTokenResponse } from '../model/createSubmissionDataRequestTokenResponse';
import { CreateSubmissionResponse } from '../model/createSubmissionResponse';
import { CreateTemplateFromUploadData } from '../model/createTemplateFromUploadData';
import { DeleteTemplateResponse } from '../model/deleteTemplateResponse';
import { Folder } from '../model/folder';
import { FullTemplate } from '../model/fullTemplate';
import { ListSubmissionsResponse } from '../model/listSubmissionsResponse';
import { MoveFolderData } from '../model/moveFolderData';
import { MoveTemplateData } from '../model/moveTemplateData';
import { PendingTemplate } from '../model/pendingTemplate';
import { RenameFolderData } from '../model/renameFolderData';
import { Submission } from '../model/submission';
import { SubmissionBatch } from '../model/submissionBatch';
import { SubmissionBatchData } from '../model/submissionBatchData';
import { SubmissionData } from '../model/submissionData';
import { SubmissionDataRequest } from '../model/submissionDataRequest';
import { Template } from '../model/template';
import { UpdateDataRequestResponse } from '../model/updateDataRequestResponse';
import { UpdateSubmissionDataRequestData } from '../model/updateSubmissionDataRequestData';
import { UpdateTemplateData } from '../model/updateTemplateData';
import { UpdateTemplateResponse } from '../model/updateTemplateResponse';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum PDFApiApiKeys {
}
export declare class PDFApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_token_basic: HttpBasicAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PDFApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    addFieldsToTemplate(templateId: string, data: AddFieldsData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddFieldsTemplateResponse;
    }>;
    batchGeneratePdfV1(templateId: string, data: Array<object>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<CreateSubmissionResponse>;
    }>;
    batchGeneratePdfs(data: SubmissionBatchData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSubmissionBatchResponse;
    }>;
    combinePdfs(data: CombinePdfsData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCombinedSubmissionResponse;
    }>;
    combineSubmissions(data: CombinedSubmissionData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCombinedSubmissionResponse;
    }>;
    copyTemplate(templateId: string, data?: CopyTemplateData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Template;
    }>;
    createCustomFileFromUpload(data: CreateCustomFileData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCustomFileResponse;
    }>;
    createDataRequestToken(dataRequestId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSubmissionDataRequestTokenResponse;
    }>;
    createFolder(data: CreateFolderData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    createHTMLTemplate(data: CreateHtmlTemplateData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PendingTemplate;
    }>;
    createPDFTemplate(templateDocument: RequestFile, templateName: string, templateParentFolderId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PendingTemplate;
    }>;
    createPDFTemplateFromUpload(data: CreateTemplateFromUploadData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PendingTemplate;
    }>;
    deleteFolder(folderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    deleteTemplate(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTemplateResponse;
    }>;
    expireCombinedSubmission(combinedSubmissionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CombinedSubmission;
    }>;
    expireSubmission(submissionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Submission;
    }>;
    generatePDF(templateId: string, data: SubmissionData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSubmissionResponse;
    }>;
    getCombinedSubmission(combinedSubmissionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CombinedSubmission;
    }>;
    getDataRequest(dataRequestId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubmissionDataRequest;
    }>;
    getFullTemplate(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FullTemplate;
    }>;
    getPresignUrl(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getSubmission(submissionId: string, includeData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Submission;
    }>;
    getSubmissionBatch(submissionBatchId: string, includeSubmissions?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubmissionBatch;
    }>;
    getTemplate(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Template;
    }>;
    getTemplateSchema(templateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    listCombinedSubmissions(page?: number, perPage?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<CombinedSubmission>;
    }>;
    listFolders(parentFolderId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Folder>;
    }>;
    listSubmissions(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSubmissionsResponse;
    }>;
    listSubmissions_1(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSubmissionsResponse;
    }>;
    listTemplates(query?: string, parentFolderId?: string, page?: number, perPage?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Template>;
    }>;
    moveFolderToFolder(folderId: string, data: MoveFolderData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    moveTemplateToFolder(templateId: string, data: MoveTemplateData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Template;
    }>;
    renameFolder(folderId: string, data: RenameFolderData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    testAuthentication(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AuthenticationSuccessResponse;
    }>;
    updateDataRequest(dataRequestId: string, data: UpdateSubmissionDataRequestData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateDataRequestResponse;
    }>;
    updateTemplate(templateId: string, data: UpdateTemplateData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTemplateResponse;
    }>;
}
