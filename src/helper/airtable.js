import Airtable from "airtable";

const base = new Airtable({
  apiKey:
    process.env.AIRTABLE_API_KEY ||
    "pati85gN1nMRJBNGR.65890584d25a05d68af2feed12339c698ba1bd6f8bf664ebd458f5dc1b0844a8",
}).base(process.env.AIRTABLE_BASE_ID || "appDcVgimlwVUFcWj");

export default base;
