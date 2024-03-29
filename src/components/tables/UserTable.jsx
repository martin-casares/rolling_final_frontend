import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { getUsers, delUser } from '../../api/adminUsers';
import { EditUserModal } from '../modals/EditUserModal';
import { AddUserModal } from '../modals/AddUserModal';

export const UserTable = ({ users, setUsers }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };
        fetchUsers();
    }, []);

    const openEditModal = (user) => {
        setSelectedUser(user);
    };

    const openAddUserModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <Link to="/" type="button" className="btn btn-primary mx-1">
                    Inicio
                </Link>
                <button
                    className="btn btn-primary btn btn-primary"
                    onClick={openAddUserModal}
                >
                    Agregar Usuarios
                </button>
                {modalVisible && <AddUserModal closeModal={() => setModalVisible(false)} />}
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                {/* Contenedor con estilos CSS */}
                <table className="table caption-top bg-white rounded mt-2">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.slice(0, 6).map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.rol}</td>
                                <td>
                                    <button
                                        className="btn btn-success mx-1"
                                        onClick={() => openEditModal(user)}
                                    >
                                        <FaEdit size={20} />
                                    </button>
                                    <button
                                        className="btn btn-danger mx-1"
                                        onClick={() => delUser(user._id)}
                                    >
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    closeModal={() => setSelectedUser(null)}
                />
            )}
        </>
    );
};
