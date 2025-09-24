# DocSpring.Client

All URIs are relative to *https://sync.api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFieldsToTemplate**](Client.md#addFieldsToTemplate) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batchGeneratePdfs**](Client.md#batchGeneratePdfs) | **POST** /submissions/batches | Generate multiple PDFs
[**combinePdfs**](Client.md#combinePdfs) | **POST** /combined_submissions | Merge submission PDFs, template PDFs, or custom files
[**copyTemplate**](Client.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a template
[**createCustomFileFromUpload**](Client.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached S3 upload
[**createDataRequestEvent**](Client.md#createDataRequestEvent) | **POST** /data_requests/{data_request_id}/events | Create a new event for emailing a signee a request for signature
[**createDataRequestToken**](Client.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Create a new data request token for form authentication
[**createFolder**](Client.md#createFolder) | **POST** /folders/ | Create a folder
[**createHtmlTemplate**](Client.md#createHtmlTemplate) | **POST** /templates?endpoint_variant&#x3D;create_html_template | Create a new HTML template
[**createPdfTemplate**](Client.md#createPdfTemplate) | **POST** /templates | Create a new PDF template with a form POST file upload
[**createPdfTemplateFromUpload**](Client.md#createPdfTemplateFromUpload) | **POST** /templates?endpoint_variant&#x3D;create_template_from_cached_upload | Create a new PDF template from a cached S3 file upload
[**deleteFolder**](Client.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](Client.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**expireCombinedSubmission**](Client.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](Client.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePdf**](Client.md#generatePdf) | **POST** /templates/{template_id}/submissions | Generate a PDF
[**generatePreview**](Client.md#generatePreview) | **POST** /submissions/{submission_id}/generate_preview | Generate a preview PDF for partially completed data requests
[**getCombinedSubmission**](Client.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](Client.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getFullTemplate**](Client.md#getFullTemplate) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full attributes for a PDF template
[**getPresignUrl**](Client.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned S3 URL for direct file upload
[**getSubmission**](Client.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](Client.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](Client.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](Client.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**listCombinedSubmissions**](Client.md#listCombinedSubmissions) | **GET** /combined_submissions | Get a list of all combined submissions
[**listFolders**](Client.md#listFolders) | **GET** /folders/ | Get a list of all folders
[**listSubmissions**](Client.md#listSubmissions) | **GET** /submissions | List all submissions
[**listTemplateSubmissions**](Client.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**listTemplates**](Client.md#listTemplates) | **GET** /templates | Get a list of all templates
[**moveFolderToFolder**](Client.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplateToFolder**](Client.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
[**publishTemplateVersion**](Client.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**renameFolder**](Client.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**restoreTemplateVersion**](Client.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](Client.md#testAuthentication) | **GET** /authentication | Test authentication
[**updateDataRequest**](Client.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**updateTemplate**](Client.md#updateTemplate) | **PUT** /templates/{template_id} | Update a Template
[**updateTemplateDocument**](Client.md#updateTemplateDocument) | **PUT** /templates/{template_id}?endpoint_variant&#x3D;update_template_pdf_with_form_post | Update a template\&#39;s document with a form POST file upload
[**updateTemplateDocumentFromUpload**](Client.md#updateTemplateDocumentFromUpload) | **PUT** /templates/{template_id}?endpoint_variant&#x3D;update_template_pdf_with_cached_upload | Update a template\&#39;s document with a cached S3 file upload


# **addFieldsToTemplate**
> TemplateAddFieldsResponse addFieldsToTemplate(data)

Adds fields to a PDF template. Configure field types, positions, defaults, and formatting options. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientAddFieldsToTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientAddFieldsToTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef02",
  
  data: {
    fields: [
      {},
    ],
  },
};

const data = await apiInstance.addFieldsToTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **AddFieldsData**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**TemplateAddFieldsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | add fields success |  -  |
**422** | add fields error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchGeneratePdfs**
> BatchGeneratePdfs201Response batchGeneratePdfs(data)

Generates up to 50 PDFs in a single request. Each submission can use a different template and data. Supports both synchronous (wait for all PDFs) and asynchronous processing. More efficient than individual requests when creating multiple PDFs.  See also: - [Batch and Combine PDFs](https://docspring.com/docs/api-guide/generate-pdfs/batch-generate-pdfs/) - Generate and merge PDFs in one request 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientBatchGeneratePdfsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientBatchGeneratePdfsRequest = {
  
  data: {
    metadata: {},
    submissions: [
      {},
    ],
    template_id: "template_id_example",
    template_version: "template_version_example",
    test: true,
  },
    // Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
};

const data = await apiInstance.batchGeneratePdfs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **SubmissionBatchData**|  |
 **wait** | [**boolean**] | Wait for submission batch to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | (optional) defaults to true


### Return type

**BatchGeneratePdfs201Response**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | submissions created |  -  |
**200** | some PDFs with invalid data |  -  |
**401** | authentication failed |  -  |
**422** | array of arrays |  -  |
**400** | invalid JSON |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **combinePdfs**
> CreateCombinedSubmissionResponse combinePdfs(data)

Combines multiple PDFs from various sources into a single PDF file. Supports merging submission PDFs, template PDFs, custom files, other merged PDFs, and PDFs from URLs. Merges the PDFs in the order provided. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCombinePdfsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCombinePdfsRequest = {
  
  data: {
    delete_custom_files: true,
    expires_in: 1,
    metadata: {},
    password: "password_example",
    source_pdfs: [
      {},
    ],
    test: true,
  },
};

const data = await apiInstance.combinePdfs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CombinePdfsData**|  |


### Return type

**CreateCombinedSubmissionResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | combined submission created |  -  |
**422** | invalid request |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **copyTemplate**
> TemplatePreview copyTemplate()

Creates a copy of an existing template with all its fields and configuration. Optionally specify a new name and target folder. The copied template starts as a new draft that can be modified independently of the original. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCopyTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCopyTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  options: {
    name: "name_example",
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.copyTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **CopyTemplateOptions**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | copy template success |  -  |
**404** | folder not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCustomFileFromUpload**
> CreateCustomFileResponse createCustomFileFromUpload(data)

The Custom Files API endpoint allows you to upload PDFs to DocSpring and then merge them with other PDFs. First upload your file using the presigned URL endpoint, then use the returned cache_id to create the custom file. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateCustomFileFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateCustomFileFromUploadRequest = {
  
  data: {
    cache_id: "cache_id_example",
  },
};

const data = await apiInstance.createCustomFileFromUpload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateCustomFileData**|  |


### Return type

**CreateCustomFileResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns the custom file |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDataRequestEvent**
> CreateSubmissionDataRequestEventResponse createDataRequestEvent(event)

Records user notification events for data requests. Use this to create an audit trail showing when and how users were notified about data request forms. Supports email, SMS, and other notification types. Records the notification time for compliance tracking.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - User notification workflow 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateDataRequestEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateDataRequestEventRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
  
  event: {
    event_type: "send_request",
    message_recipient: "message_recipient_example",
    message_type: "email",
    occurred_at: "occurred_at_example",
  },
};

const data = await apiInstance.createDataRequestEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | **CreateSubmissionDataRequestEventRequest**|  |
 **dataRequestId** | [**string**] |  | defaults to undefined


### Return type

**CreateSubmissionDataRequestEventResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | event created |  -  |
**401** | authentication failed |  -  |
**422** | message recipient must not be blank |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDataRequestToken**
> CreateSubmissionDataRequestTokenResponse createDataRequestToken()

Creates an authentication token for accessing a data request form. Tokens can be created for API access (1 hour expiration) or email links (30 day expiration). Returns a token and a pre-authenticated URL for the data request form.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateDataRequestTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateDataRequestTokenRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
  
  type: "api",
};

const data = await apiInstance.createDataRequestToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | [**string**] |  | defaults to undefined
 **type** | [**&#39;api&#39; | &#39;email&#39;**]**Array<&#39;api&#39; &#124; &#39;email&#39;>** |  | (optional) defaults to undefined


### Return type

**CreateSubmissionDataRequestTokenResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | token created |  -  |
**401** | authentication failed |  -  |
**422** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFolder**
> Folder createFolder(data)

Creates a new folder for organizing templates. Folders can be nested within other folders by providing a `parent_folder_id`. Folder names must be unique within the same parent. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateFolderRequest = {
  
  data: {
    folder: {},
  },
};

const data = await apiInstance.createFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateFolderData**|  |


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**422** | name already exist |  -  |
**404** | parent folder doesn\&#39;t exist |  -  |
**200** | folder created inside another folder |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createHtmlTemplate**
> TemplatePreview createHtmlTemplate(data)

Creates a new HTML template using HTML, CSS/SCSS, and Liquid templating. Allows complete control over PDF layout and styling. Supports headers, footers, and dynamic content using Liquid syntax for field values, conditions, loops, and filters. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateHtmlTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateHtmlTemplateRequest = {
  
  data: {
    template: {},
  },
};

const data = await apiInstance.createHtmlTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateHtmlTemplate**|  |


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a created template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPdfTemplate**
> TemplatePreview createPdfTemplate()

Creates a new PDF template by uploading a PDF file. The uploaded PDF becomes the foundation for your template, and you can then add fillable fields using the template editor. Use the wait parameter to control whether the request waits for document processing to complete. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreatePdfTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreatePdfTemplateRequest = {
  
  templateDocument: { data: Buffer.from(fs.readFileSync('<Uploaded File>', 'utf-8')), name: '<Uploaded File>' },
  
  templateName: "Test Template",
    // Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
  
  templateDescription: "templateDescription_example",
  
  templateParentFolderId: "fld_1234567890abcdef01",
};

const data = await apiInstance.createPdfTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateDocument** | [**HttpFile**] |  | defaults to undefined
 **templateName** | [**string**] |  | defaults to undefined
 **wait** | [**boolean**] | Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | (optional) defaults to true
 **templateDescription** | [**string**] |  | (optional) defaults to undefined
 **templateParentFolderId** | [**string**] |  | (optional) defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a pending template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPdfTemplateFromUpload**
> TemplatePreview createPdfTemplateFromUpload(data)

Creates a new PDF template from a file previously uploaded to S3 using a presigned URL. This two-step process allows for more reliable large file uploads by first uploading the file to S3, then creating the template using the cached upload ID. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreatePdfTemplateFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreatePdfTemplateFromUploadRequest = {
  
  data: {
    template: {},
  },
};

const data = await apiInstance.createPdfTemplateFromUpload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreatePdfTemplate**|  |


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a pending template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFolder**
> Folder deleteFolder()

Deletes an empty folder. The folder must not contain any templates or subfolders. Move or delete all contents before attempting to delete the folder. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteFolderRequest = {
  
  folderId: "fld_1234567890abcdef01",
};

const data = await apiInstance.deleteFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**string**] |  | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | folder doesn\&#39;t exist |  -  |
**422** | folder has contents |  -  |
**200** | folder is empty |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTemplate**
> TemplateDeleteResponse deleteTemplate()

Deletes a template or a specific template version. When no version is specified, deletes the entire template including all versions. When a version is specified, deletes only that version while preserving others. Returns remaining version information. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  version: "0.1.0",
};

const data = await apiInstance.deleteTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **version** | [**string**] |  | (optional) defaults to undefined


### Return type

**TemplateDeleteResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template version deleted successfully |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expireCombinedSubmission**
> CombinedSubmission expireCombinedSubmission()

Expiring a combined submission deletes the PDF from our system. This is useful for invalidating sensitive documents. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientExpireCombinedSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientExpireCombinedSubmissionRequest = {
  
  combinedSubmissionId: "com_1234567890abcdef01",
};

const data = await apiInstance.expireCombinedSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionId** | [**string**] |  | defaults to undefined


### Return type

**CombinedSubmission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission was expired |  -  |
**404** | combined submission not found |  -  |
**403** | test API token used |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expireSubmission**
> SubmissionPreview expireSubmission()

Expiring a PDF submission deletes the PDF and removes the data from our database. This is useful for invalidating sensitive documents after they\'ve been downloaded. You can also [configure a data retention policy for your submissions](https://docspring.com/docs/template-editor/settings/#expire-submissions) so that they automatically expire. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientExpireSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientExpireSubmissionRequest = {
  
  submissionId: "sub_1234567890abcdef01",
};

const data = await apiInstance.expireSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] |  | defaults to undefined


### Return type

**SubmissionPreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission was expired |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |
**403** | test API token used |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generatePdf**
> CreateSubmissionResponse generatePdf(submission)

Creates a PDF submission by filling in a template with data. Supports both synchronous (default) and asynchronous processing. Set `wait: false` to return immediately.  See also: - [Customize the PDF Title and Filename](https://docspring.com/docs/api-guide/generate-pdfs/customize-pdf-title-and-filename/) - Set custom metadata - [Handling Truncated Text](https://docspring.com/docs/api-guide/generate-pdfs/handle-truncated-text/) - Handle text that doesn\'t fit in fields 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGeneratePdfRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGeneratePdfRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  submission: {
    data: {},
    data_requests: [
      {
        auth_phone_number_hash: "auth_phone_number_hash_example",
        auth_provider: "auth_provider_example",
        auth_second_factor_type: "none",
        auth_session_id_hash: "auth_session_id_hash_example",
        auth_session_started_at: "auth_session_started_at_example",
        auth_type: "none",
        auth_user_id_hash: "auth_user_id_hash_example",
        auth_username_hash: "auth_username_hash_example",
        email: "email_example",
        fields: [
          "fields_example",
        ],
        metadata: {},
        name: "name_example",
        order: 1,
        skipped: true,
      },
    ],
    editable: true,
    expires_in: 1,
    field_overrides: {},
    metadata: {},
    password: "password_example",
    test: true,
    version: "version_example",
  },
    // Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
};

const data = await apiInstance.generatePdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission** | **CreatePdfSubmissionData**|  |
 **templateId** | [**string**] |  | defaults to undefined
 **wait** | [**boolean**] | Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | (optional) defaults to true


### Return type

**CreateSubmissionResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | submission created |  -  |
**422** | invalid request |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generatePreview**
> SuccessErrorResponse generatePreview()

Generates a preview PDF for a submission with partially completed data requests. Useful for showing users what the final document will look like before all signatures or data have been collected. The preview includes any data collected so far. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGeneratePreviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGeneratePreviewRequest = {
  
  submissionId: "sub_1234567890abcdef01",
};

const data = await apiInstance.generatePreview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] |  | defaults to undefined


### Return type

**SuccessErrorResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | preview was successfully requested |  -  |
**404** | submission not found |  -  |
**422** | error requesting preview |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCombinedSubmission**
> CombinedSubmission getCombinedSubmission()

Retrieves the details and status of a combined submission. Returns processing state, download URL (if processed), metadata, and information about any integrated actions (e.g., S3 uploads). 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetCombinedSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetCombinedSubmissionRequest = {
  
  combinedSubmissionId: "com_1234567890abcdef01",
};

const data = await apiInstance.getCombinedSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionId** | [**string**] |  | defaults to undefined


### Return type

**CombinedSubmission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed combined submission found |  -  |
**404** | combined submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDataRequest**
> SubmissionDataRequestShow getDataRequest()

Retrieves the details and status of a data request. Returns information about the request state (pending, viewed, completed), authentication details, and metadata. Includes audit information like IP address, browseruser agent, and timestamps.  See also: - [Embedded Data Requests Guide](https://docspring.com/docs/guides/embedded-forms/embedded-data-requests/) - Complete guide to data request workflow 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetDataRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetDataRequestRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
};

const data = await apiInstance.getDataRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | [**string**] |  | defaults to undefined


### Return type

**SubmissionDataRequestShow**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | completed submission data request found |  -  |
**404** | submission data request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFullTemplate**
> Template getFullTemplate()

Retrieves complete template information including fields, defaults, settings, and HTML/SCSS content. Use this to get all template data needed for automated updates or analysis. Returns more detailed information than the basic `getTemplate` endpoint. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetFullTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetFullTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef01",
};

const data = await apiInstance.getFullTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPresignUrl**
> UploadPresignResponse getPresignUrl()

Returns a presigned S3 URL for uploading files directly to our S3 bucket. Use this endpoint to upload large files before creating templates or custom files. S3 will respond with a JSON object that you can include in your DocSpring API request.  Uploaded files can be used to: - [Create templates](https://docspring.com/docs/api/#tag/templates/post/templates?endpoint_variant=create_template_from_cached_upload) - [Update templates](https://docspring.com/docs/api/#tag/templates/put/templates/{template_id}?endpoint_variant=update_template_pdf_with_cached_upload) - [Create custom files](https://docspring.com/docs/api/#tag/custom-files/post/custom_files) and then [merge them with other PDFs](https://docspring.com/docs/api/#tag/combine-pdfs/post/combined_submissions) 

### Example


```typescript
import { createConfiguration, Client } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request = {};

const data = await apiInstance.getPresignUrl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UploadPresignResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | presign URL generated |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubmission**
> Submission getSubmission()

Retrieves the details and status of a PDF submission. Returns processing state, download URL (if processed), metadata, submission data (optional), and information about any integrated actions. Use this to poll for completion when using asynchronous processing. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetSubmissionRequest = {
  
  submissionId: "sub_1234567890abcdef01",
  
  includeData: true,
};

const data = await apiInstance.getSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] |  | defaults to undefined
 **includeData** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission found with data |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubmissionBatch**
> SubmissionBatchWithSubmissions getSubmissionBatch()

Retrieves the status and results of a batch PDF generation job. Returns processing state, completion statistics, and optionally includes all individual submission details. Use this to poll for completion when using asynchronous batch processing. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetSubmissionBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetSubmissionBatchRequest = {
  
  submissionBatchId: "sbb_1234567890abcdef01",
  
  includeSubmissions: true,
};

const data = await apiInstance.getSubmissionBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchId** | [**string**] |  | defaults to undefined
 **includeSubmissions** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**SubmissionBatchWithSubmissions**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission batch found |  -  |
**404** | submission batch not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplate**
> TemplatePreview getTemplate()

Retrieves information about a template including processing status and document URL. Use this to check if template is ready to view in the template editor or generate PDFs. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef01",
};

const data = await apiInstance.getTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplateSchema**
> JsonSchema getTemplateSchema()

Retrieves the JSON Schema definition for a template\'s fields. Use this to validate data before submitting it for PDF generation, or to build dynamic forms that match the template\'s field structure and validation requirements.  See also: - [Generate PDFs Guide](https://docspring.com/docs/api-guide/generate-pdfs/generate-pdfs-via-api/) - Use schema to validate submission data 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateSchemaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateSchemaRequest = {
  
  templateId: "tpl_1234567890abcdef01",
};

const data = await apiInstance.getTemplateSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**JsonSchema**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCombinedSubmissions**
> Array<CombinedSubmission> listCombinedSubmissions()

Returns a paginated list of combined submissions (merged PDFs) for your account. Includes processing status, expiration details, and download URLs for processed PDFs. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListCombinedSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListCombinedSubmissionsRequest = {
    // Default: 1 (optional)
  page: 3,
    // Default: 50 (optional)
  perPage: 1,
};

const data = await apiInstance.listCombinedSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Default: 1 | (optional) defaults to undefined
 **perPage** | [**number**] | Default: 50 | (optional) defaults to undefined


### Return type

**Array<CombinedSubmission>**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all combined submissions |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFolders**
> Array<Folder> listFolders()

Returns a list of folders in your account. Can be filtered by parent folder ID to retrieve subfolders. Folders help organize templates and maintain a hierarchical structure. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListFoldersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListFoldersRequest = {
    // Filter By Folder Id (optional)
  parentFolderId: "fld_1234567890abcdef02",
};

const data = await apiInstance.listFolders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentFolderId** | [**string**] | Filter By Folder Id | (optional) defaults to undefined


### Return type

**Array<Folder>**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all folders |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSubmissions**
> ListSubmissionsResponse listSubmissions()

Returns a paginated list of all PDF submissions across all templates in your account. Can be filtered by date range and submission type (test/live). Supports cursor-based pagination and optionally includes submission data for each result. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListSubmissionsRequest = {
  
  cursor: "sub_1234567890abcdef12",
  
  limit: 3,
  
  createdAfter: "2019-01-01T09:00:00-05:00",
  
  createdBefore: "2020-01-01T09:00:00.000+0200",
  
  type: "test",
  
  includeData: true,
};

const data = await apiInstance.listSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **createdAfter** | [**string**] |  | (optional) defaults to undefined
 **createdBefore** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **includeData** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListSubmissionsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listing submissions |  -  |
**422** | invalid type |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplateSubmissions**
> ListSubmissionsResponse listTemplateSubmissions()

Returns a paginated list of all submissions for a specific template. Can be filtered by date range, submission type (test/live), and optionally include submission data. Supports cursor-based pagination for efficient retrieval of large result sets. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplateSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplateSubmissionsRequest = {
  
  templateId: "tpl_1234567890abcdef02",
  
  cursor: "cursor_example",
  
  limit: 1,
  
  createdAfter: "created_after_example",
  
  createdBefore: "created_before_example",
  
  type: "type_example",
  
  includeData: true,
};

const data = await apiInstance.listTemplateSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **createdAfter** | [**string**] |  | (optional) defaults to undefined
 **createdBefore** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **includeData** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListSubmissionsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listing submissions |  -  |
**404** | invalid template id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplates**
> Array<TemplatePreview> listTemplates()

Retrieves a list of your templates with search, filtering, and pagination options. Returns basic template information including ID, name, type (PDF or HTML), and folder location. Supports text search by name and filtering by parent folder. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplatesRequest = {
    // Search By Name (optional)
  query: "2",
    // Filter By Folder Id (optional)
  parentFolderId: "fld_1234567890abcdef01",
    // Default: 1 (optional)
  page: 2,
    // Default: 50 (optional)
  perPage: 1,
};

const data = await apiInstance.listTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search By Name | (optional) defaults to undefined
 **parentFolderId** | [**string**] | Filter By Folder Id | (optional) defaults to undefined
 **page** | [**number**] | Default: 1 | (optional) defaults to undefined
 **perPage** | [**number**] | Default: 50 | (optional) defaults to undefined


### Return type

**Array<TemplatePreview>**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all templates |  -  |
**404** | filter templates by invalid folder id |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **moveFolderToFolder**
> Folder moveFolderToFolder(data)

Moves a folder to a new parent folder or to the root level. All templates and subfolders within the folder are moved together. Cannot move a folder into one of its own subfolders. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientMoveFolderToFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientMoveFolderToFolderRequest = {
  
  folderId: "fld_1234567890abcdef01",
  
  data: {
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.moveFolderToFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **MoveFolderData**|  |
 **folderId** | [**string**] |  | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | parent folder doesn\&#39;t exist |  -  |
**200** | move to root folder |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **moveTemplateToFolder**
> TemplatePreview moveTemplateToFolder(data)

Moves a template to a different folder or to the root level. Use this to organize templates within your folders. Provide a folder ID to move to a specific folder, or `null` to move to the root level. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientMoveTemplateToFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientMoveTemplateToFolderRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.moveTemplateToFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **MoveTemplateData**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | move template success |  -  |
**404** | folder not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **publishTemplateVersion**
> TemplatePublishVersionResponse publishTemplateVersion(data)

Publishes the current draft version of a template and creates a new immutable version with semantic versioning (major.minor.patch). 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientPublishTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientPublishTemplateVersionRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    description: "description_example",
    version_type: "version_type_example",
  },
};

const data = await apiInstance.publishTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **PublishVersionData**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**TemplatePublishVersionResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | version published successfully |  -  |
**422** | invalid version type |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renameFolder**
> Folder renameFolder(data)

Renames an existing folder. The new name must be unique within the same parent folder. This operation only changes the folder name, not its location or contents. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientRenameFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientRenameFolderRequest = {
  
  folderId: "fld_1234567890abcdef01",
  
  data: {
    name: "name_example",
  },
};

const data = await apiInstance.renameFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **RenameFolderData**|  |
 **folderId** | [**string**] |  | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**422** | name already exist |  -  |
**404** | folder doesn\&#39;t belong to me |  -  |
**200** | successful rename |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreTemplateVersion**
> SuccessErrorResponse restoreTemplateVersion(data)

Restores your template to a previously published version, copying that version\'s content and configuration to the current draft. Use this to revert changes or recover from an unwanted modification. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientRestoreTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientRestoreTemplateVersionRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    version: "version_example",
  },
};

const data = await apiInstance.restoreTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **RestoreVersionData**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SuccessErrorResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | version restored successfully |  -  |
**422** | draft version not allowed |  -  |
**404** | template version not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testAuthentication**
> SuccessErrorResponse testAuthentication()

Checks whether your API token is valid by making an authenticated request. Returns a success response if authentication passes. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 

### Example


```typescript
import { createConfiguration, Client } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request = {};

const data = await apiInstance.testAuthentication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SuccessErrorResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authentication succeeded |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDataRequest**
> CreateSubmissionDataRequestResponse updateDataRequest(data)

Updates authentication details for a data request. Use this when a user logs in to record their authentication method, provider, session information, and hashed identifiers. Updates metadata and tracks authentication state changes for auditing and compliance. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateDataRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateDataRequestRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
  
  data: {
    auth_phone_number_hash: "auth_phone_number_hash_example",
    auth_provider: "auth_provider_example",
    auth_second_factor_type: "none",
    auth_session_id_hash: "auth_session_id_hash_example",
    auth_session_started_at: "auth_session_started_at_example",
    auth_type: "none",
    auth_user_id_hash: "auth_user_id_hash_example",
    auth_username_hash: "auth_username_hash_example",
    email: "email_example",
    fields: [
      "fields_example",
    ],
    metadata: {},
    name: "name_example",
    order: 1,
  },
};

const data = await apiInstance.updateDataRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateSubmissionDataRequestData**|  |
 **dataRequestId** | [**string**] |  | defaults to undefined


### Return type

**CreateSubmissionDataRequestResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission data request updated |  -  |
**422** | invalid request |  -  |
**404** | submission data request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTemplate**
> SuccessMultipleErrorsResponse updateTemplate(data)

Updates template content and properties. For HTML templates, you can modify the HTML, SCSS, headers, footers, name, and description. Changes are applied to your draft template and do not affect published template versions. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef03",
  
  data: {
    template: {},
  },
};

const data = await apiInstance.updateTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateHtmlTemplate**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SuccessMultipleErrorsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update template success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTemplateDocument**
> SuccessMultipleErrorsResponse updateTemplateDocument()

Upload a new PDF file to update a PDF template\'s document. This replaces the template\'s PDF while preserving all of the existing fields. If you upload a PDF with fewer pages than the current document, any fields on the removed pages will be deleted. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateDocumentRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  templateDocument: { data: Buffer.from(fs.readFileSync('<Uploaded File>', 'utf-8')), name: '<Uploaded File>' },
  
  templateName: "Replaced Template",
};

const data = await apiInstance.updateTemplateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **templateDocument** | [**HttpFile**] |  | defaults to undefined
 **templateName** | [**string**] |  | (optional) defaults to undefined


### Return type

**SuccessMultipleErrorsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns a template with updated document |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTemplateDocumentFromUpload**
> SuccessMultipleErrorsResponse updateTemplateDocumentFromUpload(data)

Updates a PDF template\'s document using a cached file upload. This is a three-step process: First, request a presigned URL to upload your PDF file to our S3 bucket. Then, use that URL to upload your PDF file. Finally, submit the ID of the uploaded file to replace the template\'s document. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateDocumentFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateDocumentFromUploadRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    template: {},
  },
};

const data = await apiInstance.updateTemplateDocumentFromUpload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdatePdfTemplate**|  |
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**SuccessMultipleErrorsResponse**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns a template with updated document |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


