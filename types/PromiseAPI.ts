import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { createConfiguration } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AddFieldsData } from '../models/AddFieldsData';
import { BatchGeneratePdfs201Response } from '../models/BatchGeneratePdfs201Response';
import { CombinePdfsData } from '../models/CombinePdfsData';
import { CombinedSubmission } from '../models/CombinedSubmission';
import { CombinedSubmissionAction } from '../models/CombinedSubmissionAction';
import { CopyTemplateOptions } from '../models/CopyTemplateOptions';
import { CreateCombinedSubmissionResponse } from '../models/CreateCombinedSubmissionResponse';
import { CreateCustomFileData } from '../models/CreateCustomFileData';
import { CreateCustomFileResponse } from '../models/CreateCustomFileResponse';
import { CreateFolderData } from '../models/CreateFolderData';
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
import { ErrorOrMultipleErrorsResponse } from '../models/ErrorOrMultipleErrorsResponse';
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
import { Submission422Response } from '../models/Submission422Response';
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
import { UpdatePdfTemplate } from '../models/UpdatePdfTemplate';
import { UpdateSubmissionDataRequestData } from '../models/UpdateSubmissionDataRequestData';
import { UploadPresignResponse } from '../models/UploadPresignResponse';
import { ObservableClient } from './ObservableAPI';

import { ClientRequestFactory, ClientResponseProcessor} from "../apis/Client";
export class PromiseClient {
    private api: ObservableClient

