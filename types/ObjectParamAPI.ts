import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableClient } from "./ObservableAPI";
import { ClientRequestFactory, ClientResponseProcessor} from "../apis/Client";

export interface ClientAddTemplateFieldsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientaddTemplateFields
     */
    templateId: string
    /**
     * The fields to add to the template's draft.
     * @type AddTemplateFieldsRequest
     * @memberof ClientaddTemplateFields
     */
    body: AddTemplateFieldsRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientaddTemplateFields
     */
    idempotencyKey?: string
}

export interface ClientCopyTemplateRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcopyTemplate
     */
    templateId: string
    /**
     * Settings for the copy.
     * @type CopyTemplateRequest
     * @memberof ClientcopyTemplate
     */
    body?: CopyTemplateRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcopyTemplate
     */
    idempotencyKey?: string
}

export interface ClientCreateAccountEmailActionRequest {
    /**
     * The account email action to create. Properties left out get their defaults, and it sends for every template unless it lists `template_ids` or `folder_ids`.
     * @type CreateAccountEmailActionRequest
     * @memberof ClientcreateAccountEmailAction
     */
    body: CreateAccountEmailActionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateAccountEmailAction
     */
    idempotencyKey?: string
}

export interface ClientCreateCombinedPdfRequest {
    /**
     * The PDFs to merge, and the combined PDF's settings.
     * @type CreateCombinedPdfRequest
     * @memberof ClientcreateCombinedPdf
     */
    body: CreateCombinedPdfRequest
    /**
     * Wait until the PDF has been generated before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateCombinedPdf
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateCombinedPdf
     */
    idempotencyKey?: string
}

export interface ClientCreateCustomFileFromUploadRequest {
    /**
     * The uploaded file to create the custom file from.
     * @type CreateCustomFileFromUploadRequest
     * @memberof ClientcreateCustomFileFromUpload
     */
    body: CreateCustomFileFromUploadRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateCustomFileFromUpload
     */
    idempotencyKey?: string
}

export interface ClientCreateEmailActionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateEmailAction
     */
    templateId: string
    /**
     * The email action to create. Properties left out get their defaults.
     * @type CreateEmailActionRequest
     * @memberof ClientcreateEmailAction
     */
    body: CreateEmailActionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateEmailAction
     */
    idempotencyKey?: string
}

export interface ClientCreateEmailDomainRequest {
    /**
     * The domain to add.
     * @type CreateEmailDomainRequest
     * @memberof ClientcreateEmailDomain
     */
    body: CreateEmailDomainRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateEmailDomain
     */
    idempotencyKey?: string
}

export interface ClientCreateFolderRequest {
    /**
     * The folder to create.
     * @type CreateFolderRequest
     * @memberof ClientcreateFolder
     */
    body: CreateFolderRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateFolder
     */
    idempotencyKey?: string
}

export interface ClientCreateSignatureRequestEventRequest {
    /**
     * The signature request's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSignatureRequestEvent
     */
    signatureRequestId: string
    /**
     * The event to record.
     * @type CreateSignatureRequestEventRequest
     * @memberof ClientcreateSignatureRequestEvent
     */
    body: CreateSignatureRequestEventRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSignatureRequestEvent
     */
    idempotencyKey?: string
}

export interface ClientCreateSignatureRequestTokenRequest {
    /**
     * The signature request's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSignatureRequestToken
     */
    signatureRequestId: string
    /**
     * The kind of link to make. Send no body for an `api` token.
     * @type CreateSignatureRequestTokenRequest
     * @memberof ClientcreateSignatureRequestToken
     */
    body?: CreateSignatureRequestTokenRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSignatureRequestToken
     */
    idempotencyKey?: string
}

export interface ClientCreateSubmissionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSubmission
     */
    templateId: string
    /**
     * The submission's data and settings.
     * @type CreateSubmissionRequest
     * @memberof ClientcreateSubmission
     */
    body: CreateSubmissionRequest
    /**
     * The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSubmission
     */
    version?: string
    /**
     * Wait until the files have been generated before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateSubmission
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSubmission
     */
    idempotencyKey?: string
}

export interface ClientCreateSubmissionBatchRequest {
    /**
     * The submissions to create, and the settings they share.
     * @type CreateSubmissionBatchRequest
     * @memberof ClientcreateSubmissionBatch
     */
    body: CreateSubmissionBatchRequest
    /**
     * Wait until every file in the batch has been generated before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateSubmissionBatch
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateSubmissionBatch
     */
    idempotencyKey?: string
}

export interface ClientCreateTemplateRequest {
    /**
     * The template to create.
     * @type CreateTemplateRequest
     * @memberof ClientcreateTemplate
     */
    body: CreateTemplateRequest
    /**
     * Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateTemplate
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateTemplate
     */
    idempotencyKey?: string
}

export interface ClientCreateTemplatePreviewRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateTemplatePreview
     */
    templateId: string
    /**
     * The data to render the template with.
     * @type CreateTemplatePreviewRequest
     * @memberof ClientcreateTemplatePreview
     */
    body: CreateTemplatePreviewRequest
    /**
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateTemplatePreview
     */
    version?: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateTemplatePreview
     */
    idempotencyKey?: string
}

export interface ClientCreateWebhookRequest {
    /**
     * The webhook to create.
     * @type CreateWebhookRequest
     * @memberof ClientcreateWebhook
     */
    body: CreateWebhookRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateWebhook
     */
    idempotencyKey?: string
}

export interface ClientDeleteAccountEmailActionRequest {
    /**
     * The account email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteAccountEmailAction
     */
    emailActionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteAccountEmailAction
     */
    idempotencyKey?: string
}

export interface ClientDeleteCustomFileRequest {
    /**
     * The custom file's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteCustomFile
     */
    customFileId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteCustomFile
     */
    idempotencyKey?: string
}

export interface ClientDeleteEmailActionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailAction
     */
    templateId: string
    /**
     * The email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailAction
     */
    emailActionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailAction
     */
    idempotencyKey?: string
}

export interface ClientDeleteEmailActionCustomizationRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailActionCustomization
     */
    templateId: string
    /**
     * The ID of one of your account's email actions that sends for the template.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailActionCustomization
     */
    emailActionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailActionCustomization
     */
    idempotencyKey?: string
}

export interface ClientDeleteEmailDomainRequest {
    /**
     * The email domain's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailDomain
     */
    emailDomainId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteEmailDomain
     */
    idempotencyKey?: string
}

export interface ClientDeleteFolderRequest {
    /**
     * The folder's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteFolder
     */
    folderId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteFolder
     */
    idempotencyKey?: string
}

export interface ClientDeleteTemplateRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteTemplate
     */
    templateId: string
    /**
     * Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteTemplate
     */
    version?: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteTemplate
     */
    idempotencyKey?: string
}

export interface ClientDeleteWebhookRequest {
    /**
     * The webhook's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteWebhook
     */
    webhookId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteWebhook
     */
    idempotencyKey?: string
}

export interface ClientExpireCombinedPdfRequest {
    /**
     * The combined PDF's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireCombinedPdf
     */
    combinedPdfId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireCombinedPdf
     */
    idempotencyKey?: string
}

export interface ClientExpireSubmissionRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireSubmission
     */
    submissionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireSubmission
     */
    idempotencyKey?: string
}

export interface ClientGenerateSubmissionFilesRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgenerateSubmissionFiles
     */
    submissionId: string
    /**
     * The formats to make.
     * @type GenerateSubmissionFilesRequest
     * @memberof ClientgenerateSubmissionFiles
     */
    body: GenerateSubmissionFilesRequest
    /**
     * Wait until the files have been generated before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientgenerateSubmissionFiles
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgenerateSubmissionFiles
     */
    idempotencyKey?: string
}

export interface ClientGenerateSubmissionPreviewRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgenerateSubmissionPreview
     */
    submissionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgenerateSubmissionPreview
     */
    idempotencyKey?: string
}

export interface ClientGetAccountEmailActionRequest {
    /**
     * The account email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetAccountEmailAction
     */
    emailActionId: string
}

export interface ClientGetCombinedPdfRequest {
    /**
     * The combined PDF's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetCombinedPdf
     */
    combinedPdfId: string
}

export interface ClientGetCustomFileRequest {
    /**
     * The custom file's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetCustomFile
     */
    customFileId: string
}

export interface ClientGetEmailActionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetEmailAction
     */
    templateId: string
    /**
     * The email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetEmailAction
     */
    emailActionId: string
}

export interface ClientGetEmailDomainRequest {
    /**
     * The email domain's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetEmailDomain
     */
    emailDomainId: string
}

export interface ClientGetFolderRequest {
    /**
     * The folder's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetFolder
     */
    folderId: string
}

export interface ClientGetPresignUrlRequest {
}

export interface ClientGetSignatureRequestRequest {
    /**
     * The signature request's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetSignatureRequest
     */
    signatureRequestId: string
}

export interface ClientGetSubmissionRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetSubmission
     */
    submissionId: string
}

export interface ClientGetSubmissionBatchRequest {
    /**
     * The batch's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetSubmissionBatch
     */
    submissionBatchId: string
    /**
     * Include each submission's `data` (null without it).
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientgetSubmissionBatch
     */
    includeData?: boolean
}

export interface ClientGetTemplateRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplate
     */
    templateId: string
    /**
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplate
     */
    version?: string
}

export interface ClientGetTemplateDiffRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateDiff
     */
    templateId: string
    /**
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateDiff
     */
    version?: string
}

export interface ClientGetTemplateModelCodeRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateModelCode
     */
    templateId: string
    /**
     * The language to generate the code in.
     * Defaults to: undefined
     * @type ModelCodeLanguage
     * @memberof ClientgetTemplateModelCode
     */
    lang: ModelCodeLanguage
    /**
     * The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateModelCode
     */
    version?: string
    /**
     * Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientgetTemplateModelCode
     */
    justTypes?: boolean
}

export interface ClientGetTemplatePageImagesRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplatePageImages
     */
    templateId: string
    /**
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplatePageImages
     */
    version?: string
}

export interface ClientGetTemplatePreviewRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplatePreview
     */
    templateId: string
    /**
     * The preview's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplatePreview
     */
    previewId: string
}

export interface ClientGetTemplateSchemaRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateSchema
     */
    templateId: string
    /**
     * The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateSchema
     */
    version?: string
}

export interface ClientGetWebhookRequest {
    /**
     * The webhook's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetWebhook
     */
    webhookId: string
}

export interface ClientListAccountEmailActionsRequest {
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistAccountEmailActions
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistAccountEmailActions
     */
    cursor?: string
}

export interface ClientListCombinedPdfsRequest {
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistCombinedPdfs
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistCombinedPdfs
     */
    cursor?: string
}

export interface ClientListCustomFilesRequest {
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistCustomFiles
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistCustomFiles
     */
    cursor?: string
}

export interface ClientListEmailActionsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistEmailActions
     */
    templateId: string
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistEmailActions
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistEmailActions
     */
    cursor?: string
}

export interface ClientListEmailDomainsRequest {
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistEmailDomains
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistEmailDomains
     */
    cursor?: string
}

export interface ClientListFoldersRequest {
    /**
     * Only list the folders in this folder. Without it, the list has every folder, at any depth.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistFolders
     */
    parentFolderId?: string
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistFolders
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistFolders
     */
    cursor?: string
}

export interface ClientListSubmissionsRequest {
    /**
     * Only list this template's submissions.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    templateId?: string
    /**
     * Only list test submissions (true) or live submissions (false).
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistSubmissions
     */
    test?: boolean
    /**
     * Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * Defaults to: undefined
     * @type Date
     * @memberof ClientlistSubmissions
     */
    createdAfter?: Date
    /**
     * Only list submissions created before this time.
     * Defaults to: undefined
     * @type Date
     * @memberof ClientlistSubmissions
     */
    createdBefore?: Date
    /**
     * Include each submission's `data` (null without it).
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistSubmissions
     */
    includeData?: boolean
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistSubmissions
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    cursor?: string
    /**
     * Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * Defaults to: undefined
     * @type SubmissionState
     * @memberof ClientlistSubmissions
     */
    state?: SubmissionState
    /**
     * Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistSubmissions
     */
    includeFiles?: boolean
}

export interface ClientListTemplateFieldsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateFields
     */
    templateId: string
    /**
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateFields
     */
    version?: string
}

export interface ClientListTemplateSubmissionsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    templateId: string
    /**
     * Only list test submissions (true) or live submissions (false).
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistTemplateSubmissions
     */
    test?: boolean
    /**
     * Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`).
     * Defaults to: undefined
     * @type Date
     * @memberof ClientlistTemplateSubmissions
     */
    createdAfter?: Date
    /**
     * Only list submissions created before this time.
     * Defaults to: undefined
     * @type Date
     * @memberof ClientlistTemplateSubmissions
     */
    createdBefore?: Date
    /**
     * Include each submission's `data` (null without it).
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistTemplateSubmissions
     */
    includeData?: boolean
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistTemplateSubmissions
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    cursor?: string
    /**
     * Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck.
     * Defaults to: undefined
     * @type SubmissionState
     * @memberof ClientlistTemplateSubmissions
     */
    state?: SubmissionState
    /**
     * Include each submission's generated files and their download links (`files`, empty without it), without the page images' links.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistTemplateSubmissions
     */
    includeFiles?: boolean
}

export interface ClientListTemplatesRequest {
    /**
     * Only list templates whose name contains this text (ignoring case). `%` and `_` match themselves.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplates
     */
    query?: string
    /**
     * Only list the templates in this folder (not in its subfolders).
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplates
     */
    parentFolderId?: string
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistTemplates
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplates
     */
    cursor?: string
}

export interface ClientListWebhooksRequest {
    /**
     * Only list webhooks that subscribe to this event.
     * Defaults to: undefined
     * @type WebhookEventType
     * @memberof ClientlistWebhooks
     */
    eventType?: WebhookEventType
    /**
     * Only list webhooks set to this mode.
     * Defaults to: undefined
     * @type WebhookMode
     * @memberof ClientlistWebhooks
     */
    mode?: WebhookMode
    /**
     * Only list webhooks scoped to this template.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistWebhooks
     */
    templateId?: string
    /**
     * Only list webhooks scoped to this folder.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistWebhooks
     */
    folderId?: string
    /**
     * Only list webhooks scoped to this API token.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistWebhooks
     */
    apiTokenId?: string
    /**
     * How many items to return (1-100, default 50).
     * Defaults to: 50
     * @type number
     * @memberof ClientlistWebhooks
     */
    limit?: number
    /**
     * The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one.
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistWebhooks
     */
    cursor?: string
}

export interface ClientMoveFolderRequest {
    /**
     * The folder's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveFolder
     */
    folderId: string
    /**
     * Where to move the folder.
     * @type MoveFolderRequest
     * @memberof ClientmoveFolder
     */
    body: MoveFolderRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveFolder
     */
    idempotencyKey?: string
}

