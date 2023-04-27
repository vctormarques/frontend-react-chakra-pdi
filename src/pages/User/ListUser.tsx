
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
  } from '@chakra-ui/react'
import { Box, useBoolean, useColorModeValue, useToast } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import { UsersHook } from "hooks";
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { SidebarWithHeader } from 'components';

export function ListUser(){
    const bgColor = useColorModeValue('white', 'neutral.900');
    const { users, getAllUsers } = UsersHook();

    useEffect(() => {
        getAllUsers()
    }, [getAllUsers])
    return (
        <SidebarWithHeader>
            <Box p={4} mb={4} rounded={8} bg={bgColor}>
                <div className="flex items-center justify-between">
                    <Heading size='md'>
                        Usuários
                    </Heading>
                    <Link to="/register-user">
                        <Button colorScheme='teal' >
                            Cadastrar
                        </Button>
                    </Link> 
                </div>

            </Box>
            <Box p={4} rounded={8} bg={bgColor}>
                <TableContainer>
                    <Table variant='simple' colorScheme='teal' >
                        <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>E-mail</Th>
                                <Th className="center">Editar</Th>
                                <Th className="center">Excluir</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user) => (
                                <Tr key={user.id}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td className="center" w={4}>
                                        <IconButton
                                            variant='outline'
                                            colorScheme='teal'
                                            size='sm'
                                            aria-label='Editar'
                                            icon={<EditIcon />}
                                        />
                                    </Td>
                                    <Td className="center" w={4}>
                                        <IconButton
                                            variant='outline'
                                            colorScheme='red'
                                            size='sm'
                                            aria-label='Excluir'
                                            icon={<DeleteIcon />}
                                        />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </SidebarWithHeader>
    )
}