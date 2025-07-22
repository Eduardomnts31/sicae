import React from "react";
import Table, { type TableColumn } from "../../../../components/Table/Table";
import useUsers from "../../Hooks/useUsers"; // Importa el hook como función, no como tipo
import type { UserProps } from "../../../../interfaces/userProps";



const TableUsers = () => {
  const { error, loading, refetch, users } = useUsers();

  // Define las columnas según UserProps
  const columns: TableColumn<UserProps>[] = [
    { key: "nombre", label: "Nombre" },
    { key: "correo", label: "Correo" },
    { key: "matricula", label: "Matrícula" },
    { key: "telefono", label: "Teléfono" },
    { key: "rol", label: "Rol" },
    { key: "nombreRol", label: "Nombre del Rol" },
  ];

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table columns={columns} data={users} keyField="id" />
      <button onClick={refetch}>Actualizar lista</button>
    </div>
  );
};

export default TableUsers;
