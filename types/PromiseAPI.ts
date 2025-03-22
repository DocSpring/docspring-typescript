import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddFieldsData } from '../models/AddFieldsData';
import { BatchGeneratePdfs201Response } from '../models/BatchGeneratePdfs201Response';
import { CombinePdfsData } from '../models/CombinePdfsData';
import { CombinedSubmission } from '../models/CombinedSubmission';
import { CombinedSubmissionAction } from '../models/CombinedSubmissionAction';
import { CombinedSubmissionData } from '../models/CombinedSubmissionData';
import { CopyTemplateOptions } from '../models/CopyTemplateOptions';
import { CreateCombinedSubmissionResponse } from '../models/CreateCombinedSubmissionResponse';
import { CreateCustomFileData } from '../models/CreateCustomFileData';
import { CreateCustomFileResponse } from '../models/CreateCustomFileResponse';
import { CreateFolderData } from '../models/CreateFolderData';
import { CreateHtmlSubmissionData } from '../models/CreateHtmlSubmissionData';
import { CreateHtmlTemplate } from '../models/CreateHtmlTemplate';
import { CreatePdfSubmissionData } from '../models/CreatePdfSubmissionData';
import { CreatePdfTemplate } from '../models/CreatePdfTemplate';
import { CreateSubmissionDataRequestData } from '../models/CreateSubmissionDataRequestData';
import { CreateSubmissionDataRequestEventRequest } from '../models/CreateSubmissionDataRequestEventRequest';
import { CreateSubmissionDataRequestEventResponse } from '../models/CreateSubmissionDataRequestEventResponse';
import { CreateSubmissionDataRequestResponse } from '../models/CreateSubmissionDataRequestResponse';
import { CreateSubmissionDataRequestTokenResponse } from '../models/CreateSubmissionDataRequestTokenResponse';
import { CreateSubmissionResponse } from '../models/CreateSubmissionResponse';
import { CustomFile } from '../models/CustomFile';
import { ErrorResponse } from '../models/ErrorResponse';
import { Folder } from '../models/Folder';
import { JsonSchema } from '../models/JsonSchema';
import { ListSubmissionsResponse } from '../models/ListSubmissionsResponse';
import { MoveFolderData } from '../models/MoveFolderData';
import { MoveTemplateData } from '../models/MoveTemplateData';
import { MultipleErrorsResponse } from '../models/MultipleErrorsResponse';
import { PublishVersionData } from '../models/PublishVersionData';
import { RenameFolderData } from '../models/RenameFolderData';
import { RestoreVersionData } from '../models/RestoreVersionData';
import { Submission } from '../models/Submission';
import { SubmissionAction } from '../models/SubmissionAction';
import { SubmissionBatch } from '../models/SubmissionBatch';
import { SubmissionBatchData } from '../models/SubmissionBatchData';
import { SubmissionBatchWithSubmissions } from '../models/SubmissionBatchWithSubmissions';
import { SubmissionDataRequest } from '../models/SubmissionDataRequest';
import { SubmissionDataRequestEvent } from '../models/SubmissionDataRequestEvent';
import { SubmissionDataRequestShow } from '../models/SubmissionDataRequestShow';
import { SubmissionDataRequestToken } from '../models/SubmissionDataRequestToken';
import { SubmissionPreview } from '../models/SubmissionPreview';
import { SuccessErrorResponse } from '../models/SuccessErrorResponse';
import { SuccessMultipleErrorsResponse } from '../models/SuccessMultipleErrorsResponse';
import { Template } from '../models/Template';
import { TemplateAddFieldsResponse } from '../models/TemplateAddFieldsResponse';
import { TemplateDeleteResponse } from '../models/TemplateDeleteResponse';
import { TemplatePreview } from '../models/TemplatePreview';
import { TemplatePublishVersionResponse } from '../models/TemplatePublishVersionResponse';
import { UpdateHtmlTemplate } from '../models/UpdateHtmlTemplate';
import { UpdateSubmissionDataRequestData } from '../models/UpdateSubmissionDataRequestData';
import { UploadPresignResponse } from '../models/UploadPresignResponse';
import { ObservablePDFApi } from './ObservableAPI';

