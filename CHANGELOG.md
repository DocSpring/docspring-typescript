### 2.1.0 [March 22, 2025]

- Added support for Template Versioning parameters:
  - Optional version parameter in submission requests (e.g., 1.2.3, draft, latest)
  - New API methods: publish_template_version, restore_template_version
  - Updated copy_template and delete_template methods to accept template version strings

### 2.0.0 [February 23, 2025]

- **BREAKING CHANGE**: Updated default host to our new synchronous API subdomain: sync.api.docspring.com. (EU customers should use sync.api-eu.docspring.com). Removed all custom polling code from library since this logic is now handled by the API service running on our sync subdomain
- Fixed User-Agent header: docspring-typescript-x.x.x

### 1.0.2 [September 27, 2023]

- Renamed submission body param to :submission

### 1.0.1 [August 30, 2023]

- Commit dist directory
