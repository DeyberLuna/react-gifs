import { getNombre } from "../prueba"



describe('Estas son las pruebas de index.js', ()=>{
    test('should ', () => {
    

        //la funcion get nombre retorna hola carlos si no tiene argumentos

        const result=getNombre()
        expect(result).toBe('el nombre es carlos')
    })
})

