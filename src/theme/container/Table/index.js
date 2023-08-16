import React, { useEffect, useState } from "react";
import "./index.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({
    id: "",
    title: "",
    price: "",
    stock: "",
  });
  const [newData, setNewData] = useState({
    title: "",
    price: "",
    stock: "",
  });

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddData = () => {
    // Generate a unique ID for the new data row (you may use a better approach in production)
    const newId = Date.now().toString();

    // Create the new data object with the unique ID
    const newDataItem = { ...newData, id: newId };

    // Add the new data item to the data array
    setData((prevData) => [...prevData, newDataItem]);

    // Reset the newData state for the next data entry
    setNewData({
      title: "",
      price: "",
      stock: "",
    });
  };
  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingId(id);
      setEditedData({ ...itemToEdit });
    }
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editedData.id ? { ...editedData } : item
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setEditingId(null);
  };
  return (
    <>
      <div>
        <div>
          <h2>Add Data</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={newData.title}
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                value={newData.price}
                onChange={(e) =>
                  setNewData({ ...newData, price: e.target.value })
                }
              />
            </div>
            <div>
              <label>Stock:</label>
              <input
                type="number"
                value={newData.stock}
                onChange={(e) =>
                  setNewData({ ...newData, stock: e.target.value })
                }
              />
            </div>
            <button onClick={handleAddData}>Add Data</button>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={item.id}>
                  {editingId === item.id ? (
                    <>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          value={editedData.title}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              title: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={editedData.price}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              price: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={editedData.stock}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              stock: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <button onClick={handleSave}>Save</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>
                        <button onClick={() => handleEdit(item.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
