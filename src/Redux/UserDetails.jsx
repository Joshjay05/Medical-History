import { useSelector } from "react-redux"; // Access Redux store
import PropTypes from "prop-types";

const UserDetails = ({ name }) => {
  const users = useSelector((state) => state.user.users); // Get users from Redux store
  const user = users.find((user) => user.name === name);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <img src={user.profile_picture} alt={user.name} width="100" />
      <p>Age: {user.age}</p>
      <p>Phone: {user.phone_number}</p>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserDetails;
