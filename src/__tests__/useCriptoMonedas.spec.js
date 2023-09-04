import React from "react";
import {render, screen} from "@testing-library/react";
import Formulario from "../components/Formulario";
import userEvent from "@testing-library/user-event";
// import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useCriptomoneda from '../hooks/useCriptomoneda';
import {monedas, criptos} from "../__mocks__/criptomonedas";

const mockAxios = axios

const guardarMoneda = jest.fn();
const guardarCriptomoneda = jest.fn();

test("<useCriptoMonedas/> funciona correctamente", async () => {
    
    // Consumier api.json
    mockAxios.get = jest.fn().mockResolvedValue({
        data: criptos});


    render(<Formulario 
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
    />);

    // Verificar la cantidad de opciones de criptomonedas
    const monedasDropdown = screen.getByTestId("select-monedas");
    expect(monedasDropdown.children.length).toEqual(monedas.length + 1);
1
    // const { result, waitForNextUpdate } = renderHook(() => useCriptoMonedas());

    // Verificar la cantidad de opciones de criptomonedas
    const opciones = await screen.findAllByTestId("opcion-cripto");
    expect( opciones ).toHaveLength(10);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    // Seleccionar Bitcoion y USD
    userEvent.selectOptions(screen.getByTestId("select-monedas"), "USD");
    userEvent.selectOptions(screen.getByTestId("select-cripto"), "BTC");

    // Submit del formulario
    userEvent.click(screen.getByTestId("submit"));

    // Verificar que las funciones se ejecutaron
    expect(guardarMoneda).toHaveBeenCalled();
    expect(guardarMoneda).toHaveBeenCalledTimes(1);
    expect(guardarCriptomoneda).toHaveBeenCalled();
    expect(guardarCriptomoneda).toHaveBeenCalledTimes(1);




})