import React from "react";

const EmailBadges = props => {
  const { onDelete, emails } = props;

  return (
    <div>
      {emails.map(email => (
        <div key={email}>
          <span>{email}</span>
          <button
            type="button"
            onClick={() => onDelete(email)}
            >&times;</button>
        </div>
      ))}
    </div>
  );
};

export default EmailBadges;
