# Language Server

The TOML language server can be used via the CLI and it supports communication via standard i/o or TCP.

::: tip

The language server is not part of the default builds, and is not available if olpat was installed via NPM.

Consult the build or installation documentation on how to enable the functionality.

:::

## Via Standard i/o

```
olpat lsp stdio
```

In this mode olpat expects messages from the standard input, and will print messages intended for the client to the standard output.

## Via TCP

```
olpat lsp tcp --address 0.0.0.0:9181
```

The server will listen on the given TCP address.

Multiple clients are not supported.
