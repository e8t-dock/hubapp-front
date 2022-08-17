// table border-separate
export default () => {
  return (
    <div>
      <h3>Table</h3>
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr>
            <th className="bg-sky-100 border text-left px-8 py-4">Company</th>
            <th className="bg-sky-100 border text-left px-8 py-4">Contact</th>
            <th className="bg-sky-100 border text-left px-8 py-4">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-8 py-4">Amazon Inc.</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">Google Inc.</td>
            <td className="border px-8 py-4">Meal Garrison</td>
            <td className="border px-8 py-4">Spain</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">Apple Inc.</td>
            <td className="border px-8 py-4">Maggie O'Neill</td>
            <td className="border px-8 py-4">Austria</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
