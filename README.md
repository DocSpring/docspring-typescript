# DocSpring TypeScript SDK

The official TypeScript client for the [DocSpring API](https://docspring.com/docs/api/). DocSpring fills PDF
templates with your data, generates PDFs from HTML templates, combines PDFs and collects e-signatures.

[Documentation](https://docspring.com/docs/) · [API reference](https://docspring.com/docs/api/) ·
[npm](https://www.npmjs.com/package/docspring-ts) · [Changelog](https://github.com/DocSpring/docspring-typescript/blob/main/CHANGELOG.md)

Version 3.3.0. 

## Install and configure

Add docspring-ts to your package.json:

```bash
npm install docspring-ts --save
```

Or with Yarn:

```bash
yarn add docspring-ts
```

Configure authentication via environment variables:

```bash
export DOCSPRING_TOKEN_ID="API_TOKEN_ID"
export DOCSPRING_TOKEN_SECRET="API_TOKEN_SECRET"
```

You can also configure the region or host. The host takes priority over the region:

```bash
export DOCSPRING_REGION="US" # US or EU (defaults to US)
export DOCSPRING_HOST="docspring.yourcompany.com" # For on-premise deployments
```

Initialize the DocSpring client with no arguments:

```ts
import * as DocSpring from "docspring-ts";
const apiInstance = new DocSpring.Client();
```

Or provide credentials (and optionally a region or host) directly. A host (including `DOCSPRING_HOST`) is used before
a region:

```ts
import * as DocSpring from "docspring-ts";
const apiInstance = new DocSpring.Client({
  apiTokenId: "API_TOKEN_ID",
  apiTokenSecret: "API_TOKEN_SECRET",
  region: "EU",
});
```

## Generate a PDF

Fill a template with data (use your template's ID in place of `tpl_1234567890abcdef01`):

```ts
const templateId = 'tpl_1234567890abcdef01'
const submission = {
  data: {
    first_name: 'John',
    last_name: 'Smith',
    phone_number: '+11234567890',
  },
  metadata: { foo: 123, bar: 'baz' },
}

const result = await apiInstance.generatePdf(templateId, submission)

console.log(result)
```

By default the call waits for the PDF, for up to 95 seconds, and the submission in the response has its
`download_url`. Set `wait` to false to get a pending submission straight away.
[Sync vs. async processing](https://docspring.com/docs/api-guide/synchronous-requests/) covers the time limit, status
checks and webhooks.

## Methods

[Client.md](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md) has each method's parameters and return type, and
[models/](https://github.com/DocSpring/docspring-typescript/tree/main/models) has the models. The [API reference](https://docspring.com/docs/api/) has
TypeScript code for every method.

| Method | Description |
| ------ | ----------- |
| [`addFieldsToTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#addfieldstotemplate) | Add new fields to a Template |
| [`batchGeneratePdfs`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#batchgeneratepdfs) | Generate multiple PDFs |
| [`combinePdfs`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#combinepdfs) | Merge submission PDFs, template PDFs, or custom files |
| [`copyTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#copytemplate) | Copy a template |
| [`createCustomFileFromUpload`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createcustomfilefromupload) | Create a new custom file from a cached S3 upload |
| [`createDataRequestEvent`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createdatarequestevent) | Create a new event for emailing a signee a request for signature |
| [`createDataRequestToken`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createdatarequesttoken) | Create a new data request token for form authentication |
| [`createFolder`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createfolder) | Create a folder |
| [`createHtmlTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createhtmltemplate) | Create a new HTML template |
| [`createPdfTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createpdftemplate) | Create a new PDF template with a form POST file upload |
| [`createPdfTemplateFromUpload`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createpdftemplatefromupload) | Create a new PDF template from a cached S3 file upload |
| [`createWebhook`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#createwebhook) | Create a webhook |
| [`deleteFolder`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#deletefolder) | Delete a folder |
| [`deleteTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#deletetemplate) | Delete a template |
| [`deleteWebhook`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#deletewebhook) | Delete a webhook |
| [`expireCombinedSubmission`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#expirecombinedsubmission) | Expire a combined submission |
| [`expireSubmission`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#expiresubmission) | Expire a PDF submission |
| [`generatePdf`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#generatepdf) | Generate a PDF |
| [`generatePreview`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#generatepreview) | Generate a preview PDF for partially completed data requests |
| [`getCombinedSubmission`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getcombinedsubmission) | Check the status of a combined submission (merged PDFs) |
| [`getDataRequest`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getdatarequest) | Look up a submission data request |
| [`getFullTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getfulltemplate) | Fetch the full attributes for a PDF template |
| [`getPresignUrl`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getpresignurl) | Get a presigned S3 URL for direct file upload |
| [`getSubmission`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getsubmission) | Check the status of a PDF |
| [`getSubmissionBatch`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getsubmissionbatch) | Check the status of a submission batch job |
| [`getTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#gettemplate) | Check the status of an uploaded template |
| [`getTemplateModelCode`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#gettemplatemodelcode) | Generate typed model code for a template |
| [`getTemplateSchema`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#gettemplateschema) | Fetch the JSON schema for a template |
| [`getWebhook`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#getwebhook) | Get a webhook |
| [`listCombinedSubmissions`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listcombinedsubmissions) | Get a list of all combined submissions |
| [`listFolders`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listfolders) | Get a list of all folders |
| [`listSubmissions`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listsubmissions) | List all submissions |
| [`listTemplates`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listtemplates) | Get a list of all templates |
| [`listTemplateSubmissions`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listtemplatesubmissions) | List all submissions for a given template |
| [`listWebhooks`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#listwebhooks) | Get a list of all webhooks |
| [`moveFolderToFolder`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#movefoldertofolder) | Move a folder |
| [`moveTemplateToFolder`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#movetemplatetofolder) | Move Template to folder |
| [`publishTemplateVersion`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#publishtemplateversion) | Publish a template version |
| [`renameFolder`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#renamefolder) | Rename a folder |
| [`restoreTemplateVersion`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#restoretemplateversion) | Restore a template version |
| [`testAuthentication`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#testauthentication) | Test authentication |
| [`updateDataRequest`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#updatedatarequest) | Update a submission data request |
| [`updateTemplate`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#updatetemplate) | Update a Template |
| [`updateTemplateDocument`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#updatetemplatedocument) | Update a template's document with a form POST file upload |
| [`updateTemplateDocumentFromUpload`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#updatetemplatedocumentfromupload) | Update a template's document with a cached S3 file upload |
| [`updateWebhook`](https://github.com/DocSpring/docspring-typescript/blob/main/Client.md#updatewebhook) | Update a webhook |

## Errors

Methods return a promise that rejects with `DocSpring.ApiException` for an error response, with the HTTP status in `code` and the parsed body in `body`.

## API changes

DocSpring adds fields and enum values to API v1 without releasing a new API version. Changes that would break
existing code, such as removing or renaming a field, go in a new API version
([API changes](https://docspring.com/docs/api-guide/openapi-schema/#api-changes)). So this SDK keeps working with
responses that are newer than it is:

- The model leaves out a response field added to the API after this release.
- An enum value added to the API after this release comes back as a string, even though the type lists only the values this release knows, so handle values you don't recognize.

Upgrade the SDK to read new fields and enum values. The [changelog](https://github.com/DocSpring/docspring-typescript/blob/main/CHANGELOG.md) lists
what each release adds.

## About this SDK

This SDK is generated from DocSpring's [OpenAPI spec](https://docspring.com/api-docs/v1/openapi.json) with
[DocSpring's fork of OpenAPI Generator](https://github.com/DocSpring/openapi-generator/tree/docspring/all_patches) 7.16.0.
The fork changes the TypeScript generator:

- `nameMappings` apply to property names, so the JSON schema model's `$id` becomes `schema_id` instead of clashing with `id`.

On top of the generated code, we add:

- A client constructor that reads your credentials, region and host from the environment.

Because the code is generated, we can't merge pull requests that change it. Please
[open an issue](https://github.com/DocSpring/docspring-typescript/issues) or email [support@docspring.com](mailto:support@docspring.com) instead, and
we'll fix it in the generator. [AGENTS.md](https://github.com/DocSpring/docspring-typescript/blob/main/AGENTS.md) is a short guide for AI coding agents.

## License

MIT. See [LICENSE](https://github.com/DocSpring/docspring-typescript/blob/main/LICENSE).
