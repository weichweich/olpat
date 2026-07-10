# syntax=docker/dockerfile:1

FROM rust:1.97-alpine AS builder

RUN mkdir /olpat

WORKDIR /olpat

COPY . /olpat

RUN cargo build --release --locked --target=x86_64-unknown-linux-musl --package olpat-cli

RUN chmod +x /olpat/target/x86_64-unknown-linux-musl/release/olpat

FROM scratch

ENV USERID=1000
ENV GROUPID=1000

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /olpat/target/x86_64-unknown-linux-musl/release/olpat /usr/local/bin/taplo

USER $USERID:$GROUPID

CMD [ "taplo" ]
