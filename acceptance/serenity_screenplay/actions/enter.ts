import {Performable} from './../performable';
import {PerformsTasks} from './../performs_tasks';

export class Enter implements Performable {
    
    public static theValue(value: string) : Enter {
        return new Enter(value);
    }
    
    public into(field: webdriver.Locator) : Enter {
        this.locator = field;
        
        return this;
    }
    
    public thenHit(key: string) {
        this.key = key;

        return this;
    }
    
    performAs(actor: PerformsTasks):Promise<void> {
        return new Promise<void>((resolve, reject) => {
            element(this.locator).sendKeys(this.value, this.key).then(resolve, reject);
        })
    }

    constructor(value:string) {
        this.value = value;
    }

    private value: string;
    private locator: webdriver.Locator;
    private key:string;
}