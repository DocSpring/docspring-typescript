import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
import { RenameFolderData } from '../models/RenameFolderData';
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
import { TemplatePreview } from '../models/TemplatePreview';
import { UpdateHtmlTemplate } from '../models/UpdateHtmlTemplate';
import { UpdateSubmissionDataRequestData } from '../models/UpdateSubmissionDataRequestData';
import { UploadPresignResponse } from '../models/UploadPresignResponse';

import { PDFApiRequestFactory, PDFApiResponseProcessor} from "../apis/PDFApi";
export class ObservablePDFApi {
    private requestFactory: PDFApiRequestFactory;
    private responseProcessor: PDFApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PDFApiRequestFactory,
        responseProcessor?: PDFApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PDFApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PDFApiResponseProcessor();
    }

    /**
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplateWithHttpInfo(templateId: string, data: AddFieldsData, _options?: Configuration): Observable<HttpInfo<TemplateAddFieldsResponse>> {
        const requestContextPromise = this.requestFactory.addFieldsToTemplate(templateId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFieldsToTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new fields to a Template
     * @param templateId
     * @param data
     */
    public addFieldsToTemplate(templateId: string, data: AddFieldsData, _options?: Configuration): Observable<TemplateAddFieldsResponse> {
        return this.addFieldsToTemplateWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<TemplateAddFieldsResponse>) => apiResponse.data));
    }

    /**
     * Generates multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfsWithHttpInfo(data: SubmissionBatchData, wait?: boolean, _options?: Configuration): Observable<HttpInfo<BatchGeneratePdfs201Response>> {
        const requestContextPromise = this.requestFactory.batchGeneratePdfs(data, wait, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchGeneratePdfsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates multiple PDFs
     * @param data
     * @param [wait] Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public batchGeneratePdfs(data: SubmissionBatchData, wait?: boolean, _options?: Configuration): Observable<BatchGeneratePdfs201Response> {
        return this.batchGeneratePdfsWithHttpInfo(data, wait, _options).pipe(map((apiResponse: HttpInfo<BatchGeneratePdfs201Response>) => apiResponse.data));
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfsWithHttpInfo(data: CombinePdfsData, _options?: Configuration): Observable<HttpInfo<CreateCombinedSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.combinePdfs(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.combinePdfsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param data
     */
    public combinePdfs(data: CombinePdfsData, _options?: Configuration): Observable<CreateCombinedSubmissionResponse> {
        return this.combinePdfsWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<CreateCombinedSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Merge generated PDFs together
     * @param data
     * @param [wait] Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public combineSubmissionsWithHttpInfo(data: CombinedSubmissionData, wait?: boolean, _options?: Configuration): Observable<HttpInfo<CreateCombinedSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.combineSubmissions(data, wait, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.combineSubmissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merge generated PDFs together
     * @param data
     * @param [wait] Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public combineSubmissions(data: CombinedSubmissionData, wait?: boolean, _options?: Configuration): Observable<CreateCombinedSubmissionResponse> {
        return this.combineSubmissionsWithHttpInfo(data, wait, _options).pipe(map((apiResponse: HttpInfo<CreateCombinedSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Copy a Template
     * @param templateId
     * @param [options]
     */
    public copyTemplateWithHttpInfo(templateId: string, options?: CopyTemplateOptions, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.copyTemplate(templateId, options, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.copyTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Copy a Template
     * @param templateId
     * @param [options]
     */
    public copyTemplate(templateId: string, options?: CopyTemplateOptions, _options?: Configuration): Observable<TemplatePreview> {
        return this.copyTemplateWithHttpInfo(templateId, options, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param data
     */
    public createCustomFileFromUploadWithHttpInfo(data: CreateCustomFileData, _options?: Configuration): Observable<HttpInfo<CreateCustomFileResponse>> {
        const requestContextPromise = this.requestFactory.createCustomFileFromUpload(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomFileFromUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param data
     */
    public createCustomFileFromUpload(data: CreateCustomFileData, _options?: Configuration): Observable<CreateCustomFileResponse> {
        return this.createCustomFileFromUploadWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFileResponse>) => apiResponse.data));
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEventWithHttpInfo(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: Configuration): Observable<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        const requestContextPromise = this.requestFactory.createDataRequestEvent(dataRequestId, event, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDataRequestEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param dataRequestId
     * @param event
     */
    public createDataRequestEvent(dataRequestId: string, event: CreateSubmissionDataRequestEventRequest, _options?: Configuration): Observable<CreateSubmissionDataRequestEventResponse> {
        return this.createDataRequestEventWithHttpInfo(dataRequestId, event, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestEventResponse>) => apiResponse.data));
    }

    /**
     * Creates a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestTokenWithHttpInfo(dataRequestId: string, type?: 'api' | 'email', _options?: Configuration): Observable<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        const requestContextPromise = this.requestFactory.createDataRequestToken(dataRequestId, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDataRequestTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new data request token for form authentication
     * @param dataRequestId
     * @param [type]
     */
    public createDataRequestToken(dataRequestId: string, type?: 'api' | 'email', _options?: Configuration): Observable<CreateSubmissionDataRequestTokenResponse> {
        return this.createDataRequestTokenWithHttpInfo(dataRequestId, type, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestTokenResponse>) => apiResponse.data));
    }

    /**
     * Create a folder
     * @param data
     */
    public createFolderWithHttpInfo(data: CreateFolderData, _options?: Configuration): Observable<HttpInfo<Folder>> {
        const requestContextPromise = this.requestFactory.createFolder(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a folder
     * @param data
     */
    public createFolder(data: CreateFolderData, _options?: Configuration): Observable<Folder> {
        return this.createFolderWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Create a new HTML template
     * @param data
     */
    public createHTMLTemplateWithHttpInfo(data: CreateHtmlTemplate, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.createHTMLTemplate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createHTMLTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new HTML template
     * @param data
     */
    public createHTMLTemplate(data: CreateHtmlTemplate, _options?: Configuration): Observable<TemplatePreview> {
        return this.createHTMLTemplateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPDFTemplateWithHttpInfo(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.createPDFTemplate(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPDFTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param templateDocument
     * @param templateName
     * @param [wait] Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * @param [templateDescription]
     * @param [templateParentFolderId]
     */
    public createPDFTemplate(templateDocument: HttpFile, templateName: string, wait?: boolean, templateDescription?: string, templateParentFolderId?: string, _options?: Configuration): Observable<TemplatePreview> {
        return this.createPDFTemplateWithHttpInfo(templateDocument, templateName, wait, templateDescription, templateParentFolderId, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param data
     */
    public createPDFTemplateFromUploadWithHttpInfo(data: CreatePdfTemplate, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.createPDFTemplateFromUpload(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPDFTemplateFromUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param data
     */
    public createPDFTemplateFromUpload(data: CreatePdfTemplate, _options?: Configuration): Observable<TemplatePreview> {
        return this.createPDFTemplateFromUploadWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Delete a folder
     * @param folderId
     */
    public deleteFolderWithHttpInfo(folderId: string, _options?: Configuration): Observable<HttpInfo<Folder>> {
        const requestContextPromise = this.requestFactory.deleteFolder(folderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a folder
     * @param folderId
     */
    public deleteFolder(folderId: string, _options?: Configuration): Observable<Folder> {
        return this.deleteFolderWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Delete a template
     * @param templateId
     */
    public deleteTemplateWithHttpInfo(templateId: string, _options?: Configuration): Observable<HttpInfo<SuccessMultipleErrorsResponse>> {
        const requestContextPromise = this.requestFactory.deleteTemplate(templateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a template
     * @param templateId
     */
    public deleteTemplate(templateId: string, _options?: Configuration): Observable<SuccessMultipleErrorsResponse> {
        return this.deleteTemplateWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<SuccessMultipleErrorsResponse>) => apiResponse.data));
    }

    /**
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: Configuration): Observable<HttpInfo<CombinedSubmission>> {
        const requestContextPromise = this.requestFactory.expireCombinedSubmission(combinedSubmissionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireCombinedSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Expire a combined submission
     * @param combinedSubmissionId
     */
    public expireCombinedSubmission(combinedSubmissionId: string, _options?: Configuration): Observable<CombinedSubmission> {
        return this.expireCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options).pipe(map((apiResponse: HttpInfo<CombinedSubmission>) => apiResponse.data));
    }

    /**
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: Configuration): Observable<HttpInfo<SubmissionPreview>> {
        const requestContextPromise = this.requestFactory.expireSubmission(submissionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Expire a PDF submission
     * @param submissionId
     */
    public expireSubmission(submissionId: string, _options?: Configuration): Observable<SubmissionPreview> {
        return this.expireSubmissionWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<SubmissionPreview>) => apiResponse.data));
    }

    /**
     * Generates a new PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfWithHttpInfo(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: Configuration): Observable<HttpInfo<CreateSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.generatePdf(templateId, submission, wait, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generatePdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a new PDF
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdf(templateId: string, submission: CreatePdfSubmissionData, wait?: boolean, _options?: Configuration): Observable<CreateSubmissionResponse> {
        return this.generatePdfWithHttpInfo(templateId, submission, wait, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Generates a new PDF for an HTML template
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfForHtmlTemplateWithHttpInfo(templateId: string, submission: CreateHtmlSubmissionData, wait?: boolean, _options?: Configuration): Observable<HttpInfo<CreateSubmissionResponse>> {
        const requestContextPromise = this.requestFactory.generatePdfForHtmlTemplate(templateId, submission, wait, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generatePdfForHtmlTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a new PDF for an HTML template
     * @param templateId
     * @param submission
     * @param [wait] Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     */
    public generatePdfForHtmlTemplate(templateId: string, submission: CreateHtmlSubmissionData, wait?: boolean, _options?: Configuration): Observable<CreateSubmissionResponse> {
        return this.generatePdfForHtmlTemplateWithHttpInfo(templateId, submission, wait, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionResponse>) => apiResponse.data));
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreviewWithHttpInfo(submissionId: string, _options?: Configuration): Observable<HttpInfo<SuccessErrorResponse>> {
        const requestContextPromise = this.requestFactory.generatePreview(submissionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generatePreviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param submissionId
     */
    public generatePreview(submissionId: string, _options?: Configuration): Observable<SuccessErrorResponse> {
        return this.generatePreviewWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<SuccessErrorResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmissionWithHttpInfo(combinedSubmissionId: string, _options?: Configuration): Observable<HttpInfo<CombinedSubmission>> {
        const requestContextPromise = this.requestFactory.getCombinedSubmission(combinedSubmissionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCombinedSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param combinedSubmissionId
     */
    public getCombinedSubmission(combinedSubmissionId: string, _options?: Configuration): Observable<CombinedSubmission> {
        return this.getCombinedSubmissionWithHttpInfo(combinedSubmissionId, _options).pipe(map((apiResponse: HttpInfo<CombinedSubmission>) => apiResponse.data));
    }

    /**
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequestWithHttpInfo(dataRequestId: string, _options?: Configuration): Observable<HttpInfo<SubmissionDataRequestShow>> {
        const requestContextPromise = this.requestFactory.getDataRequest(dataRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDataRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Look up a submission data request
     * @param dataRequestId
     */
    public getDataRequest(dataRequestId: string, _options?: Configuration): Observable<SubmissionDataRequestShow> {
        return this.getDataRequestWithHttpInfo(dataRequestId, _options).pipe(map((apiResponse: HttpInfo<SubmissionDataRequestShow>) => apiResponse.data));
    }

    /**
     * Fetch the full template attributes
     * @param templateId
     */
    public getFullTemplateWithHttpInfo(templateId: string, _options?: Configuration): Observable<HttpInfo<Template>> {
        const requestContextPromise = this.requestFactory.getFullTemplate(templateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFullTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the full template attributes
     * @param templateId
     */
    public getFullTemplate(templateId: string, _options?: Configuration): Observable<Template> {
        return this.getFullTemplateWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     */
    public getPresignUrlWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UploadPresignResponse>> {
        const requestContextPromise = this.requestFactory.getPresignUrl(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPresignUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     */
    public getPresignUrl(_options?: Configuration): Observable<UploadPresignResponse> {
        return this.getPresignUrlWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UploadPresignResponse>) => apiResponse.data));
    }

    /**
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmissionWithHttpInfo(submissionId: string, includeData?: boolean, _options?: Configuration): Observable<HttpInfo<Submission>> {
        const requestContextPromise = this.requestFactory.getSubmission(submissionId, includeData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a PDF
     * @param submissionId
     * @param [includeData]
     */
    public getSubmission(submissionId: string, includeData?: boolean, _options?: Configuration): Observable<Submission> {
        return this.getSubmissionWithHttpInfo(submissionId, includeData, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeSubmissions?: boolean, _options?: Configuration): Observable<HttpInfo<SubmissionBatchWithSubmissions>> {
        const requestContextPromise = this.requestFactory.getSubmissionBatch(submissionBatchId, includeSubmissions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubmissionBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of a submission batch job
     * @param submissionBatchId
     * @param [includeSubmissions]
     */
    public getSubmissionBatch(submissionBatchId: string, includeSubmissions?: boolean, _options?: Configuration): Observable<SubmissionBatchWithSubmissions> {
        return this.getSubmissionBatchWithHttpInfo(submissionBatchId, includeSubmissions, _options).pipe(map((apiResponse: HttpInfo<SubmissionBatchWithSubmissions>) => apiResponse.data));
    }

    /**
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplateWithHttpInfo(templateId: string, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.getTemplate(templateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check the status of an uploaded template
     * @param templateId
     */
    public getTemplate(templateId: string, _options?: Configuration): Observable<TemplatePreview> {
        return this.getTemplateWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, _options?: Configuration): Observable<HttpInfo<JsonSchema>> {
        const requestContextPromise = this.requestFactory.getTemplateSchema(templateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the JSON schema for a template
     * @param templateId
     */
    public getTemplateSchema(templateId: string, _options?: Configuration): Observable<JsonSchema> {
        return this.getTemplateSchemaWithHttpInfo(templateId, _options).pipe(map((apiResponse: HttpInfo<JsonSchema>) => apiResponse.data));
    }

    /**
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissionsWithHttpInfo(page?: number, perPage?: number, _options?: Configuration): Observable<HttpInfo<Array<CombinedSubmission>>> {
        const requestContextPromise = this.requestFactory.listCombinedSubmissions(page, perPage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCombinedSubmissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all combined submissions
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listCombinedSubmissions(page?: number, perPage?: number, _options?: Configuration): Observable<Array<CombinedSubmission>> {
        return this.listCombinedSubmissionsWithHttpInfo(page, perPage, _options).pipe(map((apiResponse: HttpInfo<Array<CombinedSubmission>>) => apiResponse.data));
    }

    /**
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, _options?: Configuration): Observable<HttpInfo<Array<Folder>>> {
        const requestContextPromise = this.requestFactory.listFolders(parentFolderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all folders
     * @param [parentFolderId] Filter By Folder Id
     */
    public listFolders(parentFolderId?: string, _options?: Configuration): Observable<Array<Folder>> {
        return this.listFoldersWithHttpInfo(parentFolderId, _options).pipe(map((apiResponse: HttpInfo<Array<Folder>>) => apiResponse.data));
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
    public listSubmissionsWithHttpInfo(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Observable<HttpInfo<ListSubmissionsResponse>> {
        const requestContextPromise = this.requestFactory.listSubmissions(cursor, limit, createdAfter, createdBefore, type, includeData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubmissionsWithHttpInfo(rsp)));
            }));
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
    public listSubmissions(cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Observable<ListSubmissionsResponse> {
        return this.listSubmissionsWithHttpInfo(cursor, limit, createdAfter, createdBefore, type, includeData, _options).pipe(map((apiResponse: HttpInfo<ListSubmissionsResponse>) => apiResponse.data));
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
    public listTemplateSubmissionsWithHttpInfo(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Observable<HttpInfo<ListSubmissionsResponse>> {
        const requestContextPromise = this.requestFactory.listTemplateSubmissions(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplateSubmissionsWithHttpInfo(rsp)));
            }));
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
    public listTemplateSubmissions(templateId: string, cursor?: string, limit?: number, createdAfter?: string, createdBefore?: string, type?: string, includeData?: boolean, _options?: Configuration): Observable<ListSubmissionsResponse> {
        return this.listTemplateSubmissionsWithHttpInfo(templateId, cursor, limit, createdAfter, createdBefore, type, includeData, _options).pipe(map((apiResponse: HttpInfo<ListSubmissionsResponse>) => apiResponse.data));
    }

    /**
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: Configuration): Observable<HttpInfo<Array<TemplatePreview>>> {
        const requestContextPromise = this.requestFactory.listTemplates(query, parentFolderId, page, perPage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all templates
     * @param [query] Search By Name
     * @param [parentFolderId] Filter By Folder Id
     * @param [page] Default: 1
     * @param [perPage] Default: 50
     */
    public listTemplates(query?: string, parentFolderId?: string, page?: number, perPage?: number, _options?: Configuration): Observable<Array<TemplatePreview>> {
        return this.listTemplatesWithHttpInfo(query, parentFolderId, page, perPage, _options).pipe(map((apiResponse: HttpInfo<Array<TemplatePreview>>) => apiResponse.data));
    }

    /**
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolderWithHttpInfo(folderId: string, data: MoveFolderData, _options?: Configuration): Observable<HttpInfo<Folder>> {
        const requestContextPromise = this.requestFactory.moveFolderToFolder(folderId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveFolderToFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Move a folder
     * @param folderId
     * @param data
     */
    public moveFolderToFolder(folderId: string, data: MoveFolderData, _options?: Configuration): Observable<Folder> {
        return this.moveFolderToFolderWithHttpInfo(folderId, data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolderWithHttpInfo(templateId: string, data: MoveTemplateData, _options?: Configuration): Observable<HttpInfo<TemplatePreview>> {
        const requestContextPromise = this.requestFactory.moveTemplateToFolder(templateId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveTemplateToFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Move Template to folder
     * @param templateId
     * @param data
     */
    public moveTemplateToFolder(templateId: string, data: MoveTemplateData, _options?: Configuration): Observable<TemplatePreview> {
        return this.moveTemplateToFolderWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<TemplatePreview>) => apiResponse.data));
    }

    /**
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolderWithHttpInfo(folderId: string, data: RenameFolderData, _options?: Configuration): Observable<HttpInfo<Folder>> {
        const requestContextPromise = this.requestFactory.renameFolder(folderId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rename a folder
     * @param folderId
     * @param data
     */
    public renameFolder(folderId: string, data: RenameFolderData, _options?: Configuration): Observable<Folder> {
        return this.renameFolderWithHttpInfo(folderId, data, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Test Authentication
     */
    public testAuthenticationWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SuccessErrorResponse>> {
        const requestContextPromise = this.requestFactory.testAuthentication(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testAuthenticationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Test Authentication
     */
    public testAuthentication(_options?: Configuration): Observable<SuccessErrorResponse> {
        return this.testAuthenticationWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SuccessErrorResponse>) => apiResponse.data));
    }

    /**
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequestWithHttpInfo(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: Configuration): Observable<HttpInfo<CreateSubmissionDataRequestResponse>> {
        const requestContextPromise = this.requestFactory.updateDataRequest(dataRequestId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDataRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a submission data request
     * @param dataRequestId
     * @param data
     */
    public updateDataRequest(dataRequestId: string, data: UpdateSubmissionDataRequestData, _options?: Configuration): Observable<CreateSubmissionDataRequestResponse> {
        return this.updateDataRequestWithHttpInfo(dataRequestId, data, _options).pipe(map((apiResponse: HttpInfo<CreateSubmissionDataRequestResponse>) => apiResponse.data));
    }

    /**
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplateWithHttpInfo(templateId: string, data: UpdateHtmlTemplate, _options?: Configuration): Observable<HttpInfo<SuccessMultipleErrorsResponse>> {
        const requestContextPromise = this.requestFactory.updateTemplate(templateId, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Template
     * @param templateId
     * @param data
     */
    public updateTemplate(templateId: string, data: UpdateHtmlTemplate, _options?: Configuration): Observable<SuccessMultipleErrorsResponse> {
        return this.updateTemplateWithHttpInfo(templateId, data, _options).pipe(map((apiResponse: HttpInfo<SuccessMultipleErrorsResponse>) => apiResponse.data));
    }

}
