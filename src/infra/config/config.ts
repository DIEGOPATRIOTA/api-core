import configJson from "./config.json";

class Config {    
    private configs: any = configJson;
    private nodeEnv: any = process.env.NODE_ENV;

    constructor() {
        this.loadEnvironmentvariables()
    }

    loadEnvironmentvariables () {
        try {
            const mapEnvironmentVariables = this.configs[this.nodeEnv];

            for (const key of mapEnvironmentVariables) {
                process.env[key] = mapEnvironmentVariables[key] 
                console.log(`process.en${key}`,  mapEnvironmentVariables[key]);
            }
        
        } catch (error) {
            console.log(`erro: `, error)
        }
    }

}

export default Config;