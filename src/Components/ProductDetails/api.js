

const BASE_URL = "http://127.0.0.1:8000/api/"

export const getProductDetail = async ({request , params}) =>{
    const API_ENDPOINT = BASE_URL + 'getProduct/'
    const requestURL = API_ENDPOINT + encodeURI(params.requiredProductname)
    const response = await fetch(requestURL)
    const resposneJson = await response.json()
    return resposneJson

}

export const postReview = async (reviewPayload) =>{
    const API_ENDPOINT = BASE_URL + 'createReview'
    const response = await fetch(API_ENDPOINT ,{
        method : "POST",
        body: JSON.stringify(reviewPayload),
        headers : {'Content-type':'application/json'}
    })
    const resposneJson = await response.json()
    return resposneJson    


}