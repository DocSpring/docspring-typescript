import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableClient } from "./ObservableAPI";
import { ClientRequestFactory, ClientResponseProcessor} from "../apis/Client";

export interface ClientAddFieldsToTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientaddFieldsToTemplate
     */
    templateId: string
    /**
     * 
     * @type AddFieldsData
     * @memberof ClientaddFieldsToTemplate
     */
    data: AddFieldsData
}

export interface ClientBatchGeneratePdfsRequest {
    /**
     * 
     * @type SubmissionBatchData
     * @memberof ClientbatchGeneratePdfs
     */
    data: SubmissionBatchData
    /**
     * Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof ClientbatchGeneratePdfs
     */
    wait?: boolean
}

export interface ClientCombinePdfsRequest {
    /**
     * 
     * @type CombinePdfsData
     * @memberof ClientcombinePdfs
     */
    data: CombinePdfsData
}

export interface ClientCopyTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcopyTemplate
     */
    templateId: string
    /**
     * 
     * @type CopyTemplateOptions
     * @memberof ClientcopyTemplate
     */
    options?: CopyTemplateOptions
}

export interface ClientCreateCustomFileFromUploadRequest {
    /**
     * 
     * @type CreateCustomFileData
     * @memberof ClientcreateCustomFileFromUpload
     */
    data: CreateCustomFileData
}

export interface ClientCreateDataRequestEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateDataRequestEvent
     */
    dataRequestId: string
    /**
     * 
     * @type CreateSubmissionDataRequestEventRequest
     * @memberof ClientcreateDataRequestEvent
     */
    event: CreateSubmissionDataRequestEventRequest
}

export interface ClientCreateDataRequestTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreateDataRequestToken
     */
    dataRequestId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;api&#39; | &#39;email&#39;
     * @memberof ClientcreateDataRequestToken
     */
    type?: 'api' | 'email'
}

export interface ClientCreateFolderRequest {
    /**
     * 
     * @type CreateFolderData
     * @memberof ClientcreateFolder
     */
    data: CreateFolderData
}

export interface ClientCreateHtmlTemplateRequest {
    /**
     * 
     * @type CreateHtmlTemplate
     * @memberof ClientcreateHtmlTemplate
     */
    data: CreateHtmlTemplate
}

export interface ClientCreatePdfTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientcreatePdfTemplate
     */
    templateDocument: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreatePdfTemplate
     */
    templateName: string
    /**
     * Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof ClientcreatePdfTemplate
     */
    wait?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreatePdfTemplate
     */
    templateDescription?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientcreatePdfTemplate
     */
    templateParentFolderId?: string
}

export interface ClientCreatePdfTemplateFromUploadRequest {
    /**
     * 
     * @type CreatePdfTemplate
     * @memberof ClientcreatePdfTemplateFromUpload
     */
    data: CreatePdfTemplate
}

export interface ClientDeleteFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteFolder
     */
    folderId: string
}

export interface ClientDeleteTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteTemplate
     */
    templateId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientdeleteTemplate
     */
    version?: string
}

export interface ClientExpireCombinedSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireCombinedSubmission
     */
    combinedSubmissionId: string
}

export interface ClientExpireSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientexpireSubmission
     */
    submissionId: string
}

export interface ClientGeneratePdfRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgeneratePdf
     */
    templateId: string
    /**
     * 
     * @type CreatePdfSubmissionData
     * @memberof ClientgeneratePdf
     */
    submission: CreatePdfSubmissionData
    /**
     * Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof ClientgeneratePdf
     */
    wait?: boolean
}

export interface ClientGeneratePreviewRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgeneratePreview
     */
    submissionId: string
}

export interface ClientGetCombinedSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetCombinedSubmission
     */
    combinedSubmissionId: string
}

export interface ClientGetDataRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetDataRequest
     */
    dataRequestId: string
}

export interface ClientGetFullTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetFullTemplate
     */
    templateId: string
}

export interface ClientGetPresignUrlRequest {
}

export interface ClientGetSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetSubmission
     */
    submissionId: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientgetSubmission
     */
    includeData?: boolean
}

export interface ClientGetSubmissionBatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetSubmissionBatch
     */
    submissionBatchId: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientgetSubmissionBatch
     */
    includeSubmissions?: boolean
}

export interface ClientGetTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplate
     */
    templateId: string
}

export interface ClientGetTemplateSchemaRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientgetTemplateSchema
     */
    templateId: string
}

export interface ClientListCombinedSubmissionsRequest {
    /**
     * Default: 1
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistCombinedSubmissions
     */
    page?: number
    /**
     * Default: 50
     * Minimum: 1
     * Maximum: 50
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistCombinedSubmissions
     */
    perPage?: number
}

export interface ClientListFoldersRequest {
    /**
     * Filter By Folder Id
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistFolders
     */
    parentFolderId?: string
}

export interface ClientListSubmissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    cursor?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistSubmissions
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    createdAfter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    createdBefore?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistSubmissions
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistSubmissions
     */
    includeData?: boolean
}

export interface ClientListTemplateSubmissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    templateId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    cursor?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistTemplateSubmissions
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    createdAfter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    createdBefore?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplateSubmissions
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof ClientlistTemplateSubmissions
     */
    includeData?: boolean
}

export interface ClientListTemplatesRequest {
    /**
     * Search By Name
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplates
     */
    query?: string
    /**
     * Filter By Folder Id
     * Defaults to: undefined
     * @type string
     * @memberof ClientlistTemplates
     */
    parentFolderId?: string
    /**
     * Default: 1
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistTemplates
     */
    page?: number
    /**
     * Default: 50
     * Minimum: 1
     * Maximum: 50
     * Defaults to: undefined
     * @type number
     * @memberof ClientlistTemplates
     */
    perPage?: number
}

export interface ClientMoveFolderToFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveFolderToFolder
     */
    folderId: string
    /**
     * 
     * @type MoveFolderData
     * @memberof ClientmoveFolderToFolder
     */
    data: MoveFolderData
}

export interface ClientMoveTemplateToFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientmoveTemplateToFolder
     */
    templateId: string
    /**
     * 
     * @type MoveTemplateData
     * @memberof ClientmoveTemplateToFolder
     */
    data: MoveTemplateData
}

export interface ClientPublishTemplateVersionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientpublishTemplateVersion
     */
    templateId: string
    /**
     * 
     * @type PublishVersionData
     * @memberof ClientpublishTemplateVersion
     */
    data: PublishVersionData
}

export interface ClientRenameFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientrenameFolder
     */
    folderId: string
    /**
     * 
     * @type RenameFolderData
     * @memberof ClientrenameFolder
     */
    data: RenameFolderData
}

export interface ClientRestoreTemplateVersionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientrestoreTemplateVersion
     */
    templateId: string
    /**
     * 
     * @type RestoreVersionData
     * @memberof ClientrestoreTemplateVersion
     */
    data: RestoreVersionData
}

export interface ClientTestAuthenticationRequest {
}

export interface ClientUpdateDataRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateDataRequest
     */
    dataRequestId: string
    /**
     * 
     * @type UpdateSubmissionDataRequestData
     * @memberof ClientupdateDataRequest
     */
    data: UpdateSubmissionDataRequestData
}

export interface ClientUpdateTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplate
     */
    templateId: string
    /**
     * 
     * @type UpdateHtmlTemplate
     * @memberof ClientupdateTemplate
     */
    data: UpdateHtmlTemplate
}

export interface ClientUpdateTemplateDocumentRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateDocument
     */
    templateId: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ClientupdateTemplateDocument
     */
    templateDocument: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateDocument
     */
    templateName?: string
}

export interface ClientUpdateTemplateDocumentFromUploadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ClientupdateTemplateDocumentFromUpload
     */
    templateId: string
    /**
     * 
     * @type UpdatePdfTemplate
     * @memberof ClientupdateTemplateDocumentFromUpload
     */
    data: UpdatePdfTemplate
}

export class ObjectClient {
    private api: ObservableClient