        public constructor(
        configuration?: Configuration | { apiTokenId?: string; apiTokenSecret?: string; baseServer?: any },
        requestFactory?: ClientRequestFactory,
        responseProcessor?: ClientResponseProcessor
    ) {
        // Support environment variables for authentication
        if (!configuration || (configuration && !('authMethods' in configuration))) {
            const options = configuration as { apiTokenId?: string; apiTokenSecret?: string; baseServer?: any } || {};

            const apiTokenId = options.apiTokenId ||
                (typeof process !== 'undefined' && process.env ? process.env['DOCSPRING_TOKEN_ID'] : undefined);
            const apiTokenSecret = options.apiTokenSecret ||
                (typeof process !== 'undefined' && process.env ? process.env['DOCSPRING_TOKEN_SECRET'] : undefined);

            const configParams: any = {};

            if (apiTokenId && apiTokenSecret) {
                configParams.authMethods = {
                    api_token_basic: {
                        username: apiTokenId,
                        password: apiTokenSecret
                    }
                };
            }

            if (options.baseServer) {
                configParams.baseServer = options.baseServer;
            }

            configuration = createConfiguration(configParams);
        }

        this.api = new ObservableClient(configuration as Configuration, requestFactory, responseProcessor);
    }


    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplateWithHttpInfo(templateId: string, data: AddFieldsData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateAddFieldsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFieldsToTemplateWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplate(templateId: string, data: AddFieldsData, _options?: PromiseConfigurationOptions): Promise<TemplateAddFieldsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addFieldsToTemplate(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfsWithHttpInfo(data: SubmissionBatchData, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchGeneratePdfs201Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchGeneratePdfsWithHttpInfo(data, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfs(data: SubmissionBatchData, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchGeneratePdfs201Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.batchGeneratePdfs(data, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfsWithHttpInfo(data: CombinePdfsData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.combinePdfsWithHttpInfo(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfs(data: CombinePdfsData, _options?: PromiseConfigurationOptions): Promise<CreateCombinedSubmissionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.combinePdfs(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param templateId
     * @param [options]
     */
    public copyTemplateWithHttpInfo(templateId: string, options?: CopyTemplateOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplateWithHttpInfo(templateId, options, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param templateId
     * @param [options]
     */
    public copyTemplate(templateId: string, options?: CopyTemplateOptions, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplate(templateId, options, observableOptions);
        return result.toPromise();
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param data
     */
    public createCustomFileFromUploadWithHttpInfo(data: CreateCustomFileData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCustomFileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUploadWithHttpInfo(data, observableOptions);
        return result.toPromise();
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param data
     */
    public createCustomFileFromUpload(data: CreateCustomFileData, _options?: PromiseConfigurationOptions): Promise<CreateCustomFileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUpload(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEventWithHttpInfo(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataRequestEventWithHttpInfo(dataRequestId, event, observableOptions);
        return result.toPromise();
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEvent(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: PromiseConfigurationOptions): Promise<CreateSubmissionDataRequestEventResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataRequestEvent(dataRequestId, event, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestTokenWithHttpInfo(dataRequestId: string, type?: 'api' | 'email', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataRequestTokenWithHttpInfo(dataRequestId, type, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestToken(dataRequestId: string, type?: 'api' | 'email', _options?: PromiseConfigurationOptions): Promise<CreateSubmissionDataRequestTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataRequestToken(dataRequestId, type, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param data
     */
    public createFolderWithHttpInfo(data: CreateFolderData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolderWithHttpInfo(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param data
     */
    public createFolder(data: CreateFolderData, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolder(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param data
     */
    public createHtmlTemplateWithHttpInfo(data: CreateHtmlTemplate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createHtmlTemplateWithHttpInfo(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param data
     */
    public createHtmlTemplate(data: CreateHtmlTemplate, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createHtmlTemplate(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPdfTemplateWithHttpInfo(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfTemplateWithHttpInfo(templateDocument, templateName, wait, templateDescription, templateParentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPdfTemplate(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfTemplate(templateDocument, templateName, wait, templateDescription, templateParentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param data
     */
    public createPdfTemplateFromUploadWithHttpInfo(data: CreatePdfTemplate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfTemplateFromUploadWithHttpInfo(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param data
     */
    public createPdfTemplateFromUpload(data: CreatePdfTemplate, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPdfTemplateFromUpload(data, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param folderId
     */
    public deleteFolderWithHttpInfo(folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolderWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param folderId
     */
    public deleteFolder(folderId: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolder(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateDeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplateWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplate(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplateDeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplate(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedSubmission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedSubmissionWithHttpInfo(combinedSubmissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmission(combinedSubmissionId: string, _options?: PromiseConfigurationOptions): Promise<CombinedSubmission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedSubmission(combinedSubmissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionPreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmissionWithHttpInfo(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmission(submissionId: string, _options?: PromiseConfigurationOptions): Promise<SubmissionPreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmission(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfWithHttpInfo(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateSubmissionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generatePdfWithHttpInfo(templateId, submission, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdf(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<CreateSubmissionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generatePdf(templateId, submission, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreviewWithHttpInfo(submissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generatePreviewWithHttpInfo(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreview(submissionId: string, _options?: PromiseConfigurationOptions): Promise<SuccessErrorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generatePreview(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedSubmission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCombinedSubmissionWithHttpInfo(combinedSubmissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmission(combinedSubmissionId: string, _options?: PromiseConfigurationOptions): Promise<CombinedSubmission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCombinedSubmission(combinedSubmissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequestWithHttpInfo(dataRequestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionDataRequestShow>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDataRequestWithHttpInfo(dataRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequest(dataRequestId: string, _options?: PromiseConfigurationOptions): Promise<SubmissionDataRequestShow> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDataRequest(dataRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplateWithHttpInfo(templateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFullTemplateWithHttpInfo(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplate(templateId: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFullTemplate(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     */
    public getPresignUrlWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadPresignResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPresignUrlWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     */
    public getPresignUrl(_options?: PromiseConfigurationOptions): Promise<UploadPresignResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPresignUrl(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmissionWithHttpInfo(submissionId: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionWithHttpInfo(submissionId, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmission(submissionId: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmission(submissionId, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeSubmissions?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionBatchWithSubmissions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionBatchWithHttpInfo(submissionBatchId, includeSubmissions, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatch(submissionBatchId: string, includeSubmissions?: boolean, _options?: PromiseConfigurationOptions): Promise<SubmissionBatchWithSubmissions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionBatch(submissionBatchId, includeSubmissions, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplateWithHttpInfo(templateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateWithHttpInfo(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplate(templateId: string, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplate(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JsonSchema>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateSchemaWithHttpInfo(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchema(templateId: string, _options?: PromiseConfigurationOptions): Promise<JsonSchema> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateSchema(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissionsWithHttpInfo(page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CombinedSubmission>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCombinedSubmissionsWithHttpInfo(page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissions(page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<Array<CombinedSubmission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCombinedSubmissions(page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<Folder>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFoldersWithHttpInfo(parentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFolders(parentFolderId?: string, _options?: PromiseConfigurationOptions): Promise<Array<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFolders(parentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 
     * List all submissions
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listSubmissionsWithHttpInfo(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSubmissionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubmissionsWithHttpInfo(cursor, limit, createdAfter, createdBefore, type, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 
     * List all submissions
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listSubmissions(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<ListSubmissionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubmissions(cursor, limit, createdAfter, createdBefore, type, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 
     * List all submissions for a given template
     * @param templateId
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listTemplateSubmissionsWithHttpInfo(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSubmissionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateSubmissionsWithHttpInfo(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 
     * List all submissions for a given template
     * @param templateId
     * @param [cursor]
     * @param [limit]
     * @param [createdAfter]
     * @param [createdBefore]
     * @param [type]
     * @param [includeData]
     */
    public listTemplateSubmissions(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<ListSubmissionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateSubmissions(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TemplatePreview>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplatesWithHttpInfo(query, parentFolderId, page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplates(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: PromiseConfigurationOptions): Promise<Array<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplates(query, parentFolderId, page, perPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolderWithHttpInfo(folderId: string, data: MoveFolderData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolderToFolderWithHttpInfo(folderId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolder(folderId: string, data: MoveFolderData, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolderToFolder(folderId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolderWithHttpInfo(templateId: string, data: MoveTemplateData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplateToFolderWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolder(templateId: string, data: MoveTemplateData, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplateToFolder(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, data: PublishVersionData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePublishVersionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersionWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersion(templateId: string, data: PublishVersionData, _options?: PromiseConfigurationOptions): Promise<TemplatePublishVersionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersion(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolderWithHttpInfo(folderId: string, data: RenameFolderData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolderWithHttpInfo(folderId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolder(folderId: string, data: RenameFolderData, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolder(folderId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, data: RestoreVersionData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersionWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersion(templateId: string, data: RestoreVersionData, _options?: PromiseConfigurationOptions): Promise<SuccessErrorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersion(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthenticationWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testAuthenticationWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthentication(_options?: PromiseConfigurationOptions): Promise<SuccessErrorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testAuthentication(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequestWithHttpInfo(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDataRequestWithHttpInfo(dataRequestId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequest(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: PromiseConfigurationOptions): Promise<CreateSubmissionDataRequestResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDataRequest(dataRequestId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplateWithHttpInfo(templateId: string, data: UpdateHtmlTemplate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplate(templateId: string, data: UpdateHtmlTemplate, _options?: PromiseConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplate(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param templateId
     * @param templateDocument
     * @param [templateName]
     */
    public updateTemplateDocumentWithHttpInfo(templateId: string, templateDocument: HttpFile, templateName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocumentWithHttpInfo(templateId, templateDocument, templateName, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param templateId
     * @param templateDocument
     * @param [templateName]
     */
    public updateTemplateDocument(templateId: string, templateDocument: HttpFile, templateName?: string, _options?: PromiseConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocument(templateId, templateDocument, templateName, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param templateId
     * @param data
     */
    public updateTemplateDocumentFromUploadWithHttpInfo(templateId: string, data: UpdatePdfTemplate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocumentFromUploadWithHttpInfo(templateId, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param templateId
     * @param data
     */
    public updateTemplateDocumentFromUpload(templateId: string, data: UpdatePdfTemplate, _options?: PromiseConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocumentFromUpload(templateId, data, observableOptions);
        return result.toPromise();
    }


}



