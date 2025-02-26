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

import { ObservablePDFApi } from "./ObservableAPI";
import { PDFApiRequestFactory, PDFApiResponseProcessor} from "../apis/PDFApi";

export interface PDFApiAddFieldsToTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApiaddFieldsToTemplate
     */
    templateId: string
    /**
     * 
     * @type AddFieldsData
     * @memberof PDFApiaddFieldsToTemplate
     */
    data: AddFieldsData
}

export interface PDFApiBatchGeneratePdfsRequest {
    /**
     * 
     * @type SubmissionBatchData
     * @memberof PDFApibatchGeneratePdfs
     */
    data: SubmissionBatchData
    /**
     * Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof PDFApibatchGeneratePdfs
     */
    wait?: boolean
}

export interface PDFApiCombinePdfsRequest {
    /**
     * 
     * @type CombinePdfsData
     * @memberof PDFApicombinePdfs
     */
    data: CombinePdfsData
}

export interface PDFApiCombineSubmissionsRequest {
    /**
     * 
     * @type CombinedSubmissionData
     * @memberof PDFApicombineSubmissions
     */
    data: CombinedSubmissionData
    /**
     * Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof PDFApicombineSubmissions
     */
    wait?: boolean
}

export interface PDFApiCopyTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicopyTemplate
     */
    templateId: string
    /**
     * 
     * @type CopyTemplateOptions
     * @memberof PDFApicopyTemplate
     */
    options?: CopyTemplateOptions
}

export interface PDFApiCreateCustomFileFromUploadRequest {
    /**
     * 
     * @type CreateCustomFileData
     * @memberof PDFApicreateCustomFileFromUpload
     */
    data: CreateCustomFileData
}

export interface PDFApiCreateDataRequestEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicreateDataRequestEvent
     */
    dataRequestId: string
    /**
     * 
     * @type CreateSubmissionDataRequestEventRequest
     * @memberof PDFApicreateDataRequestEvent
     */
    event: CreateSubmissionDataRequestEventRequest
}

export interface PDFApiCreateDataRequestTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicreateDataRequestToken
     */
    dataRequestId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;api&#39; | &#39;email&#39;
     * @memberof PDFApicreateDataRequestToken
     */
    type?: 'api' | 'email'
}

export interface PDFApiCreateFolderRequest {
    /**
     * 
     * @type CreateFolderData
     * @memberof PDFApicreateFolder
     */
    data: CreateFolderData
}

export interface PDFApiCreateHTMLTemplateRequest {
    /**
     * 
     * @type CreateHtmlTemplate
     * @memberof PDFApicreateHTMLTemplate
     */
    data: CreateHtmlTemplate
}

export interface PDFApiCreatePDFTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof PDFApicreatePDFTemplate
     */
    templateDocument: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicreatePDFTemplate
     */
    templateName: string
    /**
     * Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof PDFApicreatePDFTemplate
     */
    wait?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicreatePDFTemplate
     */
    templateDescription?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApicreatePDFTemplate
     */
    templateParentFolderId?: string
}

export interface PDFApiCreatePDFTemplateFromUploadRequest {
    /**
     * 
     * @type CreatePdfTemplate
     * @memberof PDFApicreatePDFTemplateFromUpload
     */
    data: CreatePdfTemplate
}

export interface PDFApiDeleteFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApideleteFolder
     */
    folderId: string
}

export interface PDFApiDeleteTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApideleteTemplate
     */
    templateId: string
}

export interface PDFApiExpireCombinedSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApiexpireCombinedSubmission
     */
    combinedSubmissionId: string
}

export interface PDFApiExpireSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApiexpireSubmission
     */
    submissionId: string
}

export interface PDFApiGeneratePdfRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigeneratePdf
     */
    templateId: string
    /**
     * 
     * @type CreatePdfSubmissionData
     * @memberof PDFApigeneratePdf
     */
    submission: CreatePdfSubmissionData
    /**
     * Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof PDFApigeneratePdf
     */
    wait?: boolean
}

export interface PDFApiGeneratePdfForHtmlTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigeneratePdfForHtmlTemplate
     */
    templateId: string
    /**
     * 
     * @type CreateHtmlSubmissionData
     * @memberof PDFApigeneratePdfForHtmlTemplate
     */
    submission: CreateHtmlSubmissionData
    /**
     * Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain)
     * Defaults to: true
     * @type boolean
     * @memberof PDFApigeneratePdfForHtmlTemplate
     */
    wait?: boolean
}

export interface PDFApiGeneratePreviewRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigeneratePreview
     */
    submissionId: string
}

export interface PDFApiGetCombinedSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetCombinedSubmission
     */
    combinedSubmissionId: string
}

export interface PDFApiGetDataRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetDataRequest
     */
    dataRequestId: string
}

export interface PDFApiGetFullTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetFullTemplate
     */
    templateId: string
}

export interface PDFApiGetPresignUrlRequest {
}

export interface PDFApiGetSubmissionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetSubmission
     */
    submissionId: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof PDFApigetSubmission
     */
    includeData?: boolean
}

export interface PDFApiGetSubmissionBatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetSubmissionBatch
     */
    submissionBatchId: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof PDFApigetSubmissionBatch
     */
    includeSubmissions?: boolean
}

export interface PDFApiGetTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetTemplate
     */
    templateId: string
}

export interface PDFApiGetTemplateSchemaRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApigetTemplateSchema
     */
    templateId: string
}

export interface PDFApiListCombinedSubmissionsRequest {
    /**
     * Default: 1
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistCombinedSubmissions
     */
    page?: number
    /**
     * Default: 50
     * Minimum: 1
     * Maximum: 50
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistCombinedSubmissions
     */
    perPage?: number
}

export interface PDFApiListFoldersRequest {
    /**
     * Filter By Folder Id
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistFolders
     */
    parentFolderId?: string
}

export interface PDFApiListSubmissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistSubmissions
     */
    cursor?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistSubmissions
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistSubmissions
     */
    createdAfter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistSubmissions
     */
    createdBefore?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistSubmissions
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof PDFApilistSubmissions
     */
    includeData?: boolean
}

export interface PDFApiListTemplateSubmissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplateSubmissions
     */
    templateId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplateSubmissions
     */
    cursor?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistTemplateSubmissions
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplateSubmissions
     */
    createdAfter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplateSubmissions
     */
    createdBefore?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplateSubmissions
     */
    type?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof PDFApilistTemplateSubmissions
     */
    includeData?: boolean
}

export interface PDFApiListTemplatesRequest {
    /**
     * Search By Name
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplates
     */
    query?: string
    /**
     * Filter By Folder Id
     * Defaults to: undefined
     * @type string
     * @memberof PDFApilistTemplates
     */
    parentFolderId?: string
    /**
     * Default: 1
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistTemplates
     */
    page?: number
    /**
     * Default: 50
     * Minimum: 1
     * Maximum: 50
     * Defaults to: undefined
     * @type number
     * @memberof PDFApilistTemplates
     */
    perPage?: number
}

export interface PDFApiMoveFolderToFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApimoveFolderToFolder
     */
    folderId: string
    /**
     * 
     * @type MoveFolderData
     * @memberof PDFApimoveFolderToFolder
     */
    data: MoveFolderData
}

export interface PDFApiMoveTemplateToFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApimoveTemplateToFolder
     */
    templateId: string
    /**
     * 
     * @type MoveTemplateData
     * @memberof PDFApimoveTemplateToFolder
     */
    data: MoveTemplateData
}

export interface PDFApiRenameFolderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApirenameFolder
     */
    folderId: string
    /**
     * 
     * @type RenameFolderData
     * @memberof PDFApirenameFolder
     */
    data: RenameFolderData
}

export interface PDFApiTestAuthenticationRequest {
}

export interface PDFApiUpdateDataRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApiupdateDataRequest
     */
    dataRequestId: string
    /**
     * 
     * @type UpdateSubmissionDataRequestData
     * @memberof PDFApiupdateDataRequest
     */
    data: UpdateSubmissionDataRequestData
}

export interface PDFApiUpdateTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PDFApiupdateTemplate
     */
    templateId: string
    /**
     * 
     * @type UpdateHtmlTemplate
     * @memberof PDFApiupdateTemplate
     */
    data: UpdateHtmlTemplate
}

export class ObjectPDFApi {
    private api: ObservablePDFApi

