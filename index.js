import { CreateDiv } from "./tools/Create.js";
import { CreateEurosInput } from "./tools/Create.js";
import { CreateChfInput } from "./tools/Create.js";
import { Wrapper } from "./tools/Create.js";
import Form from "./classes/form.js";

const form = new Form(CreateDiv(),CreateEurosInput(),CreateChfInput());

form.Render();