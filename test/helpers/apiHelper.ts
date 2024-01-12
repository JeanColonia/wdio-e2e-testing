import request from 'supertest';
import reporter from './reporter.ts';




async function GET(testid: string, baseUrl: string, endpoint: string, authToken: string, queryParam: Object) {


 if (!(baseUrl || endpoint)) throw Error(`One of the given values BaseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid`);
 baseUrl = baseUrl.trim()
 endpoint = endpoint.trim()

 reporter.addStep(testid, "info", `Making a GET request to ${baseUrl}${endpoint}`)
 try {

  return await request(baseUrl).get(endpoint).query(queryParam).auth(authToken, { type: 'bearer' }).set("Content-Type", "application/json").set("Accept", "application/json")


 } catch (error) {
  throw error;
 }

}


export default { GET }