/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

((t,e=("undefined"!=typeof document?document.currentScript.dataset:module.exports))=>{e.routes=JSON.stringify(t)})({dc:{partitions:{_options:{path:"/partitions",abilities:["read partitions"]},index:{_options:{path:"/",queryParams:{sortBy:"sort",searchproperty:{as:"searchproperty",empty:[["Name","Description"]]},search:{as:"filter",replace:!0}}}},edit:{_options:{path:"/:name"}},create:{_options:{template:"../edit",path:"/create",abilities:["create partitions"]}}}}})
