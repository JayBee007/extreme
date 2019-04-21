import React from "react";

const EmailBadges = props => {
  const { onDelete, emails } = props;

  return (
    <div>
      {emails.map(email => (
        <div key={email} className="tag-item">
          <span>{email}</span>
          <button className="button" type="button" onClick={() => onDelete(email)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmailBadges;
