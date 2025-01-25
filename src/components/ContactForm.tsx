import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-purple-100 p-6 rounded-lg shadow-md mb-6 text-center"
    >
      <h2 className="text-2xl font-bold border-b-4 border-purple-500 pb-2 mb-4">
        連絡先
      </h2>
      <form className="flex flex-col items-center">
        <label htmlFor="name" className="mb-2 text-lg">
          名前:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mb-4 p-2 border rounded w-64"
        />

        <label htmlFor="email" className="mb-2 text-lg">
          メール:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mb-4 p-2 border rounded w-64"
        />

        <label htmlFor="message" className="mb-2 text-lg">
          メッセージ:
        </label>
        <textarea
          id="message"
          name="message"
          className="mb-4 p-2 border rounded w-64"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          送信
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
