

///This is still a template!!!
const endpoint = "https://sweeping-reindeer-45.hasura.app/v1/graphql";
const headers = {
	"content-type": "application/json",
    "Authorization": "<token>"
};
const graphqlQuery = {
    "operationName": "fetchAuthor",
    "query": `query fetchAuthor { author { id name } }`,
    "variables": {}
};

const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(graphqlQuery)
};

const response = await fetch(endpoint, options);
const data = await response.json();


const getInstaPictures = () => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data
}