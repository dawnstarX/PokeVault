const MessageList = ({ messages }) => {
  const messageItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const userImageStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const messageTextStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const messageUsernameStyle = {
    fontWeight: "bold",
  };

  return (
    <div>
      {Object.entries(messages).map(([key, value]) => (
        <div key={key} style={messageItemStyle}>
          <img src={value.imageUrl} alt="User" style={userImageStyle} />
          <div style={messageTextStyle}>
            <p style={messageUsernameStyle}>{value.username}</p>
            <p>{value.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MessageList;
