import { databaseSetup } from "./lib/dbSetup.js";
import { server } from "./lib/server.js";

export const initialFileStructure = () => {
    console.log('Creating folders...');
    console.log('Creating files...');
}

export const init = async () => {
    try {
        initialFileStructure();

        const dbConnection = await databaseSetup(); 

        server.init(dbConnection);

        setInterval(() => {
            // isvalyti nebegaliojancios /token/*.json
        }, 24 * 60 * 60 * 1000);

    } catch (error) {
        console.log(error);
    }
   
}

export const app = {
    init,
    initialFileStructure,
};

export default app;

app.init();