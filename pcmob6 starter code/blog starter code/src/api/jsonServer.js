import axios from "axios";

export default axios.create({
  baseURL: "____" //paste baseURL in
});

//npm install json-server ngrok
// cd jsonserverdemo --> install node_modules (too many files to upload to github)
// npm run db
// followed by
// npm run tunnel to get a new baseURL
// copy and paste that new baseURL above
