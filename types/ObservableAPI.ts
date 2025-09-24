import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ClientRequestFactory, ClientResponseProcessor} from "../apis/Client";
export class ObservableClient {
    private requestFactory: ClientRequestFactory;
    private responseProcessor: ClientResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientRequestFactory,
        responseProcessor?: ClientResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientResponseProcessor();
    }

    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplateWithHttpInfo(templateId: string, data: AddFieldsData, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateAddFieldsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addFieldsToTemplate(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFieldsToTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplate(templateId: string, data: AddFieldsData, _options?: ConfigurationOptions): Observable<TemplateAddFieldsResponse> {
        return this.addFieldsToTemplateWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<TemplateAddFieldsResponse>) => apiResponse.data));
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfsWithHttpInfo(data: SubmissionBatchData, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<BatchGeneratePdfs201Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchGeneratePdfs(data, wait, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchGeneratePdfsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfs(data: SubmissionBatchData, wait?: boolean, _options?: ConfigurationOptions): Observable<BatchGeneratePdfs201Response> {
        return this.batchGeneratePdfsWithHttpInfo(data, wait, _options).pipe(map((apiResponse: HttpInfo<BatchGeneratePdfs201Response>) => apiResponse.data));
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfsWithHttpInfo(data: CombinePdfsData, _options?: ConfigurationOptions): Observable<HttpInfo<CreateCombinedSubmissionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.combinePdfs(data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.combinePdfsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfs(data: CombinePdfsData, _options?: ConfigurationOptions): Observable<CreateCombinedSubmissionResponse> {
        return this.combinePdfsWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<CreateCombinedSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param templateId
     * @param [options]
     */
    public copyTemplateWithHttpInfo(templateId: string, options?: CopyTemplateOptions, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.copyTemplate(templateId, options, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.copyTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param templateId
     * @param [options]
     */
    public copyTemplate(templateId: string, options?: CopyTemplateOptions, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.copyTemplateWithHttpInfo(templateId, options, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param data
     */
    public createCustomFileFromUploadWithHttpInfo(data: CreateCustomFileData, _options?: ConfigurationOptions): Observable<HttpInfo<CreateCustomFileResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCustomFileFromUpload(data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomFileFromUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param data
     */
    public createCustomFileFromUpload(data: CreateCustomFileData, _options?: ConfigurationOptions): Observable<CreateCustomFileResponse> {
        return this.createCustomFileFromUploadWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFileResponse>) => apiResponse.data));
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEventWithHttpInfo(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDataRequestEvent(dataRequestId, event, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDataRequestEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEvent(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: ConfigurationOptions): Observable<CreateSubmissionDataRequestEventResponse> {
        return this.createDataRequestEventWithHttpInfo(dataRequestId, event, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestEventResponse>) => apiResponse.data));
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestTokenWithHttpInfo(dataRequestId: string, type?: 'api' | 'email', _options?: ConfigurationOptions): Observable<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDataRequestToken(dataRequestId, type, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDataRequestTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestToken(dataRequestId: string, type?: 'api' | 'email', _options?: ConfigurationOptions): Observable<CreateSubmissionDataRequestTokenResponse> {
        return this.createDataRequestTokenWithHttpInfo(dataRequestId, type, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestTokenResponse>) => apiResponse.data));
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param data
     */
    public createFolderWithHttpInfo(data: CreateFolderData, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFolder(data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param data
     */
    public createFolder(data: CreateFolderData, _options?: ConfigurationOptions): Observable<Folder> {
        return this.createFolderWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param data
     */
    public createHtmlTemplateWithHttpInfo(data: CreateHtmlTemplate, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createHtmlTemplate(data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHtmlTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param data
     */
    public createHtmlTemplate(data: CreateHtmlTemplate, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.createHtmlTemplateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
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
    public createPdfTemplateWithHttpInfo(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPdfTemplate(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPdfTemplateWithHttpInfo(rsp)));
            }));
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
    public createPdfTemplate(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.createPdfTemplateWithHttpInfo(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param data
     */
    public createPdfTemplateFromUploadWithHttpInfo(data: CreatePdfTemplate, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPdfTemplateFromUpload(data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPdfTemplateFromUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param data
     */
    public createPdfTemplateFromUpload(data: CreatePdfTemplate, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.createPdfTemplateFromUploadWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param folderId
     */
    public deleteFolderWithHttpInfo(folderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFolder(folderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param folderId
     */
    public deleteFolder(folderId: string, _options?: ConfigurationOptions): Observable<Folder> {
        return this.deleteFolderWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateDeleteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTemplate(templateId, version, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param templateId
     * @param [version]
     */
    public deleteTemplate(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<TemplateDeleteResponse> {
        return this.deleteTemplateWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<TemplateDeleteResponse>) => apiResponse.data));
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedSubmission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.expireCombinedSubmission(combinedSubmissionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireCombinedSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmission(combinedSubmissionId: string, _options?: ConfigurationOptions): Observable<CombinedSubmission> {
        return this.expireCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options).pipe(map((apiResponse: HttpInfo<CombinedSubmission>) => apiResponse.data));
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionPreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.expireSubmission(submissionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmission(submissionId: string, _options?: ConfigurationOptions): Observable<SubmissionPreview> {
        return this.expireSubmissionWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<SubmissionPreview>) => apiResponse.data));
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfWithHttpInfo(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<CreateSubmissionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generatePdf(templateId, submission, wait, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generatePdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdf(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: ConfigurationOptions): Observable<CreateSubmissionResponse> {
        return this.generatePdfWithHttpInfo(templateId, submission, wait, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreviewWithHttpInfo(submissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessErrorResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generatePreview(submissionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generatePreviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreview(submissionId: string, _options?: ConfigurationOptions): Observable<SuccessErrorResponse> {
        return this.generatePreviewWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<SuccessErrorResponse>) => apiResponse.data));
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedSubmission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCombinedSubmission(combinedSubmissionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCombinedSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmission(combinedSubmissionId: string, _options?: ConfigurationOptions): Observable<CombinedSubmission> {
        return this.getCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options).pipe(map((apiResponse: HttpInfo<CombinedSubmission>) => apiResponse.data));
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequestWithHttpInfo(dataRequestId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionDataRequestShow>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDataRequest(dataRequestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDataRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequest(dataRequestId: string, _options?: ConfigurationOptions): Observable<SubmissionDataRequestShow> {
        return this.getDataRequestWithHttpInfo(dataRequestId, _options).pipe(map((apiResponse: HttpInfo<SubmissionDataRequestShow>) => apiResponse.data));
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplateWithHttpInfo(templateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFullTemplate(templateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFullTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param templateId
     */
    public getFullTemplate(templateId: string, _options?: ConfigurationOptions): Observable<Template> {
        return this.getFullTemplateWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     */
    public getPresignUrlWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UploadPresignResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPresignUrl(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPresignUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     */
    public getPresignUrl(_options?: ConfigurationOptions): Observable<UploadPresignResponse> {
        return this.getPresignUrlWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UploadPresignResponse>) => apiResponse.data));
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmissionWithHttpInfo(submissionId: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubmission(submissionId, includeData, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmission(submissionId: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<Submission> {
        return this.getSubmissionWithHttpInfo(submissionId, includeData, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeSubmissions?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionBatchWithSubmissions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubmissionBatch(submissionBatchId, includeSubmissions, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubmissionBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatch(submissionBatchId: string, includeSubmissions?: boolean, _options?: ConfigurationOptions): Observable<SubmissionBatchWithSubmissions> {
        return this.getSubmissionBatchWithHttpInfo(submissionBatchId, includeSubmissions, _options).pipe(map((apiResponse: HttpInfo<SubmissionBatchWithSubmissions>) => apiResponse.data));
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplateWithHttpInfo(templateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplate(templateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplate(templateId: string, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.getTemplateWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<JsonSchema>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplateSchema(templateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchema(templateId: string, _options?: ConfigurationOptions): Observable<JsonSchema> {
        return this.getTemplateSchemaWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<JsonSchema>) => apiResponse.data));
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissionsWithHttpInfo(page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CombinedSubmission>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCombinedSubmissions(page, perPage, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCombinedSubmissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissions(page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<Array<CombinedSubmission>> {
        return this.listCombinedSubmissionsWithHttpInfo(page, perPage, _options).pipe(map((apiResponse: HttpInfo<Array<CombinedSubmission>>) => apiResponse.data));
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<Folder>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFolders(parentFolderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFolders(parentFolderId?: string, _options?: ConfigurationOptions): Observable<Array<Folder>> {
        return this.listFoldersWithHttpInfo(parentFolderId, _options).pipe(map((apiResponse: HttpInfo<Array<Folder>>) => apiResponse.data));
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
    public listSubmissionsWithHttpInfo(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListSubmissionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSubmissions(cursor, limit, createdAfter, createdBefore, type, includeData, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubmissionsWithHttpInfo(rsp)));
            }));
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
    public listSubmissions(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<ListSubmissionsResponse> {
        return this.listSubmissionsWithHttpInfo(cursor, limit, createdAfter, createdBefore, type, includeData, _options).pipe(map((apiResponse: HttpInfo<ListSubmissionsResponse>) => apiResponse.data));
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
    public listTemplateSubmissionsWithHttpInfo(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListSubmissionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplateSubmissions(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplateSubmissionsWithHttpInfo(rsp)));
            }));
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
    public listTemplateSubmissions(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<ListSubmissionsResponse> {
        return this.listTemplateSubmissionsWithHttpInfo(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _options).pipe(map((apiResponse: HttpInfo<ListSubmissionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<TemplatePreview>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplates(query, parentFolderId, page, perPage, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplates(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: ConfigurationOptions): Observable<Array<TemplatePreview>> {
        return this.listTemplatesWithHttpInfo(query, parentFolderId, page, perPage, _options).pipe(map((apiResponse: HttpInfo<Array<TemplatePreview>>) => apiResponse.data));
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolderWithHttpInfo(folderId: string, data: MoveFolderData, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.moveFolderToFolder(folderId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveFolderToFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolder(folderId: string, data: MoveFolderData, _options?: ConfigurationOptions): Observable<Folder> {
        return this.moveFolderToFolderWithHttpInfo(folderId, data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolderWithHttpInfo(templateId: string, data: MoveTemplateData, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePreview>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.moveTemplateToFolder(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveTemplateToFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolder(templateId: string, data: MoveTemplateData, _options?: ConfigurationOptions): Observable<TemplatePreview> {
        return this.moveTemplateToFolderWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, data: PublishVersionData, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePublishVersionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.publishTemplateVersion(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishTemplateVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param templateId
     * @param data
     */
    public publishTemplateVersion(templateId: string, data: PublishVersionData, _options?: ConfigurationOptions): Observable<TemplatePublishVersionResponse> {
        return this.publishTemplateVersionWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<TemplatePublishVersionResponse>) => apiResponse.data));
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolderWithHttpInfo(folderId: string, data: RenameFolderData, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.renameFolder(folderId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolder(folderId: string, data: RenameFolderData, _options?: ConfigurationOptions): Observable<Folder> {
        return this.renameFolderWithHttpInfo(folderId, data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, data: RestoreVersionData, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessErrorResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.restoreTemplateVersion(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreTemplateVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param templateId
     * @param data
     */
    public restoreTemplateVersion(templateId: string, data: RestoreVersionData, _options?: ConfigurationOptions): Observable<SuccessErrorResponse> {
        return this.restoreTemplateVersionWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<SuccessErrorResponse>) => apiResponse.data));
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthenticationWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<SuccessErrorResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.testAuthentication(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testAuthenticationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthentication(_options?: ConfigurationOptions): Observable<SuccessErrorResponse> {
        return this.testAuthenticationWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccessErrorResponse>) => apiResponse.data));
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequestWithHttpInfo(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: ConfigurationOptions): Observable<HttpInfo<CreateSubmissionDataRequestResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDataRequest(dataRequestId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDataRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequest(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: ConfigurationOptions): Observable<CreateSubmissionDataRequestResponse> {
        return this.updateDataRequestWithHttpInfo(dataRequestId, data, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestResponse>) => apiResponse.data));
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplateWithHttpInfo(templateId: string, data: UpdateHtmlTemplate, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessMultipleErrorsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplate(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplate(templateId: string, data: UpdateHtmlTemplate, _options?: ConfigurationOptions): Observable<SuccessMultipleErrorsResponse> {
        return this.updateTemplateWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<SuccessMultipleErrorsResponse>) => apiResponse.data));
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param templateId
     * @param templateDocument
     * @param [templateName]
     */
    public updateTemplateDocumentWithHttpInfo(templateId: string, templateDocument: HttpFile, templateName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessMultipleErrorsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplateDocument(templateId, templateDocument, templateName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplateDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param templateId
     * @param templateDocument
     * @param [templateName]
     */
    public updateTemplateDocument(templateId: string, templateDocument: HttpFile, templateName?: string, _options?: ConfigurationOptions): Observable<SuccessMultipleErrorsResponse> {
        return this.updateTemplateDocumentWithHttpInfo(templateId, templateDocument, templateName, _options).pipe(map((apiResponse: HttpInfo<SuccessMultipleErrorsResponse>) => apiResponse.data));
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param templateId
     * @param data
     */
    public updateTemplateDocumentFromUploadWithHttpInfo(templateId: string, data: UpdatePdfTemplate, _options?: ConfigurationOptions): Observable<HttpInfo<SuccessMultipleErrorsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplateDocumentFromUpload(templateId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplateDocumentFromUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param templateId
     * @param data
     */
    public updateTemplateDocumentFromUpload(templateId: string, data: UpdatePdfTemplate, _options?: ConfigurationOptions): Observable<SuccessMultipleErrorsResponse> {
        return this.updateTemplateDocumentFromUploadWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<SuccessMultipleErrorsResponse>) => apiResponse.data));
    }

}
