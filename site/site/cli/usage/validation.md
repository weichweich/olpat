# Validation

olpat supports validation of TOML files, by default it will only look for syntax errors and some semantic errors such as duplicate keys.

```sh
olpat check foo.toml
```

## Schema Validation

olpat supports validation via [JSON Schemas](https://json-schema.org) (Draft 4).

### Using a Specific Schema

```sh
olpat check --schema https://example.com/foo-schema.json foo.toml
```

### Using a Schema Catalog

olpat supports schema catalogs such as the [JSON Schema Store](https://www.schemastore.org/json/) for retrieving schemas and matching them to files via file names.

You can enable this by either specifying a catalog via the `--schema-catalog` flag, or enabling the use of the default catalogs via `--default-schema-catalogs`.
