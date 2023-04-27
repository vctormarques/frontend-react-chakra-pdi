import {  SidebarWithHeader } from "components";
import { IRegisterUser } from "interfaces";
import { useForm, FormProvider } from "react-hook-form";
import { RegisterUserResolver } from "validations";
import Swal from 'sweetalert2'
import { Box, Button, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { UserServices } from "services";
import { useNavigate } from 'react-router-dom';

export function RegisterUser(){
    const bgColor = useColorModeValue('white', 'neutral.900');
    const formMethods = useForm<IRegisterUser>({ resolver: RegisterUserResolver });
    const { formState: { errors }, register, handleSubmit, reset } = formMethods;
    const navigate = useNavigate();

    async function onSubmit(values: IRegisterUser){
        try {
            const {status, data} = await UserServices.registerUser(values);
            if (status === 201){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Cadastrado com sucesso",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/users');
                reset();
            } 
        } catch (error:any) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Falha ao cadastrar usuário",
                text: error.response.data.message,
                showConfirmButton: true,
                confirmButtonText: "Ok",
                timer: 0
            });
        }   

    }
    return (
        <>
            <SidebarWithHeader>
                <Link to="/users">
                    <ArrowBackIcon mr={1}/> <Text as='ins'>Voltar</Text>
                </Link> 
                <Box p={4} mb={4} my={2} rounded={8} bg={bgColor}>
                    <div className="flex items-center justify-between">
                        <Heading size='md'>
                            Cadastrar Usuário
                        </Heading>
                    </div>

                <FormProvider {...formMethods}>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Nome Completo</label>
                        <input {...register('name')} type="text" />
                        {errors?.name?.message && ( 
                            <p className="error-text">{errors?.name?.message}</p>
                        )}

                        <label htmlFor="email">E-mail</label>
                        <input {...register('email')} type="email" />
                        {errors?.email?.message && (
                            <p className="error-text">{errors?.email?.message}</p>
                        )}

                        {/* <label htmlFor="birthDate">Data de Nascimento</label>
                        <DateTimePicker name="birthDate" />
                        {errors?.birthDate?.message && (
                            <p className="error-text">{errors?.birthDate?.message}</p>
                        )} */}

                        <label htmlFor="password">Senha</label>
                        <input {...register('password')} type="text" />
                        {errors?.password?.message && (
                            <p className="error-text">{errors?.password?.message}</p>
                        )}

                        <Button type="submit" colorScheme="green">Cadastrar</Button>
                    </form>
                </FormProvider>
                </Box>

            </SidebarWithHeader>
        </>
    )
}