// // Texto original
// const textoOriginal = "Este es un texto de ejemplo que queremos comprimir.";


// // Comprimir texto usando pako.js



import LZString from 'lz-string';
// console.log("Texto original:", textoOriginal);
// console.log("Texto comprimido:", textoComprimido);


export const zip_string =(txt)=>{
    return  LZString.compressToEncodedURIComponent(txt);
}


export const unzip_string =(token)=>{
    return pako.inflate(token, { to: 'string' });

}