# DocSpring.PDFApi

All URIs are relative to *https://sync.api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFieldsToTemplate**](PDFApi.md#addFieldsToTemplate) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batchGeneratePdfs**](PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
[**combinePdfs**](PDFApi.md#combinePdfs) | **POST** /combined_submissions?v&#x3D;2 | Merge submission PDFs, template PDFs, or custom files
[**combineSubmissions**](PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
[**copyTemplate**](PDFApi.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a Template
[**createCustomFileFromUpload**](PDFApi.md#createCustomFileFromUpload) | **POST** /custom_files | Create a new custom file from a cached presign upload
[**createDataRequestEvent**](PDFApi.md#createDataRequestEvent) | **POST** /data_requests/{data_request_id}/events | Creates a new event for emailing a signee a request for signature
[**createDataRequestToken**](PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
[**createFolder**](PDFApi.md#createFolder) | **POST** /folders/ | Create a folder
[**createHTMLTemplate**](PDFApi.md#createHTMLTemplate) | **POST** /templates?endpoint_description&#x3D;html | Create a new HTML template
[**createPDFTemplate**](PDFApi.md#createPDFTemplate) | **POST** /templates | Create a new PDF template with a form POST file upload
[**createPDFTemplateFromUpload**](PDFApi.md#createPDFTemplateFromUpload) | **POST** /templates?endpoint_description&#x3D;cached_upload | Create a new PDF template from a cached presign upload
[**deleteFolder**](PDFApi.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](PDFApi.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**expireCombinedSubmission**](PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePdf**](PDFApi.md#generatePdf) | **POST** /templates/{template_id}/submissions | Generates a new PDF
[**generatePdfForHtmlTemplate**](PDFApi.md#generatePdfForHtmlTemplate) | **POST** /templates/{template_id}/submissions?endpoint_description&#x3D;html_templates | Generates a new PDF for an HTML template
[**generatePreview**](PDFApi.md#generatePreview) | **POST** /submissions/{submission_id}/generate_preview | Generated a preview PDF for partially completed data requests
[**getCombinedSubmission**](PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getFullTemplate**](PDFApi.md#getFullTemplate) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full attributes for a PDF template
[**getPresignUrl**](PDFApi.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL so that you can upload a file to our AWS S3 bucket
[**getSubmission**](PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](PDFApi.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](PDFApi.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**listCombinedSubmissions**](PDFApi.md#listCombinedSubmissions) | **GET** /combined_submissions | Get a list of all combined submissions
[**listFolders**](PDFApi.md#listFolders) | **GET** /folders/ | Get a list of all folders
[**listSubmissions**](PDFApi.md#listSubmissions) | **GET** /submissions | List all submissions
[**listTemplateSubmissions**](PDFApi.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**listTemplates**](PDFApi.md#listTemplates) | **GET** /templates | Get a list of all templates
[**moveFolderToFolder**](PDFApi.md#moveFolderToFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplateToFolder**](PDFApi.md#moveTemplateToFolder) | **POST** /templates/{template_id}/move | Move Template to folder
[**publishTemplateVersion**](PDFApi.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**renameFolder**](PDFApi.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**restoreTemplateVersion**](PDFApi.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
[**updateDataRequest**](PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**updateTemplate**](PDFApi.md#updateTemplate) | **PUT** /templates/{template_id} | Update a Template


# **addFieldsToTemplate**
> TemplateAddFieldsResponse addFieldsToTemplate(data)


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiAddFieldsToTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiAddFieldsToTemplateRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiBatchGeneratePdfsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiBatchGeneratePdfsRequest = {
  
  data: {
    metadata: {},
    submissions: [
      {},
    ],
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCombinePdfsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCombinePdfsRequest = {
  
  data: {
    deleteCustomFiles: true,
    expiresIn: 1,
    metadata: {},
    password: "password_example",
    sourcePdfs: [
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

# **combineSubmissions**
> CreateCombinedSubmissionResponse combineSubmissions(data)


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCombineSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCombineSubmissionsRequest = {
  
  data: {
    expiresIn: 1,
    metadata: {},
    password: "password_example",
    submissionIds: [
      "submissionIds_example",
    ],
    test: true,
  },
    // Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
};

const data = await apiInstance.combineSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CombinedSubmissionData**|  |
 **wait** | [**boolean**] | Wait for combined submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) | (optional) defaults to true


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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCopyTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCopyTemplateRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  options: {
    name: "name_example",
    parentFolderId: "parentFolderId_example",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreateCustomFileFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreateCustomFileFromUploadRequest = {
  
  data: {
    cacheId: "cacheId_example",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreateDataRequestEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreateDataRequestEventRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
  
  event: {
    eventType: "send_request",
    messageType: "email",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreateDataRequestTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreateDataRequestTokenRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreateFolderRequest = {
  
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

# **createHTMLTemplate**
> TemplatePreview createHTMLTemplate(data)


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreateHTMLTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreateHTMLTemplateRequest = {
  
  data: {
    template: {},
  },
};

const data = await apiInstance.createHTMLTemplate(request);
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

# **createPDFTemplate**
> TemplatePreview createPDFTemplate()


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreatePDFTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreatePDFTemplateRequest = {
  
  templateDocument: { data: Buffer.from(fs.readFileSync('<Uploaded File>', 'utf-8')), name: '<Uploaded File>' },
  
  templateName: "Test Template",
    // Wait for template document to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
  
  templateDescription: "templateDescription_example",
  
  templateParentFolderId: "fld_1234567890abcdef01",
};

const data = await apiInstance.createPDFTemplate(request);
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

# **createPDFTemplateFromUpload**
> TemplatePreview createPDFTemplateFromUpload(data)


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiCreatePDFTemplateFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiCreatePDFTemplateFromUploadRequest = {
  
  data: {
    template: {},
  },
};

const data = await apiInstance.createPDFTemplateFromUpload(request);
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiDeleteFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiDeleteFolderRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiDeleteTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiDeleteTemplateRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiExpireCombinedSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiExpireCombinedSubmissionRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiExpireSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiExpireSubmissionRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGeneratePdfRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGeneratePdfRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  submission: {
    data: {},
    dataRequests: [
      {
        authSecondFactorType: "none",
        authType: "none",
        fields: [
          "fields_example",
        ],
        metadata: {},
        order: 1,
      },
    ],
    editable: true,
    expiresIn: 1,
    fieldOverrides: {},
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

# **generatePdfForHtmlTemplate**
> CreateSubmissionResponse generatePdfForHtmlTemplate(submission)


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGeneratePdfForHtmlTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGeneratePdfForHtmlTemplateRequest = {
  
  templateId: "tpl_HTML567890abcdef01",
  
  submission: {
    css: "css_example",
    data: {},
    editable: true,
    expiresIn: 1,
    fieldOverrides: {},
    html: "html_example",
    metadata: {},
    password: "password_example",
    test: true,
    version: "version_example",
  },
    // Wait for submission to be processed before returning. Set to false to return immediately. Default: true (on sync.* subdomain) (optional)
  wait: true,
};

const data = await apiInstance.generatePdfForHtmlTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission** | **CreateHtmlSubmissionData**|  |
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generatePreview**
> SuccessErrorResponse generatePreview()


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGeneratePreviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGeneratePreviewRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetCombinedSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetCombinedSubmissionRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetDataRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetDataRequestRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetFullTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetFullTemplateRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetSubmissionRequest = {
  
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
**200** | processed submission found |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubmissionBatch**
> SubmissionBatchWithSubmissions getSubmissionBatch()


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetSubmissionBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetSubmissionBatchRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetTemplateRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiGetTemplateSchemaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiGetTemplateSchemaRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiListCombinedSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiListCombinedSubmissionsRequest = {
    // Default: 1 (optional)
  page: 2,
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiListFoldersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiListFoldersRequest = {
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiListSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiListSubmissionsRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiListTemplateSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiListTemplateSubmissionsRequest = {
  
  templateId: "tpl_1234567890abcdef02",
  
  cursor: "cursor_example",
  
  limit: 3.14,
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiListTemplatesRequest = {
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiMoveFolderToFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiMoveFolderToFolderRequest = {
  
  folderId: "fld_1234567890abcdef01",
  
  data: {
    parentFolderId: "parentFolderId_example",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiMoveTemplateToFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiMoveTemplateToFolderRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    parentFolderId: "parentFolderId_example",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiPublishTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiPublishTemplateVersionRequest = {
  
  templateId: "tpl_1234567890abcdef01",
  
  data: {
    description: "description_example",
    versionType: "versionType_example",
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiRenameFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiRenameFolderRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiRestoreTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiRestoreTemplateVersionRequest = {
  
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiUpdateDataRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiUpdateDataRequestRequest = {
  
  dataRequestId: "drq_1234567890abcdef01",
  
  data: {
    authType: "none",
    fields: [
      "fields_example",
    ],
    metadata: {},
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


### Example


```typescript
import { createConfiguration, PDFApi } from '';
import type { PDFApiUpdateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PDFApi(configuration);

const request: PDFApiUpdateTemplateRequest = {
  
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


