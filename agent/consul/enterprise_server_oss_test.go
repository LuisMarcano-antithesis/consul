// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

//go:build !consulent
// +build !consulent

package consul

import (
	"testing"

	hclog "github.com/hashicorp/go-hclog"
)

func newDefaultDepsEnterprise(t *testing.T, _ hclog.Logger, _ *Config) EnterpriseDeps {
	t.Helper()
	return EnterpriseDeps{}
}
