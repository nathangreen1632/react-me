import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name ? '' : 'Name is required.',
      email: validateEmail(formData.email) ? '' : 'Enter a valid email.',
      message: formData.message ? '' : 'Message is required.',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => setErrors({ ...errors, name: formData.name ? '' : 'Name is required.' })}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() =>
              setErrors({ ...errors, email: validateEmail(formData.email) ? '' : 'Enter a valid email.' })
            }
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={() => setErrors({ ...errors, message: formData.message ? '' : 'Message is required.' })}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