export interface ClientMoveTemplateRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveTemplate
     */
    templateId: string
    /**
     * Where to move the template.
     * @type MoveTemplateRequest
     * @memberof ClientmoveTemplate
     */
    body: MoveTemplateRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveTemplate
     */
    idempotencyKey?: string
}

export interface ClientPublishTemplateVersionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientpublishTemplateVersion
     */
    templateId: string
    /**
     * The version to publish.
     * @type PublishTemplateVersionRequest
     * @memberof ClientpublishTemplateVersion
     */
    body: PublishTemplateVersionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientpublishTemplateVersion
     */
    idempotencyKey?: string
}

export interface ClientRemoveTemplateFieldsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientremoveTemplateFields
     */
    templateId: string
    /**
     * The fields to remove from the template's draft.
     * @type RemoveTemplateFieldsRequest
     * @memberof ClientremoveTemplateFields
     */
    body: RemoveTemplateFieldsRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientremoveTemplateFields
     */
    idempotencyKey?: string
}

export interface ClientRenameFolderRequest {
    /**
     * The folder's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientrenameFolder
     */
    folderId: string
    /**
     * The folder's new name.
     * @type RenameFolderRequest
     * @memberof ClientrenameFolder
     */
    body: RenameFolderRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientrenameFolder
     */
    idempotencyKey?: string
}

export interface ClientReorderTemplateFieldsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientreorderTemplateFields
     */
    templateId: string
    /**
     * The new order of the fields in the template's draft.
     * @type ReorderTemplateFieldsRequest
     * @memberof ClientreorderTemplateFields
     */
    body: ReorderTemplateFieldsRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientreorderTemplateFields
     */
    idempotencyKey?: string
}

export interface ClientRestoreTemplateVersionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientrestoreTemplateVersion
     */
    templateId: string
    /**
     * The version to restore.
     * @type RestoreTemplateVersionRequest
     * @memberof ClientrestoreTemplateVersion
     */
    body: RestoreTemplateVersionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientrestoreTemplateVersion
     */
    idempotencyKey?: string
}

export interface ClientSendAccountEmailActionTestEmailRequest {
    /**
     * The account email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientsendAccountEmailActionTestEmail
     */
    emailActionId: string
    /**
     * Which template the test email is for.
     * @type SendAccountEmailActionTestEmailRequest
     * @memberof ClientsendAccountEmailActionTestEmail
     */
    body?: SendAccountEmailActionTestEmailRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientsendAccountEmailActionTestEmail
     */
    idempotencyKey?: string
}

export interface ClientSendEmailActionTestEmailRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientsendEmailActionTestEmail
     */
    templateId: string
    /**
     * The email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientsendEmailActionTestEmail
     */
    emailActionId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientsendEmailActionTestEmail
     */
    idempotencyKey?: string
}

export interface ClientTestAuthenticationRequest {
}

export interface ClientUpdateAccountEmailActionRequest {
    /**
     * The account email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateAccountEmailAction
     */
    emailActionId: string
    /**
     * The settings to change. Properties left out keep their values.
     * @type UpdateAccountEmailActionRequest
     * @memberof ClientupdateAccountEmailAction
     */
    body: UpdateAccountEmailActionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateAccountEmailAction
     */
    idempotencyKey?: string
}

export interface ClientUpdateEmailActionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailAction
     */
    templateId: string
    /**
     * The email action's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailAction
     */
    emailActionId: string
    /**
     * The settings to change. Properties left out keep their values.
     * @type UpdateEmailActionRequest
     * @memberof ClientupdateEmailAction
     */
    body: UpdateEmailActionRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailAction
     */
    idempotencyKey?: string
}

export interface ClientUpdateEmailActionCustomizationRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailActionCustomization
     */
    templateId: string
    /**
     * The ID of one of your account's email actions that sends for the template.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailActionCustomization
     */
    emailActionId: string
    /**
     * The template's changes to the account email action, replacing any it had. Each setting you send is changed for this template, and the ones you leave out follow the account email action. `enabled: false` stops it sending for this template; left out, it sends.
     * @type UpdateEmailActionCustomizationRequest
     * @memberof ClientupdateEmailActionCustomization
     */
    body: UpdateEmailActionCustomizationRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateEmailActionCustomization
     */
    idempotencyKey?: string
}

export interface ClientUpdateSignatureRequestRequest {
    /**
     * The signature request's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateSignatureRequest
     */
    signatureRequestId: string
    /**
     * The settings to change. Properties left out keep their values.
     * @type UpdateSignatureRequestRequest
     * @memberof ClientupdateSignatureRequest
     */
    body: UpdateSignatureRequestRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateSignatureRequest
     */
    idempotencyKey?: string
}

export interface ClientUpdateTemplateRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplate
     */
    templateId: string
    /**
     * The settings to change. Properties left out keep their values.
     * @type UpdateTemplateRequest
     * @memberof ClientupdateTemplate
     */
    body: UpdateTemplateRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplate
     */
    idempotencyKey?: string
}

export interface ClientUpdateTemplateDocumentRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateDocument
     */
    templateId: string
    /**
     * The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`.
     * @type UpdateTemplateDocumentRequest
     * @memberof ClientupdateTemplateDocument
     */
    body: UpdateTemplateDocumentRequest
    /**
     * Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientupdateTemplateDocument
     */
    wait?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateDocument
     */
    idempotencyKey?: string
}

export interface ClientUpdateTemplateFieldsRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateFields
     */
    templateId: string
    /**
     * The fields to change in the template's draft.
     * @type UpdateTemplateFieldsRequest
     * @memberof ClientupdateTemplateFields
     */
    body: UpdateTemplateFieldsRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateFields
     */
    idempotencyKey?: string
}

export interface ClientUpdateWebhookRequest {
    /**
     * The webhook's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateWebhook
     */
    webhookId: string
    /**
     * The settings to change. Properties left out keep their values.
     * @type UpdateWebhookRequest
     * @memberof ClientupdateWebhook
     */
    body: UpdateWebhookRequest
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateWebhook
     */
    idempotencyKey?: string
}

export interface ClientUploadTemplateRequest {
    /**
     * A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it).
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientuploadTemplate
     */
    document: HttpFile
    /**
     * Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplate
     */
    wait?: boolean
    /**
     * The template's name.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplate
     */
    name?: string
    /**
     * The template's description.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplate
     */
    description?: string
    /**
     * The folder to put the template in. Left out, it's created at the root.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplate
     */
    parentFolderId?: string
    /**
     * The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings.
     * Defaults to: undefined
     * @type AiFieldNamingLanguage
     * @memberof ClientuploadTemplate
     */
    aiFieldNamingLanguage?: AiFieldNamingLanguage
    /**
     * Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplate
     */
    detectFields?: boolean
    /**
     * With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields.
     * Defaults to: undefined
     * @type FieldSetupSource
     * @memberof ClientuploadTemplate
     */
    fieldSource?: FieldSetupSource
    /**
     * With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`.
     * Defaults to: undefined
     * @type FieldSetupNaming
     * @memberof ClientuploadTemplate
     */
    fieldNaming?: FieldSetupNaming
    /**
     * With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings.
     * Defaults to: undefined
     * @type FieldSetupLogic
     * @memberof ClientuploadTemplate
     */
    fieldLogic?: FieldSetupLogic
    /**
     * What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document.
     * Defaults to: undefined
     * @type OutputFormat
     * @memberof ClientuploadTemplate
     */
    outputFormat?: OutputFormat
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplate
     */
    idempotencyKey?: string
}

export interface ClientUploadTemplateDocumentRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplateDocument
     */
    templateId: string
    /**
     * The new PDF, or the new Word document (.docx or .odt) of a Word template.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientuploadTemplateDocument
     */
    document: HttpFile
    /**
     * Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplateDocument
     */
    wait?: boolean
    /**
     * Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplateDocument
     */
    reimportFields?: boolean
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientuploadTemplateDocument
     */
    idempotencyKey?: string
}

export interface ClientValidateSubmissionRequest {
    /**
     * The template's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientvalidateSubmission
     */
    templateId: string
    /**
     * The submission's data and settings.
     * @type ValidateSubmissionRequest
     * @memberof ClientvalidateSubmission
     */
    body: ValidateSubmissionRequest
    /**
     * The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientvalidateSubmission
     */
    version?: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientvalidateSubmission
     */
    idempotencyKey?: string
}

export interface ClientVerifyEmailDomainRequest {
    /**
     * The email domain's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientverifyEmailDomain
     */
    emailDomainId: string
    /**
     * A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then.
     * Defaults to: undefined
     * @type string
     * @memberof ClientverifyEmailDomain
     */
    idempotencyKey?: string
}

export class ObjectClient {
    private api: ObservableClient

    public constructor(configuration: Configuration, requestFactory?: ClientRequestFactory, responseProcessor?: ClientResponseProcessor) {
        this.api = new ObservableClient(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. A field with the name of one of the template's fields shares its settings (`type`, `required`, `default`, ...), so a field that sets one to another value is refused: PUT /templates/{template_id}/fields changes them for every field with the name. 
     * Add fields to a template
     * @param param the request object
     */
    public addTemplateFieldsWithHttpInfo(param: ClientAddTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.addTemplateFieldsWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. A field with the name of one of the template's fields shares its settings (`type`, `required`, `default`, ...), so a field that sets one to another value is refused: PUT /templates/{template_id}/fields changes them for every field with the name. 
     * Add fields to a template
     * @param param the request object
     */
    public addTemplateFields(param: ClientAddTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.addTemplateFields(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param param the request object
     */
    public copyTemplateWithHttpInfo(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.copyTemplateWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param param the request object
     */
    public copyTemplate(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.copyTemplate(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds an email action to your account. It sends for every template, or only for the templates in `template_ids` and the templates in the folders in `folder_ids` (and the folders inside them). Each template can turn it off or change its settings for that template only (`PUT /templates/{template_id}/email_actions/{email_action_id}/customization`). Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an account email action
     * @param param the request object
     */
    public createAccountEmailActionWithHttpInfo(param: ClientCreateAccountEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.createAccountEmailActionWithHttpInfo(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds an email action to your account. It sends for every template, or only for the templates in `template_ids` and the templates in the folders in `folder_ids` (and the folders inside them). Each template can turn it off or change its settings for that template only (`PUT /templates/{template_id}/email_actions/{email_action_id}/customization`). Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an account email action
     * @param param the request object
     */
    public createAccountEmailAction(param: ClientCreateAccountEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.createAccountEmailAction(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param param the request object
     */
    public createCombinedPdfWithHttpInfo(param: ClientCreateCombinedPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        return this.api.createCombinedPdfWithHttpInfo(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param param the request object
     */
    public createCombinedPdf(param: ClientCreateCombinedPdfRequest, options?: ConfigurationOptions): Promise<CombinedPdf> {
        return this.api.createCombinedPdf(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param param the request object
     */
    public createCustomFileFromUploadWithHttpInfo(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        return this.api.createCustomFileFromUploadWithHttpInfo(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param param the request object
     */
    public createCustomFileFromUpload(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<CustomFile> {
        return this.api.createCustomFileFromUpload(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds an email action to a template's draft. From then on, each processed submission emails its PDF to the recipients in `to`, `cc` and `bcc`: addresses, and tags for the address in one of the submission's fields (`{{ data.tenant_email }}`) or in its metadata (`{{ metadata.agent_email }}`). With `send_when`, only the submissions whose values meet its conditions send one. Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an email action
     * @param param the request object
     */
    public createEmailActionWithHttpInfo(param: ClientCreateEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.createEmailActionWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds an email action to a template's draft. From then on, each processed submission emails its PDF to the recipients in `to`, `cc` and `bcc`: addresses, and tags for the address in one of the submission's fields (`{{ data.tenant_email }}`) or in its metadata (`{{ metadata.agent_email }}`). With `send_when`, only the submissions whose values meet its conditions send one. Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 
     * Create an email action
     * @param param the request object
     */
    public createEmailAction(param: ClientCreateEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.createEmailAction(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds a domain for email actions to send from, and returns the DNS records to add to it. DocSpring checks for them every few minutes, and the domain is verified once its DKIM and DMARC records are found. Needs a paid monthly plan. 
     * Add an email domain
     * @param param the request object
     */
    public createEmailDomainWithHttpInfo(param: ClientCreateEmailDomainRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        return this.api.createEmailDomainWithHttpInfo(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds a domain for email actions to send from, and returns the DNS records to add to it. DocSpring checks for them every few minutes, and the domain is verified once its DKIM and DMARC records are found. Needs a paid monthly plan. 
     * Add an email domain
     * @param param the request object
     */
    public createEmailDomain(param: ClientCreateEmailDomainRequest, options?: ConfigurationOptions): Promise<EmailDomain> {
        return this.api.createEmailDomain(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.createFolderWithHttpInfo(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param param the request object
     */
    public createFolder(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.createFolder(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param param the request object
     */
    public createSignatureRequestEventWithHttpInfo(param: ClientCreateSignatureRequestEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequestEvent>> {
        return this.api.createSignatureRequestEventWithHttpInfo(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 
     * Record a signature request event
     * @param param the request object
     */
    public createSignatureRequestEvent(param: ClientCreateSignatureRequestEventRequest, options?: ConfigurationOptions): Promise<SignatureRequestEvent> {
        return this.api.createSignatureRequestEvent(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param param the request object
     */
    public createSignatureRequestTokenWithHttpInfo(param: ClientCreateSignatureRequestTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequestToken>> {
        return this.api.createSignatureRequestTokenWithHttpInfo(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param param the request object
     */
    public createSignatureRequestToken(param: ClientCreateSignatureRequestTokenRequest, options?: ConfigurationOptions): Promise<SignatureRequestToken> {
        return this.api.createSignatureRequestToken(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID.  With `signature_requests`, the PDF is generated once everyone has signed. DocSpring emails each signer a link to sign, unless `send_email` is false, and can send reminders and the completed document. 
     * Generate a PDF
     * @param param the request object
     */
    public createSubmissionWithHttpInfo(param: ClientCreateSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.createSubmissionWithHttpInfo(param.templateId, param.body, param.version, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID.  With `signature_requests`, the PDF is generated once everyone has signed. DocSpring emails each signer a link to sign, unless `send_email` is false, and can send reminders and the completed document. 
     * Generate a PDF
     * @param param the request object
     */
    public createSubmission(param: ClientCreateSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.createSubmission(param.templateId, param.body, param.version, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param param the request object
     */
    public createSubmissionBatchWithHttpInfo(param: ClientCreateSubmissionBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionBatch>> {
        return this.api.createSubmissionBatchWithHttpInfo(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param param the request object
     */
    public createSubmissionBatch(param: ClientCreateSubmissionBatchRequest, options?: ConfigurationOptions): Promise<SubmissionBatch> {
        return this.api.createSubmissionBatch(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF. A page design (`page_designer`) takes its `layout` in the Page Designer layout format, or starts with an empty page without one.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param param the request object
     */
    public createTemplateWithHttpInfo(param: ClientCreateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.createTemplateWithHttpInfo(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF. A page design (`page_designer`) takes its `layout` in the Page Designer layout format, or starts with an empty page without one.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param param the request object
     */
    public createTemplate(param: ClientCreateTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.createTemplate(param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template or a page design prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param param the request object
     */
    public createTemplatePreviewWithHttpInfo(param: ClientCreateTemplatePreviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createTemplatePreviewWithHttpInfo(param.templateId, param.body, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template or a page design prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 
     * Preview a template with data
     * @param param the request object
     */
    public createTemplatePreview(param: ClientCreateTemplatePreviewRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.createTemplatePreview(param.templateId, param.body, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param param the request object
     */
    public createWebhookWithHttpInfo(param: ClientCreateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.createWebhookWithHttpInfo(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param param the request object
     */
    public createWebhook(param: ClientCreateWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.createWebhook(param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes one of your account's email actions, with every template's customization of it. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an account email action
     * @param param the request object
     */
    public deleteAccountEmailActionWithHttpInfo(param: ClientDeleteAccountEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.deleteAccountEmailActionWithHttpInfo(param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes one of your account's email actions, with every template's customization of it. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an account email action
     * @param param the request object
     */
    public deleteAccountEmailAction(param: ClientDeleteAccountEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.deleteAccountEmailAction(param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param param the request object
     */
    public deleteCustomFileWithHttpInfo(param: ClientDeleteCustomFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        return this.api.deleteCustomFileWithHttpInfo(param.customFileId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param param the request object
     */
    public deleteCustomFile(param: ClientDeleteCustomFileRequest, options?: ConfigurationOptions): Promise<CustomFile> {
        return this.api.deleteCustomFile(param.customFileId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes an email action. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an email action
     * @param param the request object
     */
    public deleteEmailActionWithHttpInfo(param: ClientDeleteEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.deleteEmailActionWithHttpInfo(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes an email action. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 
     * Delete an email action
     * @param param the request object
     */
    public deleteEmailAction(param: ClientDeleteEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.deleteEmailAction(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes the template's changes to one of your account's email actions: it sends for this template as it is, and again if the template had turned it off. 
     * Reset an account email action's customization
     * @param param the request object
     */
    public deleteEmailActionCustomizationWithHttpInfo(param: ClientDeleteEmailActionCustomizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.deleteEmailActionCustomizationWithHttpInfo(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes the template's changes to one of your account's email actions: it sends for this template as it is, and again if the template had turned it off. 
     * Reset an account email action's customization
     * @param param the request object
     */
    public deleteEmailActionCustomization(param: ClientDeleteEmailActionCustomizationRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.deleteEmailActionCustomization(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes an email domain. Email actions that send from an address at it fail until you add and verify it again, or change their `from_address`. You can then remove its DNS records. 
     * Remove an email domain
     * @param param the request object
     */
    public deleteEmailDomainWithHttpInfo(param: ClientDeleteEmailDomainRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        return this.api.deleteEmailDomainWithHttpInfo(param.emailDomainId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes an email domain. Email actions that send from an address at it fail until you add and verify it again, or change their `from_address`. You can then remove its DNS records. 
     * Remove an email domain
     * @param param the request object
     */
    public deleteEmailDomain(param: ClientDeleteEmailDomainRequest, options?: ConfigurationOptions): Promise<EmailDomain> {
        return this.api.deleteEmailDomain(param.emailDomainId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.deleteFolderWithHttpInfo(param.folderId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolder(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.deleteFolder(param.folderId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.deleteTemplateWithHttpInfo(param.templateId, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplate(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.deleteTemplate(param.templateId, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param param the request object
     */
    public deleteWebhookWithHttpInfo(param: ClientDeleteWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.deleteWebhookWithHttpInfo(param.webhookId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param param the request object
     */
    public deleteWebhook(param: ClientDeleteWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.deleteWebhook(param.webhookId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param param the request object
     */
    public expireCombinedPdfWithHttpInfo(param: ClientExpireCombinedPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        return this.api.expireCombinedPdfWithHttpInfo(param.combinedPdfId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param param the request object
     */
    public expireCombinedPdf(param: ClientExpireCombinedPdfRequest, options?: ConfigurationOptions): Promise<CombinedPdf> {
        return this.api.expireCombinedPdf(param.combinedPdfId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param param the request object
     */
    public expireSubmissionWithHttpInfo(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.expireSubmissionWithHttpInfo(param.submissionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param param the request object
     */
    public expireSubmission(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.expireSubmission(param.submissionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param param the request object
     */
    public generateSubmissionFilesWithHttpInfo(param: ClientGenerateSubmissionFilesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.generateSubmissionFilesWithHttpInfo(param.submissionId, param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param param the request object
     */
    public generateSubmissionFiles(param: ClientGenerateSubmissionFilesRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.generateSubmissionFiles(param.submissionId, param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param param the request object
     */
    public generateSubmissionPreviewWithHttpInfo(param: ClientGenerateSubmissionPreviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.generateSubmissionPreviewWithHttpInfo(param.submissionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param param the request object
     */
    public generateSubmissionPreview(param: ClientGenerateSubmissionPreviewRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.generateSubmissionPreview(param.submissionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Returns one of your account's email actions, with its settings and whether its emails are failing.
     * Get an account email action
     * @param param the request object
     */
    public getAccountEmailActionWithHttpInfo(param: ClientGetAccountEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.getAccountEmailActionWithHttpInfo(param.emailActionId,  options).toPromise();
    }

    /**
     * Returns one of your account's email actions, with its settings and whether its emails are failing.
     * Get an account email action
     * @param param the request object
     */
    public getAccountEmailAction(param: ClientGetAccountEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.getAccountEmailAction(param.emailActionId,  options).toPromise();
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param param the request object
     */
    public getCombinedPdfWithHttpInfo(param: ClientGetCombinedPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        return this.api.getCombinedPdfWithHttpInfo(param.combinedPdfId,  options).toPromise();
    }

    /**
     * Returns a combined PDF, with a temporary link to download it once it has been generated.
     * Get a combined PDF
     * @param param the request object
     */
    public getCombinedPdf(param: ClientGetCombinedPdfRequest, options?: ConfigurationOptions): Promise<CombinedPdf> {
        return this.api.getCombinedPdf(param.combinedPdfId,  options).toPromise();
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param param the request object
     */
    public getCustomFileWithHttpInfo(param: ClientGetCustomFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        return this.api.getCustomFileWithHttpInfo(param.customFileId,  options).toPromise();
    }

    /**
     * Returns a custom file, with a temporary URL to download it.
     * Get a custom file
     * @param param the request object
     */
    public getCustomFile(param: ClientGetCustomFileRequest, options?: ConfigurationOptions): Promise<CustomFile> {
        return this.api.getCustomFile(param.customFileId,  options).toPromise();
    }

    /**
     * Returns one of a template's email actions, with its settings and whether its emails are failing.
     * Get an email action
     * @param param the request object
     */
    public getEmailActionWithHttpInfo(param: ClientGetEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.getEmailActionWithHttpInfo(param.templateId, param.emailActionId,  options).toPromise();
    }

    /**
     * Returns one of a template's email actions, with its settings and whether its emails are failing.
     * Get an email action
     * @param param the request object
     */
    public getEmailAction(param: ClientGetEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.getEmailAction(param.templateId, param.emailActionId,  options).toPromise();
    }

    /**
     * Returns an email domain, whether it's verified, and the DNS records to add to it.
     * Get an email domain
     * @param param the request object
     */
    public getEmailDomainWithHttpInfo(param: ClientGetEmailDomainRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        return this.api.getEmailDomainWithHttpInfo(param.emailDomainId,  options).toPromise();
    }

    /**
     * Returns an email domain, whether it's verified, and the DNS records to add to it.
     * Get an email domain
     * @param param the request object
     */
    public getEmailDomain(param: ClientGetEmailDomainRequest, options?: ConfigurationOptions): Promise<EmailDomain> {
        return this.api.getEmailDomain(param.emailDomainId,  options).toPromise();
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param param the request object
     */
    public getFolderWithHttpInfo(param: ClientGetFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.getFolderWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Returns a folder.
     * Get a folder
     * @param param the request object
     */
    public getFolder(param: ClientGetFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.getFolder(param.folderId,  options).toPromise();
    }

    /**
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     * @param param the request object
     */
    public getPresignUrlWithHttpInfo(param: ClientGetPresignUrlRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UploadPresign>> {
        return this.api.getPresignUrlWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 
     * Get a presigned URL to upload a file
     * @param param the request object
     */
    public getPresignUrl(param: ClientGetPresignUrlRequest = {}, options?: ConfigurationOptions): Promise<UploadPresign> {
        return this.api.getPresignUrl( options).toPromise();
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param param the request object
     */
    public getSignatureRequestWithHttpInfo(param: ClientGetSignatureRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        return this.api.getSignatureRequestWithHttpInfo(param.signatureRequestId,  options).toPromise();
    }

    /**
     * Returns a signature request, with the values the person has entered so far.
     * Get a signature request
     * @param param the request object
     */
    public getSignatureRequest(param: ClientGetSignatureRequestRequest, options?: ConfigurationOptions): Promise<SignatureRequest> {
        return this.api.getSignatureRequest(param.signatureRequestId,  options).toPromise();
    }

    /**
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param param the request object
     */
    public getSubmissionWithHttpInfo(param: ClientGetSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.getSubmissionWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Returns a submission, with its data and links to download its PDF.
     * Get a submission
     * @param param the request object
     */
    public getSubmission(param: ClientGetSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.getSubmission(param.submissionId,  options).toPromise();
    }

    /**
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param param the request object
     */
    public getSubmissionBatchWithHttpInfo(param: ClientGetSubmissionBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionBatch>> {
        return this.api.getSubmissionBatchWithHttpInfo(param.submissionBatchId, param.includeData,  options).toPromise();
    }

    /**
     * Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 
     * Get a batch
     * @param param the request object
     */
    public getSubmissionBatch(param: ClientGetSubmissionBatchRequest, options?: ConfigurationOptions): Promise<SubmissionBatch> {
        return this.api.getSubmissionBatch(param.submissionBatchId, param.includeData,  options).toPromise();
    }

    /**
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param param the request object
     */
    public getTemplateWithHttpInfo(param: ClientGetTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.getTemplateWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a template: its draft, or one of its published versions.
     * Get a template
     * @param param the request object
     */
    public getTemplate(param: ClientGetTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.getTemplate(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param param the request object
     */
    public getTemplateDiffWithHttpInfo(param: ClientGetTemplateDiffRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateDiff>> {
        return this.api.getTemplateDiffWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 
     * Compare a version of a template with the one before it
     * @param param the request object
     */
    public getTemplateDiff(param: ClientGetTemplateDiffRequest, options?: ConfigurationOptions): Promise<TemplateDiff> {
        return this.api.getTemplateDiff(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param param the request object
     */
    public getTemplateModelCodeWithHttpInfo(param: ClientGetTemplateModelCodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateModelCode>> {
        return this.api.getTemplateModelCodeWithHttpInfo(param.templateId, param.lang, param.version, param.justTypes,  options).toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param param the request object
     */
    public getTemplateModelCode(param: ClientGetTemplateModelCodeRequest, options?: ConfigurationOptions): Promise<TemplateModelCode> {
        return this.api.getTemplateModelCode(param.templateId, param.lang, param.version, param.justTypes,  options).toPromise();
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param param the request object
     */
    public getTemplatePageImagesWithHttpInfo(param: ClientGetTemplatePageImagesRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePageImages>> {
        return this.api.getTemplatePageImagesWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 
     * Get images of a template's pages
     * @param param the request object
     */
    public getTemplatePageImages(param: ClientGetTemplatePageImagesRequest, options?: ConfigurationOptions): Promise<TemplatePageImages> {
        return this.api.getTemplatePageImages(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 
     * Get a template preview
     * @param param the request object
     */
    public getTemplatePreviewWithHttpInfo(param: ClientGetTemplatePreviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.getTemplatePreviewWithHttpInfo(param.templateId, param.previewId,  options).toPromise();
    }

    /**
     * Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 
     * Get a template preview
     * @param param the request object
     */
    public getTemplatePreview(param: ClientGetTemplatePreviewRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.getTemplatePreview(param.templateId, param.previewId,  options).toPromise();
    }

    /**
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param param the request object
     */
    public getTemplateSchemaWithHttpInfo(param: ClientGetTemplateSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.getTemplateSchemaWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 
     * Get the JSON Schema of a template's submission data
     * @param param the request object
     */
    public getTemplateSchema(param: ClientGetTemplateSchemaRequest, options?: ConfigurationOptions): Promise<{ [key: string]: any; }> {
        return this.api.getTemplateSchema(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param param the request object
     */
    public getWebhookWithHttpInfo(param: ClientGetWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.getWebhookWithHttpInfo(param.webhookId,  options).toPromise();
    }

    /**
     * Returns a webhook.
     * Get a webhook
     * @param param the request object
     */
    public getWebhook(param: ClientGetWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.getWebhook(param.webhookId,  options).toPromise();
    }

    /**
     * Returns your account's email actions, newest first, one page at a time. Each one emails the files of every template's processed submissions, or of the templates and folders it lists. A template's own email actions are listed with the template (`GET /templates/{template_id}/email_actions`). 
     * List account email actions
     * @param param the request object
     */
    public listAccountEmailActionsWithHttpInfo(param: ClientListAccountEmailActionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<EmailActionList>> {
        return this.api.listAccountEmailActionsWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns your account's email actions, newest first, one page at a time. Each one emails the files of every template's processed submissions, or of the templates and folders it lists. A template's own email actions are listed with the template (`GET /templates/{template_id}/email_actions`). 
     * List account email actions
     * @param param the request object
     */
    public listAccountEmailActions(param: ClientListAccountEmailActionsRequest = {}, options?: ConfigurationOptions): Promise<EmailActionList> {
        return this.api.listAccountEmailActions(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param param the request object
     */
    public listCombinedPdfsWithHttpInfo(param: ClientListCombinedPdfsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdfList>> {
        return this.api.listCombinedPdfsWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the combined PDFs in your account, newest first, one page at a time.
     * List combined PDFs
     * @param param the request object
     */
    public listCombinedPdfs(param: ClientListCombinedPdfsRequest = {}, options?: ConfigurationOptions): Promise<CombinedPdfList> {
        return this.api.listCombinedPdfs(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param param the request object
     */
    public listCustomFilesWithHttpInfo(param: ClientListCustomFilesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CustomFileList>> {
        return this.api.listCustomFilesWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the custom files in your account, newest first, one page at a time.
     * List custom files
     * @param param the request object
     */
    public listCustomFiles(param: ClientListCustomFilesRequest = {}, options?: ConfigurationOptions): Promise<CustomFileList> {
        return this.api.listCustomFiles(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the email actions of a template's draft, and your account's email actions that send for it, newest first, one page at a time. Each one emails every processed submission's files to the people it lists. An account email action (`template_id` null) shows the settings it sends for this template, with the template's changes in `customization`. 
     * List email actions
     * @param param the request object
     */
    public listEmailActionsWithHttpInfo(param: ClientListEmailActionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailActionList>> {
        return this.api.listEmailActionsWithHttpInfo(param.templateId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the email actions of a template's draft, and your account's email actions that send for it, newest first, one page at a time. Each one emails every processed submission's files to the people it lists. An account email action (`template_id` null) shows the settings it sends for this template, with the template's changes in `customization`. 
     * List email actions
     * @param param the request object
     */
    public listEmailActions(param: ClientListEmailActionsRequest, options?: ConfigurationOptions): Promise<EmailActionList> {
        return this.api.listEmailActions(param.templateId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the domains in your account that email actions can send from once they're verified, newest first, one page at a time. 
     * List email domains
     * @param param the request object
     */
    public listEmailDomainsWithHttpInfo(param: ClientListEmailDomainsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<EmailDomainList>> {
        return this.api.listEmailDomainsWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the domains in your account that email actions can send from once they're verified, newest first, one page at a time. 
     * List email domains
     * @param param the request object
     */
    public listEmailDomains(param: ClientListEmailDomainsRequest = {}, options?: ConfigurationOptions): Promise<EmailDomainList> {
        return this.api.listEmailDomains(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param param the request object
     */
    public listFoldersWithHttpInfo(param: ClientListFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FolderList>> {
        return this.api.listFoldersWithHttpInfo(param.parentFolderId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 
     * List folders
     * @param param the request object
     */
    public listFolders(param: ClientListFoldersRequest = {}, options?: ConfigurationOptions): Promise<FolderList> {
        return this.api.listFolders(param.parentFolderId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 
     * List submissions
     * @param param the request object
     */
    public listSubmissionsWithHttpInfo(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionList>> {
        return this.api.listSubmissionsWithHttpInfo(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor, param.state, param.includeFiles,  options).toPromise();
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 
     * List submissions
     * @param param the request object
     */
    public listSubmissions(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<SubmissionList> {
        return this.api.listSubmissions(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor, param.state, param.includeFiles,  options).toPromise();
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param param the request object
     */
    public listTemplateFieldsWithHttpInfo(param: ClientListTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.listTemplateFieldsWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 
     * List a template's fields
     * @param param the request object
     */
    public listTemplateFields(param: ClientListTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.listTemplateFields(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Returns a template's submissions (from every version of the template), newest first.
     * List a template's submissions
     * @param param the request object
     */
    public listTemplateSubmissionsWithHttpInfo(param: ClientListTemplateSubmissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionList>> {
        return this.api.listTemplateSubmissionsWithHttpInfo(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor, param.state, param.includeFiles,  options).toPromise();
    }

    /**
     * Returns a template's submissions (from every version of the template), newest first.
     * List a template's submissions
     * @param param the request object
     */
    public listTemplateSubmissions(param: ClientListTemplateSubmissionsRequest, options?: ConfigurationOptions): Promise<SubmissionList> {
        return this.api.listTemplateSubmissions(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor, param.state, param.includeFiles,  options).toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 
     * List templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: ClientListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplateSummaryList>> {
        return this.api.listTemplatesWithHttpInfo(param.query, param.parentFolderId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 
     * List templates
     * @param param the request object
     */
    public listTemplates(param: ClientListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<TemplateSummaryList> {
        return this.api.listTemplates(param.query, param.parentFolderId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 
     * List webhooks
     * @param param the request object
     */
    public listWebhooksWithHttpInfo(param: ClientListWebhooksRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WebhookList>> {
        return this.api.listWebhooksWithHttpInfo(param.eventType, param.mode, param.templateId, param.folderId, param.apiTokenId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 
     * List webhooks
     * @param param the request object
     */
    public listWebhooks(param: ClientListWebhooksRequest = {}, options?: ConfigurationOptions): Promise<WebhookList> {
        return this.api.listWebhooks(param.eventType, param.mode, param.templateId, param.folderId, param.apiTokenId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param param the request object
     */
    public moveFolderWithHttpInfo(param: ClientMoveFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.moveFolderWithHttpInfo(param.folderId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param param the request object
     */
    public moveFolder(param: ClientMoveFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.moveFolder(param.folderId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param param the request object
     */
    public moveTemplateWithHttpInfo(param: ClientMoveTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.moveTemplateWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param param the request object
     */
    public moveTemplate(param: ClientMoveTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.moveTemplate(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersionWithHttpInfo(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateVersion>> {
        return this.api.publishTemplateVersionWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersion(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<TemplateVersion> {
        return this.api.publishTemplateVersion(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param param the request object
     */
    public removeTemplateFieldsWithHttpInfo(param: ClientRemoveTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.removeTemplateFieldsWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param param the request object
     */
    public removeTemplateFields(param: ClientRemoveTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.removeTemplateFields(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolderWithHttpInfo(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.renameFolderWithHttpInfo(param.folderId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolder(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.renameFolder(param.folderId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param param the request object
     */
    public reorderTemplateFieldsWithHttpInfo(param: ClientReorderTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.reorderTemplateFieldsWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param param the request object
     */
    public reorderTemplateFields(param: ClientReorderTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.reorderTemplateFields(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersionWithHttpInfo(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.restoreTemplateVersionWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersion(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.restoreTemplateVersion(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Sends the account email action's email to the API token's user only, as it would go for one template it sends for, with each field shown as its name in brackets, so you can check how it looks. When the email action attaches its files and that template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. 
     * Send a test email for an account email action
     * @param param the request object
     */
    public sendAccountEmailActionTestEmailWithHttpInfo(param: ClientSendAccountEmailActionTestEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailActionTestEmail>> {
        return this.api.sendAccountEmailActionTestEmailWithHttpInfo(param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Sends the account email action's email to the API token's user only, as it would go for one template it sends for, with each field shown as its name in brackets, so you can check how it looks. When the email action attaches its files and that template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. 
     * Send a test email for an account email action
     * @param param the request object
     */
    public sendAccountEmailActionTestEmail(param: ClientSendAccountEmailActionTestEmailRequest, options?: ConfigurationOptions): Promise<EmailActionTestEmail> {
        return this.api.sendAccountEmailActionTestEmail(param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Sends the email action's email to the API token's user only, with each field and metadata value shown as its name in brackets, so you can check how it looks. When the email action attaches its files and the template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. Without a paid plan, the user needs a confirmed email address. 
     * Send a test email
     * @param param the request object
     */
    public sendEmailActionTestEmailWithHttpInfo(param: ClientSendEmailActionTestEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailActionTestEmail>> {
        return this.api.sendEmailActionTestEmailWithHttpInfo(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Sends the email action's email to the API token's user only, with each field and metadata value shown as its name in brackets, so you can check how it looks. When the email action attaches its files and the template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. Without a paid plan, the user needs a confirmed email address. 
     * Send a test email
     * @param param the request object
     */
    public sendEmailActionTestEmail(param: ClientSendEmailActionTestEmailRequest, options?: ConfigurationOptions): Promise<EmailActionTestEmail> {
        return this.api.sendEmailActionTestEmail(param.templateId, param.emailActionId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     * @param param the request object
     */
    public testAuthenticationWithHttpInfo(param: ClientTestAuthenticationRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AuthenticationCheck>> {
        return this.api.testAuthenticationWithHttpInfo( options).toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     * @param param the request object
     */
    public testAuthentication(param: ClientTestAuthenticationRequest = {}, options?: ConfigurationOptions): Promise<AuthenticationCheck> {
        return this.api.testAuthentication( options).toPromise();
    }

    /**
     * Changes one of your account's email actions. Properties left out keep their values. Its templates' customizations keep their own changes, and follow the rest. Set `enabled` to false to stop its emails for every template. 
     * Update an account email action
     * @param param the request object
     */
    public updateAccountEmailActionWithHttpInfo(param: ClientUpdateAccountEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.updateAccountEmailActionWithHttpInfo(param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes one of your account's email actions. Properties left out keep their values. Its templates' customizations keep their own changes, and follow the rest. Set `enabled` to false to stop its emails for every template. 
     * Update an account email action
     * @param param the request object
     */
    public updateAccountEmailAction(param: ClientUpdateAccountEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.updateAccountEmailAction(param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes an email action's settings. Properties left out keep their values. Set `enabled` to false to stop its emails, or to true to turn it back on after DocSpring turned it off. 
     * Update an email action
     * @param param the request object
     */
    public updateEmailActionWithHttpInfo(param: ClientUpdateEmailActionRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.updateEmailActionWithHttpInfo(param.templateId, param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes an email action's settings. Properties left out keep their values. Set `enabled` to false to stop its emails, or to true to turn it back on after DocSpring turned it off. 
     * Update an email action
     * @param param the request object
     */
    public updateEmailAction(param: ClientUpdateEmailActionRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.updateEmailAction(param.templateId, param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes one of your account's email actions for this template only, replacing any changes the template had. Each setting you send is changed for this template, and the ones you leave out follow the account email action, including later changes to it. Set `enabled` to false to stop it sending for this template. 
     * Customize an account email action for a template
     * @param param the request object
     */
    public updateEmailActionCustomizationWithHttpInfo(param: ClientUpdateEmailActionCustomizationRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailAction>> {
        return this.api.updateEmailActionCustomizationWithHttpInfo(param.templateId, param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes one of your account's email actions for this template only, replacing any changes the template had. Each setting you send is changed for this template, and the ones you leave out follow the account email action, including later changes to it. Set `enabled` to false to stop it sending for this template. 
     * Customize an account email action for a template
     * @param param the request object
     */
    public updateEmailActionCustomization(param: ClientUpdateEmailActionCustomizationRequest, options?: ConfigurationOptions): Promise<EmailAction> {
        return this.api.updateEmailActionCustomization(param.templateId, param.emailActionId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param param the request object
     */
    public updateSignatureRequestWithHttpInfo(param: ClientUpdateSignatureRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        return this.api.updateSignatureRequestWithHttpInfo(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param param the request object
     */
    public updateSignatureRequest(param: ClientUpdateSignatureRequestRequest, options?: ConfigurationOptions): Promise<SignatureRequest> {
        return this.api.updateSignatureRequest(param.signatureRequestId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults`, `html_engine_options` and a page design's `layout` replace the whole object, and `field_groups` changes only the groups it lists. A new layout adds a field for each new value it reads. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.updateTemplateWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults`, `html_engine_options` and a page design's `layout` replace the whole object, and `field_groups` changes only the groups it lists. A new layout adds a field for each new value it reads. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param param the request object
     */
    public updateTemplate(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.updateTemplate(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's document
     * @param param the request object
     */
    public updateTemplateDocumentWithHttpInfo(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.updateTemplateDocumentWithHttpInfo(param.templateId, param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's document
     * @param param the request object
     */
    public updateTemplateDocument(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.updateTemplateDocument(param.templateId, param.body, param.wait, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param param the request object
     */
    public updateTemplateFieldsWithHttpInfo(param: ClientUpdateTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.updateTemplateFieldsWithHttpInfo(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param param the request object
     */
    public updateTemplateFields(param: ClientUpdateTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.updateTemplateFields(param.templateId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param param the request object
     */
    public updateWebhookWithHttpInfo(param: ClientUpdateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.updateWebhookWithHttpInfo(param.webhookId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param param the request object
     */
    public updateWebhook(param: ClientUpdateWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.updateWebhook(param.webhookId, param.body, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a template from an uploaded PDF or Word document
     * @param param the request object
     */
    public uploadTemplateWithHttpInfo(param: ClientUploadTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.uploadTemplateWithHttpInfo(param.document, param.wait, param.name, param.description, param.parentFolderId, param.aiFieldNamingLanguage, param.detectFields, param.fieldSource, param.fieldNaming, param.fieldLogic, param.outputFormat, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a template from an uploaded PDF or Word document
     * @param param the request object
     */
    public uploadTemplate(param: ClientUploadTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.uploadTemplate(param.document, param.wait, param.name, param.description, param.parentFolderId, param.aiFieldNamingLanguage, param.detectFields, param.fieldSource, param.fieldNaming, param.fieldLogic, param.outputFormat, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 
     * Replace a template's document with an uploaded file
     * @param param the request object
     */
    public uploadTemplateDocumentWithHttpInfo(param: ClientUploadTemplateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.uploadTemplateDocumentWithHttpInfo(param.templateId, param.document, param.wait, param.reimportFields, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 
     * Replace a template's document with an uploaded file
     * @param param the request object
     */
    public uploadTemplateDocument(param: ClientUploadTemplateDocumentRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.uploadTemplateDocument(param.templateId, param.document, param.wait, param.reimportFields, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param param the request object
     */
    public validateSubmissionWithHttpInfo(param: ClientValidateSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionValidation>> {
        return this.api.validateSubmissionWithHttpInfo(param.templateId, param.body, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param param the request object
     */
    public validateSubmission(param: ClientValidateSubmissionRequest, options?: ConfigurationOptions): Promise<SubmissionValidation> {
        return this.api.validateSubmission(param.templateId, param.body, param.version, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Checks the email domain's DNS records now, instead of waiting for the next check. If DocSpring has stopped looking for its DKIM records (3 days after they were created), it starts again with new ones: replace the CNAME records with them. 
     * Verify an email domain
     * @param param the request object
     */
    public verifyEmailDomainWithHttpInfo(param: ClientVerifyEmailDomainRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailDomain>> {
        return this.api.verifyEmailDomainWithHttpInfo(param.emailDomainId, param.idempotencyKey,  options).toPromise();
    }

    /**
     * Checks the email domain's DNS records now, instead of waiting for the next check. If DocSpring has stopped looking for its DKIM records (3 days after they were created), it starts again with new ones: replace the CNAME records with them. 
     * Verify an email domain
     * @param param the request object
     */
    public verifyEmailDomain(param: ClientVerifyEmailDomainRequest, options?: ConfigurationOptions): Promise<EmailDomain> {
        return this.api.verifyEmailDomain(param.emailDomainId, param.idempotencyKey,  options).toPromise();
    }

}
