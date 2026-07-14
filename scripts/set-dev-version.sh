#!/usr/bin/env bash
# Rewrite a crate's version to a unique PEP 440 dev version for CI publishing.
#
# maturin parses the Cargo.toml version string directly as a PEP 440 version,
# so "0.10.0-dev.123" (valid SemVer) normalizes to "0.10.0.dev123", which
# TestPyPI accepts as a distinct release for every build.
#
# Usage: set-dev-version.sh <manifest-path> <build-number>
set -euo pipefail

manifest="${1:?usage: set-dev-version.sh <manifest-path> <build-number>}"
build="${2:?usage: set-dev-version.sh <manifest-path> <build-number>}"

base=$(grep -m1 '^version' "$manifest" | sed -E 's/.*"([^"]+)".*/\1/')
base=${base%%-*} # drop any existing pre-release suffix
dev="${base}-dev.${build}"

sed -i.bak -E "s/^version[[:space:]]*=.*/version = \"${dev}\"/" "$manifest"
rm -f "${manifest}.bak"

echo "Building dev version ${dev}"