    public constructor(configuration: Configuration, requestFactory?: PDFApiRequestFactory, responseProcessor?: PDFApiResponseProcessor) {
        this.api = new ObservablePDFApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new fields to a Template
     * @param param the request object
     */
    public addFieldsToTemplateWithHttpInfo(param: PDFApiAddFieldsToTemplateRequest, options?: Configuration): Promise<HttpInfo<TemplateAddFieldsResponse>> {
        return this.api.addFieldsToTemplateWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Add new fields to a Template
     * @param param the request object
     */
    public addFieldsToTemplate(param: PDFApiAddFieldsToTemplateRequest, options?: Configuration): Promise<TemplateAddFieldsResponse> {
        return this.api.addFieldsToTemplate(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Generates multiple PDFs
     * @param param the request object
     */
    public batchGeneratePdfsWithHttpInfo(param: PDFApiBatchGeneratePdfsRequest, options?: Configuration): Promise<HttpInfo<BatchGeneratePdfs201Response>> {
        return this.api.batchGeneratePdfsWithHttpInfo(param.data, param.wait,  options).toPromise();
    }

    /**
     * Generates multiple PDFs
     * @param param the request object
     */
    public batchGeneratePdfs(param: PDFApiBatchGeneratePdfsRequest, options?: Configuration): Promise<BatchGeneratePdfs201Response> {
        return this.api.batchGeneratePdfs(param.data, param.wait,  options).toPromise();
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param param the request object
     */
    public combinePdfsWithHttpInfo(param: PDFApiCombinePdfsRequest, options?: Configuration): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        return this.api.combinePdfsWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Merge submission PDFs, template PDFs, or custom files
     * @param param the request object
     */
    public combinePdfs(param: PDFApiCombinePdfsRequest, options?: Configuration): Promise<CreateCombinedSubmissionResponse> {
        return this.api.combinePdfs(param.data,  options).toPromise();
    }

    /**
     * Merge generated PDFs together
     * @param param the request object
     */
    public combineSubmissionsWithHttpInfo(param: PDFApiCombineSubmissionsRequest, options?: Configuration): Promise<HttpInfo<CreateCombinedSubmissionResponse>> {
        return this.api.combineSubmissionsWithHttpInfo(param.data, param.wait,  options).toPromise();
    }

    /**
     * Merge generated PDFs together
     * @param param the request object
     */
    public combineSubmissions(param: PDFApiCombineSubmissionsRequest, options?: Configuration): Promise<CreateCombinedSubmissionResponse> {
        return this.api.combineSubmissions(param.data, param.wait,  options).toPromise();
    }

    /**
     * Copy a Template
     * @param param the request object
     */
    public copyTemplateWithHttpInfo(param: PDFApiCopyTemplateRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.copyTemplateWithHttpInfo(param.templateId, param.options,  options).toPromise();
    }

    /**
     * Copy a Template
     * @param param the request object
     */
    public copyTemplate(param: PDFApiCopyTemplateRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.copyTemplate(param.templateId, param.options,  options).toPromise();
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param param the request object
     */
    public createCustomFileFromUploadWithHttpInfo(param: PDFApiCreateCustomFileFromUploadRequest, options?: Configuration): Promise<HttpInfo<CreateCustomFileResponse>> {
        return this.api.createCustomFileFromUploadWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Create a new custom file from a cached presign upload
     * @param param the request object
     */
    public createCustomFileFromUpload(param: PDFApiCreateCustomFileFromUploadRequest, options?: Configuration): Promise<CreateCustomFileResponse> {
        return this.api.createCustomFileFromUpload(param.data,  options).toPromise();
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param param the request object
     */
    public createDataRequestEventWithHttpInfo(param: PDFApiCreateDataRequestEventRequest, options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestEventResponse>> {
        return this.api.createDataRequestEventWithHttpInfo(param.dataRequestId, param.event,  options).toPromise();
    }

    /**
     * Creates a new event for emailing a signee a request for signature
     * @param param the request object
     */
    public createDataRequestEvent(param: PDFApiCreateDataRequestEventRequest, options?: Configuration): Promise<CreateSubmissionDataRequestEventResponse> {
        return this.api.createDataRequestEvent(param.dataRequestId, param.event,  options).toPromise();
    }

    /**
     * Creates a new data request token for form authentication
     * @param param the request object
     */
    public createDataRequestTokenWithHttpInfo(param: PDFApiCreateDataRequestTokenRequest, options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestTokenResponse>> {
        return this.api.createDataRequestTokenWithHttpInfo(param.dataRequestId, param.type,  options).toPromise();
    }

    /**
     * Creates a new data request token for form authentication
     * @param param the request object
     */
    public createDataRequestToken(param: PDFApiCreateDataRequestTokenRequest, options?: Configuration): Promise<CreateSubmissionDataRequestTokenResponse> {
        return this.api.createDataRequestToken(param.dataRequestId, param.type,  options).toPromise();
    }

    /**
     * Create a folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: PDFApiCreateFolderRequest, options?: Configuration): Promise<HttpInfo<Folder>> {
        return this.api.createFolderWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Create a folder
     * @param param the request object
     */
    public createFolder(param: PDFApiCreateFolderRequest, options?: Configuration): Promise<Folder> {
        return this.api.createFolder(param.data,  options).toPromise();
    }

    /**
     * Create a new HTML template
     * @param param the request object
     */
    public createHTMLTemplateWithHttpInfo(param: PDFApiCreateHTMLTemplateRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createHTMLTemplateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Create a new HTML template
     * @param param the request object
     */
    public createHTMLTemplate(param: PDFApiCreateHTMLTemplateRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.createHTMLTemplate(param.data,  options).toPromise();
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param param the request object
     */
    public createPDFTemplateWithHttpInfo(param: PDFApiCreatePDFTemplateRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createPDFTemplateWithHttpInfo(param.templateDocument, param.templateName, param.wait, param.templateDescription, param.templateParentFolderId,  options).toPromise();
    }

    /**
     * Create a new PDF template with a form POST file upload
     * @param param the request object
     */
    public createPDFTemplate(param: PDFApiCreatePDFTemplateRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.createPDFTemplate(param.templateDocument, param.templateName, param.wait, param.templateDescription, param.templateParentFolderId,  options).toPromise();
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param param the request object
     */
    public createPDFTemplateFromUploadWithHttpInfo(param: PDFApiCreatePDFTemplateFromUploadRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.createPDFTemplateFromUploadWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Create a new PDF template from a cached presign upload
     * @param param the request object
     */
    public createPDFTemplateFromUpload(param: PDFApiCreatePDFTemplateFromUploadRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.createPDFTemplateFromUpload(param.data,  options).toPromise();
    }

    /**
     * Delete a folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: PDFApiDeleteFolderRequest, options?: Configuration): Promise<HttpInfo<Folder>> {
        return this.api.deleteFolderWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Delete a folder
     * @param param the request object
     */
    public deleteFolder(param: PDFApiDeleteFolderRequest, options?: Configuration): Promise<Folder> {
        return this.api.deleteFolder(param.folderId,  options).toPromise();
    }

    /**
     * Delete a template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: PDFApiDeleteTemplateRequest, options?: Configuration): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        return this.api.deleteTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Delete a template
     * @param param the request object
     */
    public deleteTemplate(param: PDFApiDeleteTemplateRequest, options?: Configuration): Promise<SuccessMultipleErrorsResponse> {
        return this.api.deleteTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Expire a combined submission
     * @param param the request object
     */
    public expireCombinedSubmissionWithHttpInfo(param: PDFApiExpireCombinedSubmissionRequest, options?: Configuration): Promise<HttpInfo<CombinedSubmission>> {
        return this.api.expireCombinedSubmissionWithHttpInfo(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Expire a combined submission
     * @param param the request object
     */
    public expireCombinedSubmission(param: PDFApiExpireCombinedSubmissionRequest, options?: Configuration): Promise<CombinedSubmission> {
        return this.api.expireCombinedSubmission(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Expire a PDF submission
     * @param param the request object
     */
    public expireSubmissionWithHttpInfo(param: PDFApiExpireSubmissionRequest, options?: Configuration): Promise<HttpInfo<SubmissionPreview>> {
        return this.api.expireSubmissionWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Expire a PDF submission
     * @param param the request object
     */
    public expireSubmission(param: PDFApiExpireSubmissionRequest, options?: Configuration): Promise<SubmissionPreview> {
        return this.api.expireSubmission(param.submissionId,  options).toPromise();
    }

    /**
     * Generates a new PDF
     * @param param the request object
     */
    public generatePdfWithHttpInfo(param: PDFApiGeneratePdfRequest, options?: Configuration): Promise<HttpInfo<CreateSubmissionResponse>> {
        return this.api.generatePdfWithHttpInfo(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Generates a new PDF
     * @param param the request object
     */
    public generatePdf(param: PDFApiGeneratePdfRequest, options?: Configuration): Promise<CreateSubmissionResponse> {
        return this.api.generatePdf(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Generates a new PDF for an HTML template
     * @param param the request object
     */
    public generatePdfForHtmlTemplateWithHttpInfo(param: PDFApiGeneratePdfForHtmlTemplateRequest, options?: Configuration): Promise<HttpInfo<CreateSubmissionResponse>> {
        return this.api.generatePdfForHtmlTemplateWithHttpInfo(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Generates a new PDF for an HTML template
     * @param param the request object
     */
    public generatePdfForHtmlTemplate(param: PDFApiGeneratePdfForHtmlTemplateRequest, options?: Configuration): Promise<CreateSubmissionResponse> {
        return this.api.generatePdfForHtmlTemplate(param.templateId, param.submission, param.wait,  options).toPromise();
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param param the request object
     */
    public generatePreviewWithHttpInfo(param: PDFApiGeneratePreviewRequest, options?: Configuration): Promise<HttpInfo<SuccessErrorResponse>> {
        return this.api.generatePreviewWithHttpInfo(param.submissionId,  options).toPromise();
    }

    /**
     * Generated a preview PDF for partially completed data requests
     * @param param the request object
     */
    public generatePreview(param: PDFApiGeneratePreviewRequest, options?: Configuration): Promise<SuccessErrorResponse> {
        return this.api.generatePreview(param.submissionId,  options).toPromise();
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param param the request object
     */
    public getCombinedSubmissionWithHttpInfo(param: PDFApiGetCombinedSubmissionRequest, options?: Configuration): Promise<HttpInfo<CombinedSubmission>> {
        return this.api.getCombinedSubmissionWithHttpInfo(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param param the request object
     */
    public getCombinedSubmission(param: PDFApiGetCombinedSubmissionRequest, options?: Configuration): Promise<CombinedSubmission> {
        return this.api.getCombinedSubmission(param.combinedSubmissionId,  options).toPromise();
    }

    /**
     * Look up a submission data request
     * @param param the request object
     */
    public getDataRequestWithHttpInfo(param: PDFApiGetDataRequestRequest, options?: Configuration): Promise<HttpInfo<SubmissionDataRequestShow>> {
        return this.api.getDataRequestWithHttpInfo(param.dataRequestId,  options).toPromise();
    }

    /**
     * Look up a submission data request
     * @param param the request object
     */
    public getDataRequest(param: PDFApiGetDataRequestRequest, options?: Configuration): Promise<SubmissionDataRequestShow> {
        return this.api.getDataRequest(param.dataRequestId,  options).toPromise();
    }

    /**
     * Fetch the full template attributes
     * @param param the request object
     */
    public getFullTemplateWithHttpInfo(param: PDFApiGetFullTemplateRequest, options?: Configuration): Promise<HttpInfo<Template>> {
        return this.api.getFullTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Fetch the full template attributes
     * @param param the request object
     */
    public getFullTemplate(param: PDFApiGetFullTemplateRequest, options?: Configuration): Promise<Template> {
        return this.api.getFullTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     * @param param the request object
     */
    public getPresignUrlWithHttpInfo(param: PDFApiGetPresignUrlRequest = {}, options?: Configuration): Promise<HttpInfo<UploadPresignResponse>> {
        return this.api.getPresignUrlWithHttpInfo( options).toPromise();
    }

    /**
     * Get a presigned URL so that you can upload a file to our AWS S3 bucket
     * @param param the request object
     */
    public getPresignUrl(param: PDFApiGetPresignUrlRequest = {}, options?: Configuration): Promise<UploadPresignResponse> {
        return this.api.getPresignUrl( options).toPromise();
    }

    /**
     * Check the status of a PDF
     * @param param the request object
     */
    public getSubmissionWithHttpInfo(param: PDFApiGetSubmissionRequest, options?: Configuration): Promise<HttpInfo<Submission>> {
        return this.api.getSubmissionWithHttpInfo(param.submissionId, param.includeData,  options).toPromise();
    }

    /**
     * Check the status of a PDF
     * @param param the request object
     */
    public getSubmission(param: PDFApiGetSubmissionRequest, options?: Configuration): Promise<Submission> {
        return this.api.getSubmission(param.submissionId, param.includeData,  options).toPromise();
    }

    /**
     * Check the status of a submission batch job
     * @param param the request object
     */
    public getSubmissionBatchWithHttpInfo(param: PDFApiGetSubmissionBatchRequest, options?: Configuration): Promise<HttpInfo<SubmissionBatchWithSubmissions>> {
        return this.api.getSubmissionBatchWithHttpInfo(param.submissionBatchId, param.includeSubmissions,  options).toPromise();
    }

    /**
     * Check the status of a submission batch job
     * @param param the request object
     */
    public getSubmissionBatch(param: PDFApiGetSubmissionBatchRequest, options?: Configuration): Promise<SubmissionBatchWithSubmissions> {
        return this.api.getSubmissionBatch(param.submissionBatchId, param.includeSubmissions,  options).toPromise();
    }

    /**
     * Check the status of an uploaded template
     * @param param the request object
     */
    public getTemplateWithHttpInfo(param: PDFApiGetTemplateRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.getTemplateWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Check the status of an uploaded template
     * @param param the request object
     */
    public getTemplate(param: PDFApiGetTemplateRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.getTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Fetch the JSON schema for a template
     * @param param the request object
     */
    public getTemplateSchemaWithHttpInfo(param: PDFApiGetTemplateSchemaRequest, options?: Configuration): Promise<HttpInfo<JsonSchema>> {
        return this.api.getTemplateSchemaWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Fetch the JSON schema for a template
     * @param param the request object
     */
    public getTemplateSchema(param: PDFApiGetTemplateSchemaRequest, options?: Configuration): Promise<JsonSchema> {
        return this.api.getTemplateSchema(param.templateId,  options).toPromise();
    }

    /**
     * Get a list of all combined submissions
     * @param param the request object
     */
    public listCombinedSubmissionsWithHttpInfo(param: PDFApiListCombinedSubmissionsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CombinedSubmission>>> {
        return this.api.listCombinedSubmissionsWithHttpInfo(param.page, param.perPage,  options).toPromise();
    }

    /**
     * Get a list of all combined submissions
     * @param param the request object
     */
    public listCombinedSubmissions(param: PDFApiListCombinedSubmissionsRequest = {}, options?: Configuration): Promise<Array<CombinedSubmission>> {
        return this.api.listCombinedSubmissions(param.page, param.perPage,  options).toPromise();
    }

    /**
     * Get a list of all folders
     * @param param the request object
     */
    public listFoldersWithHttpInfo(param: PDFApiListFoldersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Folder>>> {
        return this.api.listFoldersWithHttpInfo(param.parentFolderId,  options).toPromise();
    }

    /**
     * Get a list of all folders
     * @param param the request object
     */
    public listFolders(param: PDFApiListFoldersRequest = {}, options?: Configuration): Promise<Array<Folder>> {
        return this.api.listFolders(param.parentFolderId,  options).toPromise();
    }

    /**
     * List all submissions
     * @param param the request object
     */
    public listSubmissionsWithHttpInfo(param: PDFApiListSubmissionsRequest = {}, options?: Configuration): Promise<HttpInfo<ListSubmissionsResponse>> {
        return this.api.listSubmissionsWithHttpInfo(param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * List all submissions
     * @param param the request object
     */
    public listSubmissions(param: PDFApiListSubmissionsRequest = {}, options?: Configuration): Promise<ListSubmissionsResponse> {
        return this.api.listSubmissions(param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * List all submissions for a given template
     * @param param the request object
     */
    public listTemplateSubmissionsWithHttpInfo(param: PDFApiListTemplateSubmissionsRequest, options?: Configuration): Promise<HttpInfo<ListSubmissionsResponse>> {
        return this.api.listTemplateSubmissionsWithHttpInfo(param.templateId, param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * List all submissions for a given template
     * @param param the request object
     */
    public listTemplateSubmissions(param: PDFApiListTemplateSubmissionsRequest, options?: Configuration): Promise<ListSubmissionsResponse> {
        return this.api.listTemplateSubmissions(param.templateId, param.cursor, param.limit, param.createdAfter, param.createdBefore, param.type, param.includeData,  options).toPromise();
    }

    /**
     * Get a list of all templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: PDFApiListTemplatesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TemplatePreview>>> {
        return this.api.listTemplatesWithHttpInfo(param.query, param.parentFolderId, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Get a list of all templates
     * @param param the request object
     */
    public listTemplates(param: PDFApiListTemplatesRequest = {}, options?: Configuration): Promise<Array<TemplatePreview>> {
        return this.api.listTemplates(param.query, param.parentFolderId, param.page, param.perPage,  options).toPromise();
    }

    /**
     * Move a folder
     * @param param the request object
     */
    public moveFolderToFolderWithHttpInfo(param: PDFApiMoveFolderToFolderRequest, options?: Configuration): Promise<HttpInfo<Folder>> {
        return this.api.moveFolderToFolderWithHttpInfo(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Move a folder
     * @param param the request object
     */
    public moveFolderToFolder(param: PDFApiMoveFolderToFolderRequest, options?: Configuration): Promise<Folder> {
        return this.api.moveFolderToFolder(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Move Template to folder
     * @param param the request object
     */
    public moveTemplateToFolderWithHttpInfo(param: PDFApiMoveTemplateToFolderRequest, options?: Configuration): Promise<HttpInfo<TemplatePreview>> {
        return this.api.moveTemplateToFolderWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Move Template to folder
     * @param param the request object
     */
    public moveTemplateToFolder(param: PDFApiMoveTemplateToFolderRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.moveTemplateToFolder(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Rename a folder
     * @param param the request object
     */
    public renameFolderWithHttpInfo(param: PDFApiRenameFolderRequest, options?: Configuration): Promise<HttpInfo<Folder>> {
        return this.api.renameFolderWithHttpInfo(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Rename a folder
     * @param param the request object
     */
    public renameFolder(param: PDFApiRenameFolderRequest, options?: Configuration): Promise<Folder> {
        return this.api.renameFolder(param.folderId, param.data,  options).toPromise();
    }

    /**
     * Test Authentication
     * @param param the request object
     */
    public testAuthenticationWithHttpInfo(param: PDFApiTestAuthenticationRequest = {}, options?: Configuration): Promise<HttpInfo<SuccessErrorResponse>> {
        return this.api.testAuthenticationWithHttpInfo( options).toPromise();
    }

    /**
     * Test Authentication
     * @param param the request object
     */
    public testAuthentication(param: PDFApiTestAuthenticationRequest = {}, options?: Configuration): Promise<SuccessErrorResponse> {
        return this.api.testAuthentication( options).toPromise();
    }

    /**
     * Update a submission data request
     * @param param the request object
     */
    public updateDataRequestWithHttpInfo(param: PDFApiUpdateDataRequestRequest, options?: Configuration): Promise<HttpInfo<CreateSubmissionDataRequestResponse>> {
        return this.api.updateDataRequestWithHttpInfo(param.dataRequestId, param.data,  options).toPromise();
    }

    /**
     * Update a submission data request
     * @param param the request object
     */
    public updateDataRequest(param: PDFApiUpdateDataRequestRequest, options?: Configuration): Promise<CreateSubmissionDataRequestResponse> {
        return this.api.updateDataRequest(param.dataRequestId, param.data,  options).toPromise();
    }

    /**
     * Update a Template
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: PDFApiUpdateTemplateRequest, options?: Configuration): Promise<HttpInfo<SuccessMultipleErrorsResponse>> {
        return this.api.updateTemplateWithHttpInfo(param.templateId, param.data,  options).toPromise();
    }

    /**
     * Update a Template
     * @param param the request object
     */
    public updateTemplate(param: PDFApiUpdateTemplateRequest, options?: Configuration): Promise<SuccessMultipleErrorsResponse> {
        return this.api.updateTemplate(param.templateId, param.data,  options).toPromise();
    }

}
