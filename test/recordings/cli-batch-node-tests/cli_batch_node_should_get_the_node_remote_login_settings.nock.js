// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z/remoteloginsettings?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.RemoteLoginSettings\",\"remoteLoginIPAddress\":\"13.88.26.242\",\"remoteLoginPort\":50000\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3cc511eb-d28c-4ed5-8a1a-51d57fb15be9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '72623fdb-35a6-45a2-8533-579f0f35f96d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z/remoteloginsettings',
  date: 'Fri, 22 Apr 2016 06:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z/remoteloginsettings?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.RemoteLoginSettings\",\"remoteLoginIPAddress\":\"13.88.26.242\",\"remoteLoginPort\":50000\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3cc511eb-d28c-4ed5-8a1a-51d57fb15be9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '72623fdb-35a6-45a2-8533-579f0f35f96d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z/remoteloginsettings',
  date: 'Fri, 22 Apr 2016 06:11:56 GMT',
  connection: 'close' });
 return result; }]];