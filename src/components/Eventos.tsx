import useFetch from "./customHooks/useFetch";


const Eventos = () => {

    let url = "http://localhost:8081/carnaval";

    const { dado: item } = useFetch(url);
    
    return (
        <>
            <h1>Lista de Eventos</h1>
            <div>
                {item && item.map((item: any, index: number) => (
                    <div key={index}>
                        <h2>{item.polo}</h2>
                        <p>Data: {item.data}</p>
                        <p>Hora: {item.inicio}</p>
                        <div>
                            <h3>Eventos</h3>
                            <div>
                                {item.atracoes.map((aItem: any, index: number) => (
                                    <p key={index}>{aItem}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Eventos;