    public constructor(configuration: Configuration, requestFactory?: ClientRequestFactory, responseProcessor?: ClientResponseProcessor) {
        this.api = new ObservableClient(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param param the request object
     */
    public addFieldsToTemplateWithHttpInfo(param: ClientAddFieldsToTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateAddFieldsResponse>> {
        return this.api.addFieldsToTemplateWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 
     * Add new fields to a Template
     * @param param the request object
     */
    public addFieldsToTemplate(param: ClientAddFieldsToTemplateRequest, options?: ConfigurationOptions): Promise<TemplateAddFieldsResponse> {
        return this.api.addFieldsToTemplate(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param param the request object
     */
    public batchGeneratePdfsWithHttpInfo(param: ClientBatchGeneratePdfsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchGeneratePdfs201Response>> {
        return this.api.batchGeneratePdfsWithHttpInfo(param.data, param.wait,  options).toPromise();
    }

    /**
     * Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 
     * Generate multiple PDFs
     * @param param the request object
     */
    public batchGeneratePdfs(param: ClientBatchGeneratePdfsRequest, options?: ConfigurationOptions): Promise<BatchGeneratePdfs201Response> {
        return this.api.batchGeneratePdfs(param.data, param.wait,  options).toPromise();
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param param the request object
     */
    public combinePdfsWithHttpInfo(param: ClientCombinePdfsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        return this.api.combinePdfsWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 
     * Merge submission PDFs, template PDFs, or custom files
     * @param param the request object
     */
    public combinePdfs(param: ClientCombinePdfsRequest, options?: ConfigurationOptions): Promise<CreateCombinedSubmissionResponse> {
        return this.api.combinePdfs(param.data,  options).toPromise();
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param param the request object
     */
    public copyTemplateWithHttpInfo(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.copyTemplateWithHttpInfo(param.templateId, param.options,  options).toPromise();
    }

    /**
     * Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 
     * Copy a template
     * @param param the request object
     */
    public copyTemplate(param: ClientCopyTemplateRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.copyTemplate(param.templateId, param.options,  options).toPromise();
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param param the request object
     */
    public createCustomFileFromUploadWithHttpInfo(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateCustomFileResponse>> {
        return this.api.createCustomFileFromUploadWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 
     * Create a new custom file from a cached S3 upload
     * @param param the request object
     */
    public createCustomFileFromUpload(param: ClientCreateCustomFileFromUploadRequest, options?: ConfigurationOptions): Promise<CreateCustomFileResponse> {
        return this.api.createCustomFileFromUpload(param.data,  options).toPromise();
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param param the request object
     */
    public createDataRequestEventWithHttpInfo(param: ClientCreateDataRequestEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        return this.api.createDataRequestEventWithHttpInfo(param.dataRequestId, param.event,  options).toPromise();
    }

    /**
     * Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 
     * Create a new event for emailing a signee a request for signature
     * @param param the request object
     */
    public createDataRequestEvent(param: ClientCreateDataRequestEventRequest, options?: ConfigurationOptions): Promise<CreateSubmissionDataRequestEventResponse> {
        return this.api.createDataRequestEvent(param.dataRequestId, param.event,  options).toPromise();
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param param the request object
     */
    public createDataRequestTokenWithHttpInfo(param: ClientCreateDataRequestTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        return this.api.createDataRequestTokenWithHttpInfo(param.dataRequestId, param.type,  options).toPromise();
    }

    /**
     * Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 
     * Create a new data request token for form authentication
     * @param param the request object
     */
    public createDataRequestToken(param: ClientCreateDataRequestTokenRequest, options?: ConfigurationOptions): Promise<CreateSubmissionDataRequestTokenResponse> {
        return this.api.createDataRequestToken(param.dataRequestId, param.type,  options).toPromise();
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.createFolderWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 
     * Create a folder
     * @param param the request object
     */
    public createFolder(param: ClientCreateFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.createFolder(param.data,  options).toPromise();
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param param the request object
     */
    public createHtmlTemplateWithHttpInfo(param: ClientCreateHtmlTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createHtmlTemplateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 
     * Create a new HTML template
     * @param param the request object
     */
    public createHtmlTemplate(param: ClientCreateHtmlTemplateRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.createHtmlTemplate(param.data,  options).toPromise();
    }

    /**
     * Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 
     * Create a new PDF template with a form POST file upload
     * @param param the request object
     */
    public createPdfTemplateWithHttpInfo(param: ClientCreatePdfTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createPdfTemplateWithHttpInfo(param.templateDocument, param.templateName, param.wait, param.templateDescription, param.templateParentFolderId,  options).toPromise();
    }

    /**
     * Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 
     * Create a new PDF template with a form POST file upload
     * @param param the request object
     */
    public createPdfTemplate(param: ClientCreatePdfTemplateRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.createPdfTemplate(param.templateDocument, param.templateName, param.wait, param.templateDescription, param.templateParentFolderId,  options).toPromise();
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param param the request object
     */
    public createPdfTemplateFromUploadWithHttpInfo(param: ClientCreatePdfTemplateFromUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createPdfTemplateFromUploadWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 
     * Create a new PDF template from a cached S3 file upload
     * @param param the request object
     */
    public createPdfTemplateFromUpload(param: ClientCreatePdfTemplateFromUploadRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.createPdfTemplateFromUpload(param.data,  options).toPromise();
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.deleteFolderWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 
     * Delete a folder
     * @param param the request object
     */
    public deleteFolder(param: ClientDeleteFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.deleteFolder(param.folderId,  options).toPromise();
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateDeleteResponse>> {
        return this.api.deleteTemplateWithHttpInfo(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 
     * Delete a template
     * @param param the request object
     */
    public deleteTemplate(param: ClientDeleteTemplateRequest, options?: ConfigurationOptions): Promise<TemplateDeleteResponse> {
        return this.api.deleteTemplate(param.templateId, param.version,  options).toPromise();
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param param the request object
     */
    public expireCombinedSubmissionWithHttpInfo(param: ClientExpireCombinedSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedSubmission>> {
        return this.api.expireCombinedSubmissionWithHttpInfo(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 
     * Expire a combined submission
     * @param param the request object
     */
    public expireCombinedSubmission(param: ClientExpireCombinedSubmissionRequest, options?: ConfigurationOptions): Promise<CombinedSubmission> {
        return this.api.expireCombinedSubmission(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param param the request object
     */
    public expireSubmissionWithHttpInfo(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionPreview>> {
        return this.api.expireSubmissionWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 
     * Expire a PDF submission
     * @param param the request object
     */
    public expireSubmission(param: ClientExpireSubmissionRequest, options?: ConfigurationOptions): Promise<SubmissionPreview> {
        return this.api.expireSubmission(param.submissionId,  options).toPromise();
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param param the request object
     */
    public generatePdfWithHttpInfo(param: ClientGeneratePdfRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateSubmissionResponse>> {
        return this.api.generatePdfWithHttpInfo(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 
     * Generate a PDF
     * @param param the request object
     */
    public generatePdf(param: ClientGeneratePdfRequest, options?: ConfigurationOptions): Promise<CreateSubmissionResponse> {
        return this.api.generatePdf(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param param the request object
     */
    public generatePreviewWithHttpInfo(param: ClientGeneratePreviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        return this.api.generatePreviewWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 
     * Generate a preview PDF for partially completed data requests
     * @param param the request object
     */
    public generatePreview(param: ClientGeneratePreviewRequest, options?: ConfigurationOptions): Promise<SuccessErrorResponse> {
        return this.api.generatePreview(param.submissionId,  options).toPromise();
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param param the request object
     */
    public getCombinedSubmissionWithHttpInfo(param: ClientGetCombinedSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CombinedSubmission>> {
        return this.api.getCombinedSubmissionWithHttpInfo(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 
     * Check the status of a combined submission (merged PDFs)
     * @param param the request object
     */
    public getCombinedSubmission(param: ClientGetCombinedSubmissionRequest, options?: ConfigurationOptions): Promise<CombinedSubmission> {
        return this.api.getCombinedSubmission(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param param the request object
     */
    public getDataRequestWithHttpInfo(param: ClientGetDataRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionDataRequestShow>> {
        return this.api.getDataRequestWithHttpInfo(param.dataRequestId,  options).toPromise();
    }

    /**
     * Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 
     * Look up a submission data request
     * @param param the request object
     */
    public getDataRequest(param: ClientGetDataRequestRequest, options?: ConfigurationOptions): Promise<SubmissionDataRequestShow> {
        return this.api.getDataRequest(param.dataRequestId,  options).toPromise();
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param param the request object
     */
    public getFullTemplateWithHttpInfo(param: ClientGetFullTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Template>> {
        return this.api.getFullTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 
     * Fetch the full attributes for a PDF template
     * @param param the request object
     */
    public getFullTemplate(param: ClientGetFullTemplateRequest, options?: ConfigurationOptions): Promise<Template> {
        return this.api.getFullTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     * @param param the request object
     */
    public getPresignUrlWithHttpInfo(param: ClientGetPresignUrlRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UploadPresignResponse>> {
        return this.api.getPresignUrlWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 
     * Get a presigned S3 URL for direct file upload
     * @param param the request object
     */
    public getPresignUrl(param: ClientGetPresignUrlRequest = {}, options?: ConfigurationOptions): Promise<UploadPresignResponse> {
        return this.api.getPresignUrl( options).toPromise();
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param param the request object
     */
    public getSubmissionWithHttpInfo(param: ClientGetSubmissionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Submission>> {
        return this.api.getSubmissionWithHttpInfo(param.submissionId, param.includeData,  options).toPromise();
    }

    /**
     * Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 
     * Check the status of a PDF
     * @param param the request object
     */
    public getSubmission(param: ClientGetSubmissionRequest, options?: ConfigurationOptions): Promise<Submission> {
        return this.api.getSubmission(param.submissionId, param.includeData,  options).toPromise();
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param param the request object
     */
    public getSubmissionBatchWithHttpInfo(param: ClientGetSubmissionBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubmissionBatchWithSubmissions>> {
        return this.api.getSubmissionBatchWithHttpInfo(param.submissionBatchId, param.includeSubmissions,  options).toPromise();
    }

    /**
     * Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 
     * Check the status of a submission batch job
     * @param param the request object
     */
    public getSubmissionBatch(param: ClientGetSubmissionBatchRequest, options?: ConfigurationOptions): Promise<SubmissionBatchWithSubmissions> {
        return this.api.getSubmissionBatch(param.submissionBatchId, param.includeSubmissions,  options).toPromise();
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param param the request object
     */
    public getTemplateWithHttpInfo(param: ClientGetTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.getTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 
     * Check the status of an uploaded template
     * @param param the request object
     */
    public getTemplate(param: ClientGetTemplateRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.getTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param param the request object
     */
    public getTemplateSchemaWithHttpInfo(param: ClientGetTemplateSchemaRequest, options?: ConfigurationOptions): Promise<HttpInfo<JsonSchema>> {
        return this.api.getTemplateSchemaWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 
     * Fetch the JSON schema for a template
     * @param param the request object
     */
    public getTemplateSchema(param: ClientGetTemplateSchemaRequest, options?: ConfigurationOptions): Promise<JsonSchema> {
        return this.api.getTemplateSchema(param.templateId,  options).toPromise();
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param param the request object
     */
    public listCombinedSubmissionsWithHttpInfo(param: ClientListCombinedSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<CombinedSubmission>>> {
        return this.api.listCombinedSubmissionsWithHttpInfo(param.page, param.perPage,  options).toPromise();
    }

    /**
     * Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 
     * Get a list of all combined submissions
     * @param param the request object
     */
    public listCombinedSubmissions(param: ClientListCombinedSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<Array<CombinedSubmission>> {
        return this.api.listCombinedSubmissions(param.page, param.perPage,  options).toPromise();
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param param the request object
     */
    public listFoldersWithHttpInfo(param: ClientListFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<Folder>>> {
        return this.api.listFoldersWithHttpInfo(param.parentFolderId,  options).toPromise();
    }

    /**
     * Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 
     * Get a list of all folders
     * @param param the request object
     */
    public listFolders(param: ClientListFoldersRequest = {}, options?: ConfigurationOptions): Promise<Array<Folder>> {
        return this.api.listFolders(param.parentFolderId,  options).toPromise();
    }

    /**
     * Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 
     * List all submissions
     * @param param the request object
     */
    public listSubmissionsWithHttpInfo(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListSubmissionsResponse>> {
        return this.api.listSubmissionsWithHttpInfo(param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 
     * List all submissions
     * @param param the request object
     */
    public listSubmissions(param: ClientListSubmissionsRequest = {}, options?: ConfigurationOptions): Promise<ListSubmissionsResponse> {
        return this.api.listSubmissions(param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 
     * List all submissions for a given template
     * @param param the request object
     */
    public listTemplateSubmissionsWithHttpInfo(param: ClientListTemplateSubmissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListSubmissionsResponse>> {
        return this.api.listTemplateSubmissionsWithHttpInfo(param.templateId, param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 
     * List all submissions for a given template
     * @param param the request object
     */
    public listTemplateSubmissions(param: ClientListTemplateSubmissionsRequest, options?: ConfigurationOptions): Promise<ListSubmissionsResponse> {
        return this.api.listTemplateSubmissions(param.templateId, param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: ClientListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TemplatePreview>>> {
        return this.api.listTemplatesWithHttpInfo(param.query, param.parentFolderId, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 
     * Get a list of all templates
     * @param param the request object
     */
    public listTemplates(param: ClientListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<Array<TemplatePreview>> {
        return this.api.listTemplates(param.query, param.parentFolderId, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param param the request object
     */
    public moveFolderToFolderWithHttpInfo(param: ClientMoveFolderToFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.moveFolderToFolderWithHttpInfo(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 
     * Move a folder
     * @param param the request object
     */
    public moveFolderToFolder(param: ClientMoveFolderToFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.moveFolderToFolder(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param param the request object
     */
    public moveTemplateToFolderWithHttpInfo(param: ClientMoveTemplateToFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePreview>> {
        return this.api.moveTemplateToFolderWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 
     * Move Template to folder
     * @param param the request object
     */
    public moveTemplateToFolder(param: ClientMoveTemplateToFolderRequest, options?: ConfigurationOptions): Promise<TemplatePreview> {
        return this.api.moveTemplateToFolder(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersionWithHttpInfo(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatePublishVersionResponse>> {
        return this.api.publishTemplateVersionWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 
     * Publish a template version
     * @param param the request object
     */
    public publishTemplateVersion(param: ClientPublishTemplateVersionRequest, options?: ConfigurationOptions): Promise<TemplatePublishVersionResponse> {
        return this.api.publishTemplateVersion(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolderWithHttpInfo(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.renameFolderWithHttpInfo(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 
     * Rename a folder
     * @param param the request object
     */
    public renameFolder(param: ClientRenameFolderRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.renameFolder(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersionWithHttpInfo(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        return this.api.restoreTemplateVersionWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 
     * Restore a template version
     * @param param the request object
     */
    public restoreTemplateVersion(param: ClientRestoreTemplateVersionRequest, options?: ConfigurationOptions): Promise<SuccessErrorResponse> {
        return this.api.restoreTemplateVersion(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     * @param param the request object
     */
    public testAuthenticationWithHttpInfo(param: ClientTestAuthenticationRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SuccessErrorResponse>> {
        return this.api.testAuthenticationWithHttpInfo( options).toPromise();
    }

    /**
     * Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 
     * Test authentication
     * @param param the request object
     */
    public testAuthentication(param: ClientTestAuthenticationRequest = {}, options?: ConfigurationOptions): Promise<SuccessErrorResponse> {
        return this.api.testAuthentication( options).toPromise();
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param param the request object
     */
    public updateDataRequestWithHttpInfo(param: ClientUpdateDataRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateSubmissionDataRequestResponse>> {
        return this.api.updateDataRequestWithHttpInfo(param.dataRequestId, param.data,  options).toPromise();
    }

    /**
     * Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 
     * Update a submission data request
     * @param param the request object
     */
    public updateDataRequest(param: ClientUpdateDataRequestRequest, options?: ConfigurationOptions): Promise<CreateSubmissionDataRequestResponse> {
        return this.api.updateDataRequest(param.dataRequestId, param.data,  options).toPromise();
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        return this.api.updateTemplateWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 
     * Update a Template
     * @param param the request object
     */
    public updateTemplate(param: ClientUpdateTemplateRequest, options?: ConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        return this.api.updateTemplate(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param param the request object
     */
    public updateTemplateDocumentWithHttpInfo(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        return this.api.updateTemplateDocumentWithHttpInfo(param.templateId, param.templateDocument, param.templateName,  options).toPromise();
    }

    /**
     * Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 
     * Update a template\'s document with a form POST file upload
     * @param param the request object
     */
    public updateTemplateDocument(param: ClientUpdateTemplateDocumentRequest, options?: ConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        return this.api.updateTemplateDocument(param.templateId, param.templateDocument, param.templateName,  options).toPromise();
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param param the request object
     */
    public updateTemplateDocumentFromUploadWithHttpInfo(param: ClientUpdateTemplateDocumentFromUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        return this.api.updateTemplateDocumentFromUploadWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 
     * Update a template\'s document with a cached S3 file upload
     * @param param the request object
     */
    public updateTemplateDocumentFromUpload(param: ClientUpdateTemplateDocumentFromUploadRequest, options?: ConfigurationOptions): Promise<SuccessMultipleErrorsResponse> {
        return this.api.updateTemplateDocumentFromUpload(param.templateId, param.data,  options).toPromise();
    }

}
