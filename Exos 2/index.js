import { CreateDiv } from "./tools/Create.js";
import { CreateRegions } from "./tools/Create.js";
import { CreateSelectRegions } from "./tools/Create.js";
import fetchRegions from "./tools/RegionsFetch.js";
import { selectRegion } from "./classes/select-region.js";

const selectRegionClass = new selectRegion();






console.log(selectRegionClass.regionsListe);
console.log(selectRegionClass.selectMenu);