import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setUsers,
  setLoading,
  setError,
  setFinishedLoading,
} from "../Redux/userSlice"; // Import actions
import fetchUsers from "../Api/data";

const UserList = () => {
  const dispatch = useDispatch(); // Access Redux dispatch function

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onSuccess: (data) => {
      dispatch(setUsers(data)); // Dispatch users to Redux store
      dispatch(setFinishedLoading()); // Mark loading as finished
    },
    onError: (err) => {
      dispatch(setError(err)); // Dispatch error to Redux store
    },
  });

  if (isLoading) {
    dispatch(setLoading()); // Set loading state in Redux
    return <p>Loading users...</p>;
  }
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="user-list">
      <h1>Users List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <button onClick={() => console.log(user.name)}>
              <img src={user.profile_picture} alt={user.name} width="50" />
              <p>{user.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
