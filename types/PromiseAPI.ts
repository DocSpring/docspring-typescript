import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { ServerConfiguration } from '../servers'
import { createConfiguration } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { CreateTemplatePreviewRequest } from '../models/CreateTemplatePreviewRequest';
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
import { SubmissionSummary } from '../models/SubmissionSummary';
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
import { TemplateDocumentSummary } from '../models/TemplateDocumentSummary';
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
import { TemplatePreview } from '../models/TemplatePreview';
import { TemplatePreviewState } from '../models/TemplatePreviewState';
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
import { ObservableClient } from './ObservableAPI';

import { ClientRequestFactory, ClientResponseProcessor} from "../apis/Client";
export class PromiseClient {
    private api: ObservableClient

        public constructor(
        configuration?: Configuration | { apiTokenId?: string; apiTokenSecret?: string; host?: string; region?: string; baseServer?: any; validateRequests?: boolean },
        requestFactory?: ClientRequestFactory,
        responseProcessor?: ClientResponseProcessor
    ) {
        // Support environment variables for authentication and host/region
        if (!configuration || (configuration && !('authMethods' in configuration))) {
            const options = configuration as { apiTokenId?: string; apiTokenSecret?: string; host?: string; region?: string; baseServer?: any; validateRequests?: boolean } || {};
            const env: { [key: string]: string | undefined } =
                (typeof process !== 'undefined' && process.env) ? process.env : {};

            // Use the credentials passed in, or the environment variables. An empty string counts as not set.
            const apiTokenId = options.apiTokenId || env['DOCSPRING_TOKEN_ID'];
            const apiTokenSecret = options.apiTokenSecret || env['DOCSPRING_TOKEN_SECRET'];

            const configParams: any = {};
            if (options.validateRequests !== undefined) configParams.validateRequests = options.validateRequests;

            // Without credentials the client is still created, and the API's 401 response says what's missing
            if (apiTokenId || apiTokenSecret) {
                configParams.authMethods = {
                    api_token_basic: {
                        username: apiTokenId || '',
                        password: apiTokenSecret || ''
                    }
                };
            }

            if (options.baseServer) {
                configParams.baseServer = options.baseServer;
            } else {
                // Resolve host from options.host, DOCSPRING_HOST, or region (options.region/DOCSPRING_REGION)
                let host = options.host || env['DOCSPRING_HOST'];
                const region = options.region || env['DOCSPRING_REGION'];
                if (!host && region) {
                    const r = region.trim().toUpperCase();
                    if (r === 'US') host = 'sync.api.docspring.com';
                    else if (r === 'EU') host = 'sync.api-eu.docspring.com';
                    else throw new Error(`${region} is not a valid region. Valid regions: US, EU`);
                }
                if (host) {
                    let url = host.trim();
                    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
                    url = url.replace(/\/+$/, '');
                    // Any API version's path (such as /api/v1 from a 3.x setup) becomes /api/v2
                    url = `${url.replace(/\/api\/v\d+$/i, '')}/api/v2`;
                    configParams.baseServer = new ServerConfiguration(url, {});
                }
            }

            configuration = createConfiguration(configParams);
        }

        this.api = new ObservableClient(configuration as Configuration, requestFactory, responseProcessor);
    }


    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     */
    public addTemplateFieldsWithHttpInfo(templateId: string, body: AddTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addTemplateFieldsWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     */
    public addTemplateFields(templateId: string, body: AddTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addTemplateFields(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     */
    public copyTemplateWithHttpInfo(templateId: string, body?: CopyTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplateWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     */
    public copyTemplate(templateId: string, body?: CopyTemplateRequest, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplate(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param body The PDFs to merge, and the combined PDF's settings.
     * @param [wait] Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another combined PDF. Send a new key with each new combined PDF, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createCombinedPdfWithHttpInfo(body: CreateCombinedPdfRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCombinedPdfWithHttpInfo(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param body The PDFs to merge, and the combined PDF's settings.
     * @param [wait] Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another combined PDF. Send a new key with each new combined PDF, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createCombinedPdf(body: CreateCombinedPdfRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<CombinedPdf> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCombinedPdf(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param body The uploaded file to create the custom file from.
     */
    public createCustomFileFromUploadWithHttpInfo(body: CreateCustomFileFromUploadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUploadWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param body The uploaded file to create the custom file from.
     */
    public createCustomFileFromUpload(body: CreateCustomFileFromUploadRequest, _options?: PromiseConfigurationOptions): Promise<CustomFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUpload(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     */
    public createFolderWithHttpInfo(body: CreateFolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolderWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     */
    public createFolder(body: CreateFolderRequest, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolder(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     */
    public createSignatureRequestEventWithHttpInfo(signatureRequestId: string, body: CreateSignatureRequestEventRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequestEvent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestEventWithHttpInfo(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     */
    public createSignatureRequestEvent(signatureRequestId: string, body: CreateSignatureRequestEventRequest, _options?: PromiseConfigurationOptions): Promise<SignatureRequestEvent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestEvent(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     */
    public createSignatureRequestTokenWithHttpInfo(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequestToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestTokenWithHttpInfo(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     */
    public createSignatureRequestToken(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, _options?: PromiseConfigurationOptions): Promise<SignatureRequestToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestToken(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another submission. Send a new key with each new submission, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createSubmissionWithHttpInfo(templateId: string, body: CreateSubmissionRequest, version?: string, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmissionWithHttpInfo(templateId, body, version, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another submission. Send a new key with each new submission, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createSubmission(templateId: string, body: CreateSubmissionRequest, version?: string, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmission(templateId, body, version, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param body The submissions to create, and the settings they share.
     * @param [wait] Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another batch. Send a new key with each new batch, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createSubmissionBatchWithHttpInfo(body: CreateSubmissionBatchRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionBatch>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmissionBatchWithHttpInfo(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param body The submissions to create, and the settings they share.
     * @param [wait] Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of creating another batch. Send a new key with each new batch, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` means the first request is still being processed: send the request again in a few seconds.
     */
    public createSubmissionBatch(body: CreateSubmissionBatchRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SubmissionBatch> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmissionBatch(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public createTemplateWithHttpInfo(body: CreateTemplateRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithHttpInfo(body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public createTemplate(body: CreateTemplateRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplate(body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML or PDF template prints with your data before you publish a version or send live data. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param templateId The template's ID.
     * @param body The data to render the template with.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public createTemplatePreviewWithHttpInfo(templateId: string, body: CreateTemplatePreviewRequest, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplatePreviewWithHttpInfo(templateId, body, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML or PDF template prints with your data before you publish a version or send live data. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param templateId The template's ID.
     * @param body The data to render the template with.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public createTemplatePreview(templateId: string, body: CreateTemplatePreviewRequest, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplatePreview(templateId, body, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     */
    public createWebhookWithHttpInfo(body: CreateWebhookRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhookWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     */
    public createWebhook(body: CreateWebhookRequest, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhook(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     */
    public deleteCustomFileWithHttpInfo(customFileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomFileWithHttpInfo(customFileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     */
    public deleteCustomFile(customFileId: string, _options?: PromiseConfigurationOptions): Promise<CustomFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomFile(customFileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
     */
    public deleteFolderWithHttpInfo(folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolderWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
     */
    public deleteFolder(folderId: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolder(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplateWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     */
    public deleteTemplate(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplate(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     */
    public deleteWebhookWithHttpInfo(webhookId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhookWithHttpInfo(webhookId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     */
    public deleteWebhook(webhookId: string, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhook(webhookId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public expireCombinedPdfWithHttpInfo(combinedPdfId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedPdfWithHttpInfo(combinedPdfId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public expireCombinedPdf(combinedPdfId: string, _options?: PromiseConfigurationOptions): Promise<CombinedPdf> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedPdf(combinedPdfId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     */
    public expireSubmissionWithHttpInfo(submissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmissionWithHttpInfo(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     */
    public expireSubmission(submissionId: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmission(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public generateSubmissionFilesWithHttpInfo(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionFilesWithHttpInfo(submissionId, body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     */
    public generateSubmissionFiles(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionFiles(submissionId, body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     */
    public generateSubmissionPreviewWithHttpInfo(submissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionPreviewWithHttpInfo(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     */
    public generateSubmissionPreview(submissionId: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionPreview(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public getCombinedPdfWithHttpInfo(combinedPdfId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCombinedPdfWithHttpInfo(combinedPdfId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     */
    public getCombinedPdf(combinedPdfId: string, _options?: PromiseConfigurationOptions): Promise<CombinedPdf> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCombinedPdf(combinedPdfId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param customFileId The custom file's ID.
     */
    public getCustomFileWithHttpInfo(customFileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCustomFileWithHttpInfo(customFileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param customFileId The custom file's ID.
     */
    public getCustomFile(customFileId: string, _options?: PromiseConfigurationOptions): Promise<CustomFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCustomFile(customFileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param folderId The folder's ID.
     */
    public getFolderWithHttpInfo(folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFolderWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param folderId The folder's ID.
     */
    public getFolder(folderId: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFolder(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     */
    public getPresignUrlWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadPresign>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPresignUrlWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     */
    public getPresignUrl(_options?: PromiseConfigurationOptions): Promise<UploadPresign> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPresignUrl(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param signatureRequestId The signature request's ID.
     */
    public getSignatureRequestWithHttpInfo(signatureRequestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSignatureRequestWithHttpInfo(signatureRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param signatureRequestId The signature request's ID.
     */
    public getSignatureRequest(signatureRequestId: string, _options?: PromiseConfigurationOptions): Promise<SignatureRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSignatureRequest(signatureRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param submissionId The submission's ID.
     */
    public getSubmissionWithHttpInfo(submissionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionWithHttpInfo(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param submissionId The submission's ID.
     */
    public getSubmission(submissionId: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmission(submissionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param submissionBatchId The batch's ID.
     * @param [includeData] Include each submission's `data` (null without it).
     */
    public getSubmissionBatchWithHttpInfo(submissionBatchId: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionBatch>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionBatchWithHttpInfo(submissionBatchId, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param submissionBatchId The batch's ID.
     * @param [includeData] Include each submission's `data` (null without it).
     */
    public getSubmissionBatch(submissionBatchId: string, includeData?: boolean, _options?: PromiseConfigurationOptions): Promise<SubmissionBatch> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubmissionBatch(submissionBatchId, includeData, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplate(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplate(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateDiffWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateDiff>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateDiffWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplateDiff(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplateDiff> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateDiff(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     * @param [justTypes] Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types and PHP no types-only code, so theirs is the same either way.
     */
    public getTemplateModelCodeWithHttpInfo(templateId: string, lang: ModelCodeLanguage, version?: string, justTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateModelCode>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateModelCodeWithHttpInfo(templateId, lang, version, justTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     * @param [justTypes] Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types and PHP no types-only code, so theirs is the same either way.
     */
    public getTemplateModelCode(templateId: string, lang: ModelCodeLanguage, version?: string, justTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<TemplateModelCode> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateModelCode(templateId, lang, version, justTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplatePageImagesWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePageImages>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplatePageImagesWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public getTemplatePageImages(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplatePageImages> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplatePageImages(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 
     * Get a template preview
     * @param templateId The template's ID.
     * @param previewId The preview's ID.
     */
    public getTemplatePreviewWithHttpInfo(templateId: string, previewId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplatePreviewWithHttpInfo(templateId, previewId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 
     * Get a template preview
     * @param templateId The template's ID.
     * @param previewId The preview's ID.
     */
    public getTemplatePreview(templateId: string, previewId: string, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplatePreview(templateId, previewId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param templateId The template's ID.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateSchemaWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateSchemaWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param templateId The template's ID.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     */
    public getTemplateSchema(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: any; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateSchema(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param webhookId The webhook's ID.
     */
    public getWebhookWithHttpInfo(webhookId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWebhookWithHttpInfo(webhookId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param webhookId The webhook's ID.
     */
    public getWebhook(webhookId: string, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWebhook(webhookId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCombinedPdfsWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedPdfList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCombinedPdfsWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCombinedPdfs(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<CombinedPdfList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCombinedPdfs(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCustomFilesWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFileList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomFilesWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listCustomFiles(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<CustomFileList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomFiles(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param [parentFolderId] Only list the folders in this folder. Without it, the list has every folder, at any depth.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listFoldersWithHttpInfo(parentFolderId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFoldersWithHttpInfo(parentFolderId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param [parentFolderId] Only list the folders in this folder. Without it, the list has every folder, at any depth.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listFolders(parentFolderId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<FolderList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFolders(parentFolderId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 
     * List submissions
     * @param [templateId] Only list this template's submissions.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * @param [state] Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * @param [includeFiles] Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     */
    public listSubmissionsWithHttpInfo(templateId?: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, state?: SubmissionState, includeFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubmissionsWithHttpInfo(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, state, includeFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 
     * List submissions
     * @param [templateId] Only list this template's submissions.
     * @param [test] Only list test submissions (true) or live submissions (false).
     * @param [createdAfter] Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * @param [createdBefore] Only list submissions created before this time.
     * @param [includeData] Include each submission's `data` (null without it).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * @param [state] Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * @param [includeFiles] Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     */
    public listSubmissions(templateId?: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, state?: SubmissionState, includeFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<SubmissionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubmissions(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, state, includeFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public listTemplateFieldsWithHttpInfo(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateFieldsWithHttpInfo(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param templateId The template's ID.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     */
    public listTemplateFields(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateFields(templateId, version, observableOptions);
        return result.toPromise();
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
     * @param [state] Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * @param [includeFiles] Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     */
    public listTemplateSubmissionsWithHttpInfo(templateId: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, state?: SubmissionState, includeFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateSubmissionsWithHttpInfo(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, state, includeFiles, observableOptions);
        return result.toPromise();
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
     * @param [state] Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * @param [includeFiles] Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     */
    public listTemplateSubmissions(templateId: string, test?: boolean, createdAfter?: Date, createdBefore?: Date, includeData?: boolean, limit?: number, cursor?: string, state?: SubmissionState, includeFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<SubmissionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateSubmissions(templateId, test, createdAfter, createdBefore, includeData, limit, cursor, state, includeFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 
     * List templates
     * @param [query] Only list templates whose name contains this text (ignoring case).
     * @param [parentFolderId] Only list the templates in this folder (not in its subfolders).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplatesWithHttpInfo(query?: string, parentFolderId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateSummaryList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplatesWithHttpInfo(query, parentFolderId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 
     * List templates
     * @param [query] Only list templates whose name contains this text (ignoring case).
     * @param [parentFolderId] Only list the templates in this folder (not in its subfolders).
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listTemplates(query?: string, parentFolderId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<TemplateSummaryList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplates(query, parentFolderId, limit, cursor, observableOptions);
        return result.toPromise();
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
    public listWebhooksWithHttpInfo(eventType?: WebhookEventType, mode?: WebhookMode, templateId?: string, folderId?: string, apiTokenId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhooksWithHttpInfo(eventType, mode, templateId, folderId, apiTokenId, limit, cursor, observableOptions);
        return result.toPromise();
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
    public listWebhooks(eventType?: WebhookEventType, mode?: WebhookMode, templateId?: string, folderId?: string, apiTokenId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<WebhookList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhooks(eventType, mode, templateId, folderId, apiTokenId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param folderId The folder's ID.
     * @param body Where to move the folder.
     */
    public moveFolderWithHttpInfo(folderId: string, body: MoveFolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolderWithHttpInfo(folderId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param folderId The folder's ID.
     * @param body Where to move the folder.
     */
    public moveFolder(folderId: string, body: MoveFolderRequest, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolder(folderId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     */
    public moveTemplateWithHttpInfo(templateId: string, body: MoveTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplateWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     */
    public moveTemplate(templateId: string, body: MoveTemplateRequest, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplate(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, body: PublishTemplateVersionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateVersion>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersionWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     */
    public publishTemplateVersion(templateId: string, body: PublishTemplateVersionRequest, _options?: PromiseConfigurationOptions): Promise<TemplateVersion> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersion(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     */
    public removeTemplateFieldsWithHttpInfo(templateId: string, body: RemoveTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTemplateFieldsWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     */
    public removeTemplateFields(templateId: string, body: RemoveTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTemplateFields(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     */
    public renameFolderWithHttpInfo(folderId: string, body: RenameFolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolderWithHttpInfo(folderId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     */
    public renameFolder(folderId: string, body: RenameFolderRequest, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolder(folderId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     */
    public reorderTemplateFieldsWithHttpInfo(templateId: string, body: ReorderTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reorderTemplateFieldsWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     */
    public reorderTemplateFields(templateId: string, body: ReorderTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reorderTemplateFields(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, body: RestoreTemplateVersionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersionWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     */
    public restoreTemplateVersion(templateId: string, body: RestoreTemplateVersionRequest, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersion(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthenticationWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthenticationCheck>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testAuthenticationWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     */
    public testAuthentication(_options?: PromiseConfigurationOptions): Promise<AuthenticationCheck> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.testAuthentication(observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateSignatureRequestWithHttpInfo(signatureRequestId: string, body: UpdateSignatureRequestRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSignatureRequestWithHttpInfo(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateSignatureRequest(signatureRequestId: string, body: UpdateSignatureRequestRequest, _options?: PromiseConfigurationOptions): Promise<SignatureRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSignatureRequest(signatureRequestId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateTemplateWithHttpInfo(templateId: string, body: UpdateTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateTemplate(templateId: string, body: UpdateTemplateRequest, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplate(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param templateId The template's ID.
     * @param body The new PDF, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public updateTemplateDocumentWithHttpInfo(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocumentWithHttpInfo(templateId, body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param templateId The template's ID.
     * @param body The new PDF, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     */
    public updateTemplateDocument(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocument(templateId, body, wait, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     */
    public updateTemplateFieldsWithHttpInfo(templateId: string, body: UpdateTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateFieldsWithHttpInfo(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     */
    public updateTemplateFields(templateId: string, body: UpdateTemplateFieldsRequest, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateFields(templateId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateWebhookWithHttpInfo(webhookId: string, body: UpdateWebhookRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookWithHttpInfo(webhookId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     */
    public updateWebhook(webhookId: string, body: UpdateWebhookRequest, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhook(webhookId, body, observableOptions);
        return result.toPromise();
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
    public uploadTemplateWithHttpInfo(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateWithHttpInfo(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, observableOptions);
        return result.toPromise();
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
    public uploadTemplate(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplate(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param templateId The template's ID.
     * @param document The new PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields.
     */
    public uploadTemplateDocumentWithHttpInfo(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateDocumentWithHttpInfo(templateId, document, wait, reimportFields, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param templateId The template's ID.
     * @param document The new PDF.
     * @param [wait] Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields.
     */
    public uploadTemplateDocument(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateDocument(templateId, document, wait, reimportFields, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     */
    public validateSubmissionWithHttpInfo(templateId: string, body: ValidateSubmissionRequest, version?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionValidation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateSubmissionWithHttpInfo(templateId, body, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     */
    public validateSubmission(templateId: string, body: ValidateSubmissionRequest, version?: string, _options?: PromiseConfigurationOptions): Promise<SubmissionValidation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateSubmission(templateId, body, version, observableOptions);
        return result.toPromise();
    }


}



