## Globby ignore test repo

Jsut a small example showing that `ignore` might not work as expected in `globby`.

```sh
pnpm install
```

```sh
node index.mjs
```

Using `ignore`, fsevents will still be in the paths. Using an exclude pattern it is not included.