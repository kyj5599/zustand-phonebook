import React from "react";
import usePhoneBooksStore from "../stores/usePhoneBooksStore";

const ContactList = () => {
  const { phoneBooks } = usePhoneBooksStore();
  console.log(phoneBooks);

  return (
    <div>
      {phoneBooks.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
