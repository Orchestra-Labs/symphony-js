# symphony-js

The npm repository for Symphony blockchain message structures.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Orchestra-Labs/symphonyjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies with Yarn:
   ```bash
   yarn install
   ```

## Maintenance

### Updating

Regularly update dependencies to keep the application secure and efficient:

```bash
yarn upgrade
```

## Deployment

With the deployment structure in place, the only steps necessary are to update the version then push to github. The github workflow will take care of deployment to npm.

If manual deployment to npm is necessary, make sure your local .npmrc file is configured with the following line:

```bash
//registry.npmjs.org/:_authToken=your_auth_token_here
```

### Updating patch version

Update the npm package with new patches (bug fixes):

```bash
npm version patch
git push
```

Update the npm package with new minor versions (backwards compatible changes):

```bash
npm version minor
git push
```

Update the npm package with new major versions (breaking changes):

```bash
npm version major
git push
```