import { PDFApiRequestFactory, PDFApiResponseProcessor} from "../apis/PDFApi";
export class PromisePDFApi {
    private api: ObservablePDFApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PDFApiRequestFactory,
        responseProcessor?: PDFApiResponseProcessor
    ) {
        this.api = new ObservablePDFApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplateWithHttpInfo(templateId: string, data: AddFieldsData, _options?: Configuration): Promise<HttpInfo<TemplateAddFieldsResponse>> {
        const result = this.api.addFieldsToTemplateWithHttpInfo(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplate(templateId: string, data: AddFieldsData, _options?: Configuration): Promise<TemplateAddFieldsResponse> {
        const result = this.api.addFieldsToTemplate(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Generates multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfsWithHttpInfo(data: SubmissionBatchData, wait?: boolean, _options?: Configuration): Promise<HttpInfo<BatchGeneratePdfs201Response>> {
        const result = this.api.batchGeneratePdfsWithHttpInfo(data, wait, _options);
        return result.toPromise();
    }

    /**
     * Generates multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfs(data: SubmissionBatchData, wait?: boolean, _options?: Configuration): Promise<BatchGeneratePdfs201Response> {
        const result = this.api.batchGeneratePdfs(data, wait, _options);
        return result.toPromise();
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfsWithHttpInfo(data: CombinePdfsData, _options?: Configuration): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        const result = this.api.combinePdfsWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfs(data: CombinePdfsData, _options?: Configuration): Promise<CreateCombinedSubmissionResponse> {
        const result = this.api.combinePdfs(data, _options);
        return result.toPromise();
    }

    /**
     * Merge generated PDFs together
     * @param data
     * @param [wait] Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public combineSubmissionsWithHttpInfo(data: CombinedSubmissionData, wait?: boolean, _options?: Configuration): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        const result = this.api.combineSubmissionsWithHttpInfo(data, wait, _options);
        return result.toPromise();
    }

    /**
     * Merge generated PDFs together
     * @param data
     * @param [wait] Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public combineSubmissions(data: CombinedSubmissionData, wait?: boolean, _options?: Configuration): Promise<CreateCombinedSubmissionResponse> {
        const result = this.api.combineSubmissions(data, wait, _options);
        return result.toPromise();
    }

    /**
     * Copy a Template
     * @param templateId
     * @param [options]
     */
    public copyTemplateWithHttpInfo(templateId: string, options?: CopyTemplateOptions, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.copyTemplateWithHttpInfo(templateId, options, _options);
        return result.toPromise();
    }

    /**
     * Copy a Template
     * @param templateId
     * @param [options]
     */
    public copyTemplate(templateId: string, options?: CopyTemplateOptions, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.copyTemplate(templateId, options, _options);
        return result.toPromise();
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param data
     */
    public createCustomFileFromUploadWithHttpInfo(data: CreateCustomFileData, _options?: Configuration): Promise<HttpInfo<CreateCustomFileResponse>> {
        const result = this.api.createCustomFileFromUploadWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param data
     */
    public createCustomFileFromUpload(data: CreateCustomFileData, _options?: Configuration): Promise<CreateCustomFileResponse> {
        const result = this.api.createCustomFileFromUpload(data, _options);
        return result.toPromise();
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEventWithHttpInfo(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        const result = this.api.createDataRequestEventWithHttpInfo(dataRequestId, event, _options);
        return result.toPromise();
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEvent(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: Configuration): Promise<CreateSubmissionDataRequestEventResponse> {
        const result = this.api.createDataRequestEvent(dataRequestId, event, _options);
        return result.toPromise();
    }

    /**
     * Creates a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestTokenWithHttpInfo(dataRequestId: string, type?: 'api' | 'email', _options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        const result = this.api.createDataRequestTokenWithHttpInfo(dataRequestId, type, _options);
        return result.toPromise();
    }

    /**
     * Creates a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestToken(dataRequestId: string, type?: 'api' | 'email', _options?: Configuration): Promise<CreateSubmissionDataRequestTokenResponse> {
        const result = this.api.createDataRequestToken(dataRequestId, type, _options);
        return result.toPromise();
    }

    /**
     * Create a folder
     * @param data
     */
    public createFolderWithHttpInfo(data: CreateFolderData, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.createFolderWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Create a folder
     * @param data
     */
    public createFolder(data: CreateFolderData, _options?: Configuration): Promise<Folder> {
        const result = this.api.createFolder(data, _options);
        return result.toPromise();
    }

    /**
     * Create a new HTML template
     * @param data
     */
    public createHTMLTemplateWithHttpInfo(data: CreateHtmlTemplate, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.createHTMLTemplateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Create a new HTML template
     * @param data
     */
    public createHTMLTemplate(data: CreateHtmlTemplate, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.createHTMLTemplate(data, _options);
        return result.toPromise();
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPDFTemplateWithHttpInfo(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.createPDFTemplateWithHttpInfo(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPDFTemplate(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.createPDFTemplate(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param data
     */
    public createPDFTemplateFromUploadWithHttpInfo(data: CreatePdfTemplate, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.createPDFTemplateFromUploadWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param data
     */
    public createPDFTemplateFromUpload(data: CreatePdfTemplate, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.createPDFTemplateFromUpload(data, _options);
        return result.toPromise();
    }

    /**
     * Delete a folder
     * @param folderId
     */
    public deleteFolderWithHttpInfo(folderId: string, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.deleteFolderWithHttpInfo(folderId, _options);
        return result.toPromise();
    }

    /**
     * Delete a folder
     * @param folderId
     */
    public deleteFolder(folderId: string, _options?: Configuration): Promise<Folder> {
        const result = this.api.deleteFolder(folderId, _options);
        return result.toPromise();
    }

    /**
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, _options?: Configuration): Promise<HttpInfo<TemplateDeleteResponse>> {
        const result = this.api.deleteTemplateWithHttpInfo(templateId, version, _options);
        return result.toPromise();
    }

    /**
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplate(templateId: string, version?: string, _options?: Configuration): Promise<TemplateDeleteResponse> {
        const result = this.api.deleteTemplate(templateId, version, _options);
        return result.toPromise();
    }

    /**
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: Configuration): Promise<HttpInfo<CombinedSubmission>> {
        const result = this.api.expireCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options);
        return result.toPromise();
    }

    /**
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmission(combinedSubmissionId: string, _options?: Configuration): Promise<CombinedSubmission> {
        const result = this.api.expireCombinedSubmission(combinedSubmissionId, _options);
        return result.toPromise();
    }

    /**
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: Configuration): Promise<HttpInfo<SubmissionPreview>> {
        const result = this.api.expireSubmissionWithHttpInfo(submissionId, _options);
        return result.toPromise();
    }

    /**
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmission(submissionId: string, _options?: Configuration): Promise<SubmissionPreview> {
        const result = this.api.expireSubmission(submissionId, _options);
        return result.toPromise();
    }

    /**
     * Generates a new PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfWithHttpInfo(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: Configuration): Promise<HttpInfo<CreateSubmissionResponse>> {
        const result = this.api.generatePdfWithHttpInfo(templateId, submission, wait, _options);
        return result.toPromise();
    }

    /**
     * Generates a new PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdf(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: Configuration): Promise<CreateSubmissionResponse> {
        const result = this.api.generatePdf(templateId, submission, wait, _options);
        return result.toPromise();
    }

    /**
     * Generates a new PDF for an HTML template
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfForHtmlTemplateWithHttpInfo(templateId: string, submission: CreateHtmlSubmissionData, wait?: boolean, _options?: Configuration): Promise<HttpInfo<CreateSubmissionResponse>> {
        const result = this.api.generatePdfForHtmlTemplateWithHttpInfo(templateId, submission, wait, _options);
        return result.toPromise();
    }

    /**
     * Generates a new PDF for an HTML template
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfForHtmlTemplate(templateId: string, submission: CreateHtmlSubmissionData, wait?: boolean, _options?: Configuration): Promise<CreateSubmissionResponse> {
        const result = this.api.generatePdfForHtmlTemplate(templateId, submission, wait, _options);
        return result.toPromise();
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreviewWithHttpInfo(submissionId: string, _options?: Configuration): Promise<HttpInfo<SuccessErrorResponse>> {
        const result = this.api.generatePreviewWithHttpInfo(submissionId, _options);
        return result.toPromise();
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreview(submissionId: string, _options?: Configuration): Promise<SuccessErrorResponse> {
        const result = this.api.generatePreview(submissionId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: Configuration): Promise<HttpInfo<CombinedSubmission>> {
        const result = this.api.getCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmission(combinedSubmissionId: string, _options?: Configuration): Promise<CombinedSubmission> {
        const result = this.api.getCombinedSubmission(combinedSubmissionId, _options);
        return result.toPromise();
    }

    /**
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequestWithHttpInfo(dataRequestId: string, _options?: Configuration): Promise<HttpInfo<SubmissionDataRequestShow>> {
        const result = this.api.getDataRequestWithHttpInfo(dataRequestId, _options);
        return result.toPromise();
    }

    /**
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequest(dataRequestId: string, _options?: Configuration): Promise<SubmissionDataRequestShow> {
        const result = this.api.getDataRequest(dataRequestId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplateWithHttpInfo(templateId: string, _options?: Configuration): Promise<HttpInfo<Template>> {
        const result = this.api.getFullTemplateWithHttpInfo(templateId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplate(templateId: string, _options?: Configuration): Promise<Template> {
        const result = this.api.getFullTemplate(templateId, _options);
        return result.toPromise();
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     */
    public getPresignUrlWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UploadPresignResponse>> {
        const result = this.api.getPresignUrlWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     */
    public getPresignUrl(_options?: Configuration): Promise<UploadPresignResponse> {
        const result = this.api.getPresignUrl(_options);
        return result.toPromise();
    }

    /**
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmissionWithHttpInfo(submissionId: string, includeData?: boolean, _options?: Configuration): Promise<HttpInfo<Submission>> {
        const result = this.api.getSubmissionWithHttpInfo(submissionId, includeData, _options);
        return result.toPromise();
    }

    /**
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmission(submissionId: string, includeData?: boolean, _options?: Configuration): Promise<Submission> {
        const result = this.api.getSubmission(submissionId, includeData, _options);
        return result.toPromise();
    }

    /**
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeSubmissions?: boolean, _options?: Configuration): Promise<HttpInfo<SubmissionBatchWithSubmissions>> {
        const result = this.api.getSubmissionBatchWithHttpInfo(submissionBatchId, includeSubmissions, _options);
        return result.toPromise();
    }

    /**
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatch(submissionBatchId: string, includeSubmissions?: boolean, _options?: Configuration): Promise<SubmissionBatchWithSubmissions> {
        const result = this.api.getSubmissionBatch(submissionBatchId, includeSubmissions, _options);
        return result.toPromise();
    }

    /**
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplateWithHttpInfo(templateId: string, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.getTemplateWithHttpInfo(templateId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplate(templateId: string, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.getTemplate(templateId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, _options?: Configuration): Promise<HttpInfo<JsonSchema>> {
        const result = this.api.getTemplateSchemaWithHttpInfo(templateId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchema(templateId: string, _options?: Configuration): Promise<JsonSchema> {
        const result = this.api.getTemplateSchema(templateId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissionsWithHttpInfo(page?: number, perPage?: number, _options?: Configuration): Promise<HttpInfo<Array<CombinedSubmission>>> {
        const result = this.api.listCombinedSubmissionsWithHttpInfo(page, perPage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissions(page?: number, perPage?: number, _options?: Configuration): Promise<Array<CombinedSubmission>> {
        const result = this.api.listCombinedSubmissions(page, perPage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, _options?: Configuration): Promise<HttpInfo<Array<Folder>>> {
        const result = this.api.listFoldersWithHttpInfo(parentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFolders(parentFolderId?: string, _options?: Configuration): Promise<Array<Folder>> {
        const result = this.api.listFolders(parentFolderId, _options);
        return result.toPromise();
    }

    /**
     * List all submissions
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listSubmissionsWithHttpInfo(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Promise<HttpInfo<ListSubmissionsResponse>> {
        const result = this.api.listSubmissionsWithHttpInfo(cursor, limit, createdAfter, createdBefore, type, includeData, _options);
        return result.toPromise();
    }

    /**
     * List all submissions
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listSubmissions(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Promise<ListSubmissionsResponse> {
        const result = this.api.listSubmissions(cursor, limit, createdAfter, createdBefore, type, includeData, _options);
        return result.toPromise();
    }

    /**
     * List all submissions for a given template
     * @param templateId
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listTemplateSubmissionsWithHttpInfo(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Promise<HttpInfo<ListSubmissionsResponse>> {
        const result = this.api.listTemplateSubmissionsWithHttpInfo(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _options);
        return result.toPromise();
    }

    /**
     * List all submissions for a given template
     * @param templateId
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listTemplateSubmissions(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Promise<ListSubmissionsResponse> {
        const result = this.api.listTemplateSubmissions(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: Configuration): Promise<HttpInfo<Array<TemplatePreview>>> {
        const result = this.api.listTemplatesWithHttpInfo(query, parentFolderId, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplates(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: Configuration): Promise<Array<TemplatePreview>> {
        const result = this.api.listTemplates(query, parentFolderId, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolderWithHttpInfo(folderId: string, data: MoveFolderData, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.moveFolderToFolderWithHttpInfo(folderId, data, _options);
        return result.toPromise();
    }

    /**
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolder(folderId: string, data: MoveFolderData, _options?: Configuration): Promise<Folder> {
        const result = this.api.moveFolderToFolder(folderId, data, _options);
        return result.toPromise();
    }

    /**
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolderWithHttpInfo(templateId: string, data: MoveTemplateData, _options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        const result = this.api.moveTemplateToFolderWithHttpInfo(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolder(templateId: string, data: MoveTemplateData, _options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.moveTemplateToFolder(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, data: PublishVersionData, _options?: Configuration): Promise<HttpInfo<TemplatePublishVersionResponse>> {
        const result = this.api.publishTemplateVersionWithHttpInfo(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersion(templateId: string, data: PublishVersionData, _options?: Configuration): Promise<TemplatePublishVersionResponse> {
        const result = this.api.publishTemplateVersion(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolderWithHttpInfo(folderId: string, data: RenameFolderData, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.renameFolderWithHttpInfo(folderId, data, _options);
        return result.toPromise();
    }

    /**
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolder(folderId: string, data: RenameFolderData, _options?: Configuration): Promise<Folder> {
        const result = this.api.renameFolder(folderId, data, _options);
        return result.toPromise();
    }

    /**
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, data: RestoreVersionData, _options?: Configuration): Promise<HttpInfo<SuccessErrorResponse>> {
        const result = this.api.restoreTemplateVersionWithHttpInfo(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersion(templateId: string, data: RestoreVersionData, _options?: Configuration): Promise<SuccessErrorResponse> {
        const result = this.api.restoreTemplateVersion(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Test Authentication
     */
    public testAuthenticationWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SuccessErrorResponse>> {
        const result = this.api.testAuthenticationWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Test Authentication
     */
    public testAuthentication(_options?: Configuration): Promise<SuccessErrorResponse> {
        const result = this.api.testAuthentication(_options);
        return result.toPromise();
    }

    /**
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequestWithHttpInfo(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestResponse>> {
        const result = this.api.updateDataRequestWithHttpInfo(dataRequestId, data, _options);
        return result.toPromise();
    }

    /**
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequest(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: Configuration): Promise<CreateSubmissionDataRequestResponse> {
        const result = this.api.updateDataRequest(dataRequestId, data, _options);
        return result.toPromise();
    }

    /**
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplateWithHttpInfo(templateId: string, data: UpdateHtmlTemplate, _options?: Configuration): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        const result = this.api.updateTemplateWithHttpInfo(templateId, data, _options);
        return result.toPromise();
    }

    /**
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplate(templateId: string, data: UpdateHtmlTemplate, _options?: Configuration): Promise<SuccessMultipleErrorsResponse> {
        const result = this.api.updateTemplate(templateId, data, _options);
        return result.toPromise();
    }


}



