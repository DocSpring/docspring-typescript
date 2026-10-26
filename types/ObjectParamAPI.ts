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
}

export interface ClientCreateCustomFileFromUploadRequest {
    /**
     * The uploaded file to create the custom file from.
     * @type CreateCustomFileFromUploadRequest
     * @memberof ClientcreateCustomFileFromUpload
     */
    body: CreateCustomFileFromUploadRequest
}

export interface ClientCreateFolderRequest {
    /**
     * The folder to create.
     * @type CreateFolderRequest
     * @memberof ClientcreateFolder
     */
    body: CreateFolderRequest
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
     * The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
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
}

export interface ClientCreateSubmissionBatchRequest {
    /**
     * The submissions to create, and the settings they share.
     * @type CreateSubmissionBatchRequest
     * @memberof ClientcreateSubmissionBatch
     */
    body: CreateSubmissionBatchRequest
    /**
     * Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateSubmissionBatch
     */
    wait?: boolean
}

export interface ClientCreateTemplateRequest {
    /**
     * The template to create.
     * @type CreateTemplateRequest
     * @memberof ClientcreateTemplate
     */
    body: CreateTemplateRequest
    /**
     * Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientcreateTemplate
     */
    wait?: boolean
}

export interface ClientCreateWebhookRequest {
    /**
     * The webhook to create.
     * @type CreateWebhookRequest
     * @memberof ClientcreateWebhook
     */
    body: CreateWebhookRequest
}

export interface ClientDeleteCustomFileRequest {
    /**
     * The custom file's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteCustomFile
     */
    customFileId: string
}

export interface ClientDeleteFolderRequest {
    /**
     * The folder's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteFolder
     */
    folderId: string
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
}

export interface ClientDeleteWebhookRequest {
    /**
     * The webhook's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteWebhook
     */
    webhookId: string
}

export interface ClientExpireCombinedPdfRequest {
    /**
     * The combined PDF's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireCombinedPdf
     */
    combinedPdfId: string
}

export interface ClientExpireSubmissionRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireSubmission
     */
    submissionId: string
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
}

