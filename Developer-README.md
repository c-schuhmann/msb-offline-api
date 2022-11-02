# Offline API for MSB App Developer Readme

## How to publish a npm package?
To publish a new version of a npm package to npmjs.com, do the following:
- Do your code change on a branch and get a review. Once approved merge it back to the main branch.
- Increase the version in package.json, commit and push it to the main branch
- First do a test run of the pipeline (use checkbox option for this)
- If this is successful, run the pipeline without the test-run option.
- Check on npmjs.com if the package is published

