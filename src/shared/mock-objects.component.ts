import { IFamily } from 'src/app/family/family.model';

export class MockObjects {
    getDefaultFamilies(): IFamily[] {
        const result: IFamily[] = [
            { id: 1, country: '', desc: '', img: '', name: '', team: '' },
            { id: 2, country: '', desc: '', img: '', name: '', team: '' },
            { id: 3, country: '', desc: '', img: '', name: '', team: '' }
        ];
        return result;
    }
}