// para importar de forma dinamica las imagenes en la carpeta assets desde internet
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}