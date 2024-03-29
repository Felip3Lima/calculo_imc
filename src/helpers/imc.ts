export type Level = {
    title:   String;
    color:   String;
    icon:    'down' | 'up';
    imc:     number[];
    yourImc?: number;

}

export const levels: Level[] = [
    {title: 'Magreza',    color:'#96A3AB', icon:'down', imc:[0, 18.5]},
    {title: 'Normal',     color:'#0EAD69', icon:'up', imc:[18.6, 24.9]},
    {title: 'Sobrepeso',  color:'#E2B039', icon:'up', imc:[25, 30]},
    {title: 'Normal',     color:'#C3423F', icon:'up', imc:[30.1, 99]},
];

export const calculateImc = (aLtura:number, peso:number) => {
    const imc = peso / (aLtura * aLtura);

    for ( let i in levels) {
        if ( imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            levels[i].yourImc = imc;
            return levels[i]

        }

    }
    return null;

}