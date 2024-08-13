import { APIResponse, test } from '@playwright/test';

test("an example request", async({ request }) => { 
    
    var response: APIResponse;

    let baseURL = "https://petstore.swagger.io/";
    let path = "v2/store/inventory";

    response = await request.get(baseURL + path);
    console.log("GET " + baseURL + path);
    console.log("response status: " + await response.status().toString());
    console.log("response: " + await response.body());
});