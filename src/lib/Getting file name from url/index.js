import fetch from "node-fetch";

const fileName = async (link)=> {
    const response = await fetch(link);

    const contentDisposition = response.headers.get('content-disposition')
    let name = contentDisposition.replace('attachment; filename="','');
    name = name.replace('"','');
    return name;
};

export default fileName;

/* To call the funtion */
// await fileName(url));