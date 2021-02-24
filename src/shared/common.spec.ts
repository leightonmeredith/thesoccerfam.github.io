import { CommonModule } from '@angular/common';
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

            expect(result).toBeFalsy();
        });

        it('should return true when "4" is pressed', () => {
            const keyEvent: any = {
                key: '4',
                which: 52,
                keyCode: 52
            };

            const result = Common.numberOnly(keyEvent);

            expect(result).toBeTruthy();
        });
    });

    describe('isNullOrUndefined', () => {
        it('should return true if obj is null', () => {
            const mockNullObj = null;
            const mockUndefinedObj = undefined;

            const nullResult = Common.isNullOrUndefined(mockNullObj);
            const undefinedResult = Common.isNullOrUndefined(mockUndefinedObj);

            expect(nullResult).toBeTruthy();
            expect(undefinedResult).toBeTruthy();
        });

        it('should return false if obj is not null', () => {
            const mockObj = 'test';

            const result = Common.isNullOrUndefined(mockObj);

            expect(result).toBeFalsy();
        });
    });

    describe('isNullOrEmpty', () => {
        it('should return true if obj array is null or empty', () => {
            const mockNullObj = null;
            const mockEmptyObj = [];

            const nullResult = Common.isNullOrEmpty(mockNullObj);
            const undefinedResult = Common.isNullOrEmpty(mockEmptyObj);

            expect(nullResult).toBeTruthy();
            expect(undefinedResult).toBeTruthy();
        });

        it('should return false if obj array is not null', () => {
            const mockObj = ['test'];

            const result = Common.isNullOrEmpty(mockObj);

            expect(result).toBeFalsy();
        });
    });

});
