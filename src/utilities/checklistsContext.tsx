'use client'

import React from 'react';

const ChecklistsContext = React.createContext({} as {
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
  checkedIds: string[];
});

export const ChecklistsProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [checkedIds, setCheckedIds] = React.useState<string[]>([]);

  const load = () => {
    const data = localStorage.getItem('checked');

    if (!data) return;
    return data.split(',');
  };

  const save = (data: string[]) => {
    setCheckedIds(data);
    localStorage.setItem('checked', data.join(','));
  };

  const add = (id: string) => {
    save([...checkedIds, id]);
  };

  const set = (ids: string[]) => {
    save(ids);
  };

  const remove = (id: string) => {
    const nextIds = checkedIds.filter(checkedId => checkedId !== id);
    save(nextIds);
  };

  React.useEffect(() => {
    const lsCheckedIds = load();

    if (!lsCheckedIds) return;
    setCheckedIds(lsCheckedIds);
  }, []);

  return (
    <ChecklistsContext.Provider value={{ add, remove, set, checkedIds }}>
      {children}
    </ChecklistsContext.Provider>
  );
};

export const useCheckItem = (id: string) => {
  const { add, remove, checkedIds } = React.useContext(ChecklistsContext);

  return {
    add,
    remove,
    checked: checkedIds.includes(id),
  };
};

export const useCheckedIds = () => {
  const { checkedIds, set } = React.useContext(ChecklistsContext);
  return { checkedIds, setCheckedIds: set };
};
