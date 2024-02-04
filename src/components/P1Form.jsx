import { useState } from "react";

export default function P1Form({ onAddTask }) {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  // onChange handler
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(formData);
    setFormData({
      name: "",
      status: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="row gy-2 gx-3 align-items-center mb-4"
    >
      <div className="col-auto">
        <input
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleOnChange}
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="col-auto">
        <input
          type="text"
          name="status"
          value={formData?.status}
          onChange={handleOnChange}
          className="form-control"
          placeholder="Status"
        />
      </div>
      <div className="col-auto">
        <button
          disabled={!formData?.name || !formData?.status}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
