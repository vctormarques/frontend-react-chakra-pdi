import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterUserValidationSchema = yup.object({
    name: yup.string().required('Preencha o nome completo'),
    email: yup.string().email('Preencha um e-mail válido').required('Preencha o e-mail'),
    password: yup.string().required('Preencha a senha'),
})

export const RegisterUserResolver = yupResolver(RegisterUserValidationSchema)