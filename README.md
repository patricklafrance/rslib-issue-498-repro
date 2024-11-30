# rslib-issue-498-repro

Issue: https://github.com/web-infra-dev/rslib/issues/498

To reproduce:

- `pnpm install`
- `pnpm build`

Then look at the files in the `dist` folder, there are no source files, only typings declarations.
