import { CreateDiv } from "./tools/Create.js";
import { CreateRegions } from "./tools/Create.js";
import { CreateSelectRegions } from "./tools/Create.js";
import fetchRegions from "./tools/RegionsFetch.js";
import { selectRegion } from "./classes/select-region.js";
import fetchDepartements from "./tools/DepartementFetch.js";
import { selectDepartement } from "./classes/select-departement.js";



const selectRegionClass = new selectRegion();
await selectRegionClass.Wrapper();
selectRegionClass.eventListener();
console.log("sqdDQSDQSDQSDQS");

console.log(selectRegionClass.departementSection);

// await selectRegionClass.departementSection.update(11);

console.log(selectRegionClass.departementSection);






