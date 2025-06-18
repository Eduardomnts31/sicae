import Button from "../../../components/Button/Button";
import Table from "../../../components/Table/Table";
import type { TableColumn } from "../../../components/Table/Table";

interface Student {
    id: number;
    name: string;
    email: string;
    grade: number;
}

const students: Student[] = [
    // { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', grade: 85 },
    // { id: 2, name: 'Ana Ruiz', email: 'ana@mail.com', grade: 92 },
];

const studentColumns: TableColumn<Student>[] = [
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Correo' },
    {
        key: 'grade',
        label: 'Calificación',
        render: (value) => <strong style={{ color: value >= 90 ? 'green' : 'black' }}>{value}</strong>
    }
];

export const Alumnos = () => {
    return (
        <div className="container-alumnos-content">
            {/* <h3>Este apartdado es donde podras encontrar a todos los alumnos dependiendo de la generacion y de el grupo</h3> */}
            {/* <Button onClick={() => alert('Hola!')}>Click aquí</Button> */}
            <Table columns={studentColumns} data={students} keyField="id" />
        </div>
    );
}