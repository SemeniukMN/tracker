'use client';

import Table from '@/app/issues/components/table';
import { useEffect } from 'react';

export default function Issues() {
  useEffect(() => {
    fetch('/api/issues').then(res => res.json()).then(console.log)
  }, [])
  return (
    <>
      <h1 className="mb-6">Issues</h1>
      <Table />
    </>
  );
}
