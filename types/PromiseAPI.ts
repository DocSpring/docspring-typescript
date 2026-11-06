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
import { CreateAccountEmailActionRequest } from '../models/CreateAccountEmailActionRequest';
import { CreateCombinedPdfRequest } from '../models/CreateCombinedPdfRequest';
import { CreateCustomFileFromUploadRequest } from '../models/CreateCustomFileFromUploadRequest';
import { CreateEmailActionRequest } from '../models/CreateEmailActionRequest';
import { CreateEmailDomainRequest } from '../models/CreateEmailDomainRequest';
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
import { DnsRecordType } from '../models/DnsRecordType';
import { EmailAction } from '../models/EmailAction';
import { EmailActionConditions } from '../models/EmailActionConditions';
import { EmailActionConditionsInput } from '../models/EmailActionConditionsInput';
import { EmailActionCustomization } from '../models/EmailActionCustomization';
import { EmailActionDelivery } from '../models/EmailActionDelivery';
import { EmailActionFileFormats } from '../models/EmailActionFileFormats';
import { EmailActionList } from '../models/EmailActionList';
import { EmailActionSetting } from '../models/EmailActionSetting';
import { EmailActionSubmissionType } from '../models/EmailActionSubmissionType';
import { EmailActionTestEmail } from '../models/EmailActionTestEmail';
import { EmailDomain } from '../models/EmailDomain';
import { EmailDomainDnsRecord } from '../models/EmailDomainDnsRecord';
import { EmailDomainDnsRecordPurpose } from '../models/EmailDomainDnsRecordPurpose';
import { EmailDomainList } from '../models/EmailDomainList';
import { EmailDomainRecordState } from '../models/EmailDomainRecordState';
import { EmailDomainState } from '../models/EmailDomainState';
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
import { SendAccountEmailActionTestEmailRequest } from '../models/SendAccountEmailActionTestEmailRequest';
import { ShapeType } from '../models/ShapeType';
import { SignatureRequest } from '../models/SignatureRequest';
import { SignatureRequestAuthSecondFactorType } from '../models/SignatureRequestAuthSecondFactorType';
import { SignatureRequestAuthType } from '../models/SignatureRequestAuthType';
import { SignatureRequestEmailAttachments } from '../models/SignatureRequestEmailAttachments';
import { SignatureRequestEmailStatus } from '../models/SignatureRequestEmailStatus';
import { SignatureRequestEvent } from '../models/SignatureRequestEvent';
import { SignatureRequestEventType } from '../models/SignatureRequestEventType';
import { SignatureRequestInput } from '../models/SignatureRequestInput';
import { SignatureRequestMessageType } from '../models/SignatureRequestMessageType';
import { SignatureRequestReminders } from '../models/SignatureRequestReminders';
import { SignatureRequestState } from '../models/SignatureRequestState';
import { SignatureRequestToken } from '../models/SignatureRequestToken';
import { SignatureRequestTokenType } from '../models/SignatureRequestTokenType';
import { SigningOrder } from '../models/SigningOrder';
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
import { TemplateFormSection } from '../models/TemplateFormSection';
import { TemplateFormSectionInput } from '../models/TemplateFormSectionInput';
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
import { UpdateAccountEmailActionRequest } from '../models/UpdateAccountEmailActionRequest';
import { UpdateEmailActionCustomizationRequest } from '../models/UpdateEmailActionCustomizationRequest';
import { UpdateEmailActionRequest } from '../models/UpdateEmailActionRequest';
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
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. A field with the name of one of the template's fields shares its settings (`type`, `required`, `default`, ...), so a field that sets one to another value is refused: PUT /templates/{template_id}/fields changes them for every field with the name. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public addTemplateFieldsWithHttpInfo(templateId: string, body: AddTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addTemplateFieldsWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. A field with the name of one of the template's fields shares its settings (`type`, `required`, `default`, ...), so a field that sets one to another value is refused: PUT /templates/{template_id}/fields changes them for every field with the name. 
     * Add fields to a template
     * @param templateId The template's ID.
     * @param body The fields to add to the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public addTemplateFields(templateId: string, body: AddTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addTemplateFields(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public copyTemplateWithHttpInfo(templateId: string, body?: CopyTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplateWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param templateId The template's ID.
     * @param [body] Settings for the copy.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public copyTemplate(templateId: string, body?: CopyTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyTemplate(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds an email action to your account. It sends for every template, or only for the templates in `template_ids` and the templates in the folders in `folder_ids` (and the folders inside them). Each template can turn it off or change its settings for that template only (`PUT /templates/{template_id}/email_actions/{email_action_id}/customization`). Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an account email action
     * @param body The account email action to create. Properties left out get their defaults, and it sends for every template unless it lists `template_ids` or `folder_ids`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createAccountEmailActionWithHttpInfo(body: CreateAccountEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAccountEmailActionWithHttpInfo(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds an email action to your account. It sends for every template, or only for the templates in `template_ids` and the templates in the folders in `folder_ids` (and the folders inside them). Each template can turn it off or change its settings for that template only (`PUT /templates/{template_id}/email_actions/{email_action_id}/customization`). Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an account email action
     * @param body The account email action to create. Properties left out get their defaults, and it sends for every template unless it lists `template_ids` or `folder_ids`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createAccountEmailAction(body: CreateAccountEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAccountEmailAction(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param body The PDFs to merge, and the combined PDF's settings.
     * @param [wait] Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
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
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
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
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createCustomFileFromUploadWithHttpInfo(body: CreateCustomFileFromUploadRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUploadWithHttpInfo(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param body The uploaded file to create the custom file from.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createCustomFileFromUpload(body: CreateCustomFileFromUploadRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<CustomFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomFileFromUpload(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds an email action to a template's draft. From then on, each processed submission emails its PDF to the recipients in `to`, `cc` and `bcc`: addresses, and tags for the address in one of the submission's fields (`{{ data.tenant_email }}`) or in its metadata (`{{ metadata.agent_email }}`). With `send_when`, only the submissions whose values meet its conditions send one. Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an email action
     * @param templateId The template's ID.
     * @param body The email action to create. Properties left out get their defaults.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createEmailActionWithHttpInfo(templateId: string, body: CreateEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailActionWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds an email action to a template's draft. From then on, each processed submission emails its PDF to the recipients in `to`, `cc` and `bcc`: addresses, and tags for the address in one of the submission's fields (`{{ data.tenant_email }}`) or in its metadata (`{{ metadata.agent_email }}`). With `send_when`, only the submissions whose values meet its conditions send one. Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an email action
     * @param templateId The template's ID.
     * @param body The email action to create. Properties left out get their defaults.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createEmailAction(templateId: string, body: CreateEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailAction(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a domain for email actions to send from, and returns the DNS records to add to it. DocSpring checks for them every few minutes, and the domain is verified once its DKIM and DMARC records are found. Needs a paid monthly plan. 
     * Add an email domain
     * @param body The domain to add.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createEmailDomainWithHttpInfo(body: CreateEmailDomainRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailDomainWithHttpInfo(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a domain for email actions to send from, and returns the DNS records to add to it. DocSpring checks for them every few minutes, and the domain is verified once its DKIM and DMARC records are found. Needs a paid monthly plan. 
     * Add an email domain
     * @param body The domain to add.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createEmailDomain(body: CreateEmailDomainRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailDomain> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailDomain(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createFolderWithHttpInfo(body: CreateFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolderWithHttpInfo(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param body The folder to create.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createFolder(body: CreateFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolder(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSignatureRequestEventWithHttpInfo(signatureRequestId: string, body: CreateSignatureRequestEventRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequestEvent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestEventWithHttpInfo(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param signatureRequestId The signature request's ID.
     * @param body The event to record.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSignatureRequestEvent(signatureRequestId: string, body: CreateSignatureRequestEventRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SignatureRequestEvent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestEvent(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSignatureRequestTokenWithHttpInfo(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequestToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestTokenWithHttpInfo(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param signatureRequestId The signature request's ID.
     * @param [body] The kind of link to make. Send no body for an `api` token.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSignatureRequestToken(signatureRequestId: string, body?: CreateSignatureRequestTokenRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SignatureRequestToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSignatureRequestToken(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID.  With `signature_requests`, the PDF is generated once everyone has signed. DocSpring emails each signer a link to sign, unless `send_email` is false, and can send reminders and the completed document. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSubmissionWithHttpInfo(templateId: string, body: CreateSubmissionRequest, version?: string, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmissionWithHttpInfo(templateId, body, version, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID.  With `signature_requests`, the PDF is generated once everyone has signed. DocSpring emails each signer a link to sign, unless `send_email` is false, and can send reminders and the completed document. 
     * Generate a PDF
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
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
     * @param [wait] Wait until every file in the batch has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
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
     * @param [wait] Wait until every file in the batch has been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createSubmissionBatch(body: CreateSubmissionBatchRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SubmissionBatch> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubmissionBatch(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF. A page design (`page_designer`) takes its `layout` in the Page Designer layout format, or starts with an empty page without one.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createTemplateWithHttpInfo(body: CreateTemplateRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithHttpInfo(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF. A page design (`page_designer`) takes its `layout` in the Page Designer layout format, or starts with an empty page without one.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param body The template to create.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createTemplate(body: CreateTemplateRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplate(body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template or a page design prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param templateId The template's ID.
     * @param body The data to render the template with.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createTemplatePreviewWithHttpInfo(templateId: string, body: CreateTemplatePreviewRequest, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplatePreviewWithHttpInfo(templateId, body, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template or a page design prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param templateId The template's ID.
     * @param body The data to render the template with.
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createTemplatePreview(templateId: string, body: CreateTemplatePreviewRequest, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplatePreview> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplatePreview(templateId, body, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createWebhookWithHttpInfo(body: CreateWebhookRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhookWithHttpInfo(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param body The webhook to create.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public createWebhook(body: CreateWebhookRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhook(body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one of your account's email actions, with every template's customization of it. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an account email action
     * @param emailActionId The account email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteAccountEmailActionWithHttpInfo(emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAccountEmailActionWithHttpInfo(emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one of your account's email actions, with every template's customization of it. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an account email action
     * @param emailActionId The account email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteAccountEmailAction(emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAccountEmailAction(emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteCustomFileWithHttpInfo(customFileId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomFileWithHttpInfo(customFileId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param customFileId The custom file's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteCustomFile(customFileId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<CustomFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomFile(customFileId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an email action. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailActionWithHttpInfo(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailActionWithHttpInfo(templateId, emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an email action. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailAction(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailAction(templateId, emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes the template's changes to one of your account's email actions: it sends for this template as it is, and again if the template had turned it off. 
     * Reset an account email action's customization
     * @param templateId The template's ID.
     * @param emailActionId The ID of one of your account's email actions that sends for the template.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailActionCustomizationWithHttpInfo(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailActionCustomizationWithHttpInfo(templateId, emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes the template's changes to one of your account's email actions: it sends for this template as it is, and again if the template had turned it off. 
     * Reset an account email action's customization
     * @param templateId The template's ID.
     * @param emailActionId The ID of one of your account's email actions that sends for the template.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailActionCustomization(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailActionCustomization(templateId, emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an email domain. Email actions that send from an address at it fail until you add and verify it again, or change their `from_address`. You can then remove its DNS records. 
     * Remove an email domain
     * @param emailDomainId The email domain's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailDomainWithHttpInfo(emailDomainId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailDomainWithHttpInfo(emailDomainId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an email domain. Email actions that send from an address at it fail until you add and verify it again, or change their `from_address`. You can then remove its DNS records. 
     * Remove an email domain
     * @param emailDomainId The email domain's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteEmailDomain(emailDomainId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailDomain> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailDomain(emailDomainId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteFolderWithHttpInfo(folderId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolderWithHttpInfo(folderId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param folderId The folder's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteFolder(folderId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolder(folderId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteTemplateWithHttpInfo(templateId: string, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplateWithHttpInfo(templateId, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param templateId The template's ID.
     * @param [version] Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteTemplate(templateId: string, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplate(templateId, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteWebhookWithHttpInfo(webhookId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhookWithHttpInfo(webhookId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param webhookId The webhook's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public deleteWebhook(webhookId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhook(webhookId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public expireCombinedPdfWithHttpInfo(combinedPdfId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedPdfWithHttpInfo(combinedPdfId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param combinedPdfId The combined PDF's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public expireCombinedPdf(combinedPdfId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<CombinedPdf> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireCombinedPdf(combinedPdfId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public expireSubmissionWithHttpInfo(submissionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmissionWithHttpInfo(submissionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param submissionId The submission's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public expireSubmission(submissionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.expireSubmission(submissionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public generateSubmissionFilesWithHttpInfo(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionFilesWithHttpInfo(submissionId, body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param submissionId The submission's ID.
     * @param body The formats to make.
     * @param [wait] Wait until the files have been generated before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public generateSubmissionFiles(submissionId: string, body: GenerateSubmissionFilesRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionFiles(submissionId, body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public generateSubmissionPreviewWithHttpInfo(submissionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Submission>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionPreviewWithHttpInfo(submissionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param submissionId The submission's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public generateSubmissionPreview(submissionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Submission> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.generateSubmissionPreview(submissionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns one of your account's email actions, with its settings and whether its emails are failing.
     * Get an account email action
     * @param emailActionId The account email action's ID.
     */
    public getAccountEmailActionWithHttpInfo(emailActionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAccountEmailActionWithHttpInfo(emailActionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns one of your account's email actions, with its settings and whether its emails are failing.
     * Get an account email action
     * @param emailActionId The account email action's ID.
     */
    public getAccountEmailAction(emailActionId: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAccountEmailAction(emailActionId, observableOptions);
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
     * Returns one of a template's email actions, with its settings and whether its emails are failing.
     * Get an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     */
    public getEmailActionWithHttpInfo(templateId: string, emailActionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailActionWithHttpInfo(templateId, emailActionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns one of a template's email actions, with its settings and whether its emails are failing.
     * Get an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     */
    public getEmailAction(templateId: string, emailActionId: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailAction(templateId, emailActionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an email domain, whether it's verified, and the DNS records to add to it.
     * Get an email domain
     * @param emailDomainId The email domain's ID.
     */
    public getEmailDomainWithHttpInfo(emailDomainId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailDomainWithHttpInfo(emailDomainId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an email domain, whether it's verified, and the DNS records to add to it.
     * Get an email domain
     * @param emailDomainId The email domain's ID.
     */
    public getEmailDomain(emailDomainId: string, _options?: PromiseConfigurationOptions): Promise<EmailDomain> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailDomain(emailDomainId, observableOptions);
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     */
    public getTemplateDiff(templateId: string, version?: string, _options?: PromiseConfigurationOptions): Promise<TemplateDiff> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateDiff(templateId, version, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
     * @param [justTypes] Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way.
     */
    public getTemplateModelCodeWithHttpInfo(templateId: string, lang: ModelCodeLanguage, version?: string, justTypes?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateModelCode>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemplateModelCodeWithHttpInfo(templateId, lang, version, justTypes, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param templateId The template's ID.
     * @param lang The language to generate the code in.
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
     * @param [justTypes] Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
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
     * @param [version] The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
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
     * Returns your account's email actions, newest first, one page at a time. Each one emails the files of every template's processed submissions, or of the templates and folders it lists. A template's own email actions are listed with the template (`GET /templates/{template_id}/email_actions`). 
     * List account email actions
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listAccountEmailActionsWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailActionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAccountEmailActionsWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns your account's email actions, newest first, one page at a time. Each one emails the files of every template's processed submissions, or of the templates and folders it lists. A template's own email actions are listed with the template (`GET /templates/{template_id}/email_actions`). 
     * List account email actions
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listAccountEmailActions(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<EmailActionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAccountEmailActions(limit, cursor, observableOptions);
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
     * Returns the email actions of a template's draft, and your account's email actions that send for it, newest first, one page at a time. Each one emails every processed submission's files to the people it lists. An account email action (`template_id` null) shows the settings it sends for this template, with the template's changes in `customization`. 
     * List email actions
     * @param templateId The template's ID.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listEmailActionsWithHttpInfo(templateId: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailActionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmailActionsWithHttpInfo(templateId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the email actions of a template's draft, and your account's email actions that send for it, newest first, one page at a time. Each one emails every processed submission's files to the people it lists. An account email action (`template_id` null) shows the settings it sends for this template, with the template's changes in `customization`. 
     * List email actions
     * @param templateId The template's ID.
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listEmailActions(templateId: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<EmailActionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmailActions(templateId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the domains in your account that email actions can send from once they're verified, newest first, one page at a time. 
     * List email domains
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listEmailDomainsWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailDomainList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmailDomainsWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the domains in your account that email actions can send from once they're verified, newest first, one page at a time. 
     * List email domains
     * @param [limit] How many items to return (1-100, default 50).
     * @param [cursor] The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     */
    public listEmailDomains(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<EmailDomainList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmailDomains(limit, cursor, observableOptions);
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [version] A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
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
     * @param [query] Only list templates whose name contains this text (ignoring case). `%` and `_` match themselves.
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
     * @param [query] Only list templates whose name contains this text (ignoring case). `%` and `_` match themselves.
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
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public moveFolderWithHttpInfo(folderId: string, body: MoveFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolderWithHttpInfo(folderId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param folderId The folder's ID.
     * @param body Where to move the folder.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public moveFolder(folderId: string, body: MoveFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveFolder(folderId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public moveTemplateWithHttpInfo(templateId: string, body: MoveTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplateWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param templateId The template's ID.
     * @param body Where to move the template.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public moveTemplate(templateId: string, body: MoveTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveTemplate(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public publishTemplateVersionWithHttpInfo(templateId: string, body: PublishTemplateVersionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateVersion>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersionWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param templateId The template's ID.
     * @param body The version to publish.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public publishTemplateVersion(templateId: string, body: PublishTemplateVersionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplateVersion> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.publishTemplateVersion(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public removeTemplateFieldsWithHttpInfo(templateId: string, body: RemoveTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTemplateFieldsWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param templateId The template's ID.
     * @param body The fields to remove from the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public removeTemplateFields(templateId: string, body: RemoveTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTemplateFields(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public renameFolderWithHttpInfo(folderId: string, body: RenameFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolderWithHttpInfo(folderId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param folderId The folder's ID.
     * @param body The folder's new name.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public renameFolder(folderId: string, body: RenameFolderRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Folder> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameFolder(folderId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public reorderTemplateFieldsWithHttpInfo(templateId: string, body: ReorderTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reorderTemplateFieldsWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param templateId The template's ID.
     * @param body The new order of the fields in the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public reorderTemplateFields(templateId: string, body: ReorderTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reorderTemplateFields(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public restoreTemplateVersionWithHttpInfo(templateId: string, body: RestoreTemplateVersionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersionWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.
     * Restore a template version
     * @param templateId The template's ID.
     * @param body The version to restore.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public restoreTemplateVersion(templateId: string, body: RestoreTemplateVersionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreTemplateVersion(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends the account email action's email to the API token's user only, as it would go for one template it sends for, with each field shown as its name in brackets, so you can check how it looks. When the email action attaches its files and that template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. 
     * Send a test email for an account email action
     * @param emailActionId The account email action's ID.
     * @param [body] Which template the test email is for.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public sendAccountEmailActionTestEmailWithHttpInfo(emailActionId: string, body?: SendAccountEmailActionTestEmailRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailActionTestEmail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendAccountEmailActionTestEmailWithHttpInfo(emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends the account email action's email to the API token's user only, as it would go for one template it sends for, with each field shown as its name in brackets, so you can check how it looks. When the email action attaches its files and that template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. 
     * Send a test email for an account email action
     * @param emailActionId The account email action's ID.
     * @param [body] Which template the test email is for.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public sendAccountEmailActionTestEmail(emailActionId: string, body?: SendAccountEmailActionTestEmailRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailActionTestEmail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendAccountEmailActionTestEmail(emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends the email action's email to the API token's user only, with each field and metadata value shown as its name in brackets, so you can check how it looks. When the email action attaches its files and the template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. Without a paid plan, the user needs a confirmed email address. 
     * Send a test email
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public sendEmailActionTestEmailWithHttpInfo(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailActionTestEmail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailActionTestEmailWithHttpInfo(templateId, emailActionId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends the email action's email to the API token's user only, with each field and metadata value shown as its name in brackets, so you can check how it looks. When the email action attaches its files and the template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. Without a paid plan, the user needs a confirmed email address. 
     * Send a test email
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public sendEmailActionTestEmail(templateId: string, emailActionId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailActionTestEmail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailActionTestEmail(templateId, emailActionId, idempotencyKey, observableOptions);
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
     * Changes one of your account's email actions. Properties left out keep their values. Its templates' customizations keep their own changes, and follow the rest. Set `enabled` to false to stop its emails for every template. 
     * Update an account email action
     * @param emailActionId The account email action's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateAccountEmailActionWithHttpInfo(emailActionId: string, body: UpdateAccountEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAccountEmailActionWithHttpInfo(emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes one of your account's email actions. Properties left out keep their values. Its templates' customizations keep their own changes, and follow the rest. Set `enabled` to false to stop its emails for every template. 
     * Update an account email action
     * @param emailActionId The account email action's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateAccountEmailAction(emailActionId: string, body: UpdateAccountEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAccountEmailAction(emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes an email action's settings. Properties left out keep their values. Set `enabled` to false to stop its emails, or to true to turn it back on after DocSpring turned it off. 
     * Update an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateEmailActionWithHttpInfo(templateId: string, emailActionId: string, body: UpdateEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailActionWithHttpInfo(templateId, emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes an email action's settings. Properties left out keep their values. Set `enabled` to false to stop its emails, or to true to turn it back on after DocSpring turned it off. 
     * Update an email action
     * @param templateId The template's ID.
     * @param emailActionId The email action's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateEmailAction(templateId: string, emailActionId: string, body: UpdateEmailActionRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailAction(templateId, emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes one of your account's email actions for this template only, replacing any changes the template had. Each setting you send is changed for this template, and the ones you leave out follow the account email action, including later changes to it. Set `enabled` to false to stop it sending for this template. 
     * Customize an account email action for a template
     * @param templateId The template's ID.
     * @param emailActionId The ID of one of your account's email actions that sends for the template.
     * @param body The template's changes to the account email action, replacing any it had. Each setting you send is changed for this template, and the ones you leave out follow the account email action. `enabled: false` stops it sending for this template; left out, it sends.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateEmailActionCustomizationWithHttpInfo(templateId: string, emailActionId: string, body: UpdateEmailActionCustomizationRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailActionCustomizationWithHttpInfo(templateId, emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes one of your account's email actions for this template only, replacing any changes the template had. Each setting you send is changed for this template, and the ones you leave out follow the account email action, including later changes to it. Set `enabled` to false to stop it sending for this template. 
     * Customize an account email action for a template
     * @param templateId The template's ID.
     * @param emailActionId The ID of one of your account's email actions that sends for the template.
     * @param body The template's changes to the account email action, replacing any it had. Each setting you send is changed for this template, and the ones you leave out follow the account email action. `enabled: false` stops it sending for this template; left out, it sends.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateEmailActionCustomization(templateId: string, emailActionId: string, body: UpdateEmailActionCustomizationRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailAction> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailActionCustomization(templateId, emailActionId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateSignatureRequestWithHttpInfo(signatureRequestId: string, body: UpdateSignatureRequestRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSignatureRequestWithHttpInfo(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param signatureRequestId The signature request's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateSignatureRequest(signatureRequestId: string, body: UpdateSignatureRequestRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SignatureRequest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSignatureRequest(signatureRequestId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults`, `html_engine_options` and a page design's `layout` replace the whole object, and `field_groups` changes only the groups it lists. A new layout adds a field for each new value it reads. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplateWithHttpInfo(templateId: string, body: UpdateTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults`, `html_engine_options` and a page design's `layout` replace the whole object, and `field_groups` changes only the groups it lists. A new layout adds a field for each new value it reads. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param templateId The template's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplate(templateId: string, body: UpdateTemplateRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplate(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's document
     * @param templateId The template's ID.
     * @param body The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplateDocumentWithHttpInfo(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocumentWithHttpInfo(templateId, body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's document
     * @param templateId The template's ID.
     * @param body The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplateDocument(templateId: string, body: UpdateTemplateDocumentRequest, wait?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateDocument(templateId, body, wait, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplateFieldsWithHttpInfo(templateId: string, body: UpdateTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateFieldsWithHttpInfo(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param templateId The template's ID.
     * @param body The fields to change in the template's draft.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateTemplateFields(templateId: string, body: UpdateTemplateFieldsRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<TemplateFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateFields(templateId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateWebhookWithHttpInfo(webhookId: string, body: UpdateWebhookRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Webhook>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookWithHttpInfo(webhookId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param webhookId The webhook's ID.
     * @param body The settings to change. Properties left out keep their values.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public updateWebhook(webhookId: string, body: UpdateWebhookRequest, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Webhook> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhook(webhookId, body, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a template from an uploaded PDF or Word document
     * @param document A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it).
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [name] The template's name.
     * @param [description] The template's description.
     * @param [parentFolderId] The folder to put the template in. Left out, it's created at the root.
     * @param [aiFieldNamingLanguage] The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
     * @param [detectFields] Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
     * @param [fieldSource] With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
     * @param [fieldNaming] With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
     * @param [fieldLogic] With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
     * @param [outputFormat] What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document.
     * @param [includeOfficeUseFields] With `detect_fields`, whether AI field setup keeps the fields that only the office receiving the form fills in, such as a "For office use only" box (`true`), or leaves them out (`false`). Default: your account's template settings.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public uploadTemplateWithHttpInfo(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, outputFormat?: OutputFormat, includeOfficeUseFields?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateWithHttpInfo(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, outputFormat, includeOfficeUseFields, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a template from an uploaded PDF or Word document
     * @param document A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it).
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [name] The template's name.
     * @param [description] The template's description.
     * @param [parentFolderId] The folder to put the template in. Left out, it's created at the root.
     * @param [aiFieldNamingLanguage] The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
     * @param [detectFields] Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
     * @param [fieldSource] With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
     * @param [fieldNaming] With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
     * @param [fieldLogic] With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
     * @param [outputFormat] What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document.
     * @param [includeOfficeUseFields] With `detect_fields`, whether AI field setup keeps the fields that only the office receiving the form fills in, such as a "For office use only" box (`true`), or leaves them out (`false`). Default: your account's template settings.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public uploadTemplate(document: HttpFile, wait?: boolean, name?: string, description?: string, parentFolderId?: string, aiFieldNamingLanguage?: AiFieldNamingLanguage, detectFields?: boolean, fieldSource?: FieldSetupSource, fieldNaming?: FieldSetupNaming, fieldLogic?: FieldSetupLogic, outputFormat?: OutputFormat, includeOfficeUseFields?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplate(document, wait, name, description, parentFolderId, aiFieldNamingLanguage, detectFields, fieldSource, fieldNaming, fieldLogic, outputFormat, includeOfficeUseFields, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 
     * Replace a template's document with an uploaded file
     * @param templateId The template's ID.
     * @param document The new PDF, or the new Word document (.docx or .odt) of a Word template.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public uploadTemplateDocumentWithHttpInfo(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Template>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateDocumentWithHttpInfo(templateId, document, wait, reimportFields, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 
     * Replace a template's document with an uploaded file
     * @param templateId The template's ID.
     * @param document The new PDF, or the new Word document (.docx or .odt) of a Word template.
     * @param [wait] Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * @param [reimportFields] Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public uploadTemplateDocument(templateId: string, document: HttpFile, wait?: boolean, reimportFields?: boolean, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<Template> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadTemplateDocument(templateId, document, wait, reimportFields, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public validateSubmissionWithHttpInfo(templateId: string, body: ValidateSubmissionRequest, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubmissionValidation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateSubmissionWithHttpInfo(templateId, body, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param templateId The template's ID.
     * @param body The submission's data and settings.
     * @param [version] The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public validateSubmission(templateId: string, body: ValidateSubmissionRequest, version?: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<SubmissionValidation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateSubmission(templateId, body, version, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks the email domain's DNS records now, instead of waiting for the next check. If DocSpring has stopped looking for its DKIM records (3 days after they were created), it starts again with new ones: replace the CNAME records with them. 
     * Verify an email domain
     * @param emailDomainId The email domain's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public verifyEmailDomainWithHttpInfo(emailDomainId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.verifyEmailDomainWithHttpInfo(emailDomainId, idempotencyKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks the email domain's DNS records now, instead of waiting for the next check. If DocSpring has stopped looking for its DKIM records (3 days after they were created), it starts again with new ones: replace the CNAME records with them. 
     * Verify an email domain
     * @param emailDomainId The email domain's ID.
     * @param [idempotencyKey] A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links.
     */
    public verifyEmailDomain(emailDomainId: string, idempotencyKey?: string, _options?: PromiseConfigurationOptions): Promise<EmailDomain> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.verifyEmailDomain(emailDomainId, idempotencyKey, observableOptions);
        return result.toPromise();
    }


}



