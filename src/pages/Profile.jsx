import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    language: "English",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile updated!");
  };

  const deleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      alert("Account deleted");
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Profile & Settings</h1>

        <label>Full Name</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Email</label>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Language</label>

        <select
          name="language"
          value={form.language}
          onChange={handleChange}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
        </select>

        <button onClick={saveProfile}>
          Save Changes
        </button>

        <hr />

        <h3>Danger Zone</h3>

        <button
          className="danger-btn"
          onClick={deleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;