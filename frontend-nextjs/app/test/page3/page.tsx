"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

type Employee = {
    id: string;
    name: string;
    department: string;
    role: string;
    status: string;
};

type FormData = {
    name: string;
    department: string;
    role: string;
    status: string;
};

type EmployeeRowProps = {
    employee: Employee;
    onEdit: (employee: Employee) => void;
    onDelete: (id: string) => void;
};

const STORAGE_KEY = "page3_employees";
const STORAGE_EVENT = "page3_employees_change";

const departments: string[] = ["Engineering", "Design", "Marketing", "HR", "Finance"];
const statuses: string[] = ["Active", "On Leave", "Inactive"];

const emptyForm: FormData = { name: "", department: "Engineering", role: "", status: "Active" };

const initialEmployees: Employee[] = [
    { id: "001", name: "Alice Johnson", department: "Engineering", role: "Developer", status: "Active" },
    { id: "002", name: "Bob Williams", department: "Design", role: "Designer", status: "Active" },
    { id: "003", name: "Carol Martinez", department: "Marketing", role: "Manager", status: "On Leave" },
    { id: "004", name: "David Chen", department: "HR", role: "Recruiter", status: "Active" },
    { id: "005", name: "Eva Brown", department: "Finance", role: "Analyst", status: "Inactive" },
];

function subscribe(onStoreChange: () => void) {
    window.addEventListener("storage", onStoreChange);
    window.addEventListener(STORAGE_EVENT, onStoreChange);

    return function unsubscribe() {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(STORAGE_EVENT, onStoreChange);
    };
}

function getSnapshot() {
    return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
    return null;
}

function parseEmployees(stored: string | null): Employee[] {
    if (stored) {
        return JSON.parse(stored);
    }
    saveEmployees(initialEmployees);
    return initialEmployees;
}

function saveEmployees(employees: Employee[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    window.dispatchEvent(new Event(STORAGE_EVENT));
}

function getStatusBadgeClass(status: string) {
    if (status === "Active") {
        return "badge badge-xs badge-success";
    }
    if (status === "On Leave") {
        return "badge badge-xs badge-warning";
    }
    return "badge badge-xs badge-error";
}

function EmployeeRow({ employee, onEdit, onDelete }: EmployeeRowProps) {
    function handleEditClick() {
        onEdit(employee);
    }

    function handleDeleteClick() {
        onDelete(employee.id);
    }

    return (
        <tr>
            <td className="text-xs">{employee.name}</td>
            <td className="text-xs">{employee.department}</td>
            <td className="text-xs">{employee.role}</td>
            <td>
                <span className={getStatusBadgeClass(employee.status)}>
                    {employee.status}
                </span>
            </td>
            <td>
                <div className="flex gap-1">
                    <button type="button" className="btn btn-xs" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-xs btn-error" onClick={handleDeleteClick}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default function Page() {
    const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const employees = useMemo(() => parseEmployees(stored), [stored]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>(emptyForm);

    const totalEmployees = employees.length;
    const activeEmployees = employees.filter((e) => e.status === "Active").length;
    const onLeaveEmployees = employees.filter((e) => e.status === "On Leave").length;
    const inactiveEmployees = employees.filter((e) => e.status === "Inactive").length;

    function handleOpenModal() {
        setFormData(emptyForm);
        setEditingId(null);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
        setFormData(emptyForm);
        setEditingId(null);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (editingId) {
            saveEmployees(
                employees.map((e) => (e.id === editingId ? { ...e, ...formData } : e))
            );
        } else {
            const newEmployee: Employee = {
                id: crypto.randomUUID(),
                ...formData,
            };
            saveEmployees([...employees, newEmployee]);
        }
        handleCloseModal();
    }

    function handleEdit(employee: Employee) {
        setEditingId(employee.id);
        setFormData({
            name: employee.name,
            department: employee.department,
            role: employee.role,
            status: employee.status,
        });
        setIsModalOpen(true);
    }

    function handleDelete(id: string) {
        saveEmployees(employees.filter((e) => e.id !== id));
    }

    return (
        <main className="min-w-0 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 sm:mb-5">
                    <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
                        Employee Management
                    </h1>
                    <p className="mt-1 text-xs opacity-60">
                        Manage your team members
                    </p>
                </div>

                <div className="stats stats-vertical sm:stats-horizontal mb-4 w-full bg-base-100 border border-base-300">
                    <div className="stat">
                        <div className="stat-title text-xs">Total</div>
                        <div className="stat-value text-lg">{totalEmployees}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-xs">Active</div>
                        <div className="stat-value text-lg text-success">{activeEmployees}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-xs">On Leave</div>
                        <div className="stat-value text-lg text-warning">{onLeaveEmployees}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-xs">Inactive</div>
                        <div className="stat-value text-lg text-error">{inactiveEmployees}</div>
                    </div>
                </div>

                <div className="card border border-base-300 bg-base-100">
                    <div className="card-body p-3 sm:p-4">
                        <div className="mb-3 flex justify-end">
                            <button type="button" className="btn btn-xs btn-primary" onClick={handleOpenModal}>
                                Add Employee
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th className="text-xs">Name</th>
                                        <th className="text-xs">Department</th>
                                        <th className="text-xs">Role</th>
                                        <th className="text-xs">Status</th>
                                        <th className="text-xs">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <EmployeeRow
                                            key={employee.id}
                                            employee={employee}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {employees.length === 0 && (
                            <div className="py-8 text-center text-xs opacity-60">
                                No employees found
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <dialog className="modal modal-open">
                    <div className="modal-box max-w-sm">
                        <h3 className="text-sm font-bold">
                            {editingId ? "Edit Employee" : "Add Employee"}
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-3 space-y-2">
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input input-xs w-full"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs">Department</span>
                                    </label>
                                    <select
                                        name="department"
                                        className="select select-xs w-full"
                                        value={formData.department}
                                        onChange={handleChange}
                                    >
                                        {departments.map((dept) => (
                                            <option key={dept} value={dept}>
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs">Role</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="input input-xs w-full"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs">Status</span>
                                    </label>
                                    <select
                                        name="status"
                                        className="select select-xs w-full"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        {statuses.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-action">
                                <button type="button" className="btn btn-xs" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-xs btn-primary">
                                    {editingId ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button type="button" onClick={handleCloseModal}>close</button>
                    </form>
                </dialog>
            )}
        </main>
    );
}
