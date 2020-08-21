import { CommonModule } from "@angular/common";
import { Common } from './common';

describe('Common', () => {

    describe('numberOnly', () => {
        it('should return false when "D" is pressed', () => {
            const keyEvent: any = {
                key: 'd',
                which: 100,
                keyCode: 100
            };

            const result = Common.numberOnly(keyEvent);

            expect(result).toBeTruthy();
        });

        it('should return true when "4" is pressed', () => {
            const keyEvent: any = {
                key: '4',
                which: 52,
                keyCode: 52
            };

            const result = Common.numberOnly(keyEvent);

            expect(result).toBeFalsy();
        })
    })
})