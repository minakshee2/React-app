import { useState } from "react";

type Data = {
  Id: string;
  Name: string;
  Status: string;
};

export default function SearchFilter() {
  const tableData: Data[] = [
    { Id: "1", Name: "Alice", Status: "Active" },
    { Id: "2", Name: "Bob", Status: "Inactive" },
    { Id: "3", Name: "Charlie", Status: "Pending" },
  ];
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<Data[]>(tableData);

  const SearchItem = () => {
    const q = query.toLowerCase();

    setFilteredItems(
      tableData.filter((item) =>
        Object.values(item).some((val) => new RegExp(`\\b${q}`, "i").test(val)),
      ),
    );
  };

  return (
    <>
      <h1>Search Filter </h1>
      <input
        type="text"
        placeholder="Enter fruit name to serach"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={SearchItem}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
