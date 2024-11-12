'use client'

import React from 'react';
import { useRouter, useParams } from 'next/navigation';

import { useCheckedIds } from '@/utilities/checklistsContext';
import { decode } from '@/utilities/export';


export default function ExportRoute() {
  const { push } = useRouter();
  const { id } = useParams();
  const { setCheckedIds } = useCheckedIds();
  const loadedRef = React.useRef(false);

  React.useEffect(() => {
    if (loadedRef.current || !id) return;
    const checkedIds = id ? decode(id.toString()).split(',') : [];

    if (checkedIds && checkedIds.length) setCheckedIds(checkedIds);
    loadedRef.current = true;
    push('/');
  }, [setCheckedIds, id]);

  return null;
};
