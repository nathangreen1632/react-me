import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.firstName ? '' : 'First name is required.',
      lastName: formData.lastName ? '' : 'Last name is required.',
      email: validateEmail(formData.email) ? '' : 'Enter a valid email.',
      message: formData.message ? '' : 'A message is required.',
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
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            onBlur={() => setErrors({...errors, name: formData.firstName ? '' : 'Name is required.'})}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            onBlur={() => setErrors({...errors, name: formData.lastName ? '' : 'Name is required.'})}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onBlur={() =>
                setErrors({...errors, email: validateEmail(formData.email) ? '' : 'Enter a valid email.'})
              }
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              onBlur={() => setErrors({...errors, message: formData.message ? '' : 'Message is required.'})}
            />
            {errors.message && <span>{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
      </form>
    </section>
);
};

export default Contact;
