import { useEffect, useState } from "react";
import apiPromise from "../../../Api/ApiPrefix";
import type { UserProps } from "../../../interfaces/userProps";

const useUsers = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const api = await apiPromise;
      const {data} = await api.get<UserProps[]>("/usuarios/");

      setUsers(data); 
    } catch (err: any) {
      setError(
        err.response?.data?.message || err.message || "Ocurrió un error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
  };
};

export default useUsers;
