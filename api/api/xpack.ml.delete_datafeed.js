// Licensed to Elasticsearch B.V under one or more agreements.
// Elasticsearch B.V licenses this file to you under the Apache 2.0 License.
// See the LICENSE file in the project root for more information

'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildXpackMlDeleteDatafeed (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, handleError, snakeCaseKeys } = opts
  /**
   * Perform a [xpack.ml.delete_datafeed](http://www.elastic.co/guide/en/elasticsearch/reference/current/ml-delete-datafeed.html) request
   *
   * @param {string} datafeed_id - The ID of the datafeed to delete
   * @param {boolean} force - True if the datafeed should be forcefully deleted
   */

  const acceptedQuerystring = [
    'force'
  ]

  const snakeCase = {

  }

  return function xpackMlDeleteDatafeed (params, options, callback) {
    options = options || {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    if (typeof params === 'function' || params == null) {
      callback = params
      params = {}
      options = {}
    }

    // check required parameters
    if (params['datafeed_id'] == null && params['datafeedId'] == null) {
      const err = new ConfigurationError('Missing required parameter: datafeed_id or datafeedId')
      return handleError(err, callback)
    }
    if (params.body != null) {
      const err = new ConfigurationError('This API does not require a body')
      return handleError(err, callback)
    }

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      const err = new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`)
      return handleError(err, callback)
    }

    var warnings = []
    var { method, body, datafeedId, datafeed_id, ...querystring } = params
    querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring, warnings)

    if (method == null) {
      method = 'DELETE'
    }

    var ignore = options.ignore
    if (typeof ignore === 'number') {
      options.ignore = [ignore]
    }

    var path = ''

    path = '/' + '_xpack' + '/' + 'ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId)

    // build request object
    const request = {
      method,
      path,
      body: '',
      querystring
    }

    options.warnings = warnings.length === 0 ? null : warnings
    return makeRequest(request, options, callback)
  }
}

module.exports = buildXpackMlDeleteDatafeed