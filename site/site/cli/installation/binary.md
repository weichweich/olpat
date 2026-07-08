# Binary Releases

We pre-compile each release for all major operating systems, these releases can be found on [GitHub](https://github.com/weichweich/olpat/releases).

- [Linux (x86)](https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-x86.gz)
- [Linux (x86_64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-x86_64.gz)
- [Linux (arm64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-aarch64.gz)
- [Linux (riscv64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-riscv64.gz)
- [Linux (armv7)](https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-armv7.gz)
- [macOS (x86_64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-darwin-x86_64.gz)
- [macOS (arm64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-darwin-aarch64.gz)
- [Windows (x86)](https://github.com/weichweich/olpat/releases/latest/download/olpat-windows-x86.zip)
- [Windows (x86_64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-windows-x86_64.zip)
- [Windows (arm64)](https://github.com/weichweich/olpat/releases/latest/download/olpat-windows-aarch64.zip)


## Example

```bash
curl -fsSL https://github.com/weichweich/olpat/releases/latest/download/olpat-linux-x86_64.gz \
  | gzip -d - | install -m 755 /dev/stdin /usr/local/bin/olpat
```
