export default function Table() {
  return (
    <table className="w-full border border-solid border-slate-200">
      <thead>
        <tr className="border-b border-solid border-slate-200">
          <th className="text-start p-2">Code</th>
          <th className="text-start p-2">Name</th>
          <th className="text-start p-2">Created</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-solid border-slate-200 last:border-0">
          <td className="text-start p-2">SOD-556</td>
          <td className="text-start p-2">Fix header styles</td>
          <td className="text-start p-2">12/12/23 20:00</td>
        </tr>
      </tbody>
    </table>
  );
}
