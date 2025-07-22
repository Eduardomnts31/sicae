import { useState } from "react";
import * as XLSX from "xlsx";
import { Input } from "../../../components/Input/Input";
import TableUsers from "./TableUsers/TableUsers";

// const roleMap = {
//   1: "Administrador",
//   2: "Alumno",
//   3: "Maestro",
// } as const;

// const roleNameToId = {
//   Administrador: 1,
//   Alumno: 2,
//   Maestro: 3,
// };

const Users = () => {
//   const [mode, setMode] = useState<"individual" | "excel">("individual");

//   const [formData, setFormData] = useState({
//     nombre: "",
//     matricula: "",
//     contraseña: "",
//     correo: "",
//     telefono: "",
//     programa: "",
//     generacion: "",
//     rol: 2,
//   });

//   const [excelUsers, setExcelUsers] = useState<any[]>([]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.onload = (evt) => {
//       const data = new Uint8Array(evt.target?.result as ArrayBuffer);
//       const workbook = XLSX.read(data, { type: "array" });
//       const sheet = workbook.Sheets[workbook.SheetNames[0]];
//       const parsedData: any[] = XLSX.utils.sheet_to_json(sheet);

//       const processed = parsedData.map((user) => ({
//         ...user,
//         rol: roleNameToId[user.rol as keyof typeof roleNameToId] || 2,
//       }));

//       setExcelUsers(processed);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   const handleSubmitIndividual = () => {
//     console.log("Enviando usuario individual:", formData);
//     // Aquí puedes hacer tu fetch/axios POST al backend
//   };

//   const handleSubmitExcel = () => {
//     console.log("Enviando usuarios por Excel:", excelUsers);
//     // Aquí puedes hacer una petición en lote (bulk create)
//   };

  return (
    <div className="users-create-form">

        <TableUsers></TableUsers>
      {/* <h1>Crear usuario</h1>

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value as "individual" | "excel")}
      >
        <option value="individual">Crear individual</option>
        <option value="excel">Cargar desde Excel</option>
      </select>

      {mode === "individual" ? (
        <div className="form-grid">
          <Input
            type="text"
            name="nombre"
            label="Nombre completo"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="matricula"
            label="Matrícula"
            value={formData.matricula}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="contraseña"
            label="Contraseña"
            value={formData.contraseña}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="correo"
            label="Correo electrónico"
            value={formData.correo}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="telefono"
            label="Teléfono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="programa"
            label="Programa educativo"
            value={formData.programa}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="generacion"
            label="Generación"
            value={formData.generacion}
            onChange={handleInputChange}
          />
          <div className="input-wrapper">
            <label htmlFor="rol">Rol</label>
            <select
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
            >
              {Object.entries(roleMap).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleSubmitIndividual}>Crear usuario</button>
        </div>
      ) : (
        <div className="form-excel-upload">
          <Input
            type="file"
            name="excel"
            label="Sube tu archivo Excel"
            hasLabel={true}
            accept=".xlsx, .xls"
            onChange={handleFileExcel}
          />

          {excelUsers.length > 0 && (
            <div className="excel-preview">
              <h3>Usuarios detectados:</h3>
              <ul>
                {excelUsers.map((u, idx) => (
                  <li key={idx}>{`${u.nombre} (${u.correo}) - Rol: ${u.rol}`}</li>
                ))}
              </ul>
              <button onClick={handleSubmitExcel}>Crear usuarios en lote</button>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Users;
