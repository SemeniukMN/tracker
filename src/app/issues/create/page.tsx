'use client';

import { Input } from '@/app/issues/components/input';
import { MouseEvent, useState } from 'react';

interface Issue {
  title: string;
  content: string;
}


export default function IssueCreateForm() {
  const [issue, setIssue] = useState<Issue>({title: '', content: ''});

  function changeTitle(title: string) {
    setIssue({...issue, title});
  }

  function changeContent(content: string) {
    setIssue({...issue, content});
  }

  function createIssue(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(issue);
    fetch('/api/issues/create', {
      method: 'POST',
      body: JSON.stringify(issue)
    }).then((response) => response.json())
      .then(console.log)
  }

  return (
    <>
      <h1 className="mb-4">Create issue</h1>
      <form>
        <div className="mb-4">
          <Input name="title" label="Title" onInput={changeTitle}/>
        </div>
        <div className="mb-4">
          <Input name="content" label="Content" onInput={changeContent}/>
        </div>
        <button className="bg-blue-600 rounded text-white px-2" onClick={createIssue}>
          Create
        </button>
      </form>
    </>
  );
}
