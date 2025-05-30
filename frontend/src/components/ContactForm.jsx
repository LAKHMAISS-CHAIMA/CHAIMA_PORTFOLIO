import { useState, useEffect } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSending: false
  });

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (status.message) {
      const timeout = setTimeout(() => {
        setStatus((prev) => ({ ...prev, message: '' }));
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [status.message]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        message: 'Please fill in all fields',
        isError: true,
        isSending: false
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        message: 'Please enter a valid email address',
        isError: true,
        isSending: false
      });
      return;
    }

    try {
      setStatus({ message: '', isError: false, isSending: true });

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus({
          message: 'Message sent successfully!',
          isError: false,
          isSending: false
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        message: error.message || 'Failed to send message. Please try again.',
        isError: true,
        isSending: false
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-2 border rounded-md resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.isSending}
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {status.isSending ? 'Sending...' : 'Send Message'}
      </button>

      {status.message && (
        <p
          className={`text-center p-2 rounded-md transition-all duration-300 ${
            status.isError
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
