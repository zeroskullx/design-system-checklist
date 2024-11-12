type Resource = {
  title: string;
  url: string;
};

type Section = {
  id: string;
  checklist: string[];
  resources: Resource[];
};

export type Data = {
  id: string;
  sections: Section[];
};

export type Datas = {
  "design-language": Data;
  foundations: Data;
  components: Data;
  maintenance: Data;
};
