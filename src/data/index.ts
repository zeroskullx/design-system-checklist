import designLanguage from "./designLanguage";
import designFoundations from "./designFoundations";
import components from "./components";
import maintenance from "./maintenance";
import { Data, Datas } from "./type";

export type { Data } from "./type";

export default {
  "design-language": designLanguage,
  foundations: designFoundations,
  components,
  maintenance,
};

export const datas: Datas = {
  "design-language": designLanguage as Data,
  foundations: designFoundations as Data,
  components: components as Data,
  maintenance: maintenance as Data,
};
