export class Common {
    static isNullOrUndefined(obj: any): boolean {
        if (obj === null || obj === undefined) {
            return true;
        }
        return false;
    }

    static isNullOrEmpty(obj: any[]): boolean {
        if (this.isNullOrUndefined || obj.length === 0) {
            return true;
        }
        return false;
    }

    static numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keycode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}