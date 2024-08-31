COSMOS_SDK_URL := https://github.com/osmosis-labs/cosmos-sdk
COSMOS_SDK_VERSION := osmo/v0.47.5
COSMOS_SDK_DIR := build/cosmos-sdk-proto-schema

COSMOS_PROTO_URL := https://github.com/cosmos/cosmos-proto.git
COSMOS_PROTO_VERSION := v1.0.0-beta.5
COSMOS_PROTO_DIR := build/cosmos-proto-schema

SYMPHONY_PROTO_URL := https://github.com/Orchestra-Labs/symphony
SYMPHONY_PROTO_VERSION := v0.3.0
SYMPHONY_PROTO_DIR := build/symphony-proto-schema

PROTO_DIR := proto

fetch_proto_schema_source: $(COSMOS_SDK_DIR) $(COSMOS_PROTO_DIR) $(SYMPHONY_PROTO_DIR)

$(COSMOS_SDK_DIR): Makefile
	rm -rfv $(COSMOS_SDK_DIR)
	git clone --branch $(COSMOS_SDK_VERSION) --depth 1 --quiet --no-checkout --filter=blob:none $(COSMOS_SDK_URL) $(COSMOS_SDK_DIR)
	cd $(COSMOS_SDK_DIR) && git checkout $(COSMOS_SDK_VERSION) -- $(COSMOS_PROTO_RELATIVE_DIRS)

$(COSMOS_PROTO_DIR): Makefile
	rm -rfv $(COSMOS_PROTO_DIR)
	git clone --branch $(COSMOS_PROTO_VERSION) --depth 1 --quiet --no-checkout --filter=blob:none $(COSMOS_PROTO_URL) $(COSMOS_PROTO_DIR)
	cd $(COSMOS_PROTO_DIR) && git checkout $(COSMOS_PROTO_VERSION) -- $(COSMOS_PROTO_PROTO_RELATIVE_DIRS)

$(SYMPHONY_PROTO_DIR): Makefile
	rm -rfv $(SYMPHONY_PROTO_DIR)
	git clone --branch $(SYMPHONY_PROTO_VERSION) --depth 1 --quiet --no-checkout --filter=blob:none $(SYMPHONY_PROTO_URL) $(SYMPHONY_PROTO_DIR)
	cd $(SYMPHONY_PROTO_DIR) && git checkout $(SYMPHONY_PROTO_VERSION) -- $(SYMPHONY_PROTO_RELATIVE_DIRS)
