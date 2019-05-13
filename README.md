# Auth0 Login Example

# Technologies Used

Auth0 
React
Local Storage

# Code Explanation

This sample project uses auth0 to protect a secret route at /secret. If the user is authenticated through Auth0, then they will be able to access the route, but if they are not then they are directed to a 404 page. Once the user is authenticated, the credentials that are sent back as a JSON Web Token are stored in local storage and given an expiration time. 