export interface ClientGenerateSubmissionPreviewRequest {
    /**
     * The submission's ID.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgenerateSubmissionPreview
     */
    submissionId: string
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
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
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
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
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
     * The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateModelCode
     */
    version?: string
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
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplatePageImages
     */
    version?: string
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
     * The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default.
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
     * A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`.
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
}

export interface ClientListTemplatesRequest {
    /**
     * Only list templates whose name contains this text (ignoring case).
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
}

export interface ClientTestAuthenticationRequest {
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
     * The new PDF, as one of `cache_id`, `document_url` and `document_base64`.
     * @type UpdateTemplateDocumentRequest
     * @memberof ClientupdateTemplateDocument
     */
    body: UpdateTemplateDocumentRequest
    /**
     * Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientupdateTemplateDocument
     */
    wait?: boolean
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
}

export interface ClientUploadTemplateRequest {
    /**
     * The PDF.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientuploadTemplate
     */
    document: HttpFile
    /**
     * Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
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
     * The new PDF.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientuploadTemplateDocument
     */
    document: HttpFile
    /**
     * Wait until the PDF has been processed, and a `document_url` downloaded, before responding. Default true on sync.api hosts.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplateDocument
     */
    wait?: boolean
    /**
     * Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields.
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientuploadTemplateDocument
     */
    reimportFields?: boolean
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
     * The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published).
     * Defaults to: undefined
     * @type string
     * @memberof ClientvalidateSubmission
     */
    version?: string
}

export class ObjectClient {
    private api: ObservableClient

    public constructor(configuration: Configuration, requestFactory?: ClientRequestFactory, responseProcessor?: ClientResponseProcessor) {
        this.api = new ObservableClient(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param param the request object
     */
    public addTemplateFieldsWithHttpInfo(param: ClientAddTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.addTemplateFieldsWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. 
     * Add fields to a template
     * @param param the request object
     */
    public addTemplateFields(param: ClientAddTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.addTemplateFields(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param param the request object
     */
    public copyTemplateWithHttpInfo(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.copyTemplateWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Copies a template (its draft, or a published version) into a new template.
     * Copy a template
     * @param param the request object
     */
    public copyTemplate(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.copyTemplate(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param param the request object
     */
    public createCombinedPdfWithHttpInfo(param: ClientCreateCombinedPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        return this.api.createCombinedPdfWithHttpInfo(param.body, param.wait,  options).toPromise();
    }

    /**
     * Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 
     * Combine PDFs
     * @param param the request object
     */
    public createCombinedPdf(param: ClientCreateCombinedPdfRequest, options?: ConfigurationOptions): Promise<CombinedPdf> {
        return this.api.createCombinedPdf(param.body, param.wait,  options).toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param param the request object
     */
    public createCustomFileFromUploadWithHttpInfo(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        return this.api.createCustomFileFromUploadWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 
     * Create a custom file from an upload
     * @param param the request object
     */
    public createCustomFileFromUpload(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<CustomFile> {
        return this.api.createCustomFileFromUpload(param.body,  options).toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.createFolderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 
     * Create a folder
     * @param param the request object
     */
    public createFolder(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.createFolder(param.body,  options).toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. 
     * Record a signature request event
     * @param param the request object
     */
    public createSignatureRequestEventWithHttpInfo(param: ClientCreateSignatureRequestEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequestEvent>> {
        return this.api.createSignatureRequestEventWithHttpInfo(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. 
     * Record a signature request event
     * @param param the request object
     */
    public createSignatureRequestEvent(param: ClientCreateSignatureRequestEventRequest, options?: ConfigurationOptions): Promise<SignatureRequestEvent> {
        return this.api.createSignatureRequestEvent(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param param the request object
     */
    public createSignatureRequestTokenWithHttpInfo(param: ClientCreateSignatureRequestTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequestToken>> {
        return this.api.createSignatureRequestTokenWithHttpInfo(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 
     * Create a signature request token
     * @param param the request object
     */
    public createSignatureRequestToken(param: ClientCreateSignatureRequestTokenRequest, options?: ConfigurationOptions): Promise<SignatureRequestToken> {
        return this.api.createSignatureRequestToken(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param param the request object
     */
    public createSubmissionWithHttpInfo(param: ClientCreateSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.createSubmissionWithHttpInfo(param.templateId, param.body, param.version, param.wait,  options).toPromise();
    }

    /**
     * Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 
     * Generate a PDF
     * @param param the request object
     */
    public createSubmission(param: ClientCreateSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.createSubmission(param.templateId, param.body, param.version, param.wait,  options).toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param param the request object
     */
    public createSubmissionBatchWithHttpInfo(param: ClientCreateSubmissionBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionBatch>> {
        return this.api.createSubmissionBatchWithHttpInfo(param.body, param.wait,  options).toPromise();
    }

    /**
     * Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 
     * Generate PDFs in a batch
     * @param param the request object
     */
    public createSubmissionBatch(param: ClientCreateSubmissionBatchRequest, options?: ConfigurationOptions): Promise<SubmissionBatch> {
        return this.api.createSubmissionBatch(param.body, param.wait,  options).toPromise();
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param param the request object
     */
    public createTemplateWithHttpInfo(param: ClientCreateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.createTemplateWithHttpInfo(param.body, param.wait,  options).toPromise();
    }

    /**
     * Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 
     * Create a template
     * @param param the request object
     */
    public createTemplate(param: ClientCreateTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.createTemplate(param.body, param.wait,  options).toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param param the request object
     */
    public createWebhookWithHttpInfo(param: ClientCreateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.createWebhookWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 
     * Create a webhook
     * @param param the request object
     */
    public createWebhook(param: ClientCreateWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.createWebhook(param.body,  options).toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param param the request object
     */
    public deleteCustomFileWithHttpInfo(param: ClientDeleteCustomFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFile>> {
        return this.api.deleteCustomFileWithHttpInfo(param.customFileId,  options).toPromise();
    }

    /**
     * Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 
     * Delete a custom file
     * @param param the request object
     */
    public deleteCustomFile(param: ClientDeleteCustomFileRequest, options?: ConfigurationOptions): Promise<CustomFile> {
        return this.api.deleteCustomFile(param.customFileId,  options).toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.deleteFolderWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolder(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.deleteFolder(param.folderId,  options).toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.deleteTemplateWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplate(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.deleteTemplate(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param param the request object
     */
    public deleteWebhookWithHttpInfo(param: ClientDeleteWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.deleteWebhookWithHttpInfo(param.webhookId,  options).toPromise();
    }

    /**
     * Deletes a webhook so it stops receiving events, and returns it.
     * Delete a webhook
     * @param param the request object
     */
    public deleteWebhook(param: ClientDeleteWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.deleteWebhook(param.webhookId,  options).toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param param the request object
     */
    public expireCombinedPdfWithHttpInfo(param: ClientExpireCombinedPdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedPdf>> {
        return this.api.expireCombinedPdfWithHttpInfo(param.combinedPdfId,  options).toPromise();
    }

    /**
     * Deletes a combined PDF's PDF and returns the expired combined PDF.
     * Expire a combined PDF
     * @param param the request object
     */
    public expireCombinedPdf(param: ClientExpireCombinedPdfRequest, options?: ConfigurationOptions): Promise<CombinedPdf> {
        return this.api.expireCombinedPdf(param.combinedPdfId,  options).toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param param the request object
     */
    public expireSubmissionWithHttpInfo(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.expireSubmissionWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Deletes a submission's data and PDF now, and returns the expired submission.
     * Expire a submission
     * @param param the request object
     */
    public expireSubmission(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.expireSubmission(param.submissionId,  options).toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param param the request object
     */
    public generateSubmissionFilesWithHttpInfo(param: ClientGenerateSubmissionFilesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.generateSubmissionFilesWithHttpInfo(param.submissionId, param.body, param.wait,  options).toPromise();
    }

    /**
     * Adds formats to a processed submission's files, in the background: `png`, a PNG image of each page of the PDF (up to 100 pages). To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 
     * Generate more files
     * @param param the request object
     */
    public generateSubmissionFiles(param: ClientGenerateSubmissionFilesRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.generateSubmissionFiles(param.submissionId, param.body, param.wait,  options).toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param param the request object
     */
    public generateSubmissionPreviewWithHttpInfo(param: ClientGenerateSubmissionPreviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.generateSubmissionPreviewWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 
     * Generate a preview PDF
     * @param param the request object
     */
    public generateSubmissionPreview(param: ClientGenerateSubmissionPreviewRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.generateSubmissionPreview(param.submissionId,  options).toPromise();
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
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param param the request object
     */
    public getTemplateModelCodeWithHttpInfo(param: ClientGetTemplateModelCodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateModelCode>> {
        return this.api.getTemplateModelCodeWithHttpInfo(param.templateId, param.lang, param.version,  options).toPromise();
    }

    /**
     * Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 
     * Generate typed code for a template's submission data
     * @param param the request object
     */
    public getTemplateModelCode(param: ClientGetTemplateModelCodeRequest, options?: ConfigurationOptions): Promise<TemplateModelCode> {
        return this.api.getTemplateModelCode(param.templateId, param.lang, param.version,  options).toPromise();
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
     * Returns the submissions in your account, newest first, one page at a time. Lists leave out each submission's `data` unless you pass `include_data=true`. 
     * List submissions
     * @param param the request object
     */
    public listSubmissionsWithHttpInfo(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionList>> {
        return this.api.listSubmissionsWithHttpInfo(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the submissions in your account, newest first, one page at a time. Lists leave out each submission's `data` unless you pass `include_data=true`. 
     * List submissions
     * @param param the request object
     */
    public listSubmissions(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<SubmissionList> {
        return this.api.listSubmissions(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor,  options).toPromise();
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
        return this.api.listTemplateSubmissionsWithHttpInfo(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns a template's submissions (from every version of the template), newest first.
     * List a template's submissions
     * @param param the request object
     */
    public listTemplateSubmissions(param: ClientListTemplateSubmissionsRequest, options?: ConfigurationOptions): Promise<SubmissionList> {
        return this.api.listTemplateSubmissions(param.templateId, param.test, param.createdAfter, param.createdBefore, param.includeData, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Get a template by its ID for its HTML, defaults and published versions. 
     * List templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: ClientListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplateSummaryList>> {
        return this.api.listTemplatesWithHttpInfo(param.query, param.parentFolderId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Returns the templates in your account (their drafts), newest first, one page at a time. Get a template by its ID for its HTML, defaults and published versions. 
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
        return this.api.moveFolderWithHttpInfo(param.folderId, param.body,  options).toPromise();
    }

    /**
     * Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 
     * Move a folder
     * @param param the request object
     */
    public moveFolder(param: ClientMoveFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.moveFolder(param.folderId, param.body,  options).toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param param the request object
     */
    public moveTemplateWithHttpInfo(param: ClientMoveTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.moveTemplateWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Moves a template and all of its published versions to a folder, or to the root (`null`).
     * Move a template to a folder
     * @param param the request object
     */
    public moveTemplate(param: ClientMoveTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.moveTemplate(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersionWithHttpInfo(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateVersion>> {
        return this.api.publishTemplateVersionWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersion(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<TemplateVersion> {
        return this.api.publishTemplateVersion(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param param the request object
     */
    public removeTemplateFieldsWithHttpInfo(param: ClientRemoveTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.removeTemplateFieldsWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 
     * Remove fields from a template
     * @param param the request object
     */
    public removeTemplateFields(param: ClientRemoveTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.removeTemplateFields(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolderWithHttpInfo(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.renameFolderWithHttpInfo(param.folderId, param.body,  options).toPromise();
    }

    /**
     * Renames a folder. The name must be unique within its parent folder. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolder(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.renameFolder(param.folderId, param.body,  options).toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param param the request object
     */
    public reorderTemplateFieldsWithHttpInfo(param: ClientReorderTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.reorderTemplateFieldsWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 
     * Reorder a template's fields
     * @param param the request object
     */
    public reorderTemplateFields(param: ClientReorderTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.reorderTemplateFields(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersionWithHttpInfo(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.restoreTemplateVersionWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Replaces the template's draft with a copy of one of its published versions.
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersion(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.restoreTemplateVersion(param.templateId, param.body,  options).toPromise();
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
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param param the request object
     */
    public updateSignatureRequestWithHttpInfo(param: ClientUpdateSignatureRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignatureRequest>> {
        return this.api.updateSignatureRequestWithHttpInfo(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 
     * Update a signature request
     * @param param the request object
     */
    public updateSignatureRequest(param: ClientUpdateSignatureRequestRequest, options?: ConfigurationOptions): Promise<SignatureRequest> {
        return this.api.updateSignatureRequest(param.signatureRequestId, param.body,  options).toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.updateTemplateWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object, and `field_groups` changes only the groups it lists. Setting `parent_folder_id` moves the template and all of its published versions. 
     * Update a template
     * @param param the request object
     */
    public updateTemplate(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.updateTemplate(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param param the request object
     */
    public updateTemplateDocumentWithHttpInfo(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.updateTemplateDocumentWithHttpInfo(param.templateId, param.body, param.wait,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 
     * Replace a template's PDF
     * @param param the request object
     */
    public updateTemplateDocument(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.updateTemplateDocument(param.templateId, param.body, param.wait,  options).toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param param the request object
     */
    public updateTemplateFieldsWithHttpInfo(param: ClientUpdateTemplateFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateFields>> {
        return this.api.updateTemplateFieldsWithHttpInfo(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 
     * Update a template's fields
     * @param param the request object
     */
    public updateTemplateFields(param: ClientUpdateTemplateFieldsRequest, options?: ConfigurationOptions): Promise<TemplateFields> {
        return this.api.updateTemplateFields(param.templateId, param.body,  options).toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param param the request object
     */
    public updateWebhookWithHttpInfo(param: ClientUpdateWebhookRequest, options?: ConfigurationOptions): Promise<HttpInfo<Webhook>> {
        return this.api.updateWebhookWithHttpInfo(param.webhookId, param.body,  options).toPromise();
    }

    /**
     * Updates a webhook. Only the properties you send change.
     * Update a webhook
     * @param param the request object
     */
    public updateWebhook(param: ClientUpdateWebhookRequest, options?: ConfigurationOptions): Promise<Webhook> {
        return this.api.updateWebhook(param.webhookId, param.body,  options).toPromise();
    }

    /**
     * Creates a PDF template from a PDF sent with the request (`multipart/form-data`). For large files, upload the PDF with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a PDF template from an uploaded PDF
     * @param param the request object
     */
    public uploadTemplateWithHttpInfo(param: ClientUploadTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.uploadTemplateWithHttpInfo(param.document, param.wait, param.name, param.description, param.parentFolderId, param.aiFieldNamingLanguage, param.detectFields, param.fieldSource, param.fieldNaming, param.fieldLogic,  options).toPromise();
    }

    /**
     * Creates a PDF template from a PDF sent with the request (`multipart/form-data`). For large files, upload the PDF with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 
     * Create a PDF template from an uploaded PDF
     * @param param the request object
     */
    public uploadTemplate(param: ClientUploadTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.uploadTemplate(param.document, param.wait, param.name, param.description, param.parentFolderId, param.aiFieldNamingLanguage, param.detectFields, param.fieldSource, param.fieldNaming, param.fieldLogic,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param param the request object
     */
    public uploadTemplateDocumentWithHttpInfo(param: ClientUploadTemplateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.uploadTemplateDocumentWithHttpInfo(param.templateId, param.document, param.wait, param.reimportFields,  options).toPromise();
    }

    /**
     * Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 
     * Replace a template's PDF with an uploaded PDF
     * @param param the request object
     */
    public uploadTemplateDocument(param: ClientUploadTemplateDocumentRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.uploadTemplateDocument(param.templateId, param.document, param.wait, param.reimportFields,  options).toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param param the request object
     */
    public validateSubmissionWithHttpInfo(param: ClientValidateSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionValidation>> {
        return this.api.validateSubmissionWithHttpInfo(param.templateId, param.body, param.version,  options).toPromise();
    }

    /**
     * Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 
     * Check a submission without creating it
     * @param param the request object
     */
    public validateSubmission(param: ClientValidateSubmissionRequest, options?: ConfigurationOptions): Promise<SubmissionValidation> {
        return this.api.validateSubmission(param.templateId, param.body, param.version,  options).toPromise();
    }

}
