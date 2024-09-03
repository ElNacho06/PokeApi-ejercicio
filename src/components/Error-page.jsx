import { useRouteError} from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError
    console.error(error)

    return (
        <div id="error-page">
            <h1>Hubo un error</h1>
            <p>No se encontro el pokemon buscado</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}