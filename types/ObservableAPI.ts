import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddTemplateFieldsRequest } from '../models/AddTemplateFieldsRequest';
import { AiFieldNamingLanguage } from '../models/AiFieldNamingLanguage';
import { AuthenticationCheck } from '../models/AuthenticationCheck';
import { BarcodeSymbology } from '../models/BarcodeSymbology';
import { CheckCharacter } from '../models/CheckCharacter';
import { CombinedFieldType } from '../models/CombinedFieldType';
import { CombinedPdf } from '../models/CombinedPdf';
import { CombinedPdfFiles } from '../models/CombinedPdfFiles';
import { CombinedPdfList } from '../models/CombinedPdfList';
import { CombinedPdfSource } from '../models/CombinedPdfSource';
import { CombinedPdfSourceInput } from '../models/CombinedPdfSourceInput';
import { CombinedPdfSourcePdf } from '../models/CombinedPdfSourcePdf';
import { CombinedPdfSourceType } from '../models/CombinedPdfSourceType';
import { CombinedPdfState } from '../models/CombinedPdfState';
import { CopyTemplateRequest } from '../models/CopyTemplateRequest';
import { CreateCombinedPdfRequest } from '../models/CreateCombinedPdfRequest';
import { CreateCustomFileFromUploadRequest } from '../models/CreateCustomFileFromUploadRequest';
import { CreateFolderRequest } from '../models/CreateFolderRequest';
import { CreateSignatureRequestEventRequest } from '../models/CreateSignatureRequestEventRequest';
import { CreateSignatureRequestTokenRequest } from '../models/CreateSignatureRequestTokenRequest';
import { CreateSubmissionBatchRequest } from '../models/CreateSubmissionBatchRequest';
import { CreateSubmissionRequest } from '../models/CreateSubmissionRequest';
import { CreateTemplateRequest } from '../models/CreateTemplateRequest';
import { CreateWebhookRequest } from '../models/CreateWebhookRequest';
import { CustomFile } from '../models/CustomFile';
import { CustomFileList } from '../models/CustomFileList';
import { CustomFileSourcePdf } from '../models/CustomFileSourcePdf';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorDetail } from '../models/ErrorDetail';
import { ErrorInfo } from '../models/ErrorInfo';
import { ErrorResponse } from '../models/ErrorResponse';
import { ExpirationInterval } from '../models/ExpirationInterval';
import { Field } from '../models/Field';
import { FieldComparisonCondition } from '../models/FieldComparisonCondition';
import { FieldComparisonOperator } from '../models/FieldComparisonOperator';
import { FieldDependency } from '../models/FieldDependency';
import { FieldDependencyInput } from '../models/FieldDependencyInput';
import { FieldDisplayType } from '../models/FieldDisplayType';
import { FieldEqualsCondition } from '../models/FieldEqualsCondition';
import { FieldEqualsOperator } from '../models/FieldEqualsOperator';
import { FieldGroup } from '../models/FieldGroup';
import { FieldGroupInput } from '../models/FieldGroupInput';
import { FieldGroupType } from '../models/FieldGroupType';
import { FieldInCondition } from '../models/FieldInCondition';
import { FieldInput } from '../models/FieldInput';
import { FieldOverride } from '../models/FieldOverride';
import { FieldPresenceCondition } from '../models/FieldPresenceCondition';
import { FieldPresenceOperator } from '../models/FieldPresenceOperator';
import { FieldRangeCondition } from '../models/FieldRangeCondition';
import { FieldReimportState } from '../models/FieldReimportState';
import { FieldSetupLogic } from '../models/FieldSetupLogic';
import { FieldSetupNaming } from '../models/FieldSetupNaming';
import { FieldSetupSource } from '../models/FieldSetupSource';
import { FieldType } from '../models/FieldType';
import { Folder } from '../models/Folder';
import { FolderList } from '../models/FolderList';
import { GenerateFilesFormat } from '../models/GenerateFilesFormat';
import { GenerateSubmissionFilesRequest } from '../models/GenerateSubmissionFilesRequest';
import { GeneratedFile } from '../models/GeneratedFile';
import { GeneratedFileState } from '../models/GeneratedFileState';
import { HtmlEngineOptions } from '../models/HtmlEngineOptions';
import { HtmlEngineOptionsInput } from '../models/HtmlEngineOptionsInput';
import { ImageGravity } from '../models/ImageGravity';
import { ImageScaleType } from '../models/ImageScaleType';
import { ModelCodeLanguage } from '../models/ModelCodeLanguage';
import { MoveFolderRequest } from '../models/MoveFolderRequest';
import { MoveTemplateRequest } from '../models/MoveTemplateRequest';
import { NumberConditionType } from '../models/NumberConditionType';
import { OutputFormat } from '../models/OutputFormat';
import { PageFormat } from '../models/PageFormat';
import { PageImage } from '../models/PageImage';
import { PageImages } from '../models/PageImages';
import { PredefinedField } from '../models/PredefinedField';
import { PredefinedFieldInput } from '../models/PredefinedFieldInput';
import { PublishTemplateVersionRequest } from '../models/PublishTemplateVersionRequest';
import { RemoveTemplateFieldsRequest } from '../models/RemoveTemplateFieldsRequest';
import { RenameFolderRequest } from '../models/RenameFolderRequest';
import { ReorderTemplateFieldsRequest } from '../models/ReorderTemplateFieldsRequest';
import { RestoreTemplateVersionRequest } from '../models/RestoreTemplateVersionRequest';
import { ShapeType } from '../models/ShapeType';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignatureRequestAuthSecondFactorType } from '../models/SignatureRequestAuthSecondFactorType';
import { SignatureRequestAuthType } from '../models/SignatureRequestAuthType';
import { SignatureRequestEvent } from '../models/SignatureRequestEvent';
import { SignatureRequestEventType } from '../models/SignatureRequestEventType';
import { SignatureRequestInput } from '../models/SignatureRequestInput';
import { SignatureRequestMessageType } from '../models/SignatureRequestMessageType';
import { SignatureRequestState } from '../models/SignatureRequestState';
import { SignatureRequestToken } from '../models/SignatureRequestToken';
import { SignatureRequestTokenType } from '../models/SignatureRequestTokenType';
import { StringConditionType } from '../models/StringConditionType';
import { Submission } from '../models/Submission';
import { SubmissionAction } from '../models/SubmissionAction';
import { SubmissionActionState } from '../models/SubmissionActionState';
import { SubmissionActionType } from '../models/SubmissionActionType';
import { SubmissionBatch } from '../models/SubmissionBatch';
import { SubmissionBatchState } from '../models/SubmissionBatchState';
import { SubmissionFiles } from '../models/SubmissionFiles';
import { SubmissionInput } from '../models/SubmissionInput';
import { SubmissionList } from '../models/SubmissionList';
import { SubmissionSource } from '../models/SubmissionSource';
import { SubmissionSourcePdf } from '../models/SubmissionSourcePdf';
import { SubmissionState } from '../models/SubmissionState';
import { SubmissionValidation } from '../models/SubmissionValidation';
import { Template } from '../models/Template';
import { TemplateActor } from '../models/TemplateActor';
import { TemplateActorType } from '../models/TemplateActorType';
import { TemplateDefaults } from '../models/TemplateDefaults';
import { TemplateDefaultsInput } from '../models/TemplateDefaultsInput';
import { TemplateDiff } from '../models/TemplateDiff';
import { TemplateDiffSummary } from '../models/TemplateDiffSummary';
import { TemplateDocument } from '../models/TemplateDocument';
import { TemplateDocumentState } from '../models/TemplateDocumentState';
import { TemplateFieldChange } from '../models/TemplateFieldChange';
import { TemplateFieldChanges } from '../models/TemplateFieldChanges';
import { TemplateFieldDependency } from '../models/TemplateFieldDependency';
import { TemplateFieldDependencyAction } from '../models/TemplateFieldDependencyAction';
import { TemplateFieldDependencyCondition } from '../models/TemplateFieldDependencyCondition';
import { TemplateFieldDependencyConditionInput } from '../models/TemplateFieldDependencyConditionInput';
import { TemplateFieldDependencyInput } from '../models/TemplateFieldDependencyInput';
import { TemplateFieldDependencyMatch } from '../models/TemplateFieldDependencyMatch';
import { TemplateFieldDependencyOperator } from '../models/TemplateFieldDependencyOperator';
import { TemplateFieldLogicStatus } from '../models/TemplateFieldLogicStatus';
import { TemplateFieldMove } from '../models/TemplateFieldMove';
import { TemplateFields } from '../models/TemplateFields';
import { TemplateFormMode } from '../models/TemplateFormMode';
import { TemplateModelCode } from '../models/TemplateModelCode';
import { TemplatePageAiError } from '../models/TemplatePageAiError';
import { TemplatePageAiNamingStatus } from '../models/TemplatePageAiNamingStatus';
import { TemplatePageFieldsStatus } from '../models/TemplatePageFieldsStatus';
import { TemplatePageImageStatus } from '../models/TemplatePageImageStatus';
import { TemplatePageImages } from '../models/TemplatePageImages';
import { TemplatePageProcessingStatus } from '../models/TemplatePageProcessingStatus';
import { TemplateSourcePdf } from '../models/TemplateSourcePdf';
import { TemplateSummary } from '../models/TemplateSummary';
import { TemplateSummaryList } from '../models/TemplateSummaryList';
import { TemplateType } from '../models/TemplateType';
import { TemplateVersion } from '../models/TemplateVersion';
import { TemplateVersionType } from '../models/TemplateVersionType';
import { TextAlignment } from '../models/TextAlignment';
import { TextOverflow } from '../models/TextOverflow';
import { TextVerticalAlignment } from '../models/TextVerticalAlignment';
import { Typeface } from '../models/Typeface';
import { UpdateSignatureRequestRequest } from '../models/UpdateSignatureRequestRequest';
import { UpdateTemplateDocumentRequest } from '../models/UpdateTemplateDocumentRequest';
import { UpdateTemplateFieldsRequest } from '../models/UpdateTemplateFieldsRequest';
import { UpdateTemplateRequest } from '../models/UpdateTemplateRequest';
import { UpdateWebhookRequest } from '../models/UpdateWebhookRequest';
import { UploadMethod } from '../models/UploadMethod';
import { UploadPresign } from '../models/UploadPresign';
import { UrlSourcePdf } from '../models/UrlSourcePdf';
import { ValidateSubmissionRequest } from '../models/ValidateSubmissionRequest';
import { Webhook } from '../models/Webhook';
import { WebhookEventType } from '../models/WebhookEventType';
import { WebhookList } from '../models/WebhookList';
import { WebhookMode } from '../models/WebhookMode';

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
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     */
    public addTemplateFieldsWithHttpInfo(templateId: string, body: AddTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addTemplateFields(templateId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTemplateFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     */
    public addTemplateFields(templateId: string, body: AddTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<TemplateFields> {
        return this.addTemplateFieldsWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<TemplateFields>) => apiResponse.data));
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     */
    public copyTemplateWithHttpInfo(templateId: string, body?: CopyTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.copyTemplate(templateId, body, _config);
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
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     */
    public copyTemplate(templateId: string, body?: CopyTemplateRequest, _options?: ConfigurationOptions): Observable<Template> {
        return this.copyTemplateWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param body The PDFs to merge, and the combined PDF's settings.
     * @param [wait] Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     */
    public createCombinedPdfWithHttpInfo(body: CreateCombinedPdfRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedPdf>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCombinedPdf(body, wait, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCombinedPdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param body The PDFs to merge, and the combined PDF's settings.
     * @param [wait] Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     */
    public createCombinedPdf(body: CreateCombinedPdfRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<CombinedPdf> {
        return this.createCombinedPdfWithHttpInfo(body, wait, _options).pipe(map((apiResponse: HttpInfo<CombinedPdf>) => apiResponse.data));
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param body The uploaded file to create the custom file from.
     */
    public createCustomFileFromUploadWithHttpInfo(body: CreateCustomFileFromUploadRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFile>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCustomFileFromUpload(body, _config);
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
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param body The uploaded file to create the custom file from.
     */
    public createCustomFileFromUpload(body: CreateCustomFileFromUploadRequest, _options?: ConfigurationOptions): Observable<CustomFile> {
        return this.createCustomFileFromUploadWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomFile>) => apiResponse.data));
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     */
    public createFolderWithHttpInfo(body: CreateFolderRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFolder(body, _config);
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
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     */
    public createFolder(body: CreateFolderRequest, _options?: ConfigurationOptions): Observable<Folder> {
        return this.createFolderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     */
    public createSignatureRequestEventWithHttpInfo(signatureRequestId: string, body: CreateSignatureRequestEventRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SignatureRequestEvent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSignatureRequestEvent(signatureRequestId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSignatureRequestEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     */
    public createSignatureRequestEvent(signatureRequestId: string, body: CreateSignatureRequestEventRequest, _options?: ConfigurationOptions): Observable<SignatureRequestEvent> {
        return this.createSignatureRequestEventWithHttpInfo(signatureRequestId, body, _options).pipe(map((apiResponse: HttpInfo<SignatureRequestEvent>) => apiResponse.data));
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     */
    public createSignatureRequestTokenWithHttpInfo(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SignatureRequestToken>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSignatureRequestToken(signatureRequestId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSignatureRequestTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     */
    public createSignatureRequestToken(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, _options?: ConfigurationOptions): Observable<SignatureRequestToken> {
        return this.createSignatureRequestTokenWithHttpInfo(signatureRequestId, body, _options).pipe(map((apiResponse: HttpInfo<SignatureRequestToken>) => apiResponse.data));
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public createSubmissionWithHttpInfo(templateId: string, body: CreateSubmissionRequest, version?: string, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubmission(templateId, body, version, wait, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public createSubmission(templateId: string, body: CreateSubmissionRequest, version?: string, wait?: boolean, _options?: ConfigurationOptions): Observable<Submission> {
        return this.createSubmissionWithHttpInfo(templateId, body, version, wait, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param body The submissions to create, and the settings they share.
     * @param [wait] Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts.
     */
    public createSubmissionBatchWithHttpInfo(body: CreateSubmissionBatchRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionBatch>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubmissionBatch(body, wait, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubmissionBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param body The submissions to create, and the settings they share.
     * @param [wait] Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts.
     */
    public createSubmissionBatch(body: CreateSubmissionBatchRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<SubmissionBatch> {
        return this.createSubmissionBatchWithHttpInfo(body, wait, _options).pipe(map((apiResponse: HttpInfo<SubmissionBatch>) => apiResponse.data));
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public createTemplateWithHttpInfo(body: CreateTemplateRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTemplate(body, wait, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public createTemplate(body: CreateTemplateRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<Template> {
        return this.createTemplateWithHttpInfo(body, wait, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     */
    public createWebhookWithHttpInfo(body: CreateWebhookRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Webhook>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createWebhook(body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     */
    public createWebhook(body: CreateWebhookRequest, _options?: ConfigurationOptions): Observable<Webhook> {
        return this.createWebhookWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<Webhook>) => apiResponse.data));
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     */
    public deleteCustomFileWithHttpInfo(customFileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFile>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCustomFile(customFileId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     */
    public deleteCustomFile(customFileId: string, _options?: ConfigurationOptions): Observable<CustomFile> {
        return this.deleteCustomFileWithHttpInfo(customFileId, _options).pipe(map((apiResponse: HttpInfo<CustomFile>) => apiResponse.data));
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
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
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
     */
    public deleteFolder(folderId: string, _options?: ConfigurationOptions): Observable<Folder> {
        return this.deleteFolderWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
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
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     */
    public deleteTemplate(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<Template> {
        return this.deleteTemplateWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     */
    public deleteWebhookWithHttpInfo(webhookId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Webhook>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteWebhook(webhookId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     */
    public deleteWebhook(webhookId: string, _options?: ConfigurationOptions): Observable<Webhook> {
        return this.deleteWebhookWithHttpInfo(webhookId, _options).pipe(map((apiResponse: HttpInfo<Webhook>) => apiResponse.data));
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public expireCombinedPdfWithHttpInfo(combinedPdfId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedPdf>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.expireCombinedPdf(combinedPdfId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireCombinedPdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public expireCombinedPdf(combinedPdfId: string, _options?: ConfigurationOptions): Observable<CombinedPdf> {
        return this.expireCombinedPdfWithHttpInfo(combinedPdfId, _options).pipe(map((apiResponse: HttpInfo<CombinedPdf>) => apiResponse.data));
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
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
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     */
    public expireSubmission(submissionId: string, _options?: ConfigurationOptions): Observable<Submission> {
        return this.expireSubmissionWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public generateSubmissionFilesWithHttpInfo(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateSubmissionFiles(submissionId, body, wait, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateSubmissionFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public generateSubmissionFiles(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<Submission> {
        return this.generateSubmissionFilesWithHttpInfo(submissionId, body, wait, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     */
    public generateSubmissionPreviewWithHttpInfo(submissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.generateSubmissionPreview(submissionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateSubmissionPreviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     */
    public generateSubmissionPreview(submissionId: string, _options?: ConfigurationOptions): Observable<Submission> {
        return this.generateSubmissionPreviewWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public getCombinedPdfWithHttpInfo(combinedPdfId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedPdf>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCombinedPdf(combinedPdfId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCombinedPdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public getCombinedPdf(combinedPdfId: string, _options?: ConfigurationOptions): Observable<CombinedPdf> {
        return this.getCombinedPdfWithHttpInfo(combinedPdfId, _options).pipe(map((apiResponse: HttpInfo<CombinedPdf>) => apiResponse.data));
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param customFileId The custom file's ID.
     */
    public getCustomFileWithHttpInfo(customFileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFile>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCustomFile(customFileId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param customFileId The custom file's ID.
     */
    public getCustomFile(customFileId: string, _options?: ConfigurationOptions): Observable<CustomFile> {
        return this.getCustomFileWithHttpInfo(customFileId, _options).pipe(map((apiResponse: HttpInfo<CustomFile>) => apiResponse.data));
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param folderId The folder's ID.
     */
    public getFolderWithHttpInfo(folderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFolder(folderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param folderId The folder's ID.
     */
    public getFolder(folderId: string, _options?: ConfigurationOptions): Observable<Folder> {
        return this.getFolderWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     */
    public getPresignUrlWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UploadPresign>> {
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
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     */
    public getPresignUrl(_options?: ConfigurationOptions): Observable<UploadPresign> {
        return this.getPresignUrlWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UploadPresign>) => apiResponse.data));
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param signatureRequestId The signature request's ID.
     */
    public getSignatureRequestWithHttpInfo(signatureRequestId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SignatureRequest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSignatureRequest(signatureRequestId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSignatureRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param signatureRequestId The signature request's ID.
     */
    public getSignatureRequest(signatureRequestId: string, _options?: ConfigurationOptions): Observable<SignatureRequest> {
        return this.getSignatureRequestWithHttpInfo(signatureRequestId, _options).pipe(map((apiResponse: HttpInfo<SignatureRequest>) => apiResponse.data));
    }

    /**
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param submissionId The submission's ID.
     */
    public getSubmissionWithHttpInfo(submissionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Submission>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubmission(submissionId, _config);
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
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param submissionId The submission's ID.
     */
    public getSubmission(submissionId: string, _options?: ConfigurationOptions): Observable<Submission> {
        return this.getSubmissionWithHttpInfo(submissionId, _options).pipe(map((apiResponse: HttpInfo<Submission>) => apiResponse.data));
    }

    /**
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param submissionBatchId The batch's ID.
     * @param [includeData] Include each submission's `data` (null without it).
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionBatch>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubmissionBatch(submissionBatchId, includeData, _config);
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
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param submissionBatchId The batch's ID.
     * @param [includeData] Include each submission's `data` (null without it).
     */
    public getSubmissionBatch(submissionBatchId: string, includeData?: boolean, _options?: ConfigurationOptions): Observable<SubmissionBatch> {
        return this.getSubmissionBatchWithHttpInfo(submissionBatchId, includeData, _options).pipe(map((apiResponse: HttpInfo<SubmissionBatch>) => apiResponse.data));
    }

    /**
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplate(templateId, version, _config);
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
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplate(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<Template> {
        return this.getTemplateWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateDiffWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateDiff>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplateDiff(templateId, version, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateDiffWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateDiff(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<TemplateDiff> {
        return this.getTemplateDiffWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<TemplateDiff>) => apiResponse.data));
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateModelCodeWithHttpInfo(templateId: string, lang: ModelCodeLanguage, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateModelCode>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplateModelCode(templateId, lang, version, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplateModelCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateModelCode(templateId: string, lang: ModelCodeLanguage, version?: string, _options?: ConfigurationOptions): Observable<TemplateModelCode> {
        return this.getTemplateModelCodeWithHttpInfo(templateId, lang, version, _options).pipe(map((apiResponse: HttpInfo<TemplateModelCode>) => apiResponse.data));
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplatePageImagesWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplatePageImages>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplatePageImages(templateId, version, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplatePageImagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplatePageImages(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<TemplatePageImages> {
        return this.getTemplatePageImagesWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<TemplatePageImages>) => apiResponse.data));
    }

    /**
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param templateId The template's ID.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<{ [key: string]: any; }>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemplateSchema(templateId, version, _config);
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
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param templateId The template's ID.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateSchema(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<{ [key: string]: any; }> {
        return this.getTemplateSchemaWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param webhookId The webhook's ID.
     */
    public getWebhookWithHttpInfo(webhookId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Webhook>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getWebhook(webhookId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param webhookId The webhook's ID.
     */
    public getWebhook(webhookId: string, _options?: ConfigurationOptions): Observable<Webhook> {
        return this.getWebhookWithHttpInfo(webhookId, _options).pipe(map((apiResponse: HttpInfo<Webhook>) => apiResponse.data));
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCombinedPdfsWithHttpInfo(limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CombinedPdfList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCombinedPdfs(limit, cursor, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCombinedPdfsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCombinedPdfs(limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<CombinedPdfList> {
        return this.listCombinedPdfsWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<CombinedPdfList>) => apiResponse.data));
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCustomFilesWithHttpInfo(limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFileList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCustomFiles(limit, cursor, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCustomFiles(limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<CustomFileList> {
        return this.listCustomFilesWithHttpInfo(limit, cursor, _options).pipe(map((apiResponse: HttpInfo<CustomFileList>) => apiResponse.data));
    }

    /**
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param [parentFolderId] Only list the folders in this folder. Without it, the list has every folder, at any depth.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FolderList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFolders(parentFolderId, limit, cursor, _config);
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
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param [parentFolderId] Only list the folders in this folder. Without it, the list has every folder, at any depth.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listFolders(parentFolderId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<FolderList> {
        return this.listFoldersWithHttpInfo(parentFolderId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<FolderList>) => apiResponse.data));
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Lists leave out each submission's `data` unless you pass `include_data=true`. 
     * List submissions
     * @param [templateId] Only list this template's submissions.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listSubmissionsWithHttpInfo(templateId?: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSubmissions(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, _config);
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
     * Returns the submissions in your account, newest first, one page at a time. Lists leave out each submission's `data` unless you pass `include_data=true`. 
     * List submissions
     * @param [templateId] Only list this template's submissions.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listSubmissions(templateId?: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<SubmissionList> {
        return this.listSubmissionsWithHttpInfo(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<SubmissionList>) => apiResponse.data));
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public listTemplateFieldsWithHttpInfo(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplateFields(templateId, version, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplateFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public listTemplateFields(templateId: string, version?: string, _options?: ConfigurationOptions): Observable<TemplateFields> {
        return this.listTemplateFieldsWithHttpInfo(templateId, version, _options).pipe(map((apiResponse: HttpInfo<TemplateFields>) => apiResponse.data));
    }

    /**
     * Returns a template's submissions (from every version of the template), newest first.
     * List a template's submissions
     * @param templateId The template's ID.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplateSubmissionsWithHttpInfo(templateId: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplateSubmissions(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, _config);
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
     * Returns a template's submissions (from every version of the template), newest first.
     * List a template's submissions
     * @param templateId The template's ID.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplateSubmissions(templateId: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<SubmissionList> {
        return this.listTemplateSubmissionsWithHttpInfo(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<SubmissionList>) => apiResponse.data));
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Get a template by its ID for its HTML, defaults and published versions. 
     * List templates
     * @param [query] Only list templates whose name contains this text (ignoring case).
     * @param [parentFolderId] Only list the templates in this folder (not in its subfolders).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateSummaryList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTemplates(query, parentFolderId, limit, cursor, _config);
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
     * Returns the templates in your account (their drafts), newest first, one page at a time. Get a template by its ID for its HTML, defaults and published versions. 
     * List templates
     * @param [query] Only list templates whose name contains this text (ignoring case).
     * @param [parentFolderId] Only list the templates in this folder (not in its subfolders).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplates(query?: string, parentFolderId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<TemplateSummaryList> {
        return this.listTemplatesWithHttpInfo(query, parentFolderId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<TemplateSummaryList>) => apiResponse.data));
    }

    /**
     * Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 
     * List webhooks
     * @param [eventType] Only list webhooks that subscribe to this event.
     * @param [mode] Only list webhooks set to this mode.
     * @param [templateId] Only list webhooks scoped to this template.
     * @param [folderId] Only list webhooks scoped to this folder.
     * @param [apiTokenId] Only list webhooks scoped to this API token.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listWebhooksWithHttpInfo(eventType?: WebhookEventType, mode?: WebhookMode, templateId?: string, folderId?: string, apiTokenId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<HttpInfo<WebhookList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listWebhooks(eventType, mode, templateId, folderId, apiTokenId, limit, cursor, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWebhooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 
     * List webhooks
     * @param [eventType] Only list webhooks that subscribe to this event.
     * @param [mode] Only list webhooks set to this mode.
     * @param [templateId] Only list webhooks scoped to this template.
     * @param [folderId] Only list webhooks scoped to this folder.
     * @param [apiTokenId] Only list webhooks scoped to this API token.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listWebhooks(eventType?: WebhookEventType, mode?: WebhookMode, templateId?: string, folderId?: string, apiTokenId?: string, limit?: number, cursor?: string, _options?: ConfigurationOptions): Observable<WebhookList> {
        return this.listWebhooksWithHttpInfo(eventType, mode, templateId, folderId, apiTokenId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<WebhookList>) => apiResponse.data));
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param folderId The folder's ID.
     * @param body Where to move the folder.
     */
    public moveFolderWithHttpInfo(folderId: string, body: MoveFolderRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.moveFolder(folderId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param folderId The folder's ID.
     * @param body Where to move the folder.
     */
    public moveFolder(folderId: string, body: MoveFolderRequest, _options?: ConfigurationOptions): Observable<Folder> {
        return this.moveFolderWithHttpInfo(folderId, body, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     */
    public moveTemplateWithHttpInfo(templateId: string, body: MoveTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.moveTemplate(templateId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     */
    public moveTemplate(templateId: string, body: MoveTemplateRequest, _options?: ConfigurationOptions): Observable<Template> {
        return this.moveTemplateWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, body: PublishTemplateVersionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateVersion>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.publishTemplateVersion(templateId, body, _config);
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
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     */
    public publishTemplateVersion(templateId: string, body: PublishTemplateVersionRequest, _options?: ConfigurationOptions): Observable<TemplateVersion> {
        return this.publishTemplateVersionWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<TemplateVersion>) => apiResponse.data));
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     */
    public removeTemplateFieldsWithHttpInfo(templateId: string, body: RemoveTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeTemplateFields(templateId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTemplateFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     */
    public removeTemplateFields(templateId: string, body: RemoveTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<TemplateFields> {
        return this.removeTemplateFieldsWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<TemplateFields>) => apiResponse.data));
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     */
    public renameFolderWithHttpInfo(folderId: string, body: RenameFolderRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Folder>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.renameFolder(folderId, body, _config);
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
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     */
    public renameFolder(folderId: string, body: RenameFolderRequest, _options?: ConfigurationOptions): Observable<Folder> {
        return this.renameFolderWithHttpInfo(folderId, body, _options).pipe(map((apiResponse: HttpInfo<Folder>) => apiResponse.data));
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     */
    public reorderTemplateFieldsWithHttpInfo(templateId: string, body: ReorderTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.reorderTemplateFields(templateId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reorderTemplateFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     */
    public reorderTemplateFields(templateId: string, body: ReorderTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<TemplateFields> {
        return this.reorderTemplateFieldsWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<TemplateFields>) => apiResponse.data));
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, body: RestoreTemplateVersionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.restoreTemplateVersion(templateId, body, _config);
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
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     */
    public restoreTemplateVersion(templateId: string, body: RestoreTemplateVersionRequest, _options?: ConfigurationOptions): Observable<Template> {
        return this.restoreTemplateVersionWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthenticationWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<AuthenticationCheck>> {
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
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthentication(_options?: ConfigurationOptions): Observable<AuthenticationCheck> {
        return this.testAuthenticationWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AuthenticationCheck>) => apiResponse.data));
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateSignatureRequestWithHttpInfo(signatureRequestId: string, body: UpdateSignatureRequestRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SignatureRequest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSignatureRequest(signatureRequestId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSignatureRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateSignatureRequest(signatureRequestId: string, body: UpdateSignatureRequestRequest, _options?: ConfigurationOptions): Observable<SignatureRequest> {
        return this.updateSignatureRequestWithHttpInfo(signatureRequestId, body, _options).pipe(map((apiResponse: HttpInfo<SignatureRequest>) => apiResponse.data));
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateTemplateWithHttpInfo(templateId: string, body: UpdateTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplate(templateId, body, _config);
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
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateTemplate(templateId: string, body: UpdateTemplateRequest, _options?: ConfigurationOptions): Observable<Template> {
        return this.updateTemplateWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param templateId The template's ID.
     * @param body The new PDF, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public updateTemplateDocumentWithHttpInfo(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplateDocument(templateId, body, wait, _config);
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
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param templateId The template's ID.
     * @param body The new PDF, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public updateTemplateDocument(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, _options?: ConfigurationOptions): Observable<Template> {
        return this.updateTemplateDocumentWithHttpInfo(templateId, body, wait, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     */
    public updateTemplateFieldsWithHttpInfo(templateId: string, body: UpdateTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTemplateFields(templateId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplateFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     */
    public updateTemplateFields(templateId: string, body: UpdateTemplateFieldsRequest, _options?: ConfigurationOptions): Observable<TemplateFields> {
        return this.updateTemplateFieldsWithHttpInfo(templateId, body, _options).pipe(map((apiResponse: HttpInfo<TemplateFields>) => apiResponse.data));
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateWebhookWithHttpInfo(webhookId: string, body: UpdateWebhookRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Webhook>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateWebhook(webhookId, body, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateWebhook(webhookId: string, body: UpdateWebhookRequest, _options?: ConfigurationOptions): Observable<Webhook> {
        return this.updateWebhookWithHttpInfo(webhookId, body, _options).pipe(map((apiResponse: HttpInfo<Webhook>) => apiResponse.data));
    }

    /**
     * Creates a PDF template from a PDF sent with the request (`multipart/form-data`). For large files, upload the PDF with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a PDF template from an uploaded PDF
     * @param document The PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [name] The template's name.
     * @param [description] The template's description.
     * @param [parentFolderId] The folder to put the template in. Left out, it's created at the root.
     * @param [aiFieldNamingLanguage] The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
     * @param [detectFields] Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
     * @param [fieldSource] With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
     * @param [fieldNaming] With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
     * @param [fieldLogic] With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
     */
    public uploadTemplateWithHttpInfo(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadTemplate(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a PDF template from a PDF sent with the request (`multipart/form-data`). For large files, upload the PDF with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a PDF template from an uploaded PDF
     * @param document The PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [name] The template's name.
     * @param [description] The template's description.
     * @param [parentFolderId] The folder to put the template in. Left out, it's created at the root.
     * @param [aiFieldNamingLanguage] The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
     * @param [detectFields] Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
     * @param [fieldSource] With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
     * @param [fieldNaming] With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
     * @param [fieldLogic] With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
     */
    public uploadTemplate(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, _options?: ConfigurationOptions): Observable<Template> {
        return this.uploadTemplateWithHttpInfo(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param templateId The template's ID.
     * @param document The new PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields.
     */
    public uploadTemplateDocumentWithHttpInfo(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Template>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadTemplateDocument(templateId, document, wait, reimportFields, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadTemplateDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param templateId The template's ID.
     * @param document The new PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields.
     */
    public uploadTemplateDocument(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, _options?: ConfigurationOptions): Observable<Template> {
        return this.uploadTemplateDocumentWithHttpInfo(templateId, document, wait, reimportFields, _options).pipe(map((apiResponse: HttpInfo<Template>) => apiResponse.data));
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     */
    public validateSubmissionWithHttpInfo(templateId: string, body: ValidateSubmissionRequest, version?: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubmissionValidation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.validateSubmission(templateId, body, version, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateSubmissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     */
    public validateSubmission(templateId: string, body: ValidateSubmissionRequest, version?: string, _options?: ConfigurationOptions): Observable<SubmissionValidation> {
        return this.validateSubmissionWithHttpInfo(templateId, body, version, _options).pipe(map((apiResponse: HttpInfo<SubmissionValidation>) => apiResponse.data));
    }

}
