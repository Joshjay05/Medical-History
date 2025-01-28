import { useQuery } from "@tanstack/react-query";
import useUserStore from "../stores/useUserStore"; // Import Zustand store
import fetchUsers from "../Api/data"; // Assuming you're importing the fetch function

const UserList = () => {
  const setUsers = useUserStore((state) => state.setUsers);
  const setLoading = useUserStore((state) => state.setLoading);
  const setFinishedLoading = useUserStore((state) => state.setFinishedLoading);
  const setError = useUserStore((state) => state.setError);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onSuccess: (data) => {
      setUsers(data); // Update Zustand store with fetched users
      setFinishedLoading(); // Mark loading as finished
    },
    onError: (err) => {
      setError(err); // Set error in Zustand store
    },
  });

  if (isLoading) {
    setLoading(); // Set loading state in Zustand store
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
