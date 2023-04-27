import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR)

type Props ={
    name: string;
}

export function DateTimePicker({ name }: Props){
    const {control} = useFormContext();

    return (
        <Controller 
            name={name}
            control={control} 
            render={({field: { onChange, value }}) => (
                <DatePicker 
                    selected={value} 
                    locale="pt-BR"
                    dateFormat="P"
                    onChange={(date: Date) => onChange(date.toISOString())} 
                    onKeyDown={(e) => {
                        e.preventDefault();
                    }}
                />
            )}            
        />
    )
}