# Build the React App
FROM node:8-alpine as node
WORKDIR /usr/src
USER root

#https://github.com/npm/npm/issues/20861
RUN npm config set unsafe-perm true

COPY ./site/package.json package.json
COPY ./site/package-lock.json package-lock.json
RUN npm install
COPY ./site/ .
RUN npm run build && rm -rf client && rm -rf server && rm -rf coverage && rm -rf tests


# Build the rust server
# select build image
FROM rustlang/rust:nightly as build

# create a new empty shell project
RUN USER=root cargo new --bin --vcs none server
WORKDIR /server

# copy over your manifests
COPY ./server/Cargo.lock ./Cargo.lock
COPY ./server/Cargo.toml ./Cargo.toml

# this build step will cache your dependencies
RUN cargo build --release
RUN rm src/*.rs

# copy your source tree
COPY ./server/src ./src

# build for release
RUN rm /server/target/release/deps/server*
RUN cargo build --release


# Combine the Rust server and react app into one image
#FROM alpine
FROM ubuntu@sha256:5f4bdc3467537cbbe563e80db2c3ec95d548a9145d64453b06939c4592d67b6d

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get -y install ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /server

# copy the build artifact from the build stage
COPY --from=build /server/target/release/server ./server
COPY ./server/Rocket.toml ./Rocket.toml
COPY --from=node /usr/src/dist-client/ /dist

# set the startup command to run your binary
# CMD ["./server"